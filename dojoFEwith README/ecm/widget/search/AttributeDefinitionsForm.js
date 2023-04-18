/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/keys",
	"dojo/aspect",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/on",
	"dojo/data/ItemFileWriteStore",
	"dojo/store/DataStore",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/popup",
	"idx/html",
	"ecm/widget/DropDownDialog",
	"../../LoggerMixin",
	"../../model/AttributeDefinition",
	"../../model/Desktop",
	"../../model/ContentClass",
	"../../model/ChildComponentDefinition",
	"../../model/ChildComponentSearchCriteria",
	"../../model/SearchConfiguration",
	"../../model/SearchCriterion",
	"./AttributeDefinitionWidget",
	"../../model/AttributeDefinition",
	"../../model/_searchUtils",
	"./AdvancedSearchCriterionOptions",
	"dojo/text!./templates/AttributeDefinitionsForm.html"
], function(declare, lang, array, keys, aspect, domAttr, domClass, domConstruct, domGeometry, domStyle, on, ItemFileWriteStore, DataStore, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer,popup, idxHtml, DropDownDialog, LoggerMixin, AttributeDefinition, Desktop, ContentClass, ChildComponentDefinition, ChildComponentSearchCriteria, SearchConfiguration, SearchCriterion, AttributeDefinitionWidget, AttributeDefinition, utils, AdvancedSearchCriterionOptions, template) {

	/**
	 * @name ecm.widget.search.AttributeDefinitionsForm
	 * @class Provides a widget that is used to define attributes for an IBM Content Manager class or item type. By
	 *        using a <code>ContentClass</code> object, this widget can render a form that contains either attribute
	 *        definitions or a template.
	 *        <p>
	 *        To use this widget, a search form must be specified. If a search form is not specified, the widget renders
	 *        an empty form with disabled buttons.
	 *        </p>
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.AttributeDefinitionsForm", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.search.AttributeDefinitionsForm.prototype */
		templateString: template,

		/**
		 * Sets the value to <code>true</code> if the widget will show hidden attributes.
		 */
		showHiddenAttributes: false,

		/**
		 * Sets the value to <code>true</code> if the widget will show system attributes.
		 */
		showSystemAttributes: false,

		/**
		 * @private The mode in which the attributes are displayed. Valid values are "standard" (default) and "fixed".
		 *          <ol>
		 *          <li>Standard mode: Attributes are added, removed, and repositioned on demand.</li>
		 *          <li>Fixed mode: All attributes are displayed and cannot be removed or repositioned. Hidden and
		 *          system attributes are included only if <code>showHiddenAttributes</code> and
		 *          <code>showSystemAttributes</code> are set to true.</li>
		 *          </ol>
		 * @since 2.0.3.5
		 */
		displayMode: "standard",
		
		/**
		 * Indicates whether to sort the attributes.
		 * 
		 * @since 5.0.3
		 */
		sortAttributes: true,

		constructor: function() {
			this.messages = ecm.messages;
			this._contentClass = null;
			this._includeSubclasses = true;
			this._showAll = false;
			this._attributeDefinitonWidgets = [];
			this.attributeDefinitions = [];
			this._defaultAttributeDefinitionId = null;
		},

		postCreate: function() {
			this.inherited(arguments);

			if (this._contentClass) {
				this.setContentClass(this._contentClass);
			}

		},

		resize: function() {
			//var width = this.getWidth();
			//if (width > 0) {
			//domGeometry.setMarginBox(this.domNode, {
			//w: width
			//});
			//}
		},

		/**
		 * Gets the value of if show all. True means show all. False means show one.
		 * 
		 * @return Returns a boolean value of if show all.
		 */
		getShowAll: function() {
			return this._showAll;
		},

		/**
		 * If true, show all, if false, show one.
		 * 
		 * @param showAll
		 *            A boolean value.
		 */
		setShowAll: function(showAll) {
			if (!this._showAll && showAll) {
				this.addAllAttributeDefintions();
			}
			this._showAll = showAll;
		},

		/**
		 * Returns the content class currently being edited.
		 * 
		 * @return Returns an instance of {@link ecm.model.ContentClass}
		 */
		getContentClass: function() {
			return this._contentClass;
		},

		/**
		 * Set the attribute definitions.
		 * 
		 * @param attributeDefinitions
		 *            Array of {@link ecm.model.AttributeDefinition} objects.
		 * @param childDefinitions
		 *            Array of {@link ecm.model.AttributeDefinition} objects.
		 * @param searchCriteria
		 *            Array of {@link ecm.model.SearchCriterion} objects.
		 */
		setAttributeDefinitions: function(attributeDefinitions, childDefinitions, searchCriteria) {
			this._clearAttributeDefinitionWidgets();
			this._setUpAttributeDefinitions(attributeDefinitions, childDefinitions, searchCriteria);
		},

		/**
		 * Remove attribute definitions.
		 * 
		 * @param attributeDefinitionIDs
		 *            Array of strings.
		 */
		removeAttributeDefinitions: function(attributeDefinitionIDs) {
			//find the attribute definition widget and remove it .
			var self = this;
			array.forEach(attributeDefinitionIDs, function(attributeDefinitionId) {
				var widgets = self.findAttributeDefinitionWidgetsByAttributeDefinitionId(attributeDefinitionId);
				array.forEach(widgets, function(w) {
					self._removeWidget(w);
				});

				//update the attribute definition list
				for ( var i in self.attributeDefinitions) {
					if (self.attributeDefinitions[i].id == attributeDefinitionId) {
						self.attributeDefinitions.splice(i, 1);
						break;
					}
				}

				// update filtering selects of all the existing children
				if (self.getChildren()) {
					array.forEach(self.getChildren(), function(adfw) {
						adfw.attributeDefinitions = self.attributeDefinitions;
						adfw._allNamesSelect.store.remove(attributeDefinitionId);
					});
				}

			});

			// sorting attribute definitions
			this._sortAttributeDefinitions();

			this._addFirstAttributeDefinitionWidget();
			this.onFinishLoadingAttributes();

		},

		/**
		 * Append some attribute definitions to the attribute definitions list.
		 * 
		 * @param attributeDefinitions
		 *            Array of {@link ecm.model.AttributeDefinition} objects.
		 */
		appendAttributeDefinition: function(attributeDefinitions) {
			if (this.attributeDefinitions) {
				this.attributeDefinitions = this.attributeDefinitions.concat(attributeDefinitions);
			} else {
				this.attributeDefintions = attributeDefinitions;
			}

			// sorting attribute definitions
			this._sortAttributeDefinitions();

			var self = this;
			// update filtering selects of all the existing children
			array.forEach(attributeDefinitions, function(attributeDefinition) {
				var newItem = {
					id: attributeDefinition.id,
					name: attributeDefinition.valueRequired ? "* " + attributeDefinition.name : attributeDefinition.name
				};
				if (self.getChildren()) {
					array.forEach(self.getChildren(), function(adfw) {
						adfw.attributeDefinitions = self.attributeDefinitions;
						adfw._allNamesSelect.store.add(newItem);
						adfw._allNamesSelect.store.sort();
					});
				}
			});

			this._addFirstAttributeDefinitionWidget();
			this.onFinishLoadingAttributes();
		},

		/**
		 * Update the attribute definitions if they have same ID.
		 * 
		 * @param attributeDefinition
		 *            Array of {@link ecm.model.AttributeDefinition} objects.
		 * @param reset
		 *            A boolean value. If it's true, reset all {@link ecm.widget.search.AttributeDefinitionWidget}
		 *            objects for each update {@link ecm.model.AttributeDefinition}.
		 */
		updateAttributeDefinition: function(attributeDefinition, reset) {
			// Update the attributes list
			var replaced;
			for ( var i in this.attributeDefinitions) {
				if (this.attributeDefinitions[i].id == attributeDefinition.id) {
					replaced = this.attributeDefinitions.splice(i, 1, attributeDefinition);
					break;
				}
			}

			if (replaced) {
				this._sortAttributeDefinitions();

				// Update the children
				var item = {
					id: attributeDefinition.id,
					name: attributeDefinition.valueRequired ? "* " + attributeDefinition.name : attributeDefinition.name
				};
				array.forEach(this.getChildren(), function(widget) {
					widget.attributeDefinitions = this.attributeDefinitions;
					widget._allNamesSelect.store.put(item, {
						overwrite: true
					});
					widget._allNamesSelect.store.sort();
					if (widget.attributeDefinition.id == item.id) {
						widget.attributeDefinition = attributeDefinition;
						widget._allNamesSelect.set("value", item.id);
					}
				}, this);

				if (reset) {
					var widgets = this.findAttributeDefinitionWidgetsByAttributeDefinitionId(attributeDefinition.id);
					if (widgets.length > 0) {
						array.forEach(widgets, function(widget) {
							// Replace the widget
							var index = array.indexOf(this._attributeDefinitonWidgets, widget);
							this._attributeDefinitonWidgets.splice(index, 1);
							this.attributeContainer.removeChild(widget);
							this._addAttributeDefinition(this.attributeDefinitions, attributeDefinition, null, index);
						}, this);
					}
				}

				this.onFinishLoadingAttributes();
			}
		},

		/**
		 * Removes all attribute definition widgets that use the given attribute definition ID. If the form becomes
		 * empty as a result, a new attribute definition widget is added.
		 * 
		 * @since 2.0.3.6
		 */
		removeAttributeDefinitionWidgets: function(attributeDefinitionId) {
			var widgets = this.findAttributeDefinitionWidgetsByAttributeDefinitionId(attributeDefinitionId);
			if (widgets.length) {
				array.forEach(widgets, "this._removeWidget(item);", this);
				if (this._attributeDefinitonWidgets.length == 0)
					this.addOneMoreAttributeDefinition();
			}

			return widgets;
		},

		/**
		 * @private
		 */
		_addFirstAttributeDefinitionWidget: function() {
			this._resolveDefaultAttributeDefinition();
			if (this._attributeDefinitonWidgets.length == 0)
				this.addOneMoreAttributeDefinition();
		},

		/**
		 * @private
		 */
		_setUpAttributeDefinitions: function(attributeDefinitions, childDefinitions, searchCriteria) {
			var self = this;
			self.attributeDefinitions = attributeDefinitions;
			self._childDefinitions = childDefinitions;
			array.forEach(childDefinitions, function(child) {
				self.attributeDefinitions.push(child);
			});

			// If working with a CM class, resolve the default attribute before sorting to ensure that the first non-system attribute returned from the API is selected
			var defaultAttribResolved = false;
			if (this._contentClass && this._contentClass.repository && this._contentClass.repository._isCM()) {
				self._resolveDefaultAttributeDefinition();
				defaultAttribResolved = true;
			}

			// sorting attribute definitions
			self._sortAttributeDefinitions();

			if (!defaultAttribResolved)
				self._resolveDefaultAttributeDefinition();

			if (searchCriteria && searchCriteria.length) {
				self.addAttributeDefintions(searchCriteria);
			} else if (self.displayMode == "fixed") {
				this._maxAttributeNameWidth = null;
				self.addAllAttributeDefintions();
			} else if (!self.getShowAll() || (self._contentClass && self._contentClass.repository._isCM() && self._contentClass.id == "$common")) {
				self.addOneMoreAttributeDefinition();
			} else {
				self.addAllAttributeDefintions();
			}

			self.onFinishLoadingAttributes();
		},
		/**
		 * Renders the given content class attribute definitions;
		 * 
		 * @param contentClass
		 *            Content class to render, or list of content classes
		 * @param includeSubclasses
		 *            Boolean indicating if sub classes should be retrieved.
		 * @param searchCriteria
		 *            Initial search criteria (optional)
		 */
		setContentClass: function(contentClass, includeSubclasses, objectType, searchCriteria) {
			var methodName = "setContentClass";
			this.logEntry(methodName);
			this._contentClass = contentClass;
			this._includeSubclasses = includeSubclasses;
			this._clearAttributeDefinitionWidgets();

			var self = this;
			contentClass.retrieveAttributeDefinitionsForSearches(function(attributeDefinitions, childDefinitions) {
				var searchConfig = SearchConfiguration.getSearchConfiguration({
					repository: self._contentClass.repository
				});
				attributeDefinitions = searchConfig.filterAttributeDefinitions(attributeDefinitions, {
					objectType: objectType,
					allowHidden: self.showHiddenAttributes
				});

				// Make a copy of the attributes so that the originals aren't clobbered by dependent updates
				attributeDefinitions = array.map(attributeDefinitions, function(attrib) {
					return attrib.clone();
				});
				childDefinitions = array.map(childDefinitions, function(child) {
					return child.clone();
				});

				// Retrieve dependent attributes if working with an existing search
				if (searchCriteria && self._dependentAttributesSupported()) {
					var values = utils.collectDependentAttributeValues(searchCriteria);
					self._contentClass.retrieveDependentAttrDefs({
						attributes: values.attributes,
						context: {
							action: "search",
							searchTemplateId: self._searchTemplate ? self._searchTemplate.id : null,
							searchTemplateName: self._searchTemplate ? self._searchTemplate.name : null
						},
						childComponentValues: values.childComponents,
						callback: function(newAttributeDefinitions, newChildComponentDefinitions, newChildComponents) {
							array.forEach(newAttributeDefinitions, function(newAttrib) {
								var attrib;
								if (newAttrib.updated && array.some(attributeDefinitions, function(a) {
									if (a.id == newAttrib.id)
										attrib = a;
									return attrib != null;
								})) {
									if (newAttrib.updatedHasDependentAttributes)
										attrib.hasDependentAttributes = newAttrib.hasDependentAttributes;
									if (newAttrib.updatedChoiceList && newAttrib.choiceList != "default") {
										// Update the attribute's choice list
										var oldChoiceList = attrib.choiceList;
										attrib.choiceList = newAttrib.choiceList;

										// Update the values of all criteria that use the updated attribute
										array.forEach(searchCriteria, function(criterion) {
											if (criterion.id == newAttrib.id) {
												// Clear values if the choice list was removed or any of the values aren't in the new choice list
												if ((oldChoiceList && !attrib.choiceList) || !AttributeDefinition.allValuesInChoiceList(attrib.choiceList, criterion.values)) {
													criterion.setValues([]);
												}
											}
										});
									}
								}
							});

							array.forEach(newChildComponents, function(childComponent) {
								var child;
								if (array.some(childDefinitions, function(c) {
									if (c.id == childComponent.id)
										child = c;
									return child != null;
								})) {
									var updatedAttributes;
									array.forEach(child.attributeDefinitions, function(childAttrib) {
										var newAttrib = childComponent.attributeDefinitionsById[childAttrib.id];
										if (newAttrib) {
											// Update the attribute's choice list
											childAttrib.oldChoiceList = childAttrib.choiceList;
											childAttrib.choiceList = newAttrib.choiceList;
											if (!updatedAttributes)
												updatedAttributes = {};
											updatedAttributes[childAttrib.id] = childAttrib;
										}
									});
									if (updatedAttributes) {
										// Update the values of all criteria that use the updated attributes
										array.forEach(searchCriteria, function(criterion) {
											if (criterion.id == child.id) {
												array.forEach(criterion.searchCriteria, function(childCriterion) {
													var updatedAttrib = updatedAttributes[childCriterion.id];
													if (updatedAttrib) {
														// Clear values if the choice list was removed or any of the values aren't in the new choice list
														if ((updatedAttrib.oldChoiceList && !updatedAttrib.choiceList) || !AttributeDefinition.allValuesInChoiceList(updatedAttrib.choiceList, childCriterion.values)) {
															childCriterion.setValues([]);
														}
													}
												});
											}
										});
									}
								}
							});

							self._setUpAttributeDefinitions(attributeDefinitions, childDefinitions, searchCriteria);
						},
						onError: function(response) {
							// Log and continue
							self.logError(methodName, "Failed to retrieve dependent attributes");
							self._setUpAttributeDefinitions(attributeDefinitions, childDefinitions, searchCriteria);
						}
					});
				} else {
					self._setUpAttributeDefinitions(attributeDefinitions, childDefinitions, searchCriteria);
				}
			}, includeSubclasses);
			this.logExit(methodName);
		},
		
		/**
		 * @private Renders the attributes of the given metadata template.
		 * 
		 * @param metadataTemplate
		 *            A {@link ecm.model.TemplateMetadata} object
		 * @param searchCriteria
		 *            An optional array of {@link ecm.model.SearchCriterion} objects 
		 * @since 5.0.3
		 */
		setMetadataTemplate: function(metadataTemplate, searchCriteria) {
			this._metadataTemplate = metadataTemplate;
			this.displayMode = "fixed";
			this._clearAttributeDefinitionWidgets();
			metadataTemplate.retrieveAttributeDefinitionsForSearches(lang.hitch(this, function(attributeDefinitions, childDefinitions) {
				// Make a copy of the attributes so that the originals aren't clobbered by dependent updates
				attributeDefinitions = array.map(attributeDefinitions, "return item.clone();");
				
				this._setUpAttributeDefinitions(attributeDefinitions, null, searchCriteria);
			}));
		},

		/**
		 * Find attribute defintion widgets by attribute definition ID.
		 * 
		 * @param id
		 *            String value of ID for finding.
		 * @return Array of {@link ecm.widget.search.AttributeDefinitionWidget}.
		 */
		findAttributeDefinitionWidgetsByAttributeDefinitionId: function(id) {
			return array.filter(this._attributeDefinitonWidgets, function(w) {
				return w.attributeDefinition.id == id;
			});
		},
		/**
		 * @private
		 */
		_clearAttributeDefinitionWidgets: function() {
			array.forEach(this._attributeDefinitonWidgets, function(wid) {
				wid.destroy();
			});

			this._attributeDefinitonWidgets = [];
		},

		/**
		 * If include sub classes.
		 * 
		 * @return Boolean value of if include sub classes. True means including.
		 */
		isIncludeSubclasses: function() {
			return this._includeSubclasses;
		},

		/**
		 * Get the default attribute definition ID.
		 * 
		 * @return String value of default attribute definition ID.
		 */
		getDefaultAttributeDefinitionId: function() {
			return this._defaultAttributeDefinitionId;
		},

		/**
		 * Set the default attribute definition ID.
		 * 
		 * @param A
		 *            string value of default attribute definition ID.
		 */
		setDefaultAttributeDefinitionId: function(defaultAttributeDefintionId) {
			this._defaultAttributeDefinitionId = defaultAttributeDefintionId;
		},

		/**
		 * @private
		 */
		_resolveDefaultAttributeDefinition: function() {
			var attribDefinition = null;

			if (this._defaultAttributeDefinitionId) {
				for ( var i in this.attributeDefinitions) {
					if (this.attributeDefinitions[i].id == this._defaultAttributeDefinitionId) {
						attribDefinition = this.attributeDefinitions[i];
						break;
					}
				}
			}

			if (!attribDefinition) {
				for ( var i in this.attributeDefinitions) {
					if (this.showHiddenAttributes || !this.attributeDefinitions[i].hidden) {
						attribDefinition = this.attributeDefinitions[i];
						break;
					}
				}
			}

			this._defaultAttributeDefinition = attribDefinition;
		},

		/**
		 * Add the default attribute definition to the attribute definition widget list.
		 */
		addOneMoreAttributeDefinition: function() {
			var attrib = this._defaultAttributeDefinition, widget;
			if (attrib) {
				var boxAttribIds = this._findBoxAttributeDefinitionIdsInUse();
				if (boxAttribIds.length > 0 && array.indexOf(boxAttribIds, attrib.id) > -1) {
					// Find another attribute to add since Box attributes cannot be added twice
					attrib = null;
					array.some(this.attributeDefinitions, function(otherAttrib) {
						if (array.indexOf(boxAttribIds, otherAttrib.id) == -1) {
							attrib = otherAttrib;
							return true;
						}
					});
				}

				if (attrib) {
					widget = this._addAttributeDefinition(this.attributeDefinitions, attrib);
					this.onChange();
				}
			}

			return widget;
		},

		/**
		 * @private
		 * @param wid
		 *            an instance of {@link ecm.widget.search.AttributeDefinitionWidget}
		 */
		_setUpControlButtons: function(wid) {
			if (this.displayMode == "fixed") {
				domStyle.set(wid.moveUpNode, "display", "none");
				domStyle.set(wid.moveDownNode, "display", "none");
				domStyle.set(wid.removeNode, "display", "none");
				domStyle.set(wid.optionNode, "display", "none");
			} else {
				var self = this;
				on(wid.domNode, "mouseover", function() {
					var children = self.getChildren();
					domClass.add(wid.domNode, "attributeDefintionWidgetHover");
					domClass.remove(wid.controlButtons, "controlButtonsHidden");
					if (children && children.length == 1) {
						domStyle.set(wid.removeNode, "display", "none");
					}else{
						domStyle.set(wid.removeNode, "display", "");
					}
				});

				on(wid.domNode, "mouseout", function() {
					domClass.remove(wid.domNode, "attributeDefintionWidgetHover");
					domClass.add(wid.controlButtons, "controlButtonsHidden");
				});

				// Show the buttons when focused in the widget.
				this.connect(wid, "onFocus", function() {
					var children = self.getChildren();
					if (children && children.length > 1)
						domClass.remove(wid.controlButtons, "controlButtonsHidden");
				});
				this.connect(wid, "onBlur", function() {
					domClass.add(wid.controlButtons, "controlButtonsHidden");
				});
				this.connect(wid, "onTabBackwards", function() {
					var children = this.getChildren();
					if (children) {
						for (var i = 0; i < children.length; i++) {
							var widget = children[i];
							if (widget.id == wid.id) {
								if (i > 0) {
									setTimeout(function() {
										domClass.remove(children[i - 1].controlButtons, "controlButtonsHidden");
										children[i - 1]._ignoreBlur = true;
										children[i - 1].removeNode.focus();
									}, 200);
								}
								break;
							}
						}
					}
				});

				on(wid.removeNode, "click", function() {
					self._removeWidget(wid);
				});
				on(wid.removeNode, "keydown", function(evt) {
					if (evt.keyCode == keys.SPACE) {
						self._removeWidget(wid);
					}
				});

				on(wid.moveUpNode, "click", function() {
					self._moveWidget(wid, -1);
				});
				on(wid.moveUpNode, "keydown", function(evt) {
					if (evt.keyCode == keys.SPACE) {
						self._moveWidget(wid, -1);
					}
				});

				on(wid.moveDownNode, "click", function() {
					self._moveWidget(wid, 1);
				});
				on(wid.moveDownNode, "keydown", function(evt) {
					if (evt.keyCode == keys.SPACE) {
						self._moveWidget(wid, 1);
					}
				});
				
				var self=this;
				on(wid.optionNode, "click", function( evt) {
					wid._showAdvancedOptions();
				});
				
				on(wid.optionNode, "keydown", function(evt) {
					if (evt.keyCode == keys.SPACE) {
						wid._showAdvancedOptions();
					}
				});
				
				this._updateMoveButtons();
			}
		},

		
		
		
		/**
		 * @private
		 */
		_addAttributeDefinition: function(attributeDefinitions, attributeDefinition, criterion, insertIndex) {
			var w = new AttributeDefinitionWidget({
				repository: this._contentClass ? this._contentClass.repository : null,
				criterion: criterion,
				displayMode: this.displayMode
			});

			w.enableAdvancedSearchOptions = this.enableAdvancedSearchOptions;
			w._setOptionNodeToolTip();
			
			this.connect(w, "onAttributeValidate", function(valid) {
				if (valid)
					valid = !this.validate();

				this.onFormValidate(valid);
			});

			this.connect(w, "onChange", this.onChange);
			this.connect(w, "onChangeOperator", function() {
				setTimeout(lang.hitch(this, this.resize));
			});

			this.connect(w, "onKeyDown", this.onKeyDown);
			w.setAttributeDefinition(attributeDefinitions, attributeDefinition);

			if (insertIndex != null && typeof insertIndex == "number" && insertIndex >= 0 && insertIndex < this._attributeDefinitonWidgets.length)
				this._attributeDefinitonWidgets.splice(insertIndex, 0, w);
			else
				this._attributeDefinitonWidgets.push(w);
			w.region = "top";

			this._setUpControlButtons(w);
			if (this.attributeContainer) {
				if (this.displayMode == "fixed") {
					// Set the width of the name container to that of the widest attribute name so the fields that follow are horizontally aligned
					domStyle.set(w.allAttributeNameS, "width", (this._getMaxAttributeNameWidth() + 32) + "px"); // accounts for hover help
				}
				this.attributeContainer.addChild(w, insertIndex);
			}

			if (this._dependentAttributesSupported()) {
				w.own(aspect.after(w, "onValueChange", lang.hitch(this, function() {
					if (w.attributeDefinition && w.attributeDefinition.hasDependentAttributes)
						this._updateDependentAttributes(w);
				})));
				w.own(aspect.after(w, "onAttributeDefinitionChange", lang.hitch(this, function(oldAttrib, newAttrib) {
					if (oldAttrib.hasDependentAttributes)
						this._updateDependentAttributes(w);
				}), true));
			}

			return w;
		},

		_updateDependentAttributes: function(widget) {
			var self = this;
			if (self._updatingDependentAttributesField) // update in progress
				return;
			
			// Signal the start
			self.onStartUpdatingDependentAttributes();

			// Guard against reentering while an update is in progress
			array.some(self._attributeDefinitonWidgets, function(w) {
				var fields = w.getFields();
				if (fields.length > 0)
					self._updatingDependentAttributesField = fields[0];
				return self._updatingDependentAttributesField != null;
			});

			// Handle restoring focus when rendering is complete
			var lastFocusedWidgetIndex = array.indexOf(self._attributeDefinitonWidgets, widget);
			if (lastFocusedWidgetIndex > -1) {
				self._displayStatusDialogSignal = aspect.after(Desktop, "onDisplayStatusDialog", function(statusDialog) {
					// Temporarily disable refocus since the field that currently has focus will be replaced
					if (self._displayStatusDialogSignal) {
						self._displayStatusDialogSignal.remove();
						delete self._displayStatusDialogSignal;
					}
					self._statusDialogRefocus = statusDialog.refocus;
					statusDialog.refocus = false;

					var hideStatusDialogSignal = aspect.after(Desktop, "onHideStatusDialog", function(statusDialog) {
						hideStatusDialogSignal.remove();
						setTimeout(function() {
							// Reset refocus
							statusDialog.refocus = self._statusDialogRefocus;
							delete self._statusDialogRefocus;

							// Restore focus
							var lastFocusedWidget = self._attributeDefinitonWidgets[lastFocusedWidgetIndex];
							if (lastFocusedWidget) {
								var fields = lastFocusedWidget.getFields();
								if (fields.length > 0)
									fields[0].focus();
							}
						}, 100);
					}, true);
				}, true);
			}

			// Collect the values of the widget that triggered the event and the first instance of any other attribute that has dependents
			var attributes = {};
			var childComponentValues = [];
			array.forEach(self._attributeDefinitonWidgets, function(w) {
				var attrib = w.attributeDefinition;
				if (attrib.isInstanceOf && attrib.isInstanceOf(ChildComponentDefinition)) {
					if (!array.some(childComponentValues, function(child) {
						return child.name == attrib.id;
					}) && w.getChildAttributeDefinitions().length > 0) {
						childComponentValues.push({
							name: attrib.id,
							values: [
								{
									values: array.map(w.getChildAttributeDefinitions(), function(child) {
										// Discard empty values
										var values = array.filter(child.getValues(), function(value) {
											return value != null && value != "";
										});
										return {
											name: attrib.id + "/" + child.attributeDefinition.id,
											value: values.length == 0 ? "" : (values.length == 1 ? values[0] : values),
											dataType: child.attributeDefinition.dataType,
											label: child.attributeDefinition.name
										};
									})
								}
							]
						});
					}
				} else if (attributes[attrib.id] == null && (attrib.id != widget.attributeDefinition.id || w == widget)) {
					// Discard empty values
					var values = array.filter(w.getValues(), function(value) {
						return value != null && value != "";
					});
					attributes[attrib.id] = values.length == 0 ? "" : (values.length == 1 ? values[0] : values);
				}
			});

			var contentClass = self._contentClass || self._metadataTemplate;
			self._retrieveDependentAttrDefsRequest = contentClass.retrieveDependentAttrDefs({
				attributes: attributes,
				context: {
					action: "search",
					searchTemplateId: self._searchTemplate ? self._searchTemplate.id : null,
					searchTemplateName: self._searchTemplate ? self._searchTemplate.name : null
				},
				childComponentValues: childComponentValues,
				callback: function(newAttributeDefinitions, newChildComponentDefinitions, newChildComponents) {
					var refocus = false;
					if (self._displayStatusDialogSignal) { // status dialog wasn't displayed
						refocus = lastFocusedWidgetIndex > -1;
						self._displayStatusDialogSignal.remove();
						delete self._displayStatusDialogSignal;
					}

					array.forEach(newAttributeDefinitions, function(newAttrib) {
						var attrib;
						if (newAttrib.updated && array.some(self.attributeDefinitions, function(a) {
							if (a.id == newAttrib.id)
								attrib = a;
							return attrib != null;
						})) {
							if (newAttrib.updatedHasDependentAttributes)
								attrib.hasDependentAttributes = newAttrib.hasDependentAttributes;
							if (newAttrib.updatedChoiceList) {
								// Update the attribute's choice list
								attrib.oldChoiceList = attrib.choiceList;
								if (newAttrib.choiceList == "default") {
									// Reinstate the choice list defined by the class
									array.some(contentClass.attributeDefinitions, function(classAttrib) {
										if (classAttrib.id == attrib.id)
											attrib.choiceList = classAttrib.choiceList;
										return classAttrib.id == attrib.id;
									});
								} else {
									attrib.choiceList = newAttrib.choiceList;
								}

								// Re-render all widgets that use the updated attribute
								var widgets = self.findAttributeDefinitionWidgetsByAttributeDefinitionId(attrib.id);
								array.forEach(widgets, function(w) {
									w._updateDependentAttribute(attrib);
								});
							}
						}
					});

					array.forEach(newChildComponents, function(childComponent) {
						var child;
						if (array.some(self.attributeDefinitions, function(a) {
							if (a.id == childComponent.id)
								child = a;
							return child != null;
						})) {
							var updatedAttributes = {};
							array.forEach(child.attributeDefinitions, function(childAttrib) {
								var newAttrib = childComponent.attributeDefinitionsById[childAttrib.id];
								childAttrib.oldChoiceList = childAttrib.choiceList;
								if (newAttrib && newAttrib.choiceList != "default") {
									// Update the attribute's choice list
									childAttrib.choiceList = newAttrib.choiceList;
								} else {
									// Reinstate the choice list defined by the class
									array.some(contentClass.childComponentDefinitions, function(classChild) {
										if (classChild.id == child.id) {
											array.some(classChild.attributeDefinitions, function(classAttrib) {
												if (classAttrib.id == childAttrib.id) {
													childAttrib.choiceList = classAttrib.choiceList;
													return true;
												}
											});
											return true;
										}
									});
								}
								updatedAttributes[childAttrib.id] = childAttrib;
							});

							// Re-render the child widgets that use the updated attributes
							var widgets = self.findAttributeDefinitionWidgetsByAttributeDefinitionId(child.id);
							array.forEach(widgets, function(w) {
								array.forEach(w.getChildAttributeDefinitions(), function(childWidget) {
									var updatedAttrib = updatedAttributes[childWidget.attributeDefinition.id];
									if (updatedAttrib)
										childWidget._updateDependentAttribute(updatedAttrib);
								});
							});
						}
					});

					if (refocus) {
						// Restore focus
						setTimeout(function() {
							var lastFocusedWidget = self._attributeDefinitonWidgets[lastFocusedWidgetIndex];
							if (lastFocusedWidget) {
								var fields = lastFocusedWidget.getFields();
								if (fields.length > 0)
									fields[0].focus();
							}
						}, 100);
					}

					delete self._updatingDependentAttributesField;
					self.onFinishUpdatingDependentAttributes();
				},
				onError: function(response) {
					delete self._updatingDependentAttributesField;
					if (self._displayStatusDialogSignal) {
						self._displayStatusDialogSignal.remove();
						delete self._displayStatusDialogSignal;
					}
					self.onFinishUpdatingDependentAttributes();
				}
			});
		},

		/**
		 * Event fired when updating dependent attributes.
		 * 
		 * @since 2.0.3.8
		 */
		onStartUpdatingDependentAttributes: function() {
			
		},
		
		/**
		 * Event fired when dependent attributes have finished updating.
		 * 
		 * @since 2.0.3.8
		 */
		onFinishUpdatingDependentAttributes: function() {
			
		},
		
		/**
		 * Runs if the form is valid.
		 * 
		 * @param valid
		 *            Boolean that indicates whether the form is valid.
		 */
		onFormValidate: function(valid) {
		},

		/**
		 * Runs after all attributes are loaded.
		 */
		onFinishLoadingAttributes: function() {
			this.onChange();
		},

		/**
		 * Runs after the form is changed.
		 */
		onChange: function() {
			this._normalizeAttributeDefinitions();
			this.resize();
		},

		/**
		 * Runs if a key down event is fired.
		 */
		onKeyDown: function(e) {
		},

		/**
		 * Adds all attribute definitions to the attribute definition widgets list.
		 */
		addAllAttributeDefintions: function() {
			var self = this;
			self._clearAttributeDefinitionWidgets();
			array.forEach(self.attributeDefinitions, function(attributeDefinition, index) {
				if (attributeDefinition.isInstanceOf && attributeDefinition.isInstanceOf(ChildComponentDefinition)) {
					self._addAttributeDefinition(self.attributeDefinitions, attributeDefinition);
				} else if (attributeDefinition.searchable && !attributeDefinition.subClassAttribute //
						&& (!attributeDefinition.hidden || self.showHiddenAttributes) //
						&& (!attributeDefinition.system || self.showSystemAttributes)) {
					self._addAttributeDefinition(self.attributeDefinitions, attributeDefinition);
				}
			});
			this.onChange();
		},

		/**
		 * Adds all criterion to the attribute definitions list.
		 * 
		 * @param criteria
		 *            Array of {@link ecm.model.SearchCriterion}. Will be added into attribute defintions list.
		 * @param dontClearExistion
		 *            Boolean value. If true, all existing values in attribute definitions list will not be clear before
		 *            adding.
		 */
		addAttributeDefintions: function(criteria, dontClearExisting) {
			var self = this, changed = false;
			if (!dontClearExisting) {
				self._clearAttributeDefinitionWidgets();
				changed = true;
			}
			array.forEach(criteria, function(criterion) {
				array.some(self.attributeDefinitions, function(attribDef) {
					if (attribDef.id == criterion.id) {
						self._addAttributeDefinition(self.attributeDefinitions, attribDef, criterion);
						return changed = true;
					}
				});
			});
			if (changed)
				this.onChange();
		},

		/**
		 * Gets all children in the attribute container.
		 * 
		 * @return Array of objects in the attribute container.
		 */
		getChildren: function() {
			return this.attributeContainer.getChildren();
		},

		/**
		 * Validates all attribute definitions in the attribute container.
		 * 
		 * @param ignoreRequired
		 *            Boolean value. If true, the validation will ignore required.
		 */
		validate: function(ignoreRequired) {
			var fw = null;
			var children = this.attributeContainer.getChildren() || [];
			for (var i = 0; i < children.length; i++) {
				if (children[i].isInstanceOf && children[i].isInstanceOf(AttributeDefinitionWidget) && (fw = children[i].validate(ignoreRequired)))
					break;
			}

			return fw;
		},

		/**
		 * Turns all of the attribute definitions in the attribute container into a search criterion list.
		 * 
		 * @return Array of {@link ecm.model.SearchCriterion}
		 */
		createSearchCriteriaFromAttributeDefintions: function() {
			var searchCriteria = [];
			array.forEach(this.getChildren(), function(attributeDefinitionWidget) {
				if (attributeDefinitionWidget.isInstanceOf && attributeDefinitionWidget.isInstanceOf(AttributeDefinitionWidget)) {
					var adf = attributeDefinitionWidget.attributeDefinition;
					if (adf.isInstanceOf && adf.isInstanceOf(ChildComponentDefinition)) { // Add child components (if any - cm8 only)
						var childCriterion = new ChildComponentSearchCriteria(adf.id, adf.name);
						var childCriteria = [];

						var childAttrDefs = attributeDefinitionWidget.getChildAttributeDefinitions();
						for ( var i in childAttrDefs) {
							childCriteria.push(this._createCriterion(childAttrDefs[i]));
						}
						childCriterion.searchCriteria = childCriteria;
						searchCriteria.push(childCriterion);
					} else {
						searchCriteria.push(this._createCriterion(attributeDefinitionWidget));
					}
				}
			}, this);

			return searchCriteria;
		},

		/**
		 * private
		 */
		_createCriterion: function(attributeDefinitionWidget) {
			var adf = attributeDefinitionWidget.attributeDefinition;
			var format = adf.format;
			if (adf.dataType == "xs:timestamp" && !utils.inputTimestampAsText(adf)) {
				// Time is not pertinent to search; use the date format instead
				format = ecm.model.desktop.valueFormatter.getDefaultFormat("xs:date");
			}
			var criterion = new SearchCriterion({
				id: adf.id,
				name: adf.name,
				defaultOperator: attributeDefinitionWidget.getOperator(),
				availableOperators: attributeDefinitionWidget._hasSeletecOperators ? attributeDefinitionWidget._selectedOperators : utils.getAvailableOperators(adf),
				hasSelectedOperators: !!attributeDefinitionWidget._hasSeletecOperators,
				dataType: adf.dataType,
				format: format,
				defaultValue: adf.defaultValue,
				valueRequired: false,
				readOnly: false,
				hasDependentAttributes: adf.hasDependentAttributes,
				hidden: false,
				allowedValues: adf.allowedValues,
				minLength: adf.minLength,
				maxLength: adf.maxLength,
				minValue: adf.minValue,
				maxValue: adf.maxValue,
				cardinality: adf.cardinality,
				choiceList: adf.choiceList,
				usesLongColumn: adf.usesLongColumn,
				// Note: repository and _isPseudo are needed to determine whether to treat time-stamp criteria as strings (see ecm.model._searchUtils.inputTimestampAsText)
				repository: utils.getAttributeRepository(adf),
				_isPseudo: adf._isPseudo
			});

			criterion.readOnly = attributeDefinitionWidget._readOnly;
			criterion.valueRequired = attributeDefinitionWidget._valueRequired;
			criterion.hidden = attributeDefinitionWidget._hidden;
			
			var values = attributeDefinitionWidget.getValues();
			if (!values || !(values instanceof Array)) {
				values = values ? [
					values + ""
				] : [];
			}
			//turn value to String, some times the value transfered from page is number, not String
			var isValuesObjects = false;
			for ( var i in values) {
				if (values[i]) {
					isValuesObjects = dojo.isObject(values[i]);
					if (isValuesObjects) {
						break;
					}
				}
			}
			if (!isValuesObjects) {
				var values = array.map(values, function(value) {
					return value + "";
				});
			}

			criterion.setValues(values);
			criterion.defaultValue = values;
			criterion.selectedOperator = attributeDefinitionWidget.getOperator();
			return criterion;
		},

		/**
		 * Gets the width of the form.
		 * 
		 * @return Value of width.
		 */
		getWidth: function() {
			var width = 0;
			array.forEach(this._attributeDefinitonWidgets, function(widget) {
				var w = widget.getWidth();
				if (w > width)
					width = w;
			});

			return width;
		},

		/**
		 * @private
		 */
		_removeWidget: function(widget) {
			var index = array.indexOf(this._attributeDefinitonWidgets, widget);
			if (index < 0) {
				return;
			}

			// remove from array
			this._attributeDefinitonWidgets.splice(index, 1);

			// remove from container
			this.attributeContainer.removeChild(widget);
			this.resize();

			this._updateMoveButtons();

			// Notify listeners if the form is now valid
			this.onFormValidate(this.validate() == null);

			this.onChange();

			// Retrieve dependent attributes if the removed widget had dependents and a value
			if (this._dependentAttributesSupported() && widget.attributeDefinition && widget.attributeDefinition.hasDependentAttributes && array.some(widget.getValues(), function(value) {
				return value != null && value != "";
			}))
				this._updateDependentAttributes(widget);
		},

		/**
		 * @private
		 */
		_moveWidget: function(widget, dir) {
			var index = array.indexOf(this._attributeDefinitonWidgets, widget);
			if (index < 0) {
				return;
			}
			var target = index + dir;
			var targetWidget = this._attributeDefinitonWidgets[target];
			if (!targetWidget) {
				return;
			}

			// swap in array
			this._attributeDefinitonWidgets[index] = targetWidget;
			this._attributeDefinitonWidgets[target] = widget;

			// swap in container
			this.attributeContainer.removeChild(targetWidget);

			// Delay adding the widget so that it doesn't get messed up in IE9
			setTimeout(lang.hitch(this, function() {
				this.attributeContainer.addChild(targetWidget, index);

				// Remove styles that dojo added to hide the node when the widget was removed (i.e., style="top: auto; bottom: auto; left: auto; right: auto; position: static; width: auto;")
				// (AttributeDefinitionWidget styles are defined solely by CSS classes so removing the style attribute is safe)
				domAttr.remove(targetWidget.domNode, "style");

				this._updateMoveButtons();
				this.onChange();
			}), 100);
		},

		/**
		 * @private
		 */
		_updateMoveButtons: function() {
			var last = this._attributeDefinitonWidgets.length - 1;
			array.forEach(this._attributeDefinitonWidgets, function(widget, index) {
				if (index === 0) {
					domStyle.set(widget.moveUpNode, "visibility", "hidden");
				} else {
					domStyle.set(widget.moveUpNode, "visibility", "");
				}
				if (index === last) {
					domStyle.set(widget.moveDownNode, "visibility", "hidden");
				} else {
					domStyle.set(widget.moveDownNode, "visibility", "");
				}
			});
		},

		/**
		 * Retrieves the display value from the property field identified by <code>fieldName</code>.
		 * 
		 * @param fieldName
		 *            A property Id string.
		 * @return The display value string.
		 */
		getPropertyDisplayValue: function(field) {
			var methodName = "getPropertyDisplayValue";
			this.logEntry(methodName, "fieldName: " + field);
			var value = null;
			if (field != null) {
				value = field.get("displayedValue");
				if (value == null) {
					value = field.get("value"); // fix for non-text fields
				}
			}
			this.logExit(methodName, "displayedValue: " + value);
			return value;
		},

		/**
		 * @private
		 */
		_sortAttributeDefinitions: function() {
			if (this.sortAttributes && this.attributeDefinitions && this.attributeDefinitions.length > 0) {
				this.attributeDefinitions.sort(function(a, b) {
					var nameA = a.valueRequired ? "* " + a.name : a.name;
					var nameB = b.valueRequired ? "* " + b.name : b.name;
					return nameA.toUpperCase().localeCompare(nameB.toUpperCase());
				});
			}
		},

		_dependentAttributesSupported: function() {
			// Return true if working with a single class
			return this._metadataTemplate || (this._contentClass && this._contentClass.isInstanceOf(ContentClass) && this._contentClass.id != "$common");
		},

		_getMaxAttributeNameWidth: function() {
			if (this._maxAttributeNameWidth)
				return this._maxAttributeNameWidth;

			var div = domConstruct.create("div", {
				style: "display:;visibility:hidden;font-weight:bold",
				"class": "dijitPopup dijitComboBoxMenuPopup"
			});
			var ul = domConstruct.create("ul", {
				"class": "dijitReset dijitMenu dijitComboBoxMenu"
			}, div);
			array.forEach(this.attributeDefinitions, function(attrib) {
				domConstruct.create("li", {
					"class": "dijitReset",
					innerHTML: idxHtml.escapeHTML(attrib.name)
				}, ul);
			});
			this.domNode.ownerDocument.body.appendChild(div);
			this._maxAttributeNameWidth = domGeometry.getMarginBox(div).w;
			this.domNode.ownerDocument.body.removeChild(div);

			return this._maxAttributeNameWidth;
		},

		_normalizeAttributeDefinitions: function() {
			if (this.displayMode != "fixed" && array.some(this.attributeDefinitions, "return item.repositoryType == 'box';")) {
				// Remove any Box attributes that are in use so they can't be added again
				var boxAttribIds = this._findBoxAttributeDefinitionIdsInUse();
				array.forEach(this.getChildren(), function(w) {
					var store = w._allNamesSelect.store;
					array.forEach(this.attributeDefinitions, function(attrib) {
						if (attrib.repositoryType == "box" && attrib.id != w.attributeDefinition.id) {
							var item = store.get(attrib.id);
							if (array.indexOf(boxAttribIds, attrib.id) > -1) {
								if (item)
									store.remove(item.id);
							} else if (!item) {
								store.add({
									id: attrib.id,
									name: attrib.valueRequired ? "* " + attrib.name : attrib.name
								});
								store.sort();
							}
						}
					});
				}, this);
			}
		},

		_findBoxAttributeDefinitionIdsInUse: function() {
			var attributes = [];
			if (this.displayMode != "fixed" && array.some(this.attributeDefinitions, "return item.repositoryType == 'box';")) {
				array.forEach(this._attributeDefinitonWidgets, function(w) {
					if (w.attributeDefinition.repositoryType == "box")
						attributes.push(w.attributeDefinition.id);
				});
			}

			return attributes;
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this.inherited(arguments);
			this._clearAttributeDefinitionWidgets();
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

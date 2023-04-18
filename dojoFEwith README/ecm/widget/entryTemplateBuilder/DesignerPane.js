/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/aspect",
	"dojo/string",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/date/stamp",
	"idx/html",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"idx/layout/BorderContainer",
	"ecm/model/ContentClass",
	"ecm/model/_PreProcessAttributesMixin",
	"ecm/model/EntryTemplate",
	"ecm/model/configuration/LayoutModel",
	"ecm/model/configuration/LayoutAttribute",
	"pvr/controller/integration/Integration",
	"pvr/controller/integration/BasicIntegrationConfiguration",
	"pvr/controller/PropertyCollectionController",
	"pvr/controller/value/types/DateOnly",
	"pvr/controller/value/types/TimeOnly",
	"pvr/widget/registry/Registry",
	"pvd/widget/registry/BasicHelperConfiguration",
	"pvr/controller/localization/LocalizationManager",
	"ecm/model/configuration/ControlRegistry",
	"pvd/widget/designer/Designer",
	"dojo/text!./templates/DesignerPane.html"
],

function(declare, array, lang, connect, aspect, string, domClass, domStyle, domGeom, dateStamp, html, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, LoggerMixin, MessagesMixin, BorderContainer, ContentClass, _PreProcessAttributesMixin, EntryTemplate, LayoutModel, LayoutAttribute, Integration, basicIntegrationConfiguration, PropertyCollectionController, DateOnly, TimeOnly, Registry, basicHelperConfiguration, LocalizationManager, controlRegistry, Designer, template) {

	/**
	 * @name ecm.widget.entryTemplateBuilder.DesignerPane
	 * @class Provides a widget that has the entry template property view designer.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.entryTemplateBuilder.DesignerPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin,
		_PreProcessAttributesMixin
	], {
		/** @lends ecm.widget.entryTemplateBuilder.DesignerPane */

		templateString: template,
		widgetsInTemplate: false,

		/**
		 * Instance of {@link pvd.widget.designer.Designer}.
		 */
		designer: null,

		/**
		 * Instance of {@link ecm.model.ContentClass}.
		 */
		contentClass: null,

		/**
		 * @private Instance of {@link ecm.model.ContentClass} that has a filtered list of attribute definitions
		 */
		designerContentClass: null,

		/**
		 * @private The html markup from the designer
		 */
		_markup: null,

		/**
		 * @private The resources from from the designer
		 */
		_resources: null,

		/**
		 * Instance of {@link ecm.model.EntryTemplate}.
		 */
		entryTemplate: null,

		/**
		 * Flag for indicating whether object value properties are supported (passed through to the layout editor).
		 */
		allowObjectProperties: false,

		/**
		 * A string value of the model integration class to be created.
		 */
		modelIntegrationClass: "ecm/model/configuration/ModelIntegration",

		/**
		 * A string value of the control registry class to be created.
		 */
		controlRegistryClass: "ecm/model/configuration/ControlRegistry",

		constructor: function() {
			this.logEntry("constructor");
			// Look at the registered plugs to see if any specify a custom model integration class.
			this.logExit("constructor");
		},

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.designer = new Designer({
				multiLoad: false
			}, "designer");
			this.designerContainer.appendChild(this.designer.domNode);
			this.designer.startup();

			this.logExit("postCreate");
		},

		/**
		 * Performs explicit resize of the Designer widget
		 */
		resizeDesigner: function() {
			var marginBox = domGeom.getMarginBox(this.designerContainer);
			var style = {
				width: marginBox.w + "px",
				height: (marginBox.h - 50) + "px"
			};
			domStyle.set(this.designer.domNode, style);
			this.designer.resize();
		},

		_setEntryTemplateAttr: function(entryTemplate) {
			this.entryTemplate = entryTemplate;
			this._markup = entryTemplate.markup;
			this._resources = entryTemplate.resources;
		},

		/**
		 * Instantiates the Designer widget and loads with content class attribute definitions
		 * 
		 * @param contentClass
		 *            Instance of {@link ecm.model.ContentClass}
		 */
		loadDesigner: function(contentClass) {
			var methodName = "loadDesigner";
			this.logEntry(methodName);
			this.contentClass = contentClass;

			if (this.contentClass != null) {
				LocalizationManager.locale = ecm.model.desktop.valueFormatter.getLocale();
				var controller = new PropertyCollectionController({
					context: "design"
				});

				this._updateHandler = aspect.after(controller, "onChange", lang.hitch(this, function(changes) {
					if (this.designerWindow && this.designerContentClass) {
						for ( var category in changes) {
							var categoryChanges = changes[category];
							for ( var id in categoryChanges) {
								var propertyChanges = categoryChanges[id];
								if (propertyChanges.hasOwnProperty("value")) {
									var values = lang.isArray(propertyChanges.value) ? propertyChanges.value : [
										propertyChanges.value
									];
									// Look for the attribute associated with the property that the defaultValue is changing 
									// and check the dependent attribute retrieving flag if it is defined to have such behavior
									for ( var i in this.designerContentClass.attributeDefinitions) {
										var attributeDefinition = this.designerContentClass.attributeDefinitions[i];
										if (attributeDefinition.id == id && attributeDefinition.hasDependentAttributes) {
											var defaultValues = lang.isArray(attributeDefinition.defaultValue) ? attributeDefinition.defaultValue : [
												attributeDefinition.defaultValue
											];
											if (values.length != defaultValues.length || !array.every(values, function(value, i) {
												return value === defaultValues[i];
											})) {
												attributeDefinition.dependentsRetrievalPending = true;
												break;
											}
										}
									}
								}
							}
						}
					}
				}), true);

				// Create the integration class and merge in model integration
				var integration = this.createIntegrationObject();

				if (this.designerContentClass != null && this.designerContentClass.id == this.contentClass.id) {
					this.logDebug(methodName, "Open layout designer with existing markup.");
					// Need to re-create the designer class in case the user made changes in the layout editor and hit Cancel button
					this.designerContentClass = this._createDesignerContentClass(this.contentClass, this.entryTemplate.propertiesOptions);
					this.designerContentClass.controller = controller; // Make sure reset the controller to the new instance
					controller.bind(this.designerContentClass.modelBindingId, this.messages.entry_template_mode_binding_label, this.designerContentClass, integration, true);

					var markup = this._markup;
					var resources = this._resources;
					if (!markup) {
						this.logDebug(methodName, "Open layout designer with new markup.");
						var dateOnly = ecm.model.desktop.enableHideTimePortion;
						markup = this._createMarkup(this.designerContentClass, dateOnly);
						resources = {};
					}
					this._loadDesigner(controller, markup, resources);

				} else {
					var self = this;
					this.origContentClass.retrieveAttributeDefinitions(function(attributeDefinitions) {
						if (attributeDefinitions != null) {
							// Create a "scratch pad" copy of the content class that the layout editor can operate on
							self.designerContentClass = self._createDesignerContentClass(self.contentClass, self.entryTemplate.propertiesOptions);
							self.designerContentClass.controller = controller; // Make sure reset the controller to the new instance
							controller.bind(self.designerContentClass.modelBindingId, self.messages.entry_template_mode_binding_label, self.designerContentClass, integration, true);

							var markup;
							var resources;
							if (self._markup) {
								self.logDebug(methodName, "Open layout designer with markup from previous ET version.");
								markup = self._markup;
								resources = self._resources;
							} else {
								self.logDebug(methodName, "Open layout designer with new markup.");
								var dateOnly = ecm.model.desktop.enableHideTimePortion;
								markup = self._createMarkup(self.designerContentClass, dateOnly);
								resources = {};
							}
							self._loadDesigner(controller, markup, resources);
						}
					});
				}
			}
			this.logExit(methodName);
		},

		/**
		 * Creates the layout editors Integration object and merges the applications model integration object.
		 * 
		 * @returns {@link pvr.controller.integration.Integration}
		 */
		createIntegrationObject: function() {
			var integration = new Integration(false);
			integration.mergeConfiguration(basicIntegrationConfiguration);

			require([
				this.modelIntegrationClass
			], lang.hitch(this, function(modelIntegration) {
				// The modelIntegration object is a Javascript object and therefore, we just reference it and not "new" it.
				integration.mergeConfiguration(modelIntegration);
			}));

			// visit the entry template model integration factory to see if we have any custom integrations to merge
			EntryTemplate._modelIntegration && array.some(EntryTemplate._modelIntegration, function(modelIntegrationClass) {
				if (modelIntegrationClass) {
					require([
						modelIntegrationClass
					], lang.hitch(this, function(modelIntegration) {
						// The modelIntegration object is a Javascript object and therefore, we just reference it and not "new" it.
						integration.mergeConfiguration(modelIntegration);
					}));
				}
			});
			return integration;
		},

		/**
		 * Creates the layout editors Registry object and merges the applications registry information.
		 * 
		 * @returns {@link pvr.widget.registry.Registry}
		 */
		createRegistryObject: function() {
			var registry = new Registry();
			// Make sure we registry the ICN control registry first
			require([
				this.controlRegistryClass
			], lang.hitch(this, function(controlRegistry) {
				// The controlRegistry object is a Javascript object and therefore, we just reference it and not "new" it.
				registry.mergeConfiguration(controlRegistry);
			}));
			registry.mergeConfiguration(basicHelperConfiguration);

			// visit the entry template control registry integration factory to see if we have any custom controls to merge
			EntryTemplate._controlRegistry && array.some(EntryTemplate._controlRegistry, function(controlRegistryClass) {
				if (controlRegistryClass) {
					require([
						controlRegistryClass
					], lang.hitch(this, function(controlRegistry) {
						// The controlRegistry object is a Javascript object and therefore, we just reference it and not "new" it.
						registry.mergeConfiguration(controlRegistry);
					}));
				}
			});
			return registry;
		},

		_loadDesigner: function(controller, markup, resources) {
			this.logEntry("_loadDesigner");

			var registry = this.createRegistryObject();

			var designerTabs = [
				"design",
				"test"
			];
			var displaySourceTab = ecm.model.desktop.getRequestParam("displaySourceTab");
			if (displaySourceTab != null && displaySourceTab.length > 0) {
				if (displaySourceTab == "true") {
					designerTabs.push("source"); // For debugging purposes, can add source tab back in
				}
			}

			this.designerWindow = this.designer.load({
				id: "propertyLayoutEditor",
				title: "Property Layout Editor",
				description: "Property Layout Editor",
				controller: controller,
				registry: registry,
				markup: markup,
				resources: resources
			}, designerTabs);

			this.connect(this.designerWindow._designEditor, "onDesignChanged", function(changes) {
				this.onDesignChange();
			});

			setTimeout(lang.hitch(this, function() {
				this.resizeDesigner();
			}), 500);
			this.logExit("_loadDesigner");
		},

		/**
		 * @private Creates a new "cloned" content class with a filtered list of attribute definitions that the designer
		 *          can render.
		 */
		_createDesignerContentClass: function(contentClass, propertiesOptions) {
			this.logEntry("_createDesignerContentClass");
			var attributes = [];
			var attributesById = {};
			var attributeDefinitions = contentClass.attributeDefinitions;
			var layoutAttributeDefinitionsById = {};
			var usePropertiesOptions = propertiesOptions && propertiesOptions.length && propertiesOptions.length > 0 ? true : false;

			// Create a new layout class that has a filtered list of attribute definitions that the designer can handle
			var designerContentClass = new LayoutModel({
				id: contentClass.id,
				name: contentClass.name,
				repository: contentClass.repository,
				pseudoClass: false,
				allowsInstances: false,
				entryTemplate: this.entryTemplate,
				reason: "entryTemplateBuilder"
			});

			for ( var i in attributeDefinitions) {
				// Need to setup the "rules" for how to filter the list of class attributes:
				//   1) Filter out system properties
				//   2) Filter out hidden properties from class definitions (without EDS updated flag)
				//   3) Filter out data types that we do not have controls for (P8: guid?, binary, object)
				var skipAttribute = false;
				if (attributeDefinitions[i].system == true) {
					skipAttribute = true;
				} else if (attributeDefinitions[i].hidden == true && attributeDefinitions[i].updatedHidden == undefined) {
					skipAttribute = true;
				} else if (attributeDefinitions[i].dataType == "xs:guid") {
//					skipAttribute = true;  // GUID properties are rendered as string properties with a regular expression pattern formatter
				} else if (attributeDefinitions[i].dataType == "xs:binary") {
					skipAttribute = true;
				} else if (attributeDefinitions[i].dataType == "xs:user" || attributeDefinitions[i].dataType == "xs:group") {
					skipAttribute = true; // User/Group properties do not have associated control in Layout Editor
				} else if (attributeDefinitions[i].dataType == "xs:reference") {
					skipAttribute = true; // CM reference objects do not have associated control in layout editor
				} else if (attributeDefinitions[i].dataType == "xs:attachment") {
					skipAttribute = true; // Workflow attachment properties do not have associated control in layout editor
				}

				// Check to see if we are allowing object value properties through to the layout editor.
				if (!this.allowObjectProperties) {
					if (attributeDefinitions[i].dataType == "xs:object") {
						skipAttribute = true;
					}
				}

				if (!skipAttribute) {
					var layoutAttributeDefinition = designerContentClass.createLayoutAttribute(attributeDefinitions[i]);
					layoutAttributeDefinition.updatedReadOnly = null;
					layoutAttributeDefinition.updatedRequired = null;
					layoutAttributeDefinition.updatedHidden = null;

					// Need to set the value setting to the default value so the designers onChange event works correctly
					if (layoutAttributeDefinition.value) {
						layoutAttributeDefinition.value = layoutAttributeDefinition.defaultValue;
					}
					this._preProcessAttribute(layoutAttributeDefinition, null, "entryTemplateBuilder", false, contentClass.repository);

					// Store layout attribute definitions by id so they can be ordered later.
					layoutAttributeDefinitionsById[layoutAttributeDefinition.id] = layoutAttributeDefinition;
				}
			}

			// Apply properties options order first, if present.
			if (usePropertiesOptions) {

				// Add the layoutAttributeDefinitions in the order specified by the propertiesOptions.
				for ( var i in propertiesOptions) {
					var propertyOptions = propertiesOptions[i];
					var layoutAttributeDefinition = layoutAttributeDefinitionsById[propertyOptions.id];
					if (layoutAttributeDefinition) {
						// The propertiesOptions settings like hidden, read only, required, and default value were already
						// applied to the class attribute definitions when the read-only common properties pane was rendered.
						// Now we just need to apply the propertiesOptions order.
						attributes.push(layoutAttributeDefinition);
						attributesById[propertyOptions.id] = layoutAttributeDefinition;
					}
				}
			}
			
			// Add any remaining layout attribute definitions that were not already added based on the properties options order.
			// When there are no properties options, this adds all of the layout attribute definitions for the class.
			// When there are properties options, this adds the layout attribute definitions for new properties that
			// were added to the class since the properties options were last updated.
			for ( var i in attributeDefinitions) {
				var attrDef = attributeDefinitions[i];
				var layoutAttributeDefinition = layoutAttributeDefinitionsById[attrDef.id];

				// If the layout attribute definition was already added, or there is no 
				// layout attribute definition because the attribute was skipped, then continue. 
				if (attributesById[attrDef.id] || !layoutAttributeDefinition) {
					continue;
				}
				
				// Add the missing layout attribute definition.
				attributes.push(layoutAttributeDefinition);
				attributesById[layoutAttributeDefinition.id] = layoutAttributeDefinition;
			}

			designerContentClass.attributeDefinitions = attributes;

			this.logExit("_createDesignerContentClass");
			return designerContentClass;
		},

		/**
		 * Saves the modifications made in the Designer (html markup and resources).
		 */
		save: function() {
			this.logEntry("save");
			var data = this.designerWindow.get("data");
			if (data != null) {
				this._markup = data.markup;
				this._resources = data.resources;
				var orderedAttributes = this._mergePropertySettings(data.propertySettings, this.designerContentClass);
				// Set the new attribute display order back into the designers content class
				this.designerContentClass.attributeDefinitions = orderedAttributes;

				orderedAttributes = [];
				// Update the ContentClass attribute definitions from the designer settings
				for ( var i in this.designerContentClass.attributeDefinitions) {
					var updatedAttribute = this.designerContentClass.attributeDefinitions[i];
					for ( var j in this.contentClass.attributeDefinitions) {
						var attribute = this.contentClass.attributeDefinitions[j];
						if (updatedAttribute.id == attribute.id) {
							// Pass over the new settings from the designers set of attributes to the entry templates set
							if (attribute.required != updatedAttribute.required) {
								attribute.required = updatedAttribute.required;
								attribute.updatedRequired = true;
							}
							if (attribute.readOnly != updatedAttribute.readOnly) {
								attribute.readOnly = updatedAttribute.readOnly;
								attribute.updatedReadOnly = true;
							}
							if (attribute.hidden != updatedAttribute.hidden) {
								attribute.hidden = updatedAttribute.hidden;
								attribute.updatedHidden = true;
							}
							if (updatedAttribute.updatedChoiceList) { // From EDS
								attribute.choiceList = updatedAttribute.choiceList;
								attribute.validChoiceList = updatedAttribute.choiceList; // Set this too, because common properties table renders with it
							}
							if (!this.compareDefaultValues(attribute.defaultValue, updatedAttribute.defaultValue)) {
								attribute.defaultValue = updatedAttribute.defaultValue;
								attribute.updatedDefaultValue = true;
							}
							orderedAttributes.push(attribute);
							break;
						}
					}
				}
				// Set the new attribute display order back into the builders content class
				this.contentClass.attributeDefinitions = orderedAttributes;
			}
			this.logExit("save");
		},

		/**
		 * Look at the new property settings from the layout designer and deteremine if they can be merged back into the
		 * cloned content class the ET builder is currently operating on. NOTE: Really, should have a mechanism built up
		 * front in so the designer property settings will not allow the user to over ride settings from the repository.
		 * 
		 * @private
		 */
		_mergePropertySettings: function(propertySettings, designerContentClass) {
			// Build up a map of the original attributes for faster access, we need to check that the settings
			// from the repository can not be over written (will not set the value if prohibited by repository).
			var attributesById = {};
			for ( var index in this.origContentClass.attributeDefinitions) {
				var attrDef = this.origContentClass.attributeDefinitions[index];
				attributesById[attrDef.id] = attrDef;
			}
			var orderedAttributes = []; // When property display order is changed in layout
			var orderedAttributesById = {}; // A map by Id for faster lookup
			var attribute;
			// Need to loop through the property settings first to maintain the layout order from the layout editor
			for ( var i in propertySettings) {
				var property = propertySettings[i];
				for ( var j in designerContentClass.attributeDefinitions) {
					attribute = designerContentClass.attributeDefinitions[j];
					if (designerContentClass.getBindingAttributeId(attribute.id) == property.binding) {
						// First check to see if this property has allready been added to the ordered list 
						// It may be multiply listed on separate tabs of a tab container (or something similar)
						if (orderedAttributesById[attribute.id] != null) {
							break; // Take first property's settings and skip any others...
						}

						// Check for changes in the property meta-data and pass over to the attributes if necessary
						if (property.required != attribute.required) {
							// Can only set required to false if the original Content Class attribute specifies it to be false
							if (attribute.updatedRequired) {
								attribute.required = property.required;
							} else if (!attributesById[attribute.id].required) {
								attribute.required = property.required;
								attribute.updatedRequired = true;
							}
						}
						if (property.readOnly != attribute.readOnly) {
							// Can only set readOnly to false if the original Content Class attribute specifies it to be false
							if (attribute.updatedReadOnly) {
								attribute.readOnly = property.readOnly;
							} else if (!attributesById[attribute.id].readOnly) {
								attribute.readOnly = property.readOnly;
								attribute.updatedReadOnly = true;
							}
						}
						if (property.hidden != attribute.hidden) {
							// Can only set hidden to false if the original Content Class attribute specifies it to be false
							if (attribute.updatedHidden) {
								attribute.hidden = property.hidden;
							} else if (!attributesById[attribute.id].hidden) {
								attribute.hidden = property.hidden;
								attribute.updatedHidden = true;
							}
						}
						if (!this.compareDefaultValues(property.defaultValue, attribute.defaultValue)) {
							// Need to convert the date/time values into back into iso for the attribute definition format
							try {
								if (attribute.dataType == "xs:timestamp") {
									if (property.defaultValue != null && lang.isArray(property.defaultValue)) {
										var values = [];
										var self = this;
										array.forEach(property.defaultValue, function(value) {
											if (value != null && value instanceof Date) {
												values.push(self._getDateTimeString(value, true));
											} else {
												values.push(value);
											}
										});
										attribute.defaultValue = values;
									} else {
										if (property.defaultValue != null && property.defaultValue instanceof Date) {
											attribute.defaultValue = this._getDateTimeString(property.defaultValue, true);
										} else {
											attribute.defaultValue = property.defaultValue;
										}
									}
								} else if (attribute.dataType == "xs:date") { // CM only
									if (property.defaultValue != null && property.defaultValue instanceof DateOnly) {
										var zuluDate = this._getDateTimeString(property.defaultValue.toDate(), true);
										// Lop off the zulu 'Z' so the date becomes absolute or local date
										attribute.defaultValue = zuluDate.substr(0, 19);
									} else if (property.defaultValue != null) {
										// Lop off the zulu 'Z' so the time becomes absolute or local time
										attribute.defaultValue = property.defaultValue.substr(0, 19);
									} else if (property.defaultValue == null) {
										attribute.defaultValue = property.defaultValue;
									}
								} else if (attribute.dataType == "xs:time") { // CM only
									if (property.defaultValue != null && property.defaultValue instanceof TimeOnly) {
										var zuluTime = this._getDateTimeString(property.defaultValue.toDate(), true);
										// Lop off the zulu 'Z' so the time becomes absolute or local time
										attribute.defaultValue = zuluTime.substr(0, 19);
									} else if (property.defaultValue != null) {
										// Lop off the zulu 'Z' so the time becomes absolute or local time
										attribute.defaultValue = property.defaultValue.substr(0, 19);
									} else if (property.defaultValue == null) {
										attribute.defaultValue = property.defaultValue;
									}
								} else {
									attribute.defaultValue = property.defaultValue;
								}
							} catch (e) {
								// Ignore this, continue trying to set default values
							}
							attribute.updatedDefaultValue = true;
						}

						orderedAttributes.push(attribute);
						orderedAttributesById[attribute.id] = attribute;
						break;
					}
				}
			}

			// Check for properties that have been removed from the canvas and set them to hidden
			var orderedAttribute;
			for ( var i in designerContentClass.attributeDefinitions) {
				var attributeInOrder = false;
				attribute = designerContentClass.attributeDefinitions[i];
				for ( var j in orderedAttributes) {
					orderedAttribute = orderedAttributes[j];
					if (attribute.id == orderedAttribute.id) {
						attributeInOrder = true;
						break;
					}
				}
				// This property was removed from the canvas and should be listed as hidden
				if (!attributeInOrder) {
					// Can only set hidden to false if the Content Class attribute specifies it to be false
					if (!attribute.hidden) {
						if (attribute.updatedHidden) {
							attribute.hidden = true;
						} else if (!attribute.hidden) {
							attribute.hidden = true;
							attribute.updatedHidden = true;
						}
					}
					// properties removed from the canvas will be ordered at the end of the displayed list
					orderedAttributes.push(attribute);
				}
			}
			return orderedAttributes;
		},

		/**
		 * Returns true if the given default value is equal to the other.
		 * 
		 * @param defaultValue
		 *            A defaultValue (can be an Array)
		 * @param otherDefaultValue
		 *            Another defaultValue (can be an Array)
		 */
		compareDefaultValues: function(defaultValue, otherDefaultValue) {
			var updatedDefaultValue = false;
			if (lang.isArray(defaultValue)) {
				updatedDefaultValue = this.compareValues(defaultValue, otherDefaultValue);
			} else {
				updatedDefaultValue = defaultValue === otherDefaultValue;
			}
			return updatedDefaultValue;
		},

		/**
		 * Returns true if the given values is equal to the others.
		 * 
		 * @param values
		 *            An array of values
		 * @param otherValues
		 *            An array of values
		 */
		compareValues: function(values, otherValues) {
			if (lang.isArray(values) != lang.isArray(otherValues))
				return false;

			if (lang.isArray(values)) {
				// Ignore empty values; otherwise, the comparison may yield a false-negative result (e.g., [ "foo" ] is equal to [ "foo", "" ])
				var callback = function(value) {
					return value != null && value != "";
				};
				// Remove the filters because it causes zero values to be removed from the lists (which are valid)
				//values = array.filter(values, callback);
				//otherValues = array.filter(otherValues, callback);

				if (values.length != otherValues.length)
					return false;

				if (!array.every(values, function(value, i) {
					return value === otherValues[i];
				}))
					return false;
			}
			return true;
		},

		_getDateTimeString: function(value, zulu) {
			return dateStamp.toISOString(value, {
				zulu: zulu
			});
		},

		/**
		 * Clears the pseudo content class if there is no markup saved from the designer yet.
		 */
		clearContentClass: function() {
			this.logEntry("clearContentClass");
			if (this._markup == null) {
				this.designerContentClass = null;
			}
			this.logExit("clearContentClass");
		},

		/**
		 * @private Creates the initial html markup for the class properties.
		 */
		_createMarkup: function(contentClass, displayDateOnly) {
			// Align the property labels to the left (and not above), plus set the default label width to be a little wider
			var markup = "<div data-dojo-props=\"labelAlignment:'horizontal',labelWidth:'180px',padded:true\" data-dojo-type=\"pvr/widget/Layout\">\n";
			for ( var i in contentClass.attributeDefinitions) {
				var attribute = contentClass.attributeDefinitions[i];
				markup += "<div data-dojo-props=\"binding:'" + contentClass.getBindingAttributeId(attribute.id) + "'";

				// Add the default values into the markup, required for the property settings pane
				if (attribute.defaultValue && attribute.defaultValue != "") {
					markup += ",defaultValue:" + this._serializeValue(attribute.defaultValue);
				}

				// Add other attributes to the markup.
				if (attribute.hidden) {
					markup += ",hidden:" + this._serializeValue(attribute.hidden);
				}
				if (attribute.readOnly) {
					markup += ",readOnly:" + this._serializeValue(attribute.readOnly);
				}
				if (attribute.required) {
					markup += ",required:" + this._serializeValue(attribute.required);
				}

				// Add the correct editor, will be over riding some of the defaults 
				if (attribute.dataType == "xs:boolean") {
					markup += ",editor:'pvr/widget/editors/SelectEditor'\""; // switch to drop down list instead of checkbox
				} else if (attribute.dataType == "xs:timestamp" && displayDateOnly) {
					markup += ",editor:'pvr/widget/editors/DateTextBoxEditor'\""; // switch to date only instead of date and time
				} else if (attribute.dataType == "xs:date") {
					markup += ",editor:'pvr/widget/editors/DateTextBoxEditor',editorParams:{utc:true}\"";
				} else if (attribute.dataType == "xs:time") {
					markup += ",editor:'pvr/widget/editors/TimeTextBoxEditor',editorParams:{utc:true}\"";
				} else {
					markup += "\"";
				}

				markup += " data-dojo-type=\"pvr/widget/Property\">\n";
				markup += "</div>\n";
			}
			markup += "</div>\n";
			return markup;
		},

		_serializeValue: function(value) {
			if (value instanceof Date) {
				return this._serializeValue(dateStamp.toISOString(value));
			} else if (lang.isArray(value)) {
				return "[" + array.map(value, function(item) {
					return this._serializeValue(item);
				}, this).join(",") + "]";
			} else if (lang.isObject(value)) {
				var pairs = [];
				for ( var param in value) {
					pairs.push(param + ":" + this._serializeValue(value[param]));
				}
				return "{" + pairs.join(",") + "}";
			} else if (typeof value === "string") {
				return "'" + html.escapeHTML(this._escapeJS(value)) + "'";
			} else {
				return value.toString();
			}
		},

		_escapeJS: function(s) {
			return s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/"/g, "\\\"").replace(/'/g, "\\\'");
		},

		/**
		 * Fired when the layout design changes value.
		 */
		onDesignChange: function() {
		},

		/**
		 * Returns true if the fields on this pane are valid.
		 */
		isValid: function() {
			return true;
		},

		/**
		 * Set the content class. Called by the Builder to set the content class for this pane.
		 * 
		 * @param contentClass
		 *            Instance of {@link ecm.model.ContentClass}
		 */
		setContentClass: function(contentClass) {
			if (this.contentClass && (this.contentClass.id != contentClass.id)) {
				// Clear any existing layout design, changing the content class clears everything
				this.clear();
			}
			this.contentClass = contentClass;
		},

		/**
		 * Set the original content class with attribute settings from repository (un-modified). No ET settings have
		 * been applied. This class is used to display the Property Information settings in the layout editor.
		 * 
		 * @param originalContentClass
		 *            Instance of {@link ecm.model.ContentClass}
		 */
		setOriginalContentClass: function(originalContentClass) {
			this.origContentClass = originalContentClass;
		},

		/**
		 * Clear the layout designer information
		 */
		clear: function() {
			this.designerContentClass = null;
			this._markup = null;
			this._resources = null;
		},

		/**
		 * Returns true is there is existing markup.
		 */
		hasMarkup: function() {
			if (this._markup == null) {
				return false;
			} else {
				return true;
			}
		},

		/**
		 * Cleans up the widget.
		 */
		destroy: function() {
			if (this._updateHandler) {
				this._updateHandler.remove();
				delete this._updateHandler;
			}
			if (this._factory) {
				if (lang.isFunction(this._factory.destroyRecursive)) {
					this._factory.destroyRecursive();
				} else if (lang.isFunction(this._factory.destroy)) {
					this._factory.destroy();
				}
				delete this._factory;
			}
			this.inherited(arguments);
		},

		/**
		 * Loads the model with the designer layout data.
		 */
		loadModel: function() {
			this.entryTemplate.markup = this._markup;
			this.entryTemplate.resources = this._resources;
			// Save the model integration class specified at design time, so it can later be used at run time
			this.entryTemplate.modelIntegrationClass = this.modelIntegrationClass;
			this.entryTemplate.controlRegistryClass = this.controlRegistryClass;
		}

	});
});

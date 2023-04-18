/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/string",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"../Messages",
	"../LoggerMixin",
	"../model/ContentClass",
	"../model/AttributeDefinition",
	"../model/_PreProcessAttributesMixin",
	"../model/EntryTemplate",
	"../model/configuration/LayoutModel",
	"../model/configuration/LayoutAttribute",
	"pvr/controller/integration/Integration",
	"pvr/controller/integration/BasicIntegrationConfiguration",
	"pvr/controller/PropertyCollectionController",
	"pvr/widget/registry/Registry",
	"pvd/widget/registry/BasicHelperConfiguration",
	"pvr/controller/localization/LocalizationManager",
	"ecm/model/configuration/ControlRegistry",
	"./_PropertiesPaneMixin",
	"pvr/widget/View",
	"dojo/text!./templates/LayoutPropertiesPane.html"
],

function(declare, lang, array, aspect, domClass, domStyle, domConstruct, domGeom, string, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, Messages, LoggerMixin, ContentClass, AttributeDefinition, _PreProcessAttributesMixin, EntryTemplate, LayoutModel, LayoutAttribute, Integration, basicIntegrationConfiguration, PropertyCollectionController, Registry, basicHelperConfiguration, LocalizationManager, controlRegistry, _PropertiesPaneMixin, View, template) {

	/**
	 * @name ecm.widget.LayoutPropertiesPane
	 * @class Provides a widget that is used to display custom property layout views. This widget can be used in dialog
	 *        boxes for adding documents, creating folders, and editing properties.
	 * @augments dijit._Widget, ecm.widget._PropertiesPaneMixin
	 * @since 2.0.3
	 */
	return declare("ecm.widget.LayoutPropertiesPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_PropertiesPaneMixin,
		_PreProcessAttributesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.LayoutPropertiesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,

		/**
		 * A string value of the model integration class to be created.
		 */
		modelIntegrationClass: "ecm/model/configuration/ModelIntegration",

		/**
		 * A string value of the control registry class to be created.
		 */
		controlRegistryClass: "ecm/model/configuration/ControlRegistry",

		/**
		 * Flag for indicating whether object value properties are supported (passed through to the layout editor).
		 */
		allowObjectProperties: false,

		postCreate: function() {
			this.inherited(arguments);
		},

		/**
		 * Clears the current property rendering.
		 */
		clearRendering: function() {
			this.logEntry("clearRendering");
			this._clearRendering();
			this.logExit("clearRendering");
		},

		/**
		 * Renders the attributes.
		 * 
		 * @param attributeDefinitions
		 *            An array of {@link ecm.model.AttributeDefinition} objects. Provides the definitions for the
		 *            attributes in the <code>item</code> parameter.
		 * @param item
		 *            A {@link ecm.model.ContentItem} object.
		 * @param reason
		 *            The reason for displaying properties. Pass <code>"create"</code> when creating a new content
		 *            item, <code>"checkin"</code> when checking in a content item, <code>"editProperties"</code>
		 *            when editing the properties of a content item, or <code>"multiEditProperties"</code> when
		 *            editing the properties of multiple content items.
		 * @param isReadOnly
		 *            Pass <code>true</code> if the entire item is read only.
		 * @param params
		 *            A object containing additional parameters. (@since 2.0.3)
		 */
		renderAttributes: function(attributeDefinitions, item, reason, isReadOnly, params) {
			this.logEntry("renderAttributes");

			this.onAttributesRendering(attributeDefinitions);
			var entryTemplate = null;
			if (params && params.entryTemplate) {
				entryTemplate = params.entryTemplate;
			}
			this._itemIsReadOnly = isReadOnly;
			this._renderingAttributes = true;
			this.attributeDefinitions = attributeDefinitions;
			this.attributeDefinitionsById = {};
			array.forEach(this.attributeDefinitions, function(attributeDef) {
				this.attributeDefinitionsById[attributeDef.id] = attributeDef;
			}, this);

			if (reason == "create" && entryTemplate) {
				if (entryTemplate.repository._isP8()) {
					if (this.attributeDefinitionsById.EntryTemplateId) {
						this.attributeDefinitionsById.EntryTemplateId.defaultValue = entryTemplate.id.split(",")[2];
					}
					if (this.attributeDefinitionsById.EntryTemplateObjectStoreName) {
						this.attributeDefinitionsById.EntryTemplateObjectStoreName.defaultValue = entryTemplate.id.split(",")[1];
					}
				} else if (entryTemplate.repository._isCM() && this.attributeDefinitionsById.EntryTemplateId) {
					this.attributeDefinitionsById.EntryTemplateId.defaultValue = entryTemplate.itemId;
				}
			}

			LocalizationManager.locale = ecm.model.desktop.valueFormatter.getLocale();
			this._controller = new PropertyCollectionController({});
			this._controller._item = item;
			this._controller._layoutPropertiesPane = this;

			this._updateHandler = aspect.after(this._controller, "onChange", lang.hitch(this, function(changes) {
				this.adjustDirtyState();
				this._handleOnPropertyChange(changes);
				this.onPropertyChanged();
			}), true);

			this._view = new View({
				disabled: true, // Set disabled while it's loading the view, will enable after bind callback
				markup: entryTemplate.markup,
				resources: entryTemplate.resources,
				lazyLoad: true
			});

			this._layoutContentClass = this._createLayoutContentClass(attributeDefinitions, item, reason, isReadOnly, entryTemplate, this._controller, this._view);

			// Create the integration class and merge in model integration
			var integration = this.createIntegrationObject(entryTemplate);

			this._controller.bind(this._layoutContentClass.modelBindingId, this._messages.entry_template_mode_binding_label, this._layoutContentClass, integration, true);

			for ( var i in this._layoutContentClass.attributeDefinitions) {
				var attributeDefinition = this._layoutContentClass.attributeDefinitions[i];
				this.setPropertyValue(attributeDefinition.id, attributeDefinition.defaultValue);
			}

			this.own(aspect.after(this._view, "onLoaded", lang.hitch(this, function() {
				delete this._renderingAttributes;
				this.onCompleteRendering();
			})));

			this._layoutView.appendChild(this._view.domNode);
			this._view.startup();

			var registry = this.createRegistryObject(entryTemplate);

			this._view.bind(this._controller, registry, null, lang.hitch(this, function() {
				this._view.set("disabled", false);
			}));

			dojo.style(this._view.domNode, "display", "");

			// Add the handlers.
			this._viewHandlers = [];
			this._viewHandlers.push(this._view.watch("state", lang.hitch(this, function(attr, oldValue, newValue) {
				this.adjustDirtyState();
				this.onPropertyChanged();
			})));
			this._view.forEachProperty({
				callback: lang.hitch(this, function(property) {
					this._viewHandlers.push(aspect.after(property, "onFocus", lang.hitch(this, function() {
						this._handleOnPropertyFocus(property);
					})));
					this._viewHandlers.push(aspect.after(property, "onBlur", lang.hitch(this, function() {
						this._handleOnPropertyBlurred(property);
					})));
				})
			});

			if (isReadOnly) {
				this._view.set("readOnly", true);
			}

			this.logExit("renderAttributes");
		},

		/**
		 * Creates the layout editors Integration object and merges the applications model integration object used at
		 * design time when constructing the entry template.
		 * 
		 * @param entryTemplate
		 *            {@link ecm.model.EntryTemplate} object
		 * @returns {@link pvr.controller.integration.Integration}
		 */
		createIntegrationObject: function(entryTemplate) {
			var integration = new Integration(false);
			integration.mergeConfiguration(basicIntegrationConfiguration);

			// Use the model integration class specified at design time in case it was overridden
			if (entryTemplate && entryTemplate.modelIntegrationClass) {
				this.modelIntegrationClass = entryTemplate.modelIntegrationClass;
			}

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
		 * @param entryTemplate
		 *            {@link ecm.model.EntryTemplate} object
		 * @returns {@link pvr.widget.registry.Registry}
		 */
		createRegistryObject: function(entryTemplate) {
			var registry = new Registry();
			// Make sure we registry the ICN control registry first
			// Use the control registry class specified at design time in case it was overridden
			if (entryTemplate && entryTemplate.controlRegistryClass) {
				this.controlRegistryClass = entryTemplate.controlRegistryClass;
			}

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

		/**
		 * Set the error state on the layout viewer widget.
		 */
		adjustDirtyState: function() {
			//var controllerDirty = this._controller && this._controller.isModified(this._widgetLoadTime || new Date());
			//var viewError = this._view && this._view.get("state") === "Error";
			//this.setDirtyState(controllerDirty || viewError);
		},

		_handleOnPropertyChange: function(changes) {
			if (this._view) {
				for ( var category in changes) {
					var categoryChanges = changes[category];
					for ( var id in categoryChanges) {
						var propertyChanges = categoryChanges[id];
						if (propertyChanges.hasOwnProperty("value")) {
							this._view.someProperty({
								filter: function(property) {
									return property.get("binding") === property.controller.model.contentClass.getBindingAttributeId(id);
								},
								callback: lang.hitch(this, function(property) {
									if (property.controller && property.controller.model.hasDependentAttributes) {
										property.controller.model.dependentsRetrievalPending = true;
									}
									return true;
								})
							});
						}
					}
				}
			}
		},

		_handleOnPropertyFocus: function(property) {
		},

		_handleOnPropertyBlurred: function(property) {
		},

		_clearRendering: function() {
			this.logEntry("_clearRendering");
			if (this._layoutContentClass) {
				// Tear done the update handler.
				this._updateHandler && this._updateHandler.remove();

				// Tear down the view.
				if (this._view) {
					// Remove the handlers.
					array.forEach(this._viewHandlers, function(handler) {
						handler.remove();
					});
					delete this._viewHandlers;

					// Tear down the view.
					this._view.unbind();
					this._view.destroyRecursive();
					delete this._view;
					delete this._widgetLoadTime;
				}

				// Tear down the controller.
				if (this._controller) {
					this._controller.unbind(this._layoutContentClass.modelBindingId);
					delete this._controller._item;
					delete this._controller._layoutPropertiesPane;
					delete this._controller;
				}

				// Delete the model.
				this._destroyLayoutContentClass();
			}
			this.onClearedRendering();
			this.logExit("_clearRendering");
		},

		/**
		 * @private Creates a new layout content class with a filtered list of attribute definitions that the designer
		 *          can render.
		 */
		_createLayoutContentClass: function(attributeDefinitions, item, reason, isReadOnly, entryTemplate, controller, view) {
			this.logEntry("_createLayoutContentClass");

			// Create a new layout class that has a filtered list of attribute definitions that the designer can handle
			var contentClass = attributeDefinitions[0].contentClass;
			var layoutContentClass = new LayoutModel({
				id: contentClass.id,
				name: contentClass.name,
				repository: contentClass.repository,
				objectStoreId: contentClass.objectStore ? contentClass.objectStore.id : "",
				pseudoClass: false,
				allowsInstances: false,
				entryTemplate: entryTemplate,
				reason: reason,
				controller: controller,
				view: view
			});

			// Always clear the connection to call EDS on a folder change for a new rendering.
			if (this._applyParentFolderDependentChangesHandle) {
				this._applyParentFolderDependentChangesHandle.remove();
				delete this._applyParentFolderDependentChangesHandle;
			}
			if (reason == "create" && contentClass.edsIsEnabled) {
				// Connect the call to EDS when the parent folder changes.
				this._applyParentFolderDependentChangesHandle = aspect.after(this, "onParentFolderChanged", lang.hitch(this, function() {
					layoutContentClass.retrieveDependentProperties(null, true);
				}));
			}

			var attributes = [];
			for ( var i in attributeDefinitions) {
				// Need to setup the "rules" for how to filter the list of class attributes:
				//   1) Filter out system properties
				//   2) Filter out data types that we do not have controls for (P8: binary, object)
				var skipAttribute = false;
				if (attributeDefinitions[i].system == true) {
					skipAttribute = true;
				} else if (attributeDefinitions[i].dataType == "xs:guid") {
//					skipAttribute = true;  // GUID properties are rendered as string properties with a regular expression pattern formatter
				} else if (attributeDefinitions[i].dataType == "xs:binary") {
					skipAttribute = true;
				} else if (!this.allowObjectProperties && attributeDefinitions[i].dataType == "xs:object") {
					skipAttribute = true;
				}

				if (!skipAttribute) {
					var layoutAttributeDefinition = layoutContentClass.createLayoutAttribute(attributeDefinitions[i]);
					layoutAttributeDefinition.contentClass = layoutContentClass; // Hookup new over-ridden contentClass
					layoutAttributeDefinition.reason = reason; // Necessary to control setting the defaultValues only on create

					this._preProcessAttribute(layoutAttributeDefinition, item, reason, isReadOnly, contentClass.repository);

					if (layoutAttributeDefinition.cardinality == "LIST") {
						// Check the default value format, if there is only one value it might not be an array, make it an array if so
						// Both array tests are needed because instanceof Array does not recognize arrays created under a different window.
						if (!((layoutAttributeDefinition.defaultValue instanceof Array) || (!layoutAttributeDefinition.defaultValue.propertyIsEnumerable('length') && (typeof layoutAttributeDefinition.defaultValue === 'object') && (typeof layoutAttributeDefinition.defaultValue.length === 'number')))) {
							if (layoutAttributeDefinition.defaultValue != null && typeof layoutAttributeDefinition.defaultValue === "string" && layoutAttributeDefinition.defaultValue == "") {
								layoutAttributeDefinition.defaultValue = []; // Just set an empty array
							} else {
								layoutAttributeDefinition.defaultValue = [
									layoutAttributeDefinition.defaultValue
								];
							}
						}
					}
					attributes.push(layoutAttributeDefinition);
				}
			}

			layoutContentClass.attributeDefinitions = attributes;

			this.logExit("_createLayoutContentClass");
			return layoutContentClass;
		},

		_destroyLayoutContentClass: function() {
			this.logEntry("_destroyLayoutContentClass");
			if (this._layoutContentClass) {
				delete this._layoutContentClass.repository;
				delete this._layoutContentClass.entryTemplate;
				delete this._layoutContentClass.controller;
				delete this._layoutContentClass.view;
			
				for (var i in this._layoutContentClass.attributeDefinitions) {
					delete this._layoutContentClass.attributeDefinitions[i].contentClass;
					this._layoutContentClass.attributeDefinitions[i] = null;
				}
				delete this._layoutContentClass.attributeDefinitions;
			
				delete this._layoutContentClass;
			}
			
			if (this._applyParentFolderDependentChangesHandle) {
				this._applyParentFolderDependentChangesHandle.remove();
				delete this._applyParentFolderDependentChangesHandle;
			}
			
			this.logExit("_destroyLayoutContentClass");
		},

		/**
		 * Retrieves the value for the property field identified by <code>fieldName</code>.
		 * 
		 * @param fieldName
		 *            The property Id string.
		 * @return The value for the property field.
		 */
		getPropertyValue: function(fieldName) {
			var propertyController = this._controller.getPropertyController(this._layoutContentClass.getBindingAttributeId(fieldName));
			if (propertyController) {
				return propertyController.get("value");
			} else {
				return null;
			}
		},

		/**
		 * Sets the value for the property field identified by <code>fieldName</code>.
		 * 
		 * @param fieldName
		 *            The property Id string.
		 * @param value
		 *            The new value for the property field.
		 */
		setPropertyValue: function(fieldName, value) {
			return this.setPropertyPropertyValue(fieldName, "value", value);
		},

		/**
		 * Sets the value for a property field's property identified by <code>fieldName</code> and
		 * <code>propertyName</code>.
		 * 
		 * @param fieldName
		 *            The property Id string.
		 * @param propertyName
		 *            The property's property name string.
		 * @param value
		 *            The new value for the property field.
		 * @since 2.0.3.6
		 */
		setPropertyPropertyValue: function(fieldName, propertyName, value) {
			var propertyController = this._controller.getPropertyController(this._layoutContentClass.getBindingAttributeId(fieldName));
			if (propertyController) {
				propertyController.set(propertyName, value);
				return true;
			}
			return false;
		},

		/**
		 * When a property change is applied to a field with dependent properties by the user attempting to save the
		 * changes, the save is interrupted by returning the field as being invalid until the EDS call completes. This
		 * event is fired after the EDS call returns and the EDS changes are applied so that the save operation can be
		 * retried.
		 * @since 2.0.3.8
		 */
		onRetrySave: function() {
		},

		/**
		 * Checks if the property fields contain valid values.
		 * 
		 * @param onEditStatus
		 *            A boolean value. If <code>true</code>, item properties are being modified. Only required
		 *            property fields and property fields that have been modified are checked.
		 * @param onSaveStatus
		 *            A boolean value. If <code>true</code>, changes are being saved. The first property field widget
		 *            from the list of property fields with invalid values is returned.
		 * @since 2.0.3.8 A boolean value. If <code>true</code> and there is a field with an invalid value, focus is
		 *            automatically set to the invalid field.
		 * @return Returns <code>null</code> if all checked property fields contain valid values. Otherwise, returns a
		 *         string indicating that the properties are in an "Error" state.
		 */
		validateAll: function(onEditStatus, onSaveStatus, focus) {
			var methodName = "validateAll";
			this.logEntry(methodName);
			var viewError = false;
			var errorFieldId = null;
			if (this._view) {
				viewError = this._view.get("state") === "Error";
				var propertyControllers = this._controller.getPropertyControllers({
					// Keep the original controller order
					comparator: null
				});

				for ( var id in propertyControllers) {
					if (propertyControllers.hasOwnProperty(id)) {
						var propertyController = propertyControllers[id];
						if (propertyController.cardinality === "single") {
							if (propertyController.get("error")) {
								this.logDebug(methodName, "Property " + propertyController.id + " is in error state");
								errorFieldId = propertyController.id;
								break;
							} else if (propertyController.get("required")) {
								// Checking the required attribute of the model (not the markup)
								var value = propertyController.get("value");
								// Need to check the data type to do null value comparison correctly
								if (propertyController.type == "integer" || propertyController.type == "float" || propertyController.type == "boolean") {
									if (value == null || value === undefined) {
										this.logDebug(methodName, "Property " + propertyController.id + " is required, but value is null.");
										errorFieldId = propertyController.id;
										break;
									}
								} else {
									if (!value || value.length === 0) {
										this.logDebug(methodName, "Property " + propertyController.id + " is required, but value is null.");
										errorFieldId = propertyController.id;
										break;
									}
								}
							}
						} else if (propertyController.cardinality === "multi") {
							if (array.some(propertyController.get("error"), function(error) {
								return !!error;
							})) {
								this.logDebug(methodName, "Property " + propertyController.id + " is in error state");
								errorFieldId = propertyController.id;
								break;
							} else if (propertyController.get("required")) { // Property is required, check for a value
								if (propertyController.get("value").length === 0) {
									// Checking the required attribute of the model (not the markup)
									this.logDebug(methodName, "Property " + propertyController.id + " is required, but value is null.");
									errorFieldId = propertyController.id;
									break;
								} else if (propertyController.get("value").length > 0) {
									// Check to see if it's an array that only has null string values (and nothing else)
									var values = propertyController.get("value");
									var allGood = false;
									for ( var index in values) {
										if (values[index] != null) { // Can be null values if user hits Add button with nothing in input editor
											allGood = true;
											break;
										}
									}
									if (!allGood) {
										this.logDebug(methodName, "Property " + propertyController.id + " is required, but value is null.");
										errorFieldId = propertyController.id;
										break;
									}
								}
							}
						}
					}
				}

				// Secondary, direct check.
				if (!errorFieldId) {
					// Check for an invalid property.
					array.some(this._view.properties, function(property) {
						if (!property.isValid()) {
							errorFieldId = property.controller.id;
							return true;
						}
					});
				}
				
				if (errorFieldId && focus) {
					this.setFieldFocus(errorFieldId);
				}
				if (viewError && !errorFieldId) {
					this._view.validate();
					viewError = this._view.get("state") === "Error";
				}
				viewError = viewError || !!errorFieldId;

				// If there is no field error and the properties are being saved, treat a pending EDS call as an invalid condition
				// to interrupt the add. This allows the EDS call to complete and the EDS updates to be applied, then the add will
				// be retried.
				if (!viewError && onSaveStatus && this._layoutContentClass.isDependentAttributesRetrievalPending()) {
					viewError = true;
					this._retrySave = true;
				}
			}
			
			this.logExit(methodName);
			if (viewError) {
				// Just returning state, can not return property field control from layout view
				// The container controls don't actually use the list of invalid fields
				return "Error";
			} else {
				return null; // null means no validation errors
			}
		},

		/**
		 * Assigns an error to a property field.
		 * 
		 * @param fieldName
		 *            A property Id string.
		 * @param errorMessage
		 *            The error message string.
		 * @param errorValue
		 *            The invalid value.
		 */
		setFieldError: function(fieldName, errorMessage, errorValue) {
			if (!errorMessage) {
				var propertyController = this._controller.getPropertyController(this._layoutContentClass.getBindingAttributeId(fieldName));
				if (propertyController) {
					errorMessage = propertyController.get("invalidMessage");
				}
				if (!errorMessage) {
					errorMessage = "Error"; // Should not get here, would display "Error" for the message
				}
			}
			var properties = this._view.getProperty(this._layoutContentClass.getBindingAttributeId(fieldName));
			if (properties) {
				array.forEach(properties, function(property) {
					if (property.editorWidget) {
						// Display the error status immediately.
						property.editorWidget._hasBeenBlurred = true;
						property.editorWidget.set("error", errorMessage);
					}
				});
			}
		},

		/**
		 * Places focus in the property field identified by <code>fieldName</code>, if found. This is typically used
		 * to set the focus on a field that has an invalid value.
		 * 
		 * @param fieldName
		 *            The property Id string.
		 */
		setFieldFocus: function(fieldName) {
			if (this._view) {
				array.some(this._view.properties, function(property) {
					if (property.controller.id == fieldName) {
						// Delay setting focus. In some cases a status window is displayed and if 
						// we don't allow time for it to close, when it closes it dismisses the tooltip
						// that is displayed when focus is set to the field.
						// The same delay is used in CommonPropertiesPane.setFieldFocus().
						setTimeout(function() {
							property.focus();
							if (property.editorWidget.editorClass == "pvrDateTimeTextBoxEditor") {
								if (property.editorWidget && property.editorWidget.dateTextBox && property.editorWidget.dateTextBox.isValid() && property.editorWidget.timeTextBox && !property.editorWidget.timeTextBox.isValid()) {
									property.editorWidget.timeTextBox.focusNode.focus();
								}
							}
						}, 300);
						return true;
					}
				});
			}
		},

		/**
		 * Returns whether the field widget for the property named <code>fieldName</code> is displayed (not hidden).
		 * 
		 * @param fieldName
		 *            The string Id of the property.
		 * @return True if the field is displayed in the property table.
		 */
		isFieldDisplayed: function(fieldName) {
			if (fieldName && this._controller.getPropertyController(this._layoutContentClass.getBindingAttributeId(fieldName))) {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * Retrieves the property values JSON string. See {@link ecm.widget.PropertyEditors}
		 * <code>getPropertiesJSON</code> for more details.
		 * 
		 * @param includeReadonly
		 *            A boolean value. If <code>true</code>, values for read only properties are included. Otherwise
		 *            read only property values are excluded from the JSON.
		 * @param includeHidden
		 *            A boolean value. if <code>true</code>, values for hidden properties are included. The parameter
		 *            <code>excludeEmptyValues</code> also applies to hidden properties.
		 * @param excludeEmptyValues
		 *            A boolean value. If <code>true</code>, properties with empty values are excluded.
		 * @return The JSON string for the current state of the properties.
		 */
		getPropertiesJSON: function(includeReadonly, includeHidden, excludeEmptyValues) {
			this.logEntry("getPropertiesJSON");
			var properties = [];
			this._view.forEachProperty({
				callback: lang.hitch(this, function(property) {
					properties.push({
						"name": property.controller.id,
						"value": property.controller.get("value"), // This is the real value (not display value)
						"dataType": property.controller.model.dataType, // Need real dataType from ICN model
						"label": property.controller.get("name")
//						"displayValue": property.controller.get("value") || ""  // Is this necessary?
					});
				})
			});

			// if the repository is P8 and there is no document title in the property, it means the document title is removed from the entry template
			// and the document title has no default value set by CE and EDS
			// then it should have the value of file name.
			if (!properties.some(function(property) {
				return property.name == "DocumentTitle"
			})// if there is no document title in the property 
					&& this._layoutContentClass && this._layoutContentClass.repository && this._layoutContentClass.repository._isP8() // if the repository is P8
					&& this._layoutContentClass.controller.collections && this._layoutContentClass.modelBindingId//
					&& this._layoutContentClass.controller.collections[this._layoutContentClass.modelBindingId]//
					&& this._layoutContentClass.controller.collections[this._layoutContentClass.modelBindingId].propertyControllers//try to get the value from LayoutModel
					&& this._layoutContentClass.controller.collections[this._layoutContentClass.modelBindingId].propertyControllers.DocumentTitle) {
				var documentTitle = this._layoutContentClass.controller.collections[this._layoutContentClass.modelBindingId].propertyControllers.DocumentTitle
				properties.push({
					"name": "DocumentTitle",
					"value": documentTitle.get("value"),
					"dataType": "xs:string",
					"label": documentTitle.get("label"),
				});
			}

			// Hidden properties do not have property editors. Use the value from the attribute definition. 
			if (includeHidden) {
				this._getHiddenPropertiesJSON(properties, this.attributeDefinitions, excludeEmptyValues);
			}

			if (this._layoutContentClass && this._layoutContentClass.entryTemplate) {
				// Ensure that the entry template properties are included.
				var entryTemplateIdAdded;
				var entryTemplateObjectStoreNameAdded;
				array.some(properties, lang.hitch(this, function(property) {
					if (!entryTemplateIdAdded && property.name == "EntryTemplateId") {
						entryTemplateIdAdded = true;
					} else if (this._layoutContentClass.repository._isP8() && !entryTemplateObjectStoreNameAdded && property.name == "EntryTemplateObjectStoreName") {
						entryTemplateObjectStoreNameAdded = true;
					}
					return entryTemplateIdAdded && (!this._layoutContentClass.repository._isP8() || entryTemplateObjectStoreNameAdded);
				}));
				if (!entryTemplateIdAdded && this.attributeDefinitionsById.EntryTemplateId) {
					properties.push({
						"name": this.attributeDefinitionsById.EntryTemplateId.id,
						"value": this.attributeDefinitionsById.EntryTemplateId.defaultValue,
						"dataType": this.attributeDefinitionsById.EntryTemplateId.dataType,
						"label": this.attributeDefinitionsById.EntryTemplateId.name
					});
				}
				if (this._layoutContentClass.repository._isP8() && !entryTemplateObjectStoreNameAdded && this.attributeDefinitionsById.EntryTemplateObjectStoreName) {
					properties.push({
						"name": this.attributeDefinitionsById.EntryTemplateObjectStoreName.id,
						"value": this.attributeDefinitionsById.EntryTemplateObjectStoreName.defaultValue,
						"dataType": this.attributeDefinitionsById.EntryTemplateObjectStoreName.dataType,
						"label": this.attributeDefinitionsById.EntryTemplateObjectStoreName.name
					});
				}
			}

			this.logExit("getPropertiesJSON");
			return properties;
		},

		resize: function(changeSize) {
			if (this._view) {
				this._view.resize();
			}
		},

		destroy: function() {
			this.clearRendering();
			if (this._applyParentFolderDependentChangesHandle) {
				this._applyParentFolderDependentChangesHandle.remove();
				delete this._applyParentFolderDependentChangesHandle;
			}
			if (this._factory) {
				if (lang.isFunction(this._factory.destroyRecursive)) {
					this._factory.destroyRecursive();
				} else if (lang.isFunction(this._factory.destroy)) {
					this._factory.destroy();
				}
				delete this._factory;
			}
			delete this.attributeDefinitions;
			delete this.attributeDefinitionsById;			
			this.inherited(arguments);
		},

		/**
		 * This event method is called after the properties have been rendered.
		 */
		onCompleteRendering: function() {
		},

		/**
		 * This event method is called after a properties rendering has been cleared.
		 */
		onClearedRendering: function() {
		},

		/**
		 * This event method is called before the attributes are rendered.
		 */
		onAttributesRendering: function(attributeDefinitions) {

		},

		/**
		 * This event method is called after a property value is changed. Records that a field was changed and calls the
		 * properties pane <code>onChange</code> event method.
		 * 
		 * @param evt
		 *            An event object.
		 */
		onPropertyChanged: function(evt) {
			this.fieldschanged = true;
			this.onChange(evt);
		},

		/**
		 * This event method is called after a change in the property pane.
		 */
		onChange: function() {
		}

	});
});

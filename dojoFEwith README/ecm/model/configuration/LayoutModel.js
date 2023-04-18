/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/json",
	"dojo/_base/lang",
	"../../LoggerMixin",
	"../AttributeDefinition",
	"../ContentClass",
	"./LayoutAttribute",
	"pvr/controller/utils/BindingUtil"
], function(declare, array, dojojson, lang, LoggerMixin, AttributeDefinition, ContentClass, LayoutAttribute, BindingUtil) {

	/**
	 * @name ecm.model.configuration.LayoutModel
	 * @class Provides extended methods that are used to handle content class attributes. <code>ContentClass</code>.
	 * @augments ecm.model.ContentClass
	 * @since 2.0.3
	 */
	return declare("ecm.model.configuration.LayoutModel", [
		ContentClass,
		LoggerMixin
	], {
		/** @lends ecm.model.configuration.LayoutModel.prototype */

		/**
		 * An instance of {@link ecm.model.EntryTemplate} for the entry template being used in this layout model object.
		 */
		entryTemplate: null,

		/**
		 * An instance of {@link ecm.pvr.controller.PropertyCollectionController}
		 */
		controller: null,

		/**
		 * An instance of {@link ecm.pvr.widget.View}
		 * 
		 * @since 2.0.3.6
		 */
		view: null,

		/**
		 * An text string used for the internal id of the property category bound into the layout editor
		 */
		modelBindingId: "Properties",

		/**
		 * Returns a <code>LayoutAttribute</code> for the attribute definition. All contents are cloned except for the
		 * content class, repository, and choice list. The content class, repository, and choice list references are
		 * copied.
		 * 
		 * @param attributeDefinition
		 *            A {@link ecm.model.AttributeDefinition} object to clone
		 * @returns {@link ecm.model.configuration.LayoutAttribute} object
		 */
		createLayoutAttribute: function(attributeDefinition) {
			// First create a minimal attribute definition.
			var layoutAttributeDefinition = new LayoutAttribute({
				id: attributeDefinition.id,
				name: attributeDefinition.name
			});
			// Then clone the contents.
			for ( var prop in attributeDefinition) {
				if (attributeDefinition.hasOwnProperty(prop)) {
					// Except for contentClass and repository (if set). Cloning contentClass enters a cycle because the
					// content class references this attribute definition.
					// We want a copy of the reference to the cached contentClass anyway.
					// Choice lists may be large, so share the reference to the choice list. Choice lists should be replaced, not modified.
					if (prop == "contentClass" || prop == "repository" || prop == "choiceList") {
						layoutAttributeDefinition[prop] = attributeDefinition[prop];
					} else {
						layoutAttributeDefinition[prop] = lang.clone(attributeDefinition[prop]);
					}
				}
			}
			return layoutAttributeDefinition;
		},

		/**
		 * Returns true if any attribute definition objects in this model (ContentClass) collection has a true value for
		 * its dependentsRetrievalPending property.
		 * 
		 * @return (boolean) true if any dependents retrieval is pending
		 */
		isDependentAttributesRetrievalPending: function() {
			var retrievalRequired = false;
			var attribute;
			for ( var i in this.attributeDefinitions) {
				attribute = this.attributeDefinitions[i];
				if (attribute.dependentsRetrievalPending) {
					retrievalRequired = true;
					break;
				}
			}
			return retrievalRequired;
		},

		/**
		 * Retrieves the dependent attributes when one or more attributes have a dependentsRetrievalPending value of
		 * true.
		 * 
		 * @param callback
		 *            function called when the request completes.
		 * @param alwaysRetrieve
		 *            If true, forces the retrieve even when there are no properties with dependent properties. This is
		 *            needed to support retrieving property changes when the parent folder is changed in the add dialog.
		 */
		retrieveDependentProperties: function(callback, alwaysRetrieve) {
			var attributes = {};

			var propertyControllers = this.controller.collections[this.modelBindingId].propertyControllers;
			for ( var i in propertyControllers) {
				var propertyController = propertyControllers[i];
				if ( this.view )
				{
					var properties = this.view.getProperty(this.modelBindingId, propertyController.id);
					if (properties && properties.length > 0) {
						if (properties[0].isValid()) {
							attributes[propertyController.id] = propertyController.get("value");
						} else {
							// The value is not valid.
							// Passing an invalid value might cause problems for the EDS service, like casting exceptions.
							// Instead, pass null for no value assigned.
							attributes[propertyController.id] = null;
						}
					}
				} else { // ...else designer
			         attributes[propertyController.id] = propertyController.get("value");
			    }
			}

			if (this.controller._layoutPropertiesPane) {
				this.controller._layoutPropertiesPane._setObjectId(attributes, this.controller._item);
			}

			var context = {};
			if (this.reason == "create") {
				context.action = "addItem";
				if (this.controller._layoutPropertiesPane && lang.isFunction(this.controller._layoutPropertiesPane.getParentFolder)) {
					var parentFolder = this.controller._layoutPropertiesPane.getParentFolder();
					if (parentFolder) {
						context.parentFolderId = parentFolder.id;
					}
				}
			} else {
				context.action = this.reason;
			}
			if (this.entryTemplate) {
				context.entryTemplateId = this.entryTemplate.id;
				context.entryTemplateName = this.entryTemplate.name;
				if (this.entryTemplate.repository._isP8()) {
					context.entryTemplateVsId = this.entryTemplate.vsId;
				} else if (this.entryTemplate.repository._isCM()) {
					context.entryTemplateItemId = this.entryTemplate.itemId;
				}
				// Always include the entry template properties.
				if (!attributes.hasOwnProperty("EntryTemplateId") && this.controller._layoutPropertiesPane && this.controller._layoutPropertiesPane.attributeDefinitionsById.EntryTemplateId && this.controller._layoutPropertiesPane.attributeDefinitionsById.EntryTemplateId.defaultValue) {
					attributes.EntryTemplateId = this.controller._layoutPropertiesPane.attributeDefinitionsById.EntryTemplateId.defaultValue;
				}
				if (this.entryTemplate.repository._isP8() && !attributes.hasOwnProperty("EntryTemplateObjectStoreName") && this.controller._layoutPropertiesPane && this.controller._layoutPropertiesPane.attributeDefinitionsById.EntryTemplateObjectStoreName && this.controller._layoutPropertiesPane.attributeDefinitionsById.EntryTemplateObjectStoreName.defaultValue) {
					attributes.EntryTemplateObjectStoreName = this.controller._layoutPropertiesPane.attributeDefinitionsById.EntryTemplateObjectStoreName.defaultValue;
				}
			}

			// Update the attribute definition default values from the field values.
			array.forEach(this.attributeDefinitions, function(attrDef) {
				if (attributes[attrDef.id] !== undefined) {
					attrDef.defaultValue = attributes[attrDef.id];
				}
			});

			var self = this;
			this.retrieveDependentAttrDefs({
				attributes: attributes,
				context: context,
				alwaysRetrieve: alwaysRetrieve,
				callback: function(newAttributeDefinitions, newChildCompDefs, newChildComponents) {

					self._updateDependentAttributes(newAttributeDefinitions, self.attributeDefinitions, context.action);

					// Clear the flag indicating a request to retrieve dependent attribute information is in process
					for ( var i in self.attributeDefinitions) {
						if (self.attributeDefinitions[i].dependentsRetrievalPending) {
							self.attributeDefinitions[i].dependentsRetrievalPending = false;
						}
					}

					// If the EDS call was triggered by focus directly leaving a widget for 
					// the save action, then retry the save action.
					if (self.controller._layoutPropertiesPane && self.controller._layoutPropertiesPane._retrySave) {
						// Allow time for property value changes to be applied.
						setTimeout(function() {
							// First check that another EDS call is not pending.
							// The property layout supports sending an EDS request as a result of applying changes
							// returned by a previous EDS request.
							if (!self.isDependentAttributesRetrievalPending()) {
								delete self.controller._layoutPropertiesPane._retrySave;
								if (lang.isFunction(self.controller._layoutPropertiesPane.onRetrySave)) {
									self.controller._layoutPropertiesPane.onRetrySave();
								}
							}
						}, 100);
					}
					
					if (callback) {
						callback(self);
					}
				},
				isBackgroundRequest: false,
				onError: function(response) {
					// Clear the flag indicating a request to retrieve dependent attribute information is in process
					for ( var i in self.attributeDefinitions) {
						if (self.attributeDefinitions[i].dependentsRetrievalPending) {
							self.attributeDefinitions[i].dependentsRetrievalPending = false;
						}
					}
					if (self.controller._layoutPropertiesPane) {
						delete self.controller._layoutPropertiesPane._retrySave;
					}
				}
			});
		},

		/**
		 * @private
		 */
		_updateDependentAttributes: function(newAttributeDefinitions, currentAttributeDefinitions, reason) {
			// For better performance, create a lookup by id on the new attribute definitions.
			var attrDefNdx;
			var newAttrDef;
			var newAttrDefsById = {};
			for (attrDefNdx in newAttributeDefinitions) {
				newAttrDef = newAttributeDefinitions[attrDefNdx];
				newAttrDefsById[newAttrDef.id] = newAttrDef;
			}

			var currentAttrDefsById = {};
			var classAttrDefsById = null; // Used only if necessary

			for (attrDefNdx in currentAttributeDefinitions) {
				var oldAttrDef = currentAttributeDefinitions[attrDefNdx];
				currentAttrDefsById[oldAttrDef.id] = oldAttrDef;
				var newAttrDef = newAttrDefsById[oldAttrDef.id];
				if (newAttrDef && newAttrDef.updated) {
					// If the choice list is set to "default" then use the original class choice list.
					// This needs to be handled here, before the multiEditProperties handling.
					if (newAttrDef.updatedChoiceList && newAttrDef.choiceList == "default") {
						newAttrDef.choiceList = null;
						if (oldAttrDef.contentClass) {
							// lazy load the contentClass attribute definitions hash table
							if (classAttrDefsById == null) {
								classAttrDefsById = {};
								array.forEach(oldAttrDef.contentClass.attributeDefinitions, lang.hitch(this, function(attrDef) {
									classAttrDefsById[attrDef.id] = attrDef;
								}));
							}
							var classAttr = classAttrDefsById[oldAttrDef.id];
							if (classAttr && classAttr.choiceList) {
								newAttrDef.choiceList = classAttr.choiceList;
							}
						}
					}

					this._mapAttributeSettings(oldAttrDef, newAttrDef, null, reason);
				}
			}

			// Add any new attribute definitions that were missing from the old attribute definitions.
			for ( var attrDefNdx in newAttributeDefinitions) {
				newAttrDef = newAttributeDefinitions[attrDefNdx];
				if (currentAttrDefsById[newAttrDef.id] === undefined) {
					// If this is the entry template builder, exclude attributes if they are system defined or set to hidden in the class definition.
					if (reason == "entryTemplateBuilder" && newAttrDef.system || (!newAttrDef.updatedHidden && newAttrDef.hidden)) {
						continue;
					}
					// If the choice list is set to "default" then use the original class choice list.
					if (newAttrDef.choiceList == "default") {
						newAttrDef.choiceList = null;
						if (newAttrDef.contentClass) {
							var classAttr = newAttrDef.contentClass.attributeDefinitionsById[newAttrDef.id];
							if (classAttr && classAttr.choiceList) {
								newAttrDef.choiceList = classAttr.choiceList;
							}
						}
					}
					if (!newAttrDef.system) {
						var layoutAttrDef = this.createLayoutAttribute(newAttrDef);
						currentAttributeDefinitions.push(layoutAttrDef);
						currentAttrDefsById[newAttrDef.id] = layoutAttrDef;
					}
				}
			}
		},
		
		/**
		 * @private
		 * Converts a string value for a non-string type to the non-string type.
		 */
		_normalizeValue: function(dataType, value) {
			// If the value is type string... 
			if (typeof value === "string") {
				// If needed, convert the string value to the correct value type.
				
				// As per ecm/model/configuration/ModelIntegration.js, the ICN type "xs:long" is mapped 
				// to "integer". If the property layout uses the Javascript 64-bit floating point numeric 
				// type to store "integer" values, then the property layout cannot support the full range 
				// of a 64-bit long.
				var parsedValue;
				if (dataType == "xs:short" || dataType == "xs:integer" || dataType == "xs:long") {
					try {
						if (value == "") {
							value = null;
						} else {
							parsedValue = parseInt(value);
							if (!isNaN(parsedValue)) {
								value = parsedValue;
							}
						}
					} catch (e) {
						// An invalid value is not changed, it will be passed as is to the property layout to handle.
					}
				} else if (dataType == "xs:double" || dataType == "xs:decimal") {
					try {
						if (value == "") {
							value = null;
						} else {
							parsedValue = parseFloat(value);
							if (!isNaN(parsedValue)) {
								value = parsedValue;
							}
						}
					} catch (e) {
						// An invalid value is not changed, it will be passed as is to the property layout to handle.
					}
				} else if (dataType == "xs:boolean") {
					if (!value) {
						value = null;
					} else if (value.toLowerCase() == "true") {
						value = true;
					} else if (value.toLowerCase() == "false") {
						value = false;
					} // ...else an invalid value is not changed, it will be passed as is to the property layout to handle.
				}
			}
			return value;
		},

		/**
		 * @private
		 */
		_mapAttributeSettings: function(oldAttrDef, newAttrDef, defaultChoiceList, reason) {
			this.logEntry("_mapAttributeSettings");
			if (newAttrDef.updatedLabel) {
				oldAttrDef.name = newAttrDef.label;
				oldAttrDef.label = newAttrDef.label;
				oldAttrDef.onLabelChanged(oldAttrDef.label);
			}
			if (newAttrDef.updatedDefaultValue) {
				oldAttrDef.defaultValue = this._normalizeValue(oldAttrDef.dataType, newAttrDef.defaultValue);
			}
			if (newAttrDef.updatedValue) {
				oldAttrDef.value = this._normalizeValue(oldAttrDef.dataType, newAttrDef.value);
				oldAttrDef.valueTimeZoneOffset = newAttrDef.valueTimeZoneOffset;
				oldAttrDef.onValueChanged(oldAttrDef.value);
			}
			if (newAttrDef.updatedReadOnly) {
				oldAttrDef.readOnly = newAttrDef.readOnly;
				oldAttrDef.onReadOnlyChanged(oldAttrDef.readOnly);
			}
			if (newAttrDef.updatedRequired) {
				oldAttrDef.required = newAttrDef.required;
				oldAttrDef.onRequiredChanged(oldAttrDef.required);
			}
			if (newAttrDef.updatedHidden) {
				oldAttrDef.hidden = newAttrDef.hidden;
				oldAttrDef.onHiddenChanged(oldAttrDef.hidden);
			}
			if (newAttrDef.updatedMinValue) {
				oldAttrDef.minValue = this._normalizeValue(oldAttrDef.dataType, newAttrDef.minValue);
				oldAttrDef.onMinValueChanged(oldAttrDef.minValue);
			}
			if (newAttrDef.minValueTimeZoneOffset) {
				oldAttrDef.minValueTimeZoneOffset = newAttrDef.minValueTimeZoneOffset;
			}
			if (newAttrDef.updatedMaxValue) {
				oldAttrDef.maxValue = this._normalizeValue(oldAttrDef.dataType, newAttrDef.maxValue);
				oldAttrDef.onMaxValueChanged(oldAttrDef.maxValue);
			}
			if (newAttrDef.maxValueTimeZoneOffset) {
				oldAttrDef.maxValueTimeZoneOffset = newAttrDef.maxValueTimeZoneOffset;
			}
			if (newAttrDef.updatedMinEntry) {
				oldAttrDef.minLength = newAttrDef.minEntry;
				oldAttrDef.onMinLengthChanged(oldAttrDef.minLength);
			}
			if (newAttrDef.updatedMaxEntry) {
				oldAttrDef.maxLength = newAttrDef.maxEntry;
				oldAttrDef.onMaxLengthChanged(oldAttrDef.maxLength);
			}
			if (newAttrDef.updatedFormat) {
				oldAttrDef.format = newAttrDef.format;
			}
			if (newAttrDef.updatedFormatDescription) {
				oldAttrDef.formatDescription = newAttrDef.formatDescription;
			}
			if (newAttrDef.updatedChoiceList) {
				// Remember the old choice list.
				var oldChoiceList = oldAttrDef.choiceList;

				// If a value was provided for defaultChoiceList, keep the default choice list defined by the class if the EDS choice list value matches defaultChoiceList.
				if (defaultChoiceList == null || defaultChoiceList != newAttrDef.choiceList) {
					oldAttrDef.choiceList = newAttrDef.choiceList; // Pass over new choice list from EDS dependent value retrieval
					oldAttrDef.onChoiceListChanged(oldAttrDef.choiceList);
					// Need to tell EDS processing code that there is a new choice list to load from Layout Editor default value change
					oldAttrDef.updatedChoiceList = true;
				}

				// Clear values if the choice list was removed or any of the values aren't in the new choice list
				if ((oldChoiceList && !oldAttrDef.choiceList) || !AttributeDefinition.allValuesInChoiceList(oldAttrDef.choiceList, oldAttrDef.value)) {
					oldAttrDef.value = AttributeDefinition.isArray(oldAttrDef.value) ? [] : null;
					oldAttrDef.onValueChanged(oldAttrDef.value);
				}
			}
			if (newAttrDef.updatedHasDependentAttributes) {
				oldAttrDef.hasDependentAttributes = newAttrDef.hasDependentAttributes;
				oldAttrDef.onHasDependentAttributesChanged(oldAttrDef.hasDependentAttributes);
			}
			oldAttrDef.validChoiceList = undefined;

			this.logExit("_mapAttributeSettings");
		},

		/**
		 * Helper function to return the attribute id updated with the model binding id.
		 * 
		 * @returns string updated id.
		 */
		getBindingAttributeId: function(id) {
			// Use the binding util incase either of the id's have a '.' character which will then get encoded
			return BindingUtil.createBinding(this.modelBindingId, id);
		}
	});

});

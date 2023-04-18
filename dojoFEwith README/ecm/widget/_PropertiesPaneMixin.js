/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"../LoggerMixin",
	"../Messages",
	"../model/AttributeDefinition",
	"../model/ContentClass",
	"../model/EntryTemplate"
],

function(declare, lang, array, connect, LoggerMixin, Messages, AttributeDefinition, ContentClass, EntryTemplate) {

	/**
	 * @name ecm.widget._PropertiesPaneMixin
	 * @class Provides a base class that contains methods for working with property attributes to be rendered.
	 * @public
	 * @since 2.0.3
	 */
	return declare("ecm.widget._PropertiesPaneMixin", [], {
		/** @lends ecm.widget._PropertiesPaneMixin.prototype */

		repository: null,

		attributeDefinitions: null,

		/**
		 * Assigns the repository for the common properties pane.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 */
		setRepository: function(repository) {
			this.repository = repository;
		},

		/**
		 * @private
		 */
		_applyEntryTemplateAttributes: function(repository, attributeDefs, attributeDefsById, entryTemplate, reason) {
			this.logEntry("_applyEntryTemplateAttributes");
			if (!entryTemplate) {
				return attributeDefs;
			}

			var propsOptions = entryTemplate.propertiesOptions;
			if (!propsOptions) {
				return attributeDefs;
			}

			var entryTemplateAttrDefs = [];
			var entryTemplateAttrDefsById = {};
			var propOptions;
			var defaultValue;
			var attrDef;

			// Apply the entry template attribute order and values.
			for ( var propOptionsNdx in propsOptions) {
				propOptions = propsOptions[propOptionsNdx];

				// Get the full attribute definition for the entry template attribute.
				attrDef = attributeDefsById[propOptions.id];

				// The entry template attribute may no longer exist in the class or have out of date characteristics.
				// If the attribute is not found or the data type does not match then ignore this entry template attribute.
				if (!attrDef || (attrDef.dataType != propOptions.dataType)) {
					continue;
				}

				if (reason && (reason == "create" || reason == "entryTemplateBuilder")) {
					// If the entry template defines a new default value, use it.
					defaultValue = propOptions.defaultValue;

					// The special tag "{FILENAME}" may be used to indicate that the filename should be used for the value of
					// the title property. ICN will use the filename as a default value for the title if the title value is blank,
					// so drop the special "{FILENAME}" tag value. 
					if (repository._isP8() && propOptions.id == "DocumentTitle" && defaultValue == "{FILENAME}") {
						defaultValue = [];
					}

					// TODO: Need to find out why were restricting the default value mapping in the ET to values
					// that are none null and non empty string? This code was breaking boolean default values.
					// Have opened it up to set all default values.
					// The null value in entry template should not override the default value of class, it is to comply with WorkplactXT
					if (defaultValue != null && defaultValue.length != 0) {
						attrDef.defaultValue = defaultValue;
					}
				}

				// Apply the entry template hidden option if it is true.
				// The entry template option does not turn off hidden if the class enables hidden.
				if (propOptions.hidden) {
					attrDef.hidden = true;
					attrDef.updatedHidden = true;
				}

				// Apply the entry template read only option if it is true.
				// The entry template option does not turn off read only if the class enables read only.
				if (propOptions.readOnly) {
					attrDef.readOnly = true;
					attrDef.updatedReadOnly = true;
				}

				// Apply the template required option if it is true.
				// The entry template option does not turn off required if the class enables required.
				if (propOptions.required) {
					attrDef.required = true;
					attrDef.updatedRequired = true;
				}

				// If the entry template defines a new required class for the property, use it.
				var requiredClass = propOptions.requiredClass;
				if (requiredClass) {
					attrDef.requiredClass = requiredClass;
				}

				entryTemplateAttrDefs.push(attrDef);
				entryTemplateAttrDefsById[attrDef.id] = attrDef;
			}

			// Now append any attribute definitions that were missing from the template.
			for ( var attrDefNdx in attributeDefs) {
				attrDef = attributeDefs[attrDefNdx];
				if (!entryTemplateAttrDefsById[attrDef.id]) {
					entryTemplateAttrDefs.push(attrDef);
					entryTemplateAttrDefsById[attrDef.id] = attrDef;
				}
			}

			if (entryTemplate && (entryTemplate.type == EntryTemplate.TYPE.DOCUMENT || entryTemplate.type == EntryTemplate.TYPE.FOLDER)) {
				attrDef = entryTemplateAttrDefsById["EntryTemplateObjectStoreName"];
				if (attrDef) {
					// Set the entry template OS GUID.
					attrDef.defaultValue = [
						entryTemplate.id.split(",", 2)[1]
					];
				}
				attrDef = entryTemplateAttrDefsById["EntryTemplateId"];
				if (attrDef) {
					if (attrDef.repositoryType == "p8") {
						// Set the entry template item GUID.
						attrDef.defaultValue = [
							entryTemplate.id.split(",")[2]
						];
					} else if (attrDef.repositoryType == "cm") {
						// Set the entry template ITEMID.
						attrDef.defaultValue = [
							entryTemplate.itemId
						];
					}
				}
			}

			this.logExit("_applyEntryTemplateAttributes");
			return entryTemplateAttrDefs;
		},

		/**
		 * @private
		 */
		_applyItemAttributeValues: function(attrDefs, item, entryTemplate) {
			this.logEntry("_applyItemAttributeValues");
			if (!item) {
				return;
			}

			var itemAttrs = item.attributes;
			var attrDef;
			var itemValue;
			var defaultValue;

			for ( var attrDefNdx in attrDefs) {
				attrDef = attrDefs[attrDefNdx];

				if (entryTemplate && (attrDef.id == "EntryTemplateObjectStoreName")) {
					// Update the entry template OS GUID.
					defaultValue = [
						entryTemplate.id.split(",", 2)[1]
					];
				} else if (entryTemplate && (attrDef.id == "EntryTemplateId")) {
					if (attrDef.repositoryType == "p8") {
						// Update the entry template item GUID.
						defaultValue = [
							entryTemplate.id.split(",")[2]
						];
					} else if (attrDef.repositoryType == "cm") {
						// Update the entry template ITEMID.
						defaultValue = [
							entryTemplate.itemId
						];
					}
				} else {
					defaultValue = itemAttrs[attrDef.id];

					// If the attribute is not found on the item, or has no value and a value is required...
					if (typeof defaultValue === "undefined" || (attrDef.required && AttributeDefinition.isValueEmpty(defaultValue))) {
						// Use the attribute definition default value.
						defaultValue = attrDef.defaultValue;
					}

					// Ensure that the attribute default value is an array.
					if (attrDef.cardinality == "LIST") {
						defaultValue = this._getDefaultValueInArray(defaultValue);
					}
				}
				attrDef.defaultValue = defaultValue;
			}
			this.logExit("_applyItemAttributeValues");
		},

		_getDefaultValueInArray: function(defaultValue) {
			if (defaultValue == null) {
				defaultValue = [];
			} else if (!(defaultValue instanceof Array || (defaultValue.propertyIsEnumerable('length') && (typeof defaultValue === 'object') && (typeof defaultValue.length === 'number')))) {
				defaultValue = [
					defaultValue
				];
			}
			return defaultValue;
		},

		/**
		 * @private
		 */
		_applySourceItemAttributeValues: function(attrDefs, contentClass) {
			this.logEntry("_applySourceItemAttributeValues");
			if (!this._sourceItem)
				return;

			var sourceAttrDefs = this._sourceItem.getContentClass().attributeDefinitionsById;
			array.forEach(attrDefs, lang.hitch(this, function(attrDef) {
				if (!this._sourceItem.hasAttribute(attrDef.id) || attrDef.id == this._titlePropertyName || attrDef.id == "EntryTemplateObjectStoreName" || attrDef.id == "EntryTemplateId")
					return;

				var defaultValue = this._sourceItem.attributes[attrDef.id];
				if (attrDef.required && AttributeDefinition.isValueEmpty(defaultValue)) {
					defaultValue = attrDef.defaultValue;
				} else if (this._sourceItem.template != contentClass.id && attrDef.choiceList) {
					var sourceAttrDef = sourceAttrDefs[attrDef.id];
					if (attrDef.cardinality == "LIST")
						defaultValue = this._getDefaultValueInArray(defaultValue);
					if (!AttributeDefinition.allValuesInChoiceList(attrDef.choiceList, defaultValue)) {
						defaultValue = attrDef.defaultValue;
					} else if (sourceAttrDef.choiceList) {
						var names = AttributeDefinition.retrieveDisplayNamesInChoiceList(sourceAttrDef.choiceList, defaultValue);
						if (!AttributeDefinition.allValuesAndDisplayNamesInChoiceList(attrDef.choiceList, defaultValue, names))
							defaultValue = attrDef.defaultValue;
					}
				}
				if (attrDef.cardinality == "LIST")
					defaultValue = this._getDefaultValueInArray(defaultValue);
				attrDef.defaultValue = defaultValue;
			}));
			this.logExit("_applySourceItemAttributeValues");
		},

		/**
		 * @private
		 */
		_applyDependentAttributeValues: function(attrDefs, attrDefsById, dependentAttributeDefs, entryTemplate, reason) {
			this.logEntry("_applyDependentAttributeValues");
			// Apply the dependent attribute changes
			for (var i = 0; i < dependentAttributeDefs.length; i++) {
				var newAttrDef = dependentAttributeDefs[i];
				var oldAttrDef = attrDefsById[newAttrDef.id];
				if (oldAttrDef) {
					if (newAttrDef && newAttrDef.updated) {
						// mix the updated attribute def into the new one to obtain the updates
						// Note: The flags tested avoid overriding properties that did not change
						this._mapAttributeSettings(oldAttrDef, newAttrDef, "default", reason, entryTemplate);
					}
				} else if (newAttrDef) {
					// If this is the entry template builder, exclude attributes if they are system defined or set to hidden in the class definition.
					if ((reason && reason == "entryTemplateBuilder") && newAttrDef.system || (!newAttrDef.updatedHidden && newAttrDef.hidden)) {
						continue;
					}
					// Add the attribute back into the displayed list, most likely EDS service updated the hidden state
					newAttrDef.validChoiceList = undefined;
					attrDefs.push(newAttrDef);
					attrDefsById[newAttrDef.id] = newAttrDef;

					// The "updated" information from the newAttrDef is not getting back into the cloned contenClass in entry template builder mode
					if (reason && reason == "entryTemplateBuilder" && newAttrDef.updatedHidden) {
						var contentClass = attrDefs[0].contentClass; // grab content class from first attribute
						for (var j = 0; j < contentClass.attributeDefinitions.length; j++) {
							var attributeDefinition = contentClass.attributeDefinitions[j];
							if (attributeDefinition.id == newAttrDef.id) {
								this._mapAttributeSettings(attributeDefinition, newAttrDef, "default", reason, entryTemplate);
								break;
							}
						}
					}
				}
			}
			this.logExit("_applyDependentAttributeValues");
		},

		/**
		 * @private
		 */
		_mapAttributeSettings: function(oldAttrDef, newAttrDef, defaultChoiceList, reason, entryTemplate) {
			this.logEntry("_mapAttributeSettings");
			this.logDebug("_mapAttributeSettings", "Attribute id: " + oldAttrDef.id);
			if (newAttrDef.updatedLabel) {
				oldAttrDef.name = newAttrDef.label;
				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedLabel = newAttrDef.updatedLabel;
			}
			if (newAttrDef.updatedDefaultValue) {
				oldAttrDef.defaultValue = newAttrDef.defaultValue;
				oldAttrDef.valueTimeZoneOffset = newAttrDef.valueTimeZoneOffset;
				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedDefaultValue = newAttrDef.updatedDefaultValue;
			}
			if (newAttrDef.updatedReadOnly) {
				oldAttrDef.readOnly = newAttrDef.readOnly;
				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedReadOnly = newAttrDef.updatedReadOnly;
			}
			if (newAttrDef.updatedRequired) {
				oldAttrDef.required = newAttrDef.required;
				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedRequired = newAttrDef.updatedRequired;
			}
			if (newAttrDef.updatedHidden) {
				oldAttrDef.hidden = newAttrDef.hidden;
				if (reason == "entryTemplateBuilder") {
					oldAttrDef.updatedHidden = true; // Pass updated flag over so Layout Editor can use it
				}
				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedHidden = newAttrDef.updatedHidden;

			}
			if (newAttrDef.updatedMinValue) {
				oldAttrDef.minValue = newAttrDef.minValue;
				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedMinValue = newAttrDef.updatedMinValue;
			}
			if (newAttrDef.minValueTimeZoneOffset) {
				oldAttrDef.minValueTimeZoneOffset = newAttrDef.minValueTimeZoneOffset;
			}
			if (newAttrDef.updatedMaxValue) {
				oldAttrDef.maxValue = newAttrDef.maxValue;
				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedMaxValue = newAttrDef.updatedMaxValue;
			}
			if (newAttrDef.maxValueTimeZoneOffset) {
				oldAttrDef.maxValueTimeZoneOffset = newAttrDef.maxValueTimeZoneOffset;
			}
			if (newAttrDef.updatedMinEntry) {
				oldAttrDef.minLength = newAttrDef.minEntry;
			}
			if (newAttrDef.updatedMaxEntry) {
				oldAttrDef.maxLength = newAttrDef.maxEntry;
			}
			if (newAttrDef.updatedFormat) {
				oldAttrDef.format = newAttrDef.format;
				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedFormat = newAttrDef.updatedFormat;
			}
			if (newAttrDef.updatedFormatDescription) {
				oldAttrDef.formatDescription = newAttrDef.formatDescription;
				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedFormatDescription = newAttrDef.updatedFormatDescription;
			}
			if (newAttrDef.updatedChoiceList) {
				// Remember the old choice list.
				var oldChoiceList = oldAttrDef.choiceList;

				// If a value was provided for defaultChoiceList, keep the default choice list defined by the class if the EDS choice list value matches defaultChoiceList.
				if (defaultChoiceList == null || defaultChoiceList != newAttrDef.choiceList) {
					oldAttrDef.choiceList = newAttrDef.choiceList;
				}

				// Clear values if the choice list was removed and the default value wasn't updated, or if any of the values aren't in the current choice list
				if (!AttributeDefinition.isValueEmpty(oldAttrDef.defaultValue)
						&& ((oldChoiceList && !oldAttrDef.choiceList && !newAttrDef.updatedDefaultValue)
								|| !AttributeDefinition.allValuesInChoiceList(oldAttrDef.choiceList, oldAttrDef.defaultValue))) {
					oldAttrDef.defaultValue = AttributeDefinition.isArray(oldAttrDef.defaultValue) ? [] : null;
				}

				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedChoiceList = newAttrDef.updatedChoiceList;
			}
			if (newAttrDef.updatedHasDependentAttributes) {
				oldAttrDef.hasDependentAttributes = newAttrDef.hasDependentAttributes;
				if (newAttrDef.repositoryType == "od")
					oldAttrDef.updatedHasDependentAttributes = newAttrDef.updatedHasDependentAttributes;
			}

			oldAttrDef.updated = newAttrDef.updated;

			oldAttrDef.validChoiceList = undefined;

			this.logExit("_mapAttributeSettings");
		},

		/**
		 * Clears the current property rendering.
		 */
		clearRendering: function() {
		},

		/**
		 * Sets the parent folder when this properties pane is used to add a new item.
		 * 
		 * @param parentFolder
		 *            The parent folder {@link ecm.model.ContentItem} object for the new item. When provided, the parent
		 *            folder Id will be included in calls to EDS.
		 * @since 2.0.3.6
		 */
		setParentFolder: function(parentFolder) {
			if (parentFolder != this._parentFolder && (parentFolder == null || this._parentFolder == null || parentFolder.id != this._parentFolder.id)) {
				this._parentFolder = parentFolder;
				this.onParentFolderChanged(this._parentFolder);
			}
		},

		/**
		 * This event is triggered when the parent folder for a new item is changed.
		 * 
		 * @param parentFolder
		 *            The parent folder {@link ecm.model.ContentItem} object for the new item. When provided, the parent
		 *            folder Id will be included in calls to EDS.
		 * @since 2.0.3.6
		 */
		onParentFolderChanged: function(parentFolder) {
		},

		/**
		 * Returns the parent folder when this properties pane is used to add a new item.
		 * 
		 * @returns parentFolder Returns the parent folder {@link ecm.model.ContentItem} object for the new item. The
		 *          parent folder is set by the container of this properties pane. If no parent folder has been set null
		 *          is returned.
		 * @since 2.0.3.6
		 */
		getParentFolder: function() {
			return this._parentFolder || null;
		},

		/**
		 * @private
		 */
		_setObjectId: function(attrValues, item) {
			if (item && item.repository) {
				if (item.repository._isCM()) {
					attrValues.itemID = item.itemId;
				} else {
					attrValues.Id = item.id;
				}
			}
		},

		/**
		 * Creates the initial rendering of attributes and child components based on the content class, entry template
		 * settings, existing item attribute values, and EDS changes.
		 * 
		 * @param contentClass
		 *            The {@link ecm.model.ContentClass} or {@link ecm.model.MetadataTemplate} object that provides the attribute definitions. This is
		 *            required.
		 * @param entryTemplate
		 *            An optional {@link ecm.model.EntryTemplate} object. If provided, the entry template attribute
		 *            settings are applied.
		 * @param item
		 *            An optional {@link ecm.model.ContentItem} object. If provided, the content item attribute values
		 *            are applied.
		 * @param reason
		 *            The reason for displaying properties. Pass <code>"create"</code> when creating a new content
		 *            item, <code>"checkin"</code> when checking in a content item, <code>"editProperties"</code>
		 *            when editing the properties of a content item, <code>"multiEditProperties"</code> when editing
		 *            the properties of multiple content items, or <code>entryTemplateBuilder</code> when displaying
		 *            the properties in the entry template builder.
		 * @param isReadOnly
		 *            Pass <code>true</code> if the entire item is read only.
		 * @param showHidden
		 *            Pass <code>true</code> to display hidden properties.
		 * @param callback
		 *            An optional callback that is called after the rendering completes. The attribute definitions that
		 *            were used to render the attributes are passed to the callback. The attribute definitions are a
		 *            copy of the content class attribute definitions that were modified by the entry template settings,
		 *            existing item attribute values, and EDS changes.
		 * @param onError
		 *            A callback function called if there is an error.
		 * @since 2.0.3
		 */
		createRendering: function(contentClass, entryTemplate, item, reason, isReadOnly, showHidden, callback, onError) {
			this.logEntry("createRendering");
			this.clearRendering();

			this._itemIsReadOnly = isReadOnly;
			this._showHiddenProperties = showHidden;

			contentClass.retrieveAttributeDefinitions(lang.hitch(this, function(attributeDefinitions, childComponentDefinitions) {
				// Create a copy of the attribute definitions so that we don't modify the class attribute definitions.
				var attrDefs = [];
				var attrDefsById = {};
				var attrDef;
				for ( var attrDefNdx in attributeDefinitions) {
					attrDef = attributeDefinitions[attrDefNdx];
					// If this is the entry template builder, remove attributes if they are system defined or set to hidden in the class definition.
					if (reason == "entryTemplateBuilder" || reason == "entryTemplateBuilderSaveLayout") {
						if (attrDef.system) {
							continue;
						} else if (!attrDef.updatedHidden && attrDef.hidden) {
							// These attributes would be defined as hidden by the repository definitions (and not EDS at this point)
							continue;
						}
						// Don't clone the attributes when running in the entry template builder mode.
					} else {
						// Clone the attribute definition. The content class reference is copied.
						attrDef = attrDef.clone();
						// If read only is not set in the class attribute definition, but is set on the item attribute, then enable read only for the attrDef copy.
						if (!attrDef.readOnly && item && item.attributeReadOnly && item.attributeReadOnly[attrDef.id]) {
							attrDef.readOnly = true;
						}
					}
					attrDefs.push(attrDef);
					// Also create a map by attribute id for faster lookup.
					attrDefsById[attrDef.id] = attrDef;
				}

				// Create a copy of the child component definitions so that we don't modify the class child component definitions.
				var childCompDefs;
				var childCompDefsById;
				if (childComponentDefinitions) {
					childCompDefs = [];
					childCompDefsById = {};
					for ( var i in childComponentDefinitions) {
						var childCompDef = childComponentDefinitions[i].clone();
						childCompDefs.push(childCompDef);
						childCompDefsById[childCompDef.id] = childCompDef;
					}
				}

				if (entryTemplate) {
					// Apply the entry template settings.
					attrDefs = this._applyEntryTemplateAttributes(contentClass.repository, attrDefs, attrDefsById, entryTemplate, reason);
				}

				// In order for EDS to have a chance to change attribute definitions, call retrieveDependentAttrDefs
				// with the current values of the item and update the current attribute definitions with the info returned
				this._applySourceItemAttributeValues(attrDefs, contentClass);
				this._applyItemAttributeValues(attrDefs, item, entryTemplate);

				if (reason == "entryTemplateBuilderSaveLayout") {
					// Don't try to get the dependent properties again when saving changes from Layout Editor and just need to render
					// the common properties table as is
					this.renderAttributes(attrDefs, item, reason, this._itemIsReadOnly, {
						entryTemplate: entryTemplate
					});
					if (callback) {
						callback(attrDefs);
					}
				} else {
					// Create an attribute values object from the attribute definition default values.
					var attrValues = {};
					array.forEach(attrDefs, function(attrDef, index) {
						// Empty or single values should not be in an array.
						var value = attrDef.defaultValue;
						if (value && ((lang.isArray(value) || (!value.propertyIsEnumerable('length') && (typeof value === 'object') && (typeof value.length === 'number'))) && (value.length < 2))) {
							attrValues[attrDef.id] = (value.length == 1) ? value[0] : "";
						} else {
							attrValues[attrDef.id] = value;
						}
					});

					this._setObjectId(attrValues, item);

					var alwaysRetrieve = false;

					var context = {};
					if (reason == "create") {
						context.action = "addItem";
						// Force the dependent attributes retrieve for this initial startup request,
						// so that EDS is always called to apply changes based on the selected folder.
						alwaysRetrieve = contentClass.edsIsEnabled;
						var parentFolder = this.getParentFolder();
						if (parentFolder) {
							context.parentFolderId = parentFolder.id;
						}
					} else if (reason == "editParameters") {
						context.action = "workflow";
					} else {
						context.action = reason;
					}
					if (entryTemplate) {
						context.entryTemplateId = entryTemplate.id;
						context.entryTemplateName = entryTemplate.name;
						if (entryTemplate.repository._isP8()) {
							context.entryTemplateVsId = entryTemplate.vsId;
						} else if (entryTemplate.repository._isCM()) {
							context.entryTemplateItemId = entryTemplate.itemId;
						}
					}

					// Retrieve the dependent attribute definitions. 
					contentClass.retrieveDependentAttrDefs({
						attributes: attrValues,
						context: context,
						alwaysRetrieve: alwaysRetrieve,
						callback: lang.hitch(this, function(dependentAttributeDefs, dependentChildComponentDefs, dependentChildComponents) {
							// Apply the dependent attribute changes
							this._applyDependentAttributeValues(attrDefs, attrDefsById, dependentAttributeDefs, entryTemplate, reason);

							this.renderAttributes(attrDefs, item, reason, this._itemIsReadOnly, {
								entryTemplate: entryTemplate
							});

							if (childCompDefs) {
								if (dependentChildComponentDefs) {
									var depChildCompDef;
									for ( var i in dependentChildComponentDefs) {
										depChildCompDef = dependentChildComponentDefs[i];
										childCompDef = childCompDefsById[depChildCompDef.id];
										if (childCompDef) {
											this._applyDependentAttributeValues(childCompDef.attributeDefinitions, childCompDef.attributeDefinitionsById, depChildCompDef.attributeDefinitions, entryTemplate, reason);
										}
									}
								}
								this.renderChildComponents(childCompDefs, item || this._sourceItem);
							}
							
							if (contentClass.isInstanceOf(ContentClass), contentClass.repository._isBox() && (contentClass.id == "file" || contentClass.id == "folder")){
								this.renderTemplateMetadata(item, this._itemIsReadOnly, reason);
							}

							if (callback) {
								callback(attrDefs);
							}
						}),
						onError: onError
					});
				}
			}), false, onError);
			this.logExit("createRendering");
		},
		
		/**
		 * Renders template metadata.
		 * 
		 * @param item
		 *            A {@link ecm.model.ContentItem} object.
		 * @param isReadOnly
		 *            Indicates whether the template metadata is read-only.
		 * @reason
		 *            The reason for displaying the template metadata. Pass <code>"create"</code> when creating a new content
		 *            item, <code>"checkin"</code> when checking in a content item, <code>"editProperties"</code>
		 *            when editing the properties of a content item.
		 * @since 3.0
		 */
		renderTemplateMetadata: function(item, isReadOnly, reason) {
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
		 *            A object containing additional parameters and objects for the properties pane. (@since 2.0.3)
		 */
		renderAttributes: function(attributeDefinitions, item, reason, isReadOnly, params) {
		},

		/**
		 * Renders the child components.
		 * 
		 * @param childCompDefinitions
		 *            An array of {@link ecm.model.ChildComponentDefinition} objects.
		 * @param item
		 *            The {@link ecm.model.ContentItem}.
		 * @param isReadOnly
		 *            A value of <code>true</code> if the entire item should be treated as read only.
		 * @param newChildComponents
		 *            An array of {@link ecm.model.ChildComponent} objects for the item.
		 */
		renderChildComponents: function(childCompDefinitions, item, isReadOnly, newChildComponents, reason) {
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
		 * @return Returns <code>null</code> if all checked property fields contain valid values. Otherwise, returns
		 *         the first property field widget that contains an invalid value.
		 */
		validateAll: function(onEditStatus, onSaveStatus) {
			return null;
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
		},

		/**
		 * Places focus in the property field identified by <code>fieldName</code>, if found. This is typically used
		 * to set the focus on a field that has an invalid value.
		 * 
		 * @param fieldName
		 *            The property Id string.
		 */
		setFieldFocus: function(fieldName) {
		},

		/**
		 * Retrieves the properties pane property fields.
		 * 
		 * @return An array of field widgets.
		 */
		getFields: function() {
			return null;
		},

		/**
		 * Retrieves the field widget for the property named <code>fieldName</code>.
		 * 
		 * @param fieldName
		 *            The string Id of the property.
		 * @return The field widget for the property. The value <code>null</code> is returned if the property field is
		 *         not found.
		 */
		getFieldWithName: function(fieldName) {
			return null;
		},

		/**
		 * Returns whether the field widget for the property named <code>fieldName</code> is displayed (not hidden).
		 * 
		 * @param fieldName
		 *            The string Id of the property.
		 * @return True if the field is displayed in the property table.
		 */
		isFieldDisplayed: function(fieldName) {
			return null;
		},

		/**
		 * Retrieves the field widget for the property identified by one of the property Id strings in
		 * <code>fieldNames</code>. Each property Id string in the array is checked against the property fields,
		 * starting with the first property Id string, until a matching property field is found.
		 * 
		 * @param fieldNames
		 *            An array of property Id strings.
		 * @return The first matching field widget is returned. The value <code>null</code> is returned if no matching
		 *         property field is found for any of the string Ids.
		 */
		getFieldWithEitherName: function(fieldNames) {
			return null;
		},

		/**
		 * Retrieves the property Id string for the first property field that contains text values.
		 * 
		 * @return A property Id string.
		 */
		getFirstTextPropertyName: function() {
			return null;
		},

		/**
		 * Retrieves the first property field widget that has an invalid value.
		 * 
		 * @return A property field widget.
		 */
		getFirstInvalidField: function() {
			return null;
		},

		/**
		 * Returns the name of the field that has focus.
		 * 
		 * @return The property Id string.
		 */
		getFocusedFieldName: function() {
			return null;
		},

		/**
		 * Retrieves the array of child component values.
		 * 
		 * @return An array of child component values. Each entry contains the set of values for the corresponding child
		 *         component, in order.
		 */
		getChildComponentValues: function() {
			return [];
		},

		/**
		 * Enables or disables each data type <code>"xs:reference"</code> property field if it is not read only.
		 * 
		 * @param disableField
		 *            A boolean value. If a property field is not read only and contains data type
		 *            <code>"xs:reference"</code>, then the property field is disabled if <code>disableField</code>
		 *            is <code>true</code> or enabled if <code>disableField</code> is <code>false</code>. If the
		 *            field is read only or is not for data type <code>"xs:reference"</code> then no change is made to
		 *            the field.
		 */
		setDisabledNavigation: function(disableField) {
		},

		/**
		 * Retrieves the value for the property field identified by <code>fieldName</code>.
		 * 
		 * @param fieldName
		 *            The property Id string.
		 * @return The value for the property field.
		 */
		getPropertyValue: function(fieldName) {
			return null;
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
			return false;
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
			return null;
		},

		/**
		 * @private
		 */
		_getHiddenPropertiesJSON: function(properties, attributeDefinitions, excludeEmptyValues) {
			this.logEntry("_getHiddenPropertiesJSON");
			for ( var attrDefNdx in attributeDefinitions) {
				var attrDef = attributeDefinitions[attrDefNdx];
				// Don't add the property value if it is not hidden, or if it is system defined.  
				if (!attrDef.hidden || attrDef.system) {
					continue;
				}

				// Don't add the property if it is already present in the properties JSON.
				if (properties.some(function(property) {
					return attrDef.id == property.name;
				})) {
					continue;
				}

				// Don't add the property if excluding empty values and the value is empty.  
				if (excludeEmptyValues && AttributeDefinition.isValueEmpty(attrDef.defaultValue)) {
					continue;
				}

				// Empty or single values should not be in an array.
				var value = attrDef.defaultValue;
				if (value && ((lang.isArray(value) || (!value.propertyIsEnumerable('length') && (typeof value === 'object') && (typeof value.length === 'number'))) && (value.length < 2))) {
					value = (value.length == 1) ? value[0] : "";
				}

				properties.push({
					"name": attrDef.id,
					"value": value,
					"dataType": attrDef.dataType,
					"label": attrDef.name
				});
			}
			this.logExit("_getHiddenPropertiesJSON");
		},

		resize: function(changeSize) {
		}

	});
});

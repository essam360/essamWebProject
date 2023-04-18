/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-class",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/string",
	"dojo/window",
	"dijit/registry",
	"dijit/Tooltip",
	"dijit/layout/utils",
	"idx/html",
	"./BaseDialog",
	"./BatchResultsDialog",
	"./BatchStatusDialog",
	"./MessageDialog",
	"../CommonPropertiesPane",
	"../../LoggerMixin",
	"../../model/Message",
	"../../model/ContentItem",
	"../../model/AttributeDefinition",
	"dojo/text!./templates/MultiEditPropertiesDialogContent.html"
], function(declare, domClass, array, lang, has, aspect, domGeom, domStyle, string, win, registry, Tooltip, layoutUtils, idxHtml, BaseDialog, BatchResultsDialog, BatchStatusDialog, MessageDialog, CommonProperties, LoggerMixin, Message, ContentItem, AttributeDefinition, template) {

	/**
	 * @name ecm.widget.dialog.MultiEditPropertiesDialog
	 * @class Provides a dialog box that is used to edit the properties of multiple documents and folders.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @since 2.0.2
	 */
	return declare("ecm.widget.dialog.MultiEditPropertiesDialog", [
		BaseDialog,
		LoggerMixin
	], {
		/** @lends ecm.widget.dialog.MultiEditPropertiesDialog.prototype */
		contentString: template,
		widgetsInTemplate: true,

		/**
		 * A string value passed to the CommonPropertiesPane widget to set the reason (or mode) for property rendering.
		 * 
		 * @since 2.0.3
		 */
		reason: "multiEditProperties",

		_items: null,
		_propertyObjects: null,
		_itemsLockedForEdit: null,
		_itemCount: 0,
		_numItems: 0,
		_currentItemName: "",
		_propertyValues: null,
		_childComponentValues: null,
		_canceled: false,
		_messages: null,
		_contentClass: null,
		_repository: null,
		_callback: null,
		_clearedProperties: null,
		_clearedChildComponents: null,
		_changedChildComponents: null,
		_appendedMVCPs: null,
		_appendedChildComponents: null,
		_tooltip: null,
		_itemNamesText: "",
		_unchangedChildComponentIndexes: null,
		_hasDependentAttributes: false,
		_verifyingProperties: false,
		_invalidFieldId: "",
		_dependentPropertyObject: null,
		_invalidChildComponentName: "",
		_invalidChildComponentPropertyName: "",
		_invalidChildComponentId: "",
		_updatedDependentChoiceListProperties: null,
		_entryTemplate: null,

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			this.inherited(arguments);
			domClass.add(this.domNode, "ecmMultiEditPropertiesDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			this.set("title", ecm.messages.edit_properties_dialog_title);
			this.setIntroText(ecm.messages.multi_edit_properties_dialog_info);
			this._OKButton = this.addButton(ecm.messages.save_button_label, "onOK", false, false, "OK");
			
			// Disable the OK button until there is a change.
			this._OKButton.set("disabled", true);

			this.logExit(methodName);
		},

		/**
		 * Shows the dialog
		 * 
		 * @param items
		 *            An array of items {@link ecm.model.ContentItem} for which to modify properti
		 * @param callback
		 *            A function that is called after each item is updated.
		 * @param contentClass
		 *            The {@link ecm.model.ContentClass} for each of the items.
		 */
		show: function(items, callback, contentClass) {
			var methodName = "show";
			this.logEntry(methodName);

			this._itemsLockedForEdit = [];
			this._items = [];
			this._propertyObjects = {};
			this._itemCount = 0;
			this._numItems = 0;
			this._currentItemName = "";
			this._propertyValues = null;
			this._childComponentValues = null;
			this._canceled = false;
			this._messages = [];
			this._clearedProperties = {};
			this._clearedChildComponents = {};
			this._appendedMVCPs = {};
			this._appendedChildComponents = {};
			this._unchangedChildComponentIndexes = [];
			this._hasDependentAttributes = false;
			this._verifyingProperties = false;
			this._invalidFieldId = "";
			this._dependentPropertyObject = {};
			this._changedChildComponents = {};
			this._invalidChildComponentName = "";
			this._invalidChildComponentPropertyName = "";
			this._invalidChildComponentId = "";
			this._updatedDependentChoiceListProperties = {};

			this._contentClass = contentClass;
			this._repository = contentClass.repository;
			this._callback = callback;

			this._classLabel.innerHTML = ecm.messages.multi_edit_properties_class_label;
			this._className.set("value", this._contentClass.name);

			this._itemNamesLabel.innerHTML = ecm.messages.multi_edit_properties_items_label;

			// Add item names to list and get items if in same class.
			var itemNameArray = [];
			this._itemNamesText = "";
			array.forEach(items, function(item) {
				if (item.getContentClass().id == contentClass.id) {
					this._items.push(item);
					var itemName = this._getItemName(item);
					if (itemName != null && itemName.length > 0) {
						itemNameArray.push(this._getItemName(item));
					}

					if (!item.locked && this._repository.type == "cm") {
						this._itemsLockedForEdit.push(item);
					}
				}
			}, this);
			this._itemNamesText = itemNameArray.join(", ");
			this._itemNames.set("value", this._itemNamesText);

			this.own(aspect.after(this._itemNames, "onMouseOver", lang.hitch(this, function() {

				// Build the tool tip here so it isn't read by JAWS when the user
				// puts focus on the item names text box.
				if (this._tooltip) {
					this._tooltip.destroy();
				}
				this._tooltip = new Tooltip({
					label: this._itemNamesText,
					position: [
						"above",
						"below",
						"after",
						"before"
					]
				});
				this._tooltip.open(this._itemNames.domNode);
			}), true));
			this.own(aspect.after(this._itemNames, "onMouseOut", lang.hitch(this, function() {
				if (this._tooltip) {
					this._tooltip.close();
				}
			}), true));

			this.own(aspect.after(this._commonProperties, "onRetrySave", lang.hitch(this, "onOK"), true));

			this._propertiesLabel.innerHTML = ecm.messages.multi_edit_properties_properties_label;
			
			if (this._items[0].entryTemplateId){
				this._entryTemplate = this._repository.getEntryTemplateById(this._items[0].entryTemplateId);
				if (!this._entryTemplate.isRetrieved){
					this._entryTemplate.retrieveEntryTemplate(lang.hitch(this, function(){
						if (!this._entryTemplate.isRetrieved) {
							if (!ecm.model.desktop.hideEntryTemplateNotFoundWarning) {
								this.setMessage(ecm.messages.multi_edit_entry_template_not_retrieved_warning, "warning");
							}
							this.logWarning(methodName, ecm.messages.property_entry_template_not_retrieved_warning);
						}
						this._callRenderProperties();
					}), false, true);
				}
				else {
					this._callRenderProperties();
				}
			}
			else {
				this._callRenderProperties();
			}

			this.logExit(methodName);
		},
		
		_callRenderProperties: function(){
			
			// If the option is set to check property access before displaying the dialog, 
			// get all objects in batch so we can see if some properties on all of the items are not modifiable on all objects.
			if (ecm.model.desktop.multiEditPreCheckPropertyAccess) {
				var docIds = [];
				for (var itemIndex in this._items){
					var item = this._items[itemIndex];
					docIds.push(item.id);
				}
				this._repository.retrieveMultiItem(docIds, lang.hitch(this, function(fullItems){
					var instanceReadOnlyProperties = {};
					for (var fullItemIndex in fullItems){
						var item = fullItems[fullItemIndex];
						var propertyKeys = Object.keys(item.attributeReadOnly);
						var propertyKeys = Object.keys(item.attributeReadOnly);
						for (var keyIndex in propertyKeys){
							var propertyKey = propertyKeys[keyIndex];
							
							// Initialize with the first item's read only attributes.
							if (fullItemIndex == 0){
								if (item.attributeReadOnly[propertyKey] === true){
									instanceReadOnlyProperties[propertyKey] = true;
								}
							}
							else if (item.attributeReadOnly[propertyKey] === false && instanceReadOnlyProperties.propertyKey){
								// Remove any that aren't read only for all items.
								delete instanceReadOnlyProperties.propertyKey;;
							}
						}
					}
					this._renderProperties(instanceReadOnlyProperties);
				}));
			}
			else {
				this._renderProperties();
			}
		},

		/**
		 * Resizes the dialog
		 */
		resize: function() {
			var methodName = "resize";
			this.logEntry(methodName);

			this.inherited(arguments);
			var contentAreaSize = domGeom.getContentBox(this.contentArea);
			if (contentAreaSize.h > 0) {
				var contentAreaHeight = contentAreaSize.h;
				var introSize = domGeom.getMarginBox(this._introTable);
				var propertiesSize = domGeom.getMarginBox(this._propertiesContainer);
				var propertiesHeight = contentAreaHeight - introSize.h;
				domGeom.setMarginBox(this._propertiesContainer, {
					h: propertiesHeight
				});
			}
			this._commonProperties.resize();

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_renderProperties: function(instanceReadOnlyProperties) {
			var methodName = "_renderProperties";
			this.logEntry(methodName);

			this._commonProperties.clearRendering();
			delete this._propertiesAreInvalid;
			this._contentClass.retrieveAttributeDefinitions(lang.hitch(this, function(attributeDefinitions, childComponentDefinitions) {
				
				var useEntryTemplate = false;
				if (this._entryTemplate && this._entryTemplate.isRetrieved && this._entryTemplate.useForProperties){
					useEntryTemplate = true;
				}

				// Create a copy of the attribute definitions so that we don't modify the class attribute definitions.
				var attrDefs = [];
				var attrDefsById = {};
				var attrDef;
				for ( var attrDefNdx in attributeDefinitions) {
					attrDef = attributeDefinitions[attrDefNdx];

					// Clone the attribute definition. The content class reference is copied.
					attrDef = attrDef.clone();
					if (!useEntryTemplate){
						// If using an entry template, we'll set the order below.
						attrDefs.push(attrDef);
					}
					attrDefsById[attrDef.id] = attrDef;
				}
	
				if (useEntryTemplate){
					
					// Set entry template attributes.
					for (var index in this._entryTemplate.propertiesOptions){
						var propertyOption = this._entryTemplate.propertiesOptions[index];
						var attrDef = attrDefsById[propertyOption.id];
						if (propertyOption.required){
							attrDef.required = propertyOption.required;
						}
						if (propertyOption.hidden){
							attrDef.hidden = propertyOption.hidden;
						}
						if (propertyOption.readOnly){
							attrDef.readOnly = propertyOption.readOnly;
						}
						attrDefs.push(attrDef);
					}
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

				var attrValues = {};
				// Create an attribute values object for each attribute definition. Use the values of the first object in the list
				// to initialize EDS.
				this._dependentPropertyObject = this._items[0];
				this._dependentPropertyObject.retrieveAttributes(lang.hitch(this, function() {
					var self = this;
					attrValues = {};
					array.forEach(attrDefs, function(attrDef, index) {
						attrValues[attrDef.id] = self._dependentPropertyObject.attributes[attrDef.id];
					});
					this._contentClass.retrieveDependentAttrDefs({
						attributes: attrValues,
						context: {
							action: this.reason
						},
						callback: lang.hitch(this, function(dependentAttributeDefs, dependentChildComponentDefs, dependentChildComponents) {

							// Apply the dependent attribute changes
							this._commonProperties._applyDependentAttributeValues(attrDefs, attrDefsById, dependentAttributeDefs, null, this.reason);

							if (childCompDefs && dependentChildComponentDefs) {
								var depChildCompDef;
								for ( var i in dependentChildComponentDefs) {
									depChildCompDef = dependentChildComponentDefs[i];
									childCompDef = childCompDefsById[depChildCompDef.id];
									if (childCompDef) {
										this._commonProperties._applyDependentAttributeValues(childCompDef.attributeDefinitions, childCompDef.attributeDefinitionsById, depChildCompDef.attributeDefinitions, null, this.reason);
									}
								}
							}

							this._displayAttributes(attrDefs, attrValues, childCompDefs, instanceReadOnlyProperties);
						}),
						onError: lang.hitch(this, function(response, errorMessages) {
							this._propertiesAreInvalid = true;
						})
					});
				}));
			}), false, lang.hitch(this, function() {
				this._propertiesAreInvalid = true;
			}));
			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_displayAttributes: function(attributeDefs, originalValues, childComponents, instanceReadOnlyProperties) {
			var methodName = "_displayAttributes";
			this.logEntry(methodName);

			var displayAttributes = [];
			var attribute;
			var foundModifiableAttribute = false;
			if (this._contentClass.childComponentDefinitions != null) {
				foundModifiableAttribute = true;
			}

			for ( var attrNdx in attributeDefs) {
				attribute = attributeDefs[attrNdx];

				if (attribute.hasDependentAttributes) {
					this._hasDependentAttributes = true;
				}

				// If the default value is the same as the original property value, make the default blank.
				if (attribute.cardinality.toUpperCase() == "SINGLE") {
					if (attribute.defaultValue == originalValues[attribute.id] || !attribute.updatedDefaultValue) {
						this.logDebug(methodName, "Setting single value attribute value to empty: " + attribute.id);
						attribute.defaultValue = "";
					}
				} else if ((attribute.cardinality.toUpperCase() == "LIST" || attribute.cardinality.toUpperCase() == "MULTI") && attribute.defaultValue != null && originalValues[attribute.id] != null) {
					if (!attribute.updatedDefaultValue){
						this.logDebug(methodName, "Setting multi value attribute value to empty - !updatedDefaultValue: " + attribute.id);
						attribute.defaultValue = "";
					}
					else if (attribute.defaultValue.length == originalValues[attribute.id].length) {
						var valuesSame = true;
						for ( var index in attribute.defaultValue) {
							var attributeDefValue = attribute.defaultValue[index];
							var objectValue = originalValues[attribute.id][index];
							if (objectValue != attributeDefValue) {
								valuesSame = false;
								break;
							}
						}
						if (valuesSame == true) {
							this.logDebug(methodName, "Setting multi value attribute value to empty: " + attribute.id);
							attribute.defaultValue = "";
						}
					}
				}

				// Skip system attributes.
				if (attribute.system == true) {
					continue;
				}

				// Skip reference attributes
				if (attribute.dataType == "xs:reference") {
					continue;
				}

				// Check for hidden properties here on the first item to set hidden flag for search properties.
				if (attribute.hidden == false) {
					attribute.hidden = this._items[0].isAttributeHidden(attribute.id);
				}

				if (this._repository._isCM() && attribute.uniqueValues == true) {
					attribute.readOnly = true;
				}
				
				if (instanceReadOnlyProperties && instanceReadOnlyProperties[attribute.name]){
					attribute.readOnly = true;
				}
				
				if ((this._repository._isP8()) && (attribute.id == "DocumentTitle" || attribute.id == "FolderName")) {

					// For P8, make name attribute read only.
					attribute.readOnly = true;
				} else if (this._repository._isCM() && attribute.id == "ICM$NAME" && this._contentClass.hierarchical == true) {
					attribute.readOnly = true;
				}

				if (attribute.readOnly == false && attribute.hidden == false) {
					foundModifiableAttribute = true;
				}

				this.logDebug(methodName, "Adding displayable attribute: " + attribute.id);
				displayAttributes.push(attribute);
			}

			// Set the object in the common properties pane that will be used for EDS processing.
			this._commonProperties.dependentPropertyObject = this._dependentPropertyObject;
			this._commonProperties.renderAttributes(displayAttributes, null, this.reason, false);
			this._commonProperties.renderChildComponents(childComponents, null, null, null, this.reason);

			// There is a slight delay before time properties send out an on change notification 
			// for their initial value.
			setTimeout(lang.hitch(this, function() {
				this.own(aspect.after(this._commonProperties, "onChange", lang.hitch(this, "_onPropertyChange"), true));
				this.own(aspect.after(this._commonProperties, "onClearProperty", lang.hitch(this, "_onPropertyCleared"), true));
				this.own(aspect.after(this._commonProperties, "onPropertyValueSet", lang.hitch(this, "_onPropertySet"), true));
				this.own(aspect.after(this._commonProperties, "onNewChildComponent", lang.hitch(this, "_onNewChildComponent"), true));
				this.own(aspect.after(this._commonProperties, "onChildComponentCleared", lang.hitch(this, "_onChildComponentCleared"), true));
				this.own(aspect.after(this._commonProperties, "onAppendChildComponentClicked", lang.hitch(this, "_onAppendChildComponentClicked"), true));
				this.own(aspect.after(this._commonProperties, "onAppendClick", lang.hitch(this, "_onAppendMVCPChange"), true));
				this.own(aspect.after(this._commonProperties, "onMultiEditChildComponentChange", lang.hitch(this, "_onChildComponentChange"), true));
				this.own(aspect.after(this._commonProperties, "renderAttributes", lang.hitch(this, "_afterRenderAttributes"), true));
				this.own(aspect.after(this._commonProperties, "renderChildComponents", lang.hitch(this, "_afterRenderChildComponents"), true));
				this.own(aspect.after(this._commonProperties, "_updateDependentAttributeRenderings", lang.hitch(this, "_afterUpdateDependentAttributeRenderings"), true));
			}), 100);

			if (foundModifiableAttribute == true) {
				this.logDebug(methodName, "Found modifiable properties. Displaying dialog.");
				this.inherited("show", []);
				setTimeout(lang.hitch(this, function() {
					// Resize the title pane nodes - these have height set to zero if not done here.
					var titlePaneNodes = dojo.query(".ecmChildComponentPropertiesPane .dijitTitlePane");
					for (titlePaneIndex in titlePaneNodes) {
						var titlePaneNode = titlePaneNodes[titlePaneIndex];
						var titlePaneDijit = registry.byId(titlePaneNode.id);
						if (titlePaneDijit && titlePaneDijit.resize) {
							titlePaneDijit.resize();
						}
					}
					this.resize();
				}), 100);

				// Lock items for editing if needed.
				if (this._itemsLockedForEdit.length > 0) {
					this._repository.lockItems(this._itemsLockedForEdit);
				}
			} else {
				this.logDebug(methodName, "No modifiable properties found. Displaying message.");
				var msg = this.messages.multi_edit_no_modifiable_properties;
				if (this._dialog) {
					this._dialog.destroy();
				}
				this._dialog = new MessageDialog({
					text: msg
				});
				this._dialog.show();
			}
			this.logExit(methodName);
		},

		_onChildComponentChange: function(childComponentId) {
			var methodName = "_onChildComponentChange";
			this.logEntry(methodName);

			this.logDebug(methodName, "Child component changed: " + childComponentId);
			this._changedChildComponents[childComponentId] = childComponentId;

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_onAppendMVCPChange: function(attributeDefId, append) {
			var methodName = "_onAppendMVCPChange";
			this.logEntry(methodName);

			if (append == true) {
				this.logDebug(methodName, "Adding append for MVCP: " + attributeDefId);
				this._appendedMVCPs[attributeDefId] = attributeDefId;
			} else {
				this.logDebug(methodName, "Removing append for MVCP: " + attributeDefId);
				delete this._appendedMVCPs[attributeDefId];
			}

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_onAppendChildComponentClicked: function(childComponentId, checked) {
			var methodName = "_onAppendChildComponentClicked";
			this.logEntry(methodName);

			if (checked == true) {
				this.logDebug(methodName, "Adding append for child component: " + childComponentId);
				this._appendedChildComponents[childComponentId] = childComponentId;
			} else {
				this.logDebug(methodName, "Removing append for child component: " + childComponentId);
				delete this._appendedChildComponents[childComponentId];
			}

			this._commonProperties.validateAll(false, false, false);
			
			// Enable the OK button when there is a change.
			this._OKButton.set("disabled", false);

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_afterRenderAttributes: function(attributeDefinitions, item, reason, isReadOnly) {
			var methodName = "_afterRenderAttributes";
			this.logEntry(methodName);

			var attrObject = {};
			for (attrIndex in attributeDefinitions) {
				var attributeDef = attributeDefinitions[attrIndex];
				attrObject[attributeDef.id] = attributeDef;
			}

			// Re-add clear information to the UI after re-rendering.
			for ( var clearedPropertyIndex in this._clearedProperties) {
				var clearedProperty = this._clearedProperties[clearedPropertyIndex];
				var clearNode = dojo.byId(this._commonProperties.id + clearedProperty.name);
				if (clearNode != null) {

					var attributeDef = attrObject[clearedProperty.name];
					if (attributeDef != null) {
						var kwArgs = {
							name: attributeDef.id,
							dataType: attributeDef.dataType,
							cardinality: attributeDef.cardinality,
							choiceListNested: attributeDef.isChoiceListNested(),
							required: attributeDef.required,
							choiceList: attributeDef.getChoiceList(true)
						};
						this.logDebug(methodName, "Clearing attribute after rendering: " + attributeDef.id);
						this._commonProperties.onClearProperty(kwArgs, clearNode);
					}
				}
			}

			// Re-check any the Append checkbox for MVCPs
			for ( var appendPropertyIndex in this._appendedMVCPs) {
				var appendedPropertyId = this._appendedMVCPs[appendPropertyIndex];
				var appendCheckbox = registry.byId(this._commonProperties.id + appendedPropertyId + "append");
				if (appendCheckbox) {
					this.logDebug(methodName, "Checking append after rendering: " + appendedPropertyId);
					appendCheckbox.set("disabled", false);
					appendCheckbox.set("checked", true);
				}
			}

			// Validate any required properties that have an empty default value.
			var foundEmptyRequired = false;
			for ( var attrIndex in attributeDefinitions) {
				var attr = attributeDefinitions[attrIndex];
				if (attr.required == true && attr.defaultValue == "") {
					foundEmptyRequired = true;
					var clearNode = dojo.byId(this._commonProperties.id + attributeDef.id);
					var kwArgs = {
						name: attr.id,
						dataType: attr.dataType,
						cardinality: attr.cardinality,
						choiceListNested: attr.isChoiceListNested(),
						required: attr.required,
						choiceList: attr.getChoiceList(true)
					};
					this.logDebug(methodName, "Clearing required property after rendering: " + attr.id);
					this._commonProperties.onClearProperty(kwArgs, clearNode);
				}
			}
			if (foundEmptyRequired == true) {
				var fields = this._commonProperties.getPropertyEditors().getFields();
				for ( var fieldIndex in fields) {
					var field = fields[fieldIndex];
					if (field.isValid && field.isValid(true) == false) {
						setTimeout(function() {
							// Scroll into view before setting focus so that tooltips are not dismissed by the scroll.
							win.scrollIntoView(field.domNode);
							field.focus();
						}, 300);
					}
				}
			}
			this._onPropertyChange();

			this.logExit(methodName);
		},

		/**
		 * private
		 */
		_afterRenderChildComponents: function(childCompDefinitions, item, isReadOnly, newChildComponents, reason) {
			var methodName = "_afterRenderChildComponents";
			this.logEntry(methodName);

			// Re-clear child component values after properties are re-rendered.
			for ( var clearedChildCompIndex in this._clearedChildComponents) {
				var clearedChildComp = this._clearedChildComponents[clearedChildCompIndex];
				this._commonProperties.ClearChildComponent(clearedChildComp);
			}

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_onChildComponentCleared: function(childComponentId) {
			var methodName = "_onChildComponentCleared";
			this.logEntry(methodName);

			this.logDebug(methodName, "Clearing child component: " + childComponentId);
			this._clearedChildComponents[childComponentId] = childComponentId;

			// If the child component caused a validation error, clear error fields.
			if (this._invalidChildComponentId == childComponentId) {
				this._invalidChildComponentName = "";
				this._invalidChildComponentPropertyName = "";
				this._invalidChildComponentId = "";
				this.setMessage("");
				this._invalidFieldId = "";
				this.resize();
			}

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_onNewChildComponent: function(childComponentId) {
			var methodName = "_onNewChildComponent";
			this.logEntry(methodName);

			this.logDebug(methodName, "Adding child component: " + childComponentId);
			delete this._clearedChildComponents[childComponentId];

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_onPropertySet: function(kwArgs) {
			var methodName = "_onPropertySet";
			this.logEntry(methodName);

			// Delete cleared properties from the collection when the user sets a value. 
			this.logDebug(methodName, "Property set: " + kwArgs.name);
			delete this._clearedProperties[kwArgs.name];
			if (this._invalidFieldId == kwArgs.name) {
				// Clear the inline error message.
				this.setMessage("");
				this._invalidFieldId = "";
				this.resize();
			}

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_onPropertyCleared: function(kwArgs) {
			var methodName = "_onPropertyCleared";
			this.logEntry(methodName);

			// Keep track of properties cleared in the commmon properties widget.
			// Don't allow clearing required properties.
			this.logDebug(methodName, "Clearing property: " + kwArgs.name);
			if (kwArgs.required == false) {
				this._clearedProperties[kwArgs.name] = kwArgs;
			}
			if (this._invalidFieldId == kwArgs.name) {
				// Clear the inline error message.
				this.setMessage("");
				this._invalidFieldId = "";
				this.resize();
			}

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_onPropertyChange: function() {
			var methodName = "_onPropertyChange";
			this.logEntry(methodName);

			this._commonProperties.validateAll(true, false, false);

			// Enable the OK button when there is a change.
			this._OKButton.set("disabled", false);

			// Clear child component validation error.
			if (this._invalidChildComponentId.length > 0) {
				this._invalidChildComponentName = "";
				this._invalidChildComponentPropertyName = "";
				this._invalidChildComponentId = "";
				this.setMessage("");
				this._invalidFieldId = "";
				this.resize();
			}

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_afterUpdateDependentAttributeRenderings: function(newAttributeDefinitions, currentAttributeDefinitions, reason, oldAttributes) {

			// Keep track of EDS choice list changes. We'll validate these on before saving each object.
			for (attrDefNdx in newAttributeDefinitions) {
				var newAttributeDefinition = newAttributeDefinitions[attrDefNdx];
				if (newAttributeDefinition.updatedChoiceList) {
					this._updatedDependentChoiceListProperties[newAttributeDefinition.id] = newAttributeDefinition.id;
				}
			}
		},

		/**
		 * Called when the OK button is clicked.
		 */
		onOK: function() {
			var methodName = "onOK";
			this.logEntry(methodName);

			if (this._propertiesAreInvalid) {
				this.setMessage(this.messages.multi_edit_properties_invalid_msg, "error");
				return;
			}

			var errorField = this._commonProperties.validateAll(true, true, true);
			if (!errorField) {
				// Close this dialog and process the batch property changes in the background.
				this.hide();

				if (this._batchStatusDialog) {
					this._batchStatusDialog.destroy();
				}
				this._batchStatusDialog = new BatchStatusDialog({
					title: this.messages.multi_edit_batch_status_title,
					cancellable: true
				});

				var statusMsg = "";
				if (this._hasDependentAttributes) {
					statusMsg = this.messages.multi_edit_batch_status_verifying_msg;
				} else {
					statusMsg = this.messages.multi_edit_batch_status_adding_msg;
				}
				var onQuitHandler = aspect.after(this._batchStatusDialog, "onQuit", lang.hitch(this, function() {
					this.logDebug(methodName, "Batch process cancelled.");
					this._canceled = true;
					this._updateStatusMessage(statusMsg);
					onQuitHandler.remove();
				}), true);

				this._batchStatusDialog.show();
				this._itemCount = 0;
				this._numItems = this._items.length;

				// Get the property values and add cleared properties.
				// Exclude all empty property values.
				this._propertyValues = this._commonProperties.getPropertiesJSON(true, true, true);

				// Add cleared properties.
				for ( var index in this._clearedProperties) {
					var clearedProperty = this._clearedProperties[index];
					var propertyObject = {
						dataType: clearedProperty.dataType,
						label: clearedProperty.label,
						name: clearedProperty.name,
						value: null
					};
					this.logDebug(methodName, "Adding to cleared properties: " + clearedProperty.name);
					this._propertyValues.push(propertyObject);
				}

				this._childComponentValues = this._commonProperties.getChildComponentValues();

				// If child component is cleared, set child comp to empty array. If not changed, save the index so we can use the original values.
				// If any child component has a value, pass that to be updated.
				this._unchangedChildComponentIndexes = [];
				for ( var childCompDefIndex in this._childComponentValues) {
					var childCompDef = this._childComponentValues[childCompDefIndex];

					// See if the child component was cleared.
					if (this._clearedChildComponents[childCompDef.name] != null) {
						childCompDef.values = [];
						this.logDebug(methodName, "Child component was cleared: " + childCompDef.name);
					} else if (this._changedChildComponents[childCompDef.name] != null) {
						// If a child component was changed, make sure at least one instance has a value.
						var foundValue = false;
						for ( var childCompInstanceIndex in childCompDef.values) {
							var childCompInstance = childCompDef.values[childCompInstanceIndex];
							for ( var childCompInstanceValIndex in childCompInstance.values) {
								var childCompInstanceValue = childCompInstance.values[childCompInstanceValIndex];
								if (childCompInstanceValue.value != null && childCompInstanceValue.value.toString().length > 0) {
									foundValue = true;
									break;
								}
							}
							if (foundValue == true) {
								this.logDebug(methodName, "Found value for child component: " + childCompDef.name);
								break;
							}
						}
						if (foundValue == false) {
							// Keep track child components that weren't modified. We'll need to use the original values
							// for each item when we update
							this.logDebug(methodName, "Found unmodified child component - no value: " + childCompDef.name);
							this._unchangedChildComponentIndexes.push(childCompDefIndex);
							childCompDef.values = [];
						}
					} else {
						this.logDebug(methodName, "Found unmodified child component: " + childCompDef.name);
						this._unchangedChildComponentIndexes.push(childCompDefIndex);
						childCompDef.values = [];
					}
				}

				this._updateStatusMessage(this.messages.progress_message_openItem);
				this._propertyObjects = {};
				if (this._hasDependentAttributes) {
					// Retrieve the attributes of all items so we can verify against EDS.
					this._verifyingProperties = true;
					this._retrieveItemAttributes(0, lang.hitch(this, this._verifyProperties));
				} else {
					this._retrieveItemAttributes(0, (lang.hitch(this, this._updateItemProperties)));
				}
			}

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_retrieveItemAttributes: function(index, callback) {
			var methodName = "_retrieveItemAttributes";
			this.logEntry(methodName);

			if (index < this._items.length) {
				this.logDebug(methodName, "Retrieveing attributes for item: " + this._items[index].id);
				var currentItem = this._items[index];
				currentItem.retrieveAttributes(lang.hitch(this, function() {
					
					// Create an object with the property values for this item. Start with the current values on the item.
					var propertyObject = {};
					this._propertyObjects[currentItem.id] = propertyObject;
					for (objectPropertyIndex in currentItem.attributes) {
						var property = {
							name: objectPropertyIndex,
							value: currentItem.attributes[objectPropertyIndex],
							dataType: currentItem.attributeTypes[objectPropertyIndex],
							label: currentItem.attributeLabels[objectPropertyIndex], 
							readOnly: currentItem.attributeReadOnly[objectPropertyIndex],
						};
						propertyObject[objectPropertyIndex] = property;
					}

					// Then overlay with values changed by the user.
					var propertyValues = dojo.clone(this._propertyValues);
					for (propertyIndex in propertyValues) {
						var property = propertyValues[propertyIndex];
						if (propertyObject[property.name].readOnly){
							message = new Message({
								number: 0,
								level: 0,
								text: string.substitute(this.messages.multi_edit_properties_read_only_property, [
                                    propertyObject[property.name].label
								]),							
							});
							this._messages.push({
								name: this._getItemName(this._items[index]),
								status: this.messages.multi_edit_batch_results_status_information,
								statusMessage: message.text,
								message: message
							});
						}
						else{
							propertyObject[property.name] = property;
						}
					}

					// Next, append any new MVCP property instances.
					for ( var appendPropertyIndex in this._appendedMVCPs) {
						var appendedPropertyId = this._appendedMVCPs[appendPropertyIndex];
						var property = propertyObject[appendedPropertyId];
						var currentValues = [];
						for (var currentValueIndex in currentItem.attributes[property.name]) {
							currentValues.push(currentItem.attributes[property.name][currentValueIndex]);
						}
						property.value = currentValues.concat(property.value);
					}
					
					// Do the same for the next item.
					this._retrieveItemAttributes(index + 1, callback);
				}), true, true);
			} else {
				callback();
			}

			this.logExit(methodName);
		},

		/**
		 * @private Used to verify property values when there are dependent attributes.
		 */
		_verifyProperties: function() {
			var methodName = "_verifyProperties";
			this.logEntry(methodName);

			this._itemCount++;
			if (this._itemCount > this._numItems || this._canceled || this._invalidFieldId.length > 0) {
				this._verifyingProperties = false;

				// Add messages for each of the canceled items.
				if (this._canceled) {
					this.logDebug(methodName, "Validation cancelled. Adding messages for cancelled items...");
					var message;
					for (var index = 0; index < this._numItems; index++) {
						message = new Message({
							number: 0,
							level: 0,
							text: this.messages.multi_edit_batch_results_status_cancelled_msg
						});
						this._messages.push({
							name: this._getItemName(this._items[index]),
							status: this.messages.multi_edit_batch_results_status_cancelled,
							statusMessage: message.text,
							message: message
						});
					}

					this._batchStatusDialog.hide();
					if (this._messages.length > 0) {
						this._displayResultsDialog();
					}
					this._unlockItemsForEdit();

				} else if (this._invalidFieldId.length > 0) {
					this.logDebug(methodName, "Found invalid field...");
					var propertyEditors = this._commonProperties.getPropertyEditors();
					var invalidField = propertyEditors.getFieldWithName(this._invalidFieldId);
					setTimeout(function() {
						// Scroll into view before setting focus so that tooltips are not dismissed by the scroll.
						win.scrollIntoView(invalidField.domNode);
						invalidField.focus();
					}, 300);
					invalidField.setCustomValidationError(this.messages.multi_edit_invalid_value_error);
					this._batchStatusDialog.hide();
					this.setMessage(this.messages.multi_edit_properties_invalid_msg, "error");
					this.inherited("show", []);
					this.resize();
				} else if (this._invalidChildComponentName.length > 0) {
					this.logDebug(methodName, "Found invalid child component...");
					this.setMessage(string.substitute(this.messages.multi_edit_properties_invalid_childcomponent_msg, [
						this._invalidChildComponentPropertyName,
						this._invalidChildComponentName
					])), "error)";
					this._batchStatusDialog.hide();
					this.inherited("show", []);
					this.resize();
				} else {
					this.logDebug(methodName, "Passed validation");
					this._itemCount = 0;
					this._numItems = this._items.length;
					this._updateItemProperties();
				}
				return;
			}

			var onError = lang.hitch(this, function(response, errorMessages) {
				array.forEach(errorMessages, lang.hitch(this, function(errorMessage) {
					this._propertiesAreInvalid = true;
					if (errorMessage && errorMessage.level >= 2) {
						this._messages.push({
							name: this._currentItemName,
							status: this.messages.multi_edit_batch_results_status_error,
							statusMessage: errorMessage.text,
							message: errorMessage
						});
					}
				}));
				// Update the item count so processing will stop and we display the error dialog.
				this._itemCount = this._numItems;
				this._verifyProperties();
			});

			var currentItem = this._items[this._itemCount - 1];
			this._currentItemName = this._getItemName(currentItem);
			this._updateStatusMessage(this.messages.multi_edit_batch_status_verifying_msg);

			// Get the property object for the item.
			var propertyObject = this._propertyObjects[currentItem.id];

			var attrValues = {};
			for (propertyIndex in propertyObject) {
				attrValues[propertyObject[propertyIndex].name] = propertyObject[propertyIndex].value;
			}

			this._contentClass.retrieveAttributeDefinitions(lang.hitch(this, function(attributeDefinitions, childComponentDefinitions) {

				// Create a copies of attribute definitions
				var attrDefs = [];
				var attrDefsById = {};
				var attrDef;
				for ( var attrDefNdx in attributeDefinitions) {
					attrDef = attributeDefinitions[attrDefNdx];

					// Clone the attribute definition. The content class reference is copied.
					attrDef = attrDef.clone();
					attrDefs.push(attrDef);
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

				this._contentClass.retrieveDependentAttrDefs({
					// Including child components doesn't return choicelists.
					attributes: attrValues,
					context: {
						action: this.reason
					},
					callback: lang.hitch(this, function(dependentAttributeDefs, dependentChildComponentDefs, dependentChildComponents) {

						// Apply the dependent attribute changes
						this._commonProperties._applyDependentAttributeValues(attrDefs, attrDefsById, dependentAttributeDefs, null, this.reason);

						if (childCompDefs && dependentChildComponentDefs) {
							var depChildCompDef;
							for ( var i in dependentChildComponentDefs) {
								depChildCompDef = dependentChildComponentDefs[i];
								childCompDef = childCompDefsById[depChildCompDef.id];
								if (childCompDef) {
									this._commonProperties._applyDependentAttributeValues(childCompDef.attributeDefinitions, childCompDef.attributeDefinitionsById, depChildCompDef.attributeDefinitions, null, this.reason);
								}
							}
						}
						
						// Set any property values that may have been modified by the last EDS call here.
						for (var depAttrDefIndex in dependentAttributeDefs){
							var depAttrDef = dependentAttributeDefs[depAttrDefIndex];
							if (depAttrDef.updatedDefaultValue){
								propertyObject[depAttrDef.id].value = depAttrDef.defaultValue;
							}
						}

						for ( var attrIndex in attrDefs) {
							var attr = attrDefs[attrIndex];
							
							var emptyProperty = !propertyObject[attr.id] || AttributeDefinition.isValueEmpty(propertyObject[attr.id].value);
							
							if (!attr.required && emptyProperty) {
								// Empty values should be OK for non-required fields.
							} else {
								// If the property has choices and the choice list has been modified by EDS, 
								// verify the value(s) entered by the user is valid.
								if (this._updatedDependentChoiceListProperties[attr.id] != null && attr.choiceList != null) {
									var choicesValid = this._commonProperties.verifyChoice(attr, attr.choiceList.choices, propertyObject[attr.id].value);
									if (!choicesValid) {
										this.logDebug(methodName, "Found invalid choice for choicelist for property: " + attr.id);
										this._invalidFieldId = attr.id;
										break;
									}
								}
								else if (attr.required && !attr.system && !attr.hidden && emptyProperty){
								
									// Check that all required visible non-system properties have values.
									this.logDebug(methodName, "Found required property without a value: " + attr.id);
									this._invalidFieldId = attr.id;
									break;
								}
							}
						}

						// If passed validation above...
						if (this._invalidFieldId.length == 0) {

							// We need to verify that any non-cleared child component values existing on the object are still valid.
							// Child component values entered by the user should be OK -- no no need to validate.
							for ( var childCompDefIndex in childCompDefs) {
								if (this._invalidChildComponentName.length > 0) {
									break;
								}

								var childCompDef = childCompDefs[childCompDefIndex];
								for (attrDefIndex in childCompDef.attributeDefinitions) {
									if (this._invalidChildComponentName.length > 0) {
										break;
									}

									var attrDef = childCompDef.attributeDefinitions[attrDefIndex];
									if (attrDef.choiceList != null) {

										// No need to validate if the child component is being cleared.
										if (this._clearedChildComponents[childCompDef.id] == null) {
											for ( var existingChildCompIndex in currentItem._childComponents) {
												if (this._invalidChildComponentName.length > 0) {
													break;
												}

												var existingChildComp = currentItem._childComponents[existingChildCompIndex];
												if (existingChildComp.name = childCompDef.name) {
													var values = existingChildComp.attributes[attrDef.id];
													for (valueIndex in values) {
														var value = values[valueIndex];
														var foundChoice = false;
														for (choiceIndex in attrDef.choiceList.choices) {
															var choiceValue = attrDef.choiceList.choices[choiceIndex].value;
															var choiceValid = attrDef.choiceList.choices[choiceIndex].valid;
															if (value == choiceValue && choiceValid) {
																foundChoice = true;
																break;
															}
														}
														if (foundChoice == false) {
															this.logDebug(methodName, "Found invalid choice for choicelist for child component: " + childCompDef.name + " property: " + attrDef.label);
															this._invalidChildComponentName = childCompDef.name;
															this._invalidChildComponentPropertyName = attrDef.label;
															this._invalidChildComponentId = childCompDef.id;
														}
														// Found the one we were looking for, so break.
														break;
													}
												}
											}
										}
									}
								}
							}
						}

						this._verifyProperties();
					}),
					isBackgroundRequest: true,
					onError: onError
				});
			}), true, onError);

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_updateItemProperties: function() {
			var methodName = "_updateItemProperties";
			this.logEntry(methodName);
			var message;

			this._itemCount++;
			if (this._itemCount > this._numItems || this._canceled) {

				// Add messages for each of the canceled items.
				if (this._canceled) {
					this.logDebug(methodName, "Update cancelled. Adding messages for cancelled items...");
					for (var index = this._itemCount - 1; index < this._numItems; index++) {
						message = new Message({
							number: 0,
							level: 0,
							text: this.messages.multi_edit_batch_results_status_cancelled_msg
						});
						this._messages.push({
							name: this._getItemName(this._items[index]),
							status: this.messages.multi_edit_batch_results_status_cancelled,
							statusMessage: message.text,
							message: message
						});
					}
				}

				this._batchStatusDialog.hide();
				if (this._messages.length > 0) {
					this._displayResultsDialog();
				}

				this._unlockItemsForEdit();
				return;
			}

			var currentItem = this._items[this._itemCount - 1];
			this._currentItemName = this._getItemName(currentItem);
			this._updateStatusMessage(this.messages.multi_edit_batch_status_adding_msg);
			this.logDebug(methodName, "Updating item: " + this._currentItemName);

			// Need to check here if object is modifiable -- P8 doesn't return an error if an attempt is made to modify the
			// properties of an object where the user doesn't have permission.
			if (currentItem.hasPrivilege("privEditProperties") == false) {
				this.logDebug(methodName, "Found non-modifiable property: " + this._currentItemName);
				message = new Message({
					number: 0,
					level: 2,
					text: this.messages.multi_edit_batch_permission_error_text,
					explanation: this.messages.multi_edit_batch_permission_error_explanation
				});
				this._messages.push({
					name: this._getItemName(currentItem),
					status: this.messages.multi_edit_batch_results_status_error,
					statusMessage: this.messages.multi_edit_batch_permission_error_text,
					message: message
				});

				// Continue updating the rest of the items.
				this._updateItemProperties();
			} else {

				// See if the item is locked for editing.
				var lockedForEdit = false;
				for ( var lockedItemIndex in this._itemsLockedForEdit) {
					var lockedItem = this._itemsLockedForEdit[lockedItemIndex];
					if (lockedItem.id == currentItem.id) {
						lockedForEdit = true;
						break;
					}
				}

				var onError = lang.hitch(this, function(response, errorMessages) {
					array.forEach(errorMessages, lang.hitch(this, function(errorMessage) {
						if (errorMessage && errorMessage.level >= 2) {
							this._messages.push({
								name: this._currentItemName,
								status: this.messages.multi_edit_batch_results_status_error,
								statusMessage: errorMessage.text,
								message: errorMessage
							});
						}
					}));
					// Continue updating the rest of the items.
					this._updateItemProperties();
				});
				
				this._contentClass.retrieveAttributeDefinitions(lang.hitch(this, function(attributeDefinitions, childComponentDefinitions) {
				
					// Add any properties from the item that were not changed by the user so the final EDS call will have a complete set. 
					// Exclude system properties.
					var propertyValues = [];
					var propertyObject = this._propertyObjects[currentItem.id];
					for (attrDefIdx in attributeDefinitions){
						var attrDef = attributeDefinitions[attrDefIdx];
						if (!attrDef.system){
							var property = propertyObject[attrDef.id];
							propertyValues.push(property);
						}
					}
						
					// Handle child component values that weren't changed by the user.
					var childComponentValues = dojo.clone(this._childComponentValues);
					for ( var unchangedChildCompIndex in this._unchangedChildComponentIndexes) {
						var unchangedChildComp = this._unchangedChildComponentIndexes[unchangedChildCompIndex];
						var childComponent = childComponentValues[unchangedChildComp];
						var childComponentInstance = currentItem._childComponents[unchangedChildComp];
						this._getChildComponentJson(childComponent, childComponentInstance);
					}
	
					// Now handle child components that are to be appended to current values.
					var appendedChildCompKeys = Object.keys(this._appendedChildComponents);
					// If we have child components to be appended...
					if (appendedChildCompKeys.length > 0) {
						// Iterate through the child component values returned from the child comp pane.
						for ( var childCompIndex in childComponentValues) {
							var childComponent = childComponentValues[childCompIndex];
							// If we find one to be appended...
							if (this._appendedChildComponents[childComponent.name] != null) {
								// Clone the child components on the current item and iterate through them.
								var currentChildComponents = dojo.clone(currentItem._childComponents);
								for ( var childCompInstanceIndex in currentChildComponents) {
									var childComponentInstance = currentItem._childComponents[childCompInstanceIndex];
									// If we find the one that is to be appended, clone the values we have for it returned from
									// the child comp pane. Set the child comp values array to empty, add the child comp values 
									// for the current item, then add the values being appended, adjusting the row index.
									if (childComponentInstance.id == childComponent.name) {
										var origChildCompValues = dojo.clone(childComponent.values);
										childComponent.values = [];
										this._getChildComponentJson(childComponent, childComponentInstance);
										var rowNum = childComponent.values.length;
										for ( var childCompAppendIndex in origChildCompValues) {
											rowNum++;
											origChildCompValues[childCompAppendIndex].index = "row_" + parseInt(rowNum);
										}
										childComponent.values = childComponent.values.concat(origChildCompValues);
									}
								}
							}
						}
					}
						
					currentItem.saveAttributes(propertyValues, this._contentClass.id, childComponentValues, null, lockedForEdit, lang.hitch(this, function(response) {
						this._updateItemCallback(response);
					}), true, onError);
				}));
			}

			this.logExit(methodName);
		},

		/**
		 * private
		 */
		_getChildComponentJson: function(childComponent, childComponentInstance) {
			var methodName = "_getChildComponentJson";
			this.logEntry(methodName);

			var keys = Object.keys(childComponentInstance.attributeLabels);
			for ( var rowIndex in childComponentInstance.attributes[keys[0]]) {
				var values = [];
				for ( var index in keys) {
					var propertyName = keys[index];
					if (childComponentInstance.attributes[propertyName] == null || childComponentInstance.attributes[propertyName] == undefined) {
						continue;
					}

					var label = childComponentInstance.attributeLabels[propertyName];
					var dataType = childComponentInstance.attributeTypes[propertyName];
					var childComponentValue = {
						name: childComponent.name + "/" + propertyName,
						value: childComponentInstance.attributes[propertyName][rowIndex],
						dataType: dataType,
						label: label
					};
					values.push(childComponentValue);
				}
				childComponent.values.push({
					index: "row_" + (parseInt(rowIndex) + 1),
					values: values
				});
			}

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_getItemName: function(item) {
			var methodName = "_getItemName";
			this.logEntry(methodName);

			var name = item.name;

			// If the "{NAME}" attribute is present and requires special formatting (not a string)... 
			if (item.hasAttribute("{NAME}") && (item.getAttributeType("{NAME}") != "xs:string")) {
				name = item.getDisplayValue("{NAME}"); // Get the formatted display value. 
			}
			this.logExit(methodName);
			return name;
		},

		/**
		 * @private
		 */
		_displayResultsDialog: function() {
			var methodName = "_displayResultsDialog";
			this.logEntry(methodName);

			var resultColumns = [
				{
					field: "name",
					name: this.messages.multi_edit_batch_results_dialog_itemname_col_hdr,
					width: "40%"
				},
				{
					field: "status",
					name: this.messages.multi_edit_batch_results_dialog_status_col_hdr,
					width: "10%"
				},
				{
					field: "statusMessage",
					name: this.messages.multi_edit_batch_results_dialog_message_col_hdr,
					width: "50%"
				}

			];

			if (this._batchResults) {
				this._batchResults.destroy();
			}

			this._batchResults = new BatchResultsDialog({
				dialogTitle: this.messages.multi_edit_batch_results_dialog_title,
				dialogIntro: this.messages.multi_edit_batch_results_dialog_context_info,
				columns: resultColumns,
				statusItems: this._messages
			});
			this._batchResults.show();

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_updateItemCallback: function(response) {
			var methodName = "_updateItemCallback";
			this.logEntry(methodName);

			if (response && response.fieldErrors && response.fieldErrors.length > 0) {
				var fieldErrorMap = {};
				array.forEach(response.fieldErrors, function(fieldError) {
					this._commonProperties.setFieldError(fieldError.symbolicName, fieldError.errorMessage, fieldError.invalidItems);
					fieldErrorMap[fieldError.symbolicName] = fieldError;
				}, this);

				this._batchStatusDialog.hide();
				this.setMessage(this.messages.multi_edit_properties_invalid_msg, "error");
				setTimeout(lang.hitch(this, function() {
					this.inherited("show", []);
					this.resize();

					// Set the focus to the first invalid field, in the layout order.
					var props = this._commonProperties.getPropertiesJSON(true, true, false);
					array.some(props, function(prop) {
						if (fieldErrorMap[prop.name] == null) {
							return false;
						}
						this._commonProperties.setFieldFocus(prop.name);
						return true;
					}, this);
				}), 500);

			} else {
				if (this._callback) {
					var itemJSON = response.rows[0];
					var updatedItem = ContentItem.createFromJSON(itemJSON, this._repository, null, null);
					this._callback(updatedItem);
				}
				this._updateItemProperties();
			}

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_updateStatusMessage: function(msg) {
			var methodName = "_updateStatusMessage";
			this.logEntry(methodName);

			this.logDebug(methodName, "Displaying status messasge: " + msg);

			if (!this._batchStatusDialog) {
				return;
			}

			var statusMsg = [];

			if (this._itemCount > 0) {
				statusMsg.push("<div>");
				statusMsg.push(idxHtml.escapeHTML(string.substitute(msg, [
					this._itemCount,
					this._numItems
				])));
				statusMsg.push("</div>");

				statusMsg.push("<p><p><div>");
				statusMsg.push(idxHtml.escapeHTML(this._currentItemName));
				statusMsg.push("</div>");
			} else {
				statusMsg.push("<div>");
				statusMsg.push(idxHtml.escapeHTML(msg));
				statusMsg.push("</div>");
			}

			if (this._messages.length > 0) {
				statusMsg.push("<p><p><div>");
				statusMsg.push(idxHtml.escapeHTML(string.substitute(this.messages.add_documents_batch_status_errors_msg, [
					this._messages.length
				])));
				statusMsg.push("</div>");
			}

			if (this._canceled) {
				statusMsg.push("<p><p><div>");
				if (this._verifyingProperties == true) {
					statusMsg.push(idxHtml.escapeHTML(this.messages.multi_edit_batch_status_validation_completing_msg));
				} else {
					statusMsg.push(idxHtml.escapeHTML(this.messages.multi_edit_batch_status_completing_msg));
				}
				statusMsg.push("</div>");
			}

			this._batchStatusDialog.updateStatusMessage(statusMsg.join(""));

			this.logExit(methodName);
		},

		/**
		 * Called when the Cancel button is clicked.
		 */
		onCancel: function() {
			var methodName = "onCancel";
			this.logEntry(methodName);

			this._unlockItemsForEdit();

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_unlockItemsForEdit: function() {
			var methodName = "_unlockItemsForEdit";
			this.logEntry(methodName);

			var unlockItemsForEdit = [];
			array.forEach(this._itemsLockedForEdit, function(lockedItem) {
				if (lockedItem.locked && !lockedItem.deleted) {
					unlockItemsForEdit.push(lockedItem);
				}
			});
			if (unlockItemsForEdit.length > 0) {
				this._repository.unlockItems(unlockItemsForEdit);
			}

			this.logExit(methodName);
		},

		destroy: function() {
			var methodName = "destroy";
			this.logEntry(methodName);

			if (this._tooltip) {
				this._tooltip.destroy();
				delete this._tooltip;
			}
			if (this._dialog) {
				this._dialog.destroyRecursive();
				delete this._dialog;
			}
			if (this._batchStatusDialog) {
				this._batchStatusDialog.destroyRecursive();
				delete this._batchStatusDialog;
			}
			if (this._batchResults) {
				this._batchResults.destroyRecursive();
				delete this._batchResults;
			}
			this.inherited(arguments);
			this.logExit(methodName);
		}
	});
});

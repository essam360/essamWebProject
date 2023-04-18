/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/_base/Deferred",
	"dojo/DeferredList",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/Repository",
	"ecm/model/ContentClass",
	"ecm/model/EntryTemplate",
	"ecm/model/EntryTemplatePropertyOptions",
	"ecm/widget/CheckBox",
	"ecm/widget/RadioButton",
	"ecm/widget/CommonPropertiesPane",
	"ecm/widget/ContentClassSelector",
	"ecm/widget/HoverHelp",
	"idx/layout/BorderContainer",
	"dojo/text!./templates/PropertiesPane.html"
],

function(declare, //
array, //
lang, //
aspect, //
domClass, //
domConstruct, //
domStyle, //
Deferred, //
DeferredList, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
ContentPane, //
LoggerMixin, //
MessagesMixin, //
Repository, //
ContentClass, //
EntryTemplate, //
EntryTemplatePropertyOptions, //
CheckBox, //
RadioButton, //
CommonPropertiesPane, //
ContentClassSelector, //
HoverHelp, //
BorderContainer, //
template) {

	/**
	 * @name ecm.widget.entryTemplateBuilder.PropertiesPane
	 * @class Provides a widget that has the entry template properties settings.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.entryTemplateBuilder.PropertiesPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.entryTemplateBuilder.PropertiesPane */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.Repository}.
		 */
		repository: null,

		/**
		 * Instance of {@link ecm.model.EntryTemplate}.
		 */
		entryTemplate: null,

		/**
		 * Instance of {@link ecm.model.ContentClass}.
		 */
		contentClass: null,

		/**
		 * The entry template type string. One of the <code>EntryTemplate.TYPE</code> object type values.
		 */
		type: null,

		/**
		 * Post create.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this._initialized = false;
			this.inherited(arguments);

			this.propertiesShow.setHoverHelp(this.propertiesShowHoverHelp);
			this.propertiesHide.setHoverHelp(this.propertiesHideHoverHelp);

			this.own(aspect.after(this.contentClassSelector, "onLoaded", lang.hitch(this, function() {
				this._onCCSelectedListener = aspect.after(this.contentClassSelector, "onContentClassSelected", lang.hitch(this, function(contentClass) {
					// Retrieve the required content class settings on the original class before cloning it, so we can leverage the repository object's class cache.
					var deferreds = [];
					var deferred = new Deferred();
					contentClass.retrieveAttributeDefinitions(lang.hitch(this, function(deferred) {
						deferred.resolve();
					}, deferred));
					deferreds.push(deferred);

					deferred = new Deferred();
					contentClass.retrieveDefaultInstancePermissions(lang.hitch(this, function(deferred) {
						deferred.resolve();
					}, deferred), true);
					deferreds.push(deferred);

					var deferredList = new DeferredList(deferreds);
					deferredList.then(lang.hitch(this, function() {
						// Send original content class from repository around (without ET changes), it's used by the layout editor for property information
						this.onSetOriginalContentClass(contentClass);
						// Clone the content class so we can make changes to the attribute definitions without affecting the real class.
						var cloneContentClass = contentClass.clone();

						if (this.repository._isCM() && cloneContentClass.childComponentDefinitions) {
							if (this.clearLayout.get("disabled")) {
								this._displayApplyToMessage(this.messages.entry_template_applied_child_component);
							} else {
								this._displayApplyToMessage(this.messages.entry_template_applied_no_child_component_support);
							}
						} else {
							this._displayApplyToMessage();
						}

						// Remove child components - not supported yet.
						if (this.repository._isCM()) {
							if (cloneContentClass.childComponentDefinitions && cloneContentClass.childComponentDefinitions.length > 0) {
								cloneContentClass.hadChildComponentDefinitions = true;
							}
							cloneContentClass.childComponentDefinitions = null;
						}

						this.set("contentClass", cloneContentClass);
						this.onSetContentClass(cloneContentClass);
						var existingEntryTemplate = null;
						if (this.entryTemplate && this.entryTemplate.addClassName) {
							if (this.entryTemplate.addClassName == cloneContentClass.id) {
								existingEntryTemplate = this.entryTemplate;
								if (this.entryTemplate.markup) {
									this.setClearLayout(false); // enable the "Clear" button for the customer layout
								}
							} else {
								// A new class was selected, wipe out the existing property settings from the entry template
								this.entryTemplate.propertiesOptions = null;
							}
						}
						// If editing an existing entry template, apply the et property options at render time for UI display
						this._commonProperties.createRendering(cloneContentClass, existingEntryTemplate, null, "entryTemplateBuilder", true, true, null);
					}));
				}), true);

				if (this._classToSelect) {
					if (this.entryTemplate.mode == "copy") {
						this.contentClassSelector.setInitialSelection(this._classToSelect);
					} else { // "edit"
						this.contentClassSelector.setSelected(this._classToSelect);
					}
					delete this._classToSelect;
				}
			}), true));

			this.own(aspect.after(this._commonProperties, "onCompleteRendering", lang.hitch(this, "onCompleteRendering"), true));
			this.own(aspect.after(this._commonProperties, "onMarkingPropertyChange", lang.hitch(this, "onMarkingPropertyChange"), true));
			this.own(aspect.after(this._commonProperties, "onChange", lang.hitch(this, "_onFieldChange"), true));
			this.own(aspect.after(this._commonProperties, "onPropertyRendered", lang.hitch(this, "onPropertyRendered"), true));
			this.own(aspect.after(this._commonProperties, "onClearedRendering", lang.hitch(this, "onClearedRendering"), true));
			this.logExit("postCreate");
		},

		/**
		 * @private Displays the apply to message.
		 */
		_displayApplyToMessage: function(message) {
			if (message) {
				this.applyToInlineMessageText.innerHTML = message;
				domClass.remove(this.applyToInlineMessageDiv, "dijitHidden");
			} else {
				domClass.add(this.applyToInlineMessageDiv, "dijitHidden");
			}
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			this.inherited(arguments);
			this._cleanUp();
			this._removeOnContentClassSelectedListener();
		},

		/**
		 * @private Removes content class selector's onContentClassSelected listener.
		 */
		_removeOnContentClassSelectedListener: function() {
			if (this._onCCSelectedListener) {
				this._onCCSelectedListener.remove();
				this._onCCSelectedListener = null;
			}
		},

		/**
		 * @private Loads the data.
		 */
		_loadData: function() {
			var repository = this._getRepository();

			if (this.type == EntryTemplate.TYPE.DOCUMENT) {
				this.contentClassSelector.setVisibleOnlyForDocument(true);
			} else if (this.type == EntryTemplate.TYPE.FOLDER) {
				this.contentClassSelector.setVisibleOnlyForFolder(true);
			}
			if (this.entryTemplate.mode == "add") {
				this.propertiesShow.set("checked", true);

				if (this.type == EntryTemplate.TYPE.DOCUMENT) {
					this.contentClassSelector.filterType = "createDocument";
					if (repository._isP8()) {
						this._classToSelect = "Document";
					}
					this.contentClassSelector.setRootClassId("Document");
				} else if (this.type == EntryTemplate.TYPE.FOLDER) {
					this.contentClassSelector.filterType = "createFolder";
					if (repository._isP8()) {
						this._classToSelect = "Folder";
					}
					this.contentClassSelector.setRootClassId("Folder");
				}
			} else { // "edit" or "copy"
				if (this.entryTemplate.allowUserSetPropertyValues) {
					this.propertiesShow.set("checked", true);
				} else {
					this.propertiesHide.set("checked", true);
				}
				this._classToSelect = this.entryTemplate.addClassName;
				if (this.entryTemplate.mode == "copy") {
					if (this.type == EntryTemplate.TYPE.DOCUMENT) {
						this.contentClassSelector.filterType = "createDocument";
						this.contentClassSelector.setRootClassId("Document");
					} else if (this.type == EntryTemplate.TYPE.FOLDER) {
						this.contentClassSelector.filterType = "createFolder";
						this.contentClassSelector.setRootClassId("Folder");
					}
				} else { // "edit"
					// Pass "editItem" to load all classes. This supports use cases like
					// editing a non-doc model entry template under CM environments that
					// restrict adds to use document model item types only.
					// Edit mode does not allow the class to be changed,
					this.contentClassSelector.filterType = "editItem";
					this.contentClassSelector.setRootClassId(this.entryTemplate.addClassName);
				}
			}

			if (repository._isP8()) {
				this.contentClassSelector.setExcludedItems(this.contentClassSelector.p8FormsExcludeList);
			}
			this.contentClassSelector.setRepository(repository);

			// Prevent the class from being changed when editing an entry template.
			this.contentClassSelector.setDisabled(this.entryTemplate.mode == "edit");
		},

		/**
		 * Set the destination. Called by the SettingsPane to set the current destination.
		 * 
		 * @param destination
		 *            The selected destination {@link ecm.model.SelectedFolder}.
		 */
		setDestination: function(destination) {
			var repos = this._getRepository();
			if (destination && destination.item && destination.item.repository && repos.id != destination.item.repository.id) {
				this._destinationRepository = destination.item.repository;
				this.contentClassSelector.setRepository(this._getRepository());
			}
		},

		/**
		 * @private Returns the repository.
		 */
		_getRepository: function() {
			if (this._destinationRepository) {
				return this._destinationRepository;
			} else if (this.entryTemplate.mode != "add" && this.entryTemplate.targetRepository) {
				return this.entryTemplate.targetRepository;
			} else {
				return this.repository;
			}
		},

		/**
		 * Set the type. Called by the SettingsPane to set the type for the content class selector.
		 */
		setType: function(type) {
			if (this.type != type) {
				this.type = type;
				if (!this._initialized) {
					this._loadData();

				} else {
					this._removeOnContentClassSelectedListener();
					if (this.repository._isP8()) {
						this.contentClassSelector.setExcludedItems(this.contentClassSelector.p8FormsExcludeList);
					}
					if (this.type == EntryTemplate.TYPE.DOCUMENT) {
						this.contentClassSelector.filterType = "createDocument";
						this.contentClassSelector.setRootClassId("Document");
						this.contentClassSelector.setVisibleOnlyForDocument(true);
						if (this.repository._isP8()) {
							this._classToSelect = "Document";
						}
					} else if (this.type == EntryTemplate.TYPE.FOLDER) {
						this.contentClassSelector.filterType = "createFolder";
						this.contentClassSelector.setRootClassId("Folder");
						this.contentClassSelector.setVisibleOnlyForFolder(true);
						if (this.repository._isP8()) {
							this._classToSelect = "Folder";
						}
					}
				}
			}
		},

		/**
		 * Fired when the content class is set and sends around a cloned content class with some modifications from the
		 * builder.
		 */
		onSetContentClass: function(contentClass) {
		},

		/**
		 * Fired when the content class is set and sends around the original content class from the repository. Has no
		 * ET settings applied.
		 */
		onSetOriginalContentClass: function(originalContentClass) {
		},

		/**
		 * @private Called when the edit layout button is clicked. Displays the layout editor.
		 */
		_onEditLayout: function() {
			this.onOpenDesigner();
		},

		/**
		 * Fired when the layout designer should be opened in the view.
		 */
		onOpenDesigner: function() {
		},

		/**
		 * @private Called when the clear layout button is clicked. Clears any markup.
		 */
		_onClearLayout: function() {
			this.onClearDesigner();
		},

		/**
		 * Fired when the layout designer information should be cleared.
		 */
		onClearDesigner: function() {
		},

		/**
		 * Called to update the attribute definition meta-data from the designer settings and re-render the properties
		 * table.
		 * 
		 * @param contentClass
		 *            An {@link ecm.model.ContentClass} object with updated attribute meta-data.
		 */
		updateContentClass: function(contentClass) {
			var existingEntryTemplate = null; // entry template settings are already factored into the content class attribute definitions
			this._commonProperties.createRendering(this.contentClass, existingEntryTemplate, null, "entryTemplateBuilderSaveLayout", true, true, null);
		},

		/**
		 * Called to enable/disable the Clear layout button.
		 * 
		 * @param True
		 *            If the clear layout button should be disabled.
		 */
		setClearLayout: function(disabled) {
			this.clearLayout.set("disabled", disabled);

			if (this.repository._isCM() && this.get("contentClass") && this.get("contentClass").hadChildComponentDefinitions) {
				if (this.clearLayout.get("disabled")) {
					this._displayApplyToMessage(this.messages.entry_template_applied_child_component);
				} else {
					this._displayApplyToMessage(this.messages.entry_template_applied_no_child_component_support);
				}
			} else {
				this._displayApplyToMessage();
			}
		},

		/**
		 * Called to reset the selected content class settings on the properties pane.
		 */
		resetContentClass: function() {
			this._commonProperties.clearRendering();

			// reload the content class from the class selector, it will have original settings
			var originalContentClass = this.contentClassSelector.selectedContentClass;
			this.onSetOriginalContentClass(originalContentClass);

			// Clone the content class so we can make changes to the attribute definitions without affecting the real class.
			var cloneContentClass = originalContentClass.clone();
			// Remove child components - not supported yet.
			if (this.repository._isCM()) {
				if (cloneContentClass.childComponentDefinitions && cloneContentClass.childComponentDefinitions.length > 0) {
					cloneContentClass.hadChildComponentDefinitions = true;
				}
				cloneContentClass.childComponentDefinitions = null;
			}

			this.set("contentClass", cloneContentClass);
			this.onSetContentClass(cloneContentClass);

			this._commonProperties.createRendering(cloneContentClass, null, null, "entryTemplateBuilder", true, true, null);
		},

		/**
		 * This event method is called after a property has been rendered. Adds the extra columns for displaying whether
		 * the property is hidden and/or read only.
		 * 
		 * @param row
		 *            The rendered property row that contains the field.
		 * @param field
		 *            The field widget that was rendered in the property row.
		 */
		onPropertyRendered: function(row, field) {
			// Add the read only cell.
			if (!this._readOnlyCells) {
				this._readOnlyCells = [];
			}
			this._hasReadOnly = true;
			var tdReadOnly = domConstruct.create("td", {
				'class': 'propertyRowReadOnly'
			}, row);
			this._readOnlyCells.push(tdReadOnly);
			if (field.attributeDefinition.readOnly) {
				var readOnlyLabel = domConstruct.create("div", {
					'class': "labelReadOnly", // Display the read only label text in gray
					innerHTML: ecm.messages.entry_template_properties_read_only
				}, tdReadOnly);
			} else {
				var readOnlyLabel = domConstruct.create("div", {
					'class': "labelReadOnly"
				}, tdReadOnly);
			}
			tdReadOnly = null;

			// Add the hidden cell.
			if (!this._hiddenCells) {
				this._hiddenCells = [];
			}
			this._hasHidden = true;
			var tdHidden = domConstruct.create("td", {
				'class': 'propertyRowHidden'
			}, row);
			this._hiddenCells.push(tdHidden);
			if (field.attributeDefinition.hidden) {
				var hiddenLabel = domConstruct.create("div", {
					'class': "labelReadOnly", // Display the hidden label text in gray
					innerHTML: ecm.messages.entry_template_properties_hidden
				}, tdHidden);
			} else {
				var hiddenLabel = domConstruct.create("div", {
					'class': "labelReadOnly"
				}, tdHidden);
			}
			tdHidden = null;
		},

		/**
		 * This event method is called when properties rendering completes.
		 */
		onCompleteRendering: function() {
			this._initialized = true;
			// Hide the read only label column if there are no read only properties.
			if (!this._hasReadOnly) {
				array.forEach(this._readOnlyCells, function(readOnlyCell) {
					domStyle.set(readOnlyCell, "display", "none");
				}, this);
			}
			// Hide the hidden label column if there are no hidden properties.
			if (!this._hasHidden) {
				array.forEach(this._hiddenCells, function(hiddenCell) {
					domStyle.set(hiddenCell, "display", "none");
				}, this);
			}
		},

		/**
		 * @private
		 */
		_cleanUp: function() {
			delete this._hasReadOnly;
			if (this._readOnlyCells) {
				for (var i = 0; i < this._readOnlyCells.length; i++) {
					this._readOnlyCells[i] = null;
				}
			}
			delete this._readOnlyCells;

			delete this._hasHidden;
			if (this._hiddenCells) {
				for (var i = 0; i < this._hiddenCells.length; i++) {
					this._hiddenCells[i] = null;
				}
			}
			delete this._hiddenCells;
		},

		/**
		 * This event method is called after a properties rendering has been cleared.
		 */
		onClearedRendering: function() {
			this._cleanUp();
		},

		/**
		 * This event method is called when a displayed marking property value is changed. (FileNet P8 only)
		 */
		onMarkingPropertyChange: function() {
		},

		/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._initialized) {
				this.onFieldChange();
			}
		},

		/**
		 * Fired when a field changes value.
		 */
		onFieldChange: function() {
			this.logEntry("onFieldChange");
		},

		/**
		 * Loads the model with the screen data.
		 */
		loadModel: function() {
			this.entryTemplate.allowUserSetPropertyValues = this.propertiesShow.get("checked");

			//the content class might not be available immediately
			if (this.contentClass) {
				this.entryTemplate.addClassName = this.contentClass.id;
				this.entryTemplate.addClassLabel = this.contentClass.name;
				this.entryTemplate.addClassDescription = this.contentClass.name;

				this.entryTemplate.propertiesOptions = [];
				// Need to use the attribute definition list from the common properties display because it maintains the order
				for ( var i in this._commonProperties.attributeDefinitions) {
					var attr = this._commonProperties.attributeDefinitions[i];
					if (!attr.system && this._isSupportedDataType(attr.dataType) && !this._isApplicationProperty(attr.id)) {
						var propertyOptions = new EntryTemplatePropertyOptions({
							id: attr.id,
							name: attr.name,
							dataType: attr.dataType,
							defaultValue: attr.defaultValue,
							required: attr.required,
							readOnly: attr.readOnly,
							hidden: attr.hidden,
							cardinality: attr.cardinality
						});
						this.entryTemplate.propertiesOptions.push(propertyOptions);
					}
				}
			}
		},

		/**
		 * @private
		 */
		_isSupportedDataType: function(dataType) {
			if (dataType == "xs:binary") {
				return false;
			} else if (dataType == "xs:object") {
				return false;
			} else {
				return true;
			}
		},

		/**
		 * @private
		 */
		_isApplicationProperty: function(id) {
			if (id == "EntryTemplateId") {
				return true;
			} else if (id == "EntryTemplateObjectStoreName") {
				return true;
			} else if (id == "EntryTemplateLaunchedWorkflowNumber") {
				return true;
			} else if (id == "ComponentBindingLabel") {
				return true;
			} else if (id == "IgnoreRedirect") {
				return true;
			} else {
				return false;
			}
		}
	});
});

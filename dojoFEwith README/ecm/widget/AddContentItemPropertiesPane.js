/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/window",
	"dojo/string",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/window",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/TextBox",
	"../Messages",
	"../model/AttributeDefinition",
	"../model/ContentClass",
	"./CheckBox",
	"./CommonPropertiesPane",
	"./ContentClassSelector",
	"dojo/text!./templates/AddContentItemPropertiesPane.html"
],

function(declare, //
lang, //
array, //
win, //
string, //
aspect, //
domClass, //
domConstruct, //
dojoWin, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
TextBox, //
Messages, //
AttributeDefinition, //
ContentClass, //
CheckBox, //
CommonPropertiesPane, //
ContentClassSelector, //
template) {
	
	

	/**
	 * @name ecm.widget.AddContentItemPropertiesPane
	 * @class Provides the edit properties pane that is used in the {@link ecm.widget.dialog.AddContentItemDialog} and
	 *        {@link ecm.widget.dialog.CheckInDialog} widgets. This pane is used to select the content class and enter
	 *        property values.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.AddContentItemPropertiesPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.AddContentItemPropertiesPane.prototype */
		templateString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,
		_contentClass: null,
		_addContentItemDialog: null,
		_classSelectorLoaded: false,
		_classSelectorRepository: null,
		repository: null,
        
		excludedItems: null,
		/**
		 * A string value of the properties pane class to be created.
		 * 
		 * @since 2.0.3
		 */
		commonPropertiesPaneClass: "ecm/widget/CommonPropertiesPane",

		postCreate: function() {
			this.inherited(arguments);

			this._onContentClassClearSelectionHandler = aspect.after(this._contentClassSelector, "clearSelection", lang.hitch(this, function() {
				// When a class is no longer selected, clear the content class and rendering.
				delete this._contentClass;
				this.clearRendering();
			}), true);
		},

		destroy: function() {
			this.doCleanup();
			if (this._onLoadedHandler) {
				this._onLoadedHandler.remove();
				delete this._onLoadedHandler;
			}
			if (this._onContentClassSelectedHandler) {
				this._onContentClassSelectedHandler.remove();
				delete this._onContentClassSelectedHandler;
			}
			if (this._onContentClassClearSelectionHandler) {
				this._onContentClassClearSelectionHandler.remove();
				delete this._onContentClassClearSelectionHandler;
			}
			delete this._contentClass;
			delete this._addContentItemDialog;
			delete this._classSelectorRepository;
			delete this.repository;
			this.inherited(arguments);
		},

		/**
		 * Stores a reference to the parent dialog widget and connects events.
		 * 
		 * @param addContentItemDialog
		 *            The parent dialog widget. A {@link ecm.widget.dialog.AddContentItemDialog} or
		 *            {@link ecm.widget.dialog.CheckInDialog}.
		 */
		setAddContentItemDialog: function(addContentItemDialog) {
			this._addContentItemDialog = addContentItemDialog;
			if (addContentItemDialog.repository.type == "box") {
				this.own(aspect.after(this._addContentItemDialog.addContentItemGeneralPane, "onContentSourceTypeChange", lang.hitch(this, function() {
					var field = this._commonProperties ? this._commonProperties.getFieldWithName(this.getTitlePropertyName()) : null;
					if (field && field.setDisableNoExtension) {
						var isExternalURL = this._addContentItemDialog.addContentItemGeneralPane.getContentSourceType() == "ExternalURL";
						field.setDisableNoExtension(isExternalURL);
					}
				}), true));
			}
			this.own(aspect.after(this._addContentItemDialog.addContentItemGeneralPane, "onFileInputChange", lang.hitch(this, function() {
				// If the file name will be used for the title for a multiple document add, 
				// then the controls need to be re-rendered to disable the title property field.
				if (this._addContentItemDialog.repository && this.useFileNameForMultiAdd(this._addContentItemDialog.repository)) {
					if (!this._fileNameUsedForMultiAdd) {
						this._fileNameUsedForMultiAdd = true;
						if (this._addContentItemDialog.repository && this._addContentItemDialog._typeDocument && this._contentClass) {
							// instruct dialog to not re-render security
							this._addContentItemDialog._doNotUpdateSecurity = true;
							this._renderProperties(this._contentClass, this._addContentItemDialog.repository, this._addContentItemDialog._typeDocument);
						}
					}
				} else {
					// If the fields were re-rendered for using the file name for multiple document add,
					// now render them for the single document add case.  
					if (this._fileNameUsedForMultiAdd) {
						delete this._fileNameUsedForMultiAdd;
						if (this._addContentItemDialog.repository && this._addContentItemDialog._typeDocument && this._contentClass) {
							// instruct dialog to not re-render security
							this._addContentItemDialog._doNotUpdateSecurity = true;
							this._renderProperties(this._contentClass, this._addContentItemDialog.repository, this._addContentItemDialog._typeDocument);
						}
					}
				}
			}), true));
		},

		/**
		 * Tests if the file name should be used as the title when adding multiple documents.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 * @return {Boolean} A value of <code>true</code> if the file name should be used as the title for each
		 *         document, otherwise <code>false</code>.
		 */
		useFileNameForMultiAdd: function(repository) {
			var useFileName = false;
			var titlePropertyName = this.getTitlePropertyName();
			if (titlePropertyName) {
				// If we know the data type of the title property, it must be a string data type.
				var attrDef = this._contentClass && this._contentClass.attributeDefinitionsById[titlePropertyName];
				if (!attrDef || !attrDef.dataType || (attrDef.dataType.indexOf && attrDef.dataType.indexOf("xs:string") > -1)) {
					if (repository._isCM()) {
						// For CM, use the file name for the title when adding multiple documents and the title property is "ICM$NAME",
						// or the title property value is required and must be unique, or when docNamePropSetWithFileName is true.
						useFileName = this._addContentItemDialog.addContentItemGeneralPane.hasMultipleDocuments() && (titlePropertyName == "ICM$NAME" || (attrDef && attrDef.required && attrDef.uniqueValues) || repository.docNamePropSetWithFileName);
					} else {
						// Always use the file name for the title for the other repository types when adding multiple documents.
						useFileName = this._addContentItemDialog.addContentItemGeneralPane.hasMultipleDocuments();
					}
				}
			}
			return useFileName;
		},

		/**
		 * @private
		 */
		_getTeamspaceInfo: function(teamspace) {
			var itemList = null;
			var classes = null;
			var defaultClass = null;
			var hasDefault = true;
			if (teamspace && this._addContentItemDialog._typeDocument && !teamspace.addAllowAllClasses && (teamspace.type == ecm.model.Teamspace.RUNTIME || teamspace.type == ecm.model.Teamspace.INSTANCE)) {
				// Build the array of class id's.
				classes = teamspace.contentClasses;
				var defaultTeamspaceClass = teamspace.defaultClass;
				if (classes.length > 0) {
					itemList = [];
				}
				for (var i = 0; i < classes.length; i++) {
					itemList[i] = classes[i].id;
					if (defaultTeamspaceClass == itemList[i])
						defaultClass = classes[i];
				}
				// If no default class in the teamspace, use the first class.
				if (!defaultClass && itemList && itemList.length > 0) {
					defaultClass = classes[0];
					hasDefault = false;
				}
			} else {
				hasDefault = false;
			}
			return {
				defaultClass: defaultClass,
				hasDefault: hasDefault,
				itemList: itemList
			};
		},

		/**
		 * For IBM Content Manager repositories, modifies the list of class choices based on whether or not a content
		 * file is saved.
		 */
		showContentContentClasses: function() {
			if (this._classSelectorRepository && this._classSelectorRepository._isCM() && this._addContentItemDialog._typeDocument) {
				var fileName = this._addContentItemDialog.addContentItemGeneralPane.getInputFileName();
				var fileSelected = ((fileName != null) && (fileName != "")) || this._addContentItemDialog.addContentItemGeneralPane.hasExternalFiles();
				var selectingFile = (this._addContentItemDialog.addContentItemGeneralPane.getContentSourceType() == "Document");
				var hasFile = (this._addContentItemDialog._checkin && this._addContentItemDialog._item && this._addContentItemDialog._item.hasContent());

				// Restrict the class list depending on whether or not a file is already selected,
				// or will be selected (content source type "Document"), or the item already has a file (checkin).
				this._contentClassSelector.setVisibleOnlyIfStoresContent(fileSelected || selectingFile || hasFile);
			}
		},

		/**
		 * @private
		 */
		_renderClassSelector: function(repository, objectStore, filterType) {
			this._contentClassSelector.filterType = filterType;
			if (!this._classSelectorRepository || (this._classSelectorRepository.id !== repository.id)) {
				this._classSelectorRepository = repository;
				this._classSelectorLoaded = false;
			}
			if (!this._classSelectorLoaded) {
				if (this._classSelectorRepository._isP8()) {
					this._contentClassSelector.setExcludedItems(this._contentClassSelector.p8FormsExcludeList);
				}
				
				this._contentClassSelector.setObjectStore(objectStore);
				this._contentClassSelector.setRepository(this._classSelectorRepository);

				if (this._addContentItemDialog.addContentItemGeneralPane._unfiled.checked) {
					this._contentClassSelector.setFilterHierarchicalItemTypes(true);
				} else {
					this._contentClassSelector.setFilterHierarchicalItemTypes(false);
				}

				this._classSelectorLoaded = true;
			} else {
				var selectedClass = this._contentClassSelector.getSelected();

				if (selectedClass) {
					// If the last rendered class _contentClass is not null and matches the selected class,
					// we don't need to re-render the same properties. Skip re-selecting the class.
					if (!(this._contentClass && (this._contentClass.id == selectedClass.id))) {
						this._contentClassSelector.setSelected(selectedClass);
					}
				}
			}
		},

		/**
		 * Assigns a new content class and clears any error message from the previously selected class.
		 */
		setContentClass: function(contentClass) {
			this._contentClass = contentClass;
			this._clearClassErrorMessage();
		},

		applySourceItem: function(sourceItem) {
			this.setSourceItem(sourceItem);
			if (sourceItem) {
				var contentClass = this._addContentItemDialog._entryTemplate ? this._contentClass : sourceItem.getContentClass();
				if (this._contentClass.id != contentClass.id) {
					this.setContentClass(contentClass);
					this._contentClassSelector.setSelected(contentClass);
				} else {
					var repository = this._addContentItemDialog.repository;
					var typeDocument = this._addContentItemDialog._typeDocument;
					this._renderProperties(contentClass, repository, typeDocument);
				}
			}
		},

		setSourceItem: function(sourceItem) {
			this._sourceItem = sourceItem;
			if (this._commonProperties)
				this._commonProperties._sourceItem = sourceItem;
		},

		/**
		 * Renders the add content item properties pane.
		 */
		createRendering: function(parentFolder) {
			var repository = this._addContentItemDialog.repository;
			var typeDocument = this._addContentItemDialog._typeDocument;
			var filterType = this._addContentItemDialog._filterType;
			var rootClassId = typeDocument ? (repository._isBox() ? "file" : "Document") : (repository._isBox() ? "folder" : "Folder");
			
			this._contentClassSelector.parentFolder = parentFolder;

			if (this._addContentItemDialog._useTemplate) {
				var entryTemplate = this._addContentItemDialog._entryTemplate;
				if (entryTemplate) {
					if (this._contentClassTextBoxTooltip) {
						this._contentClassTextBoxTooltip.set("label", entryTemplate.addClassDescription);
					}
					this._contentClassNameTextBox.set("value", entryTemplate.addClassLabel);
					this.setContentClass(repository.getContentClass(entryTemplate.addClassName, entryTemplate.objectStore));
					this._renderProperties(this._contentClass, repository, typeDocument);
				}
			} else {
				var teamspaceInfo = this._getTeamspaceInfo(this._addContentItemDialog._teamspace);
				var itemList = teamspaceInfo.itemList;

				var item = this._addContentItemDialog._item || this._sourceItem;
				if (item) {
					this.setContentClass(item.getContentClass());

					this._contentClassSelector.filterType = filterType;
					this._contentClassSelector.set("defaultToFirstItem", false);
					this._contentClassSelector.set("itemList", itemList);

					if (this._onLoadedHandler) {
						this._onLoadedHandler.remove();
						delete this._onLoadedHandler;
					}
					this._onLoadedHandler = aspect.after(this._contentClassSelector, "onLoaded", lang.hitch(this, function() {
						// Remove the "Document" option if checking in a CM document with item type classification "Item".
						if (this._addContentItemDialog._checkin && this._addContentItemDialog.repository._isCM() && this._addContentItemDialog._item && (this._addContentItemDialog._item.getContentClass().classification == ecm.model.ContentClass.CLASSIFICATION.ITEM)) {
							this._addContentItemDialog.addContentItemGeneralPane._contentSourceType.removeOption("Document");
							this._addContentItemDialog.addContentItemGeneralPane.onContentSourceTypeChange();
						}

						if (repository.type == "cm") {
							if (this._addContentItemDialog._checkin) {
								this._contentClassSelector.filterTemplateName = this._contentClass.id;
							}

							this.showContentContentClasses();

							if (this._addContentItemDialog._typeDocument) {
								this._contentClassSelector.setVisibleOnlyForDocument(true);
							} else {
								this._contentClassSelector.setVisibleOnlyForFolder(true);
							}
						}

						this._contentClassNameTextBox.set("value", this._contentClass.name);

						if (this._onContentClassSelectedHandler) {
							this._onContentClassSelectedHandler.remove();
							delete this._onContentClassSelectedHandler;
						}
						this._onContentClassSelectedHandler = aspect.after(this._contentClassSelector, "onContentClassSelected", lang.hitch(this, function(contentClass) {
							this.setContentClass(contentClass);
							this._renderProperties(contentClass, repository, typeDocument);
						}), true);
						// If the class is available in the control select it.
						var classNode
						try{
						    classNode = this._contentClassSelector._tree.getNodesByItem(this._contentClass)[0];
					    }
						catch(e)
						{
							
						}
						if (classNode) {
							this._contentClassSelector.setSelected(this._contentClass);
						} else { // ...else the class is not currently available in the class selector.
							// Set the label and render the properties.
							this._contentClassSelector.setLabel(this._contentClass.name);
							this._renderProperties(this._contentClass, repository, typeDocument);
						}
					}), true);

					if (repository.type == "cmis") {
						// Get the root class if this is cmis. We need to do this to see if the class is instantiable.
						var classes = [];
						if (rootClassId == "Document") {
							classes.push("cmis:document");
						} else {
							classes.push("cmis:folder");
						}
						repository.retrieveContentClassList(lang.hitch(this, function(classList) {
							this._contentClassSelector.setRootClass(classList[0]);
							this._renderClassSelector(repository, item.objectStore, filterType);
						}), classes);
					} else {
						// Set this option last. It may render the control based on the options we need to set above.
						this._contentClassSelector.setRootClassId(rootClassId);
						this._renderClassSelector(repository, item.objectStore, filterType);
					}
				} else if (repository.type == "box") {
					if (repository.contentClassCache) {
						if (typeDocument) {
							this._contentClass = repository.getContentClass("file");
						} else {
							this._contentClass = repository.getContentClass("folder");
						}
						this._renderProperties(this._contentClass, repository, typeDocument, lang.hitch(this, function() {
							this._fileNameUsedForMultiAdd = (this._addContentItemDialog.repository && this.useFileNameForMultiAdd(this._addContentItemDialog.repository));
						}));
					} else {
						repository.retrieveContentClassList(lang.hitch(this, function() {
							if (typeDocument) {
								this._contentClass = repository.getContentClass("file");
							} else {
								this._contentClass = repository.getContentClass("folder");
							}
							this._renderProperties(this._contentClass, repository, typeDocument, lang.hitch(this, function() {
								this._fileNameUsedForMultiAdd = (this._addContentItemDialog.repository && this.useFileNameForMultiAdd(this._addContentItemDialog.repository));
							}));
						}));
					}
				} else if (repository.type == "od") {
					// Use a different context (odImport) when retrieving the content class for an add
					if (repository.contentClassCache) {
						this._contentClass = repository._getContentClass({
							classId: parentFolder.id,
							formType: "odImport"
						});
						this._renderProperties(this._contentClass, repository, typeDocument);
					} else {
						repository.retrieveContentClassList(lang.hitch(this, function() {
							this._contentClass = repository._getContentClass({
								classId: parentFolder.id,
								formType: "odImport"
							});
							this._renderProperties(this._contentClass, repository, typeDocument);
						}));
					}
				} else {
					var defaultClass = teamspaceInfo.defaultClass;
					var hadDefault = teamspaceInfo.hasDefault;
					this._contentClassSelector.filterType = filterType;
					this._contentClassSelector.set("defaultToFirstItem", false);
					this._contentClassSelector.set("itemList", itemList);

					if ((itemList == null || !hadDefault) && repository.type == "cm" && !this._addContentItemDialog.hasDaejaContent() && parentFolder && lang.isFunction(parentFolder.isFolder) && parentFolder.isFolder()) {
						defaultClass = parentFolder.getContentClass();
					}

					if (!defaultClass && this._addContentItemDialog._defaultContentClass) {
						defaultClass = this._addContentItemDialog._defaultContentClass;
					}

					if (this._onLoadedHandler) {
						this._onLoadedHandler.remove();
						delete this._onLoadedHandler;
					}
					this._onLoadedHandler = aspect.after(this._contentClassSelector, "onLoaded", lang.hitch(this, function() {
						if (repository.type == "cm") {
							this.showContentContentClasses();

							if (this._addContentItemDialog._typeDocument) {
								this._contentClassSelector.setVisibleOnlyForDocument(true);
							} else {
								this._contentClassSelector.setVisibleOnlyForFolder(true);
							}
						}
						// Validate the default class.
						if (defaultClass && (repository.type == "p8" || repository.type == "cm" || repository.type == "box")) {
							if (lang.isString(defaultClass)) {
								defaultClass = repository.getContentClass(defaultClass, repository.objectStore);
							}
							if (repository.type == "p8" && (defaultClass.name == "Document" || defaultClass.name == "Folder")) {
								if (typeDocument) {
									this._contentClassSelector.setSelected(defaultClass.name == "Document" ? defaultClass : null);
								} else {
									this._contentClassSelector.setSelected(defaultClass.name == "Folder" ? defaultClass : null);
								}
							} else if (repository.type == "box" && (defaultClass.name == "file" || defaultClass.name == "folder")) {
								if (typeDocument) {
									this._contentClassSelector.setSelected(defaultClass.name == "file" ? defaultClass : null);
								} else {
									this._contentClassSelector.setSelected(defaultClass.name == "folder" ? defaultClass : null);
								}
							} else {
								defaultClass.retrieveAttributeDefinitions(lang.hitch(this, function(attributeDefinitions) {
									if (typeDocument && defaultClass.forFoldersOnly || !typeDocument && defaultClass.notForFolders) {
										defaultClass = null;
									}
									this._contentClassSelector.setSelected(defaultClass);
								}));
							}
						} else {
							this._contentClassSelector.setSelected(defaultClass);
						}
					}), true);

					if (this._onContentClassSelectedHandler) {
						this._onContentClassSelectedHandler.remove();
						delete this._onContentClassSelectedHandler;
					}
					this._onContentClassSelectedHandler = aspect.after(this._contentClassSelector, "onContentClassSelected", lang.hitch(this, function(contentClass) {
						this.setContentClass(contentClass);
						this._renderProperties(contentClass, repository, typeDocument, lang.hitch(this, function() {
							this._fileNameUsedForMultiAdd = (this._addContentItemDialog.repository && this.useFileNameForMultiAdd(this._addContentItemDialog.repository));
							this._addContentItemDialog._onContentClassSelected();
						}));
					}), true);
					if (repository.type == "cmis") {
						// Get the root class if this is cmis. We need to do this to see if the class is instantiable.
						var classes = [];
						if (rootClassId == "Document") {
							classes.push("cmis:document");
						} else {
							classes.push("cmis:folder");
						}
						repository.retrieveContentClassList(lang.hitch(this, function(classList) {
							this._contentClassSelector.setRootClass(classList[0]);
							this._renderClassSelector(this._addContentItemDialog.repository, this._addContentItemDialog._objectStore, filterType);
						}), classes);
					} else {
						// Set this option last. It may render the control based on the options we need to set above.
						this._contentClassSelector.setRootClassId(rootClassId);

						// Only render here if this is not an add, or the repository is not P8 and (not CM or CM with entry templates disabled), or a template is active, or there is no parent folder. 
						// Otherwise postpone loading the class selector control until we determine if entry templates are associated with the folder.
						if (this._addContentItemDialog._checkin || (!repository._isP8() && (!repository._isCM() || !repository.entryTemplatesEnabled)) || this._addContentItemDialog._useTemplate || !parentFolder) {
							this._renderClassSelector(this._addContentItemDialog.repository, this._addContentItemDialog._objectStore, filterType);
						}
					}
				}
			}

			this._contentClassTooltip = new dijit.Tooltip({
				position: [
					"above",
					"below",
					"after",
					"before"
				]
			});
			this.own(aspect.after(this._contentClassNameTextBox, "_onFocus", lang.hitch(this, function() {
				if (this._contentClassTooltip.label.length > 0) {
					this._contentClassTooltip.open(this._contentClassNameTextBox.domNode);
				}
			}), true));
			this.own(aspect.after(this._contentClassNameTextBox, "_onBlur", lang.hitch(this, function() {
				this._contentClassTooltip.close();
			}), true));
			this.own(aspect.after(this._contentClassNameTextBox, "onMouseOver", lang.hitch(this, function() {
				if (this._contentClassTooltip.label.length > 0) {
					this._contentClassTooltip.open(this._contentClassNameTextBox.domNode);
				}
			}), true));
			this.own(aspect.after(this._contentClassNameTextBox, "onMouseOut", lang.hitch(this, function() {
				this._contentClassTooltip.close();
			}), true));
			this.own(aspect.after(this._addContentItemDialog.addContentItemPropertiesTitlePane, "toggle", lang.hitch(this, function(){
				this.resizeCommonProperties();
			})))
		},

		/**
		 * Modifies the parameters passed into the {@link ecm.widget.CommonPropertiesPane} <code>renderProperties</code>
		 * method when it is called, before it is entered.
		 */
		beforeRenderAttributes: function(attributeDefinitions, item, reason, isReadOnly) {
			// When adding multiple documents, use the file name for the title - except if this is a CM repository and the title property is not "ICM$NAME".
			// When the file name is used, turn off the required option on the title property and make it read-only. 
			// It will be filled in with the file name of each document as each document is added. 
			if (this._contentClass && this._contentClass.repository && this.useFileNameForMultiAdd(this._contentClass.repository)) {
				var titlePropertyName = this.getTitlePropertyName();
				array.some(attributeDefinitions, function(attributeDefinition) {
					if (attributeDefinition.id == titlePropertyName) {
						attributeDefinition.required = false;
						attributeDefinition.readOnly = true;
						// Clear the default value.
						// It may have been set by an entry template or EDS, and the file name will be used instead.
						attributeDefinition.defaultValue = [];
						return true;
					}
				});
			}
		},

		onRenderAttributes: function() {
		},

		/**
		 * Modifies the displayed properties after calls into the {@link ecm.widget.CommonPropertiesPane}
		 * <code>renderProperties</code> method exit.
		 */
		afterRenderAttributes: function() {
			// For multiple documents, display a placeholder message in the title field.
			if (this._contentClass && this._contentClass.repository && this.useFileNameForMultiAdd(this._contentClass.repository)) {
				var titlePropertyName = this.getTitlePropertyName();
				if (titlePropertyName && this._commonProperties) {
					if (this._commonProperties.isInstanceOf(ecm.widget.LayoutPropertiesPane)) {
						this._commonProperties.setPropertyPropertyValue(titlePropertyName, "hint", this._messages.add_documents_document_name_is_file_name_hint);

						// The property layout makes only one call to renderAttributes().
						// EDS updates are applied to the existing widgets, so override EDS changes to the title property by intercepting _updateDependentAttributes().
						this.own(aspect.before(this._commonProperties._layoutContentClass, "_updateDependentAttributes", lang.hitch(this, function(newAttributeDefinitions, oldAttributeDefinitions, action) {
							var titlePropertyName = this.getTitlePropertyName();
							array.some(newAttributeDefinitions, function(attributeDefinition) {
								if (attributeDefinition.id == titlePropertyName) {
									attributeDefinition.required = false;
									attributeDefinition.updatedRequired = true;

									attributeDefinition.readOnly = true;
									attributeDefinition.updatedReadOnly = true;

									// Clear the value.
									// It may have been set by an entry template or EDS, and the file name will be used instead.
									attributeDefinition.value = [];
									attributeDefinition.updatedValue = true;

									return true;
								}
							});
						}), true));
					} else {
						var field = this._commonProperties.getFieldWithName(this.getTitlePropertyName());
						if (field) {
							var hintSpan = domConstruct.create("span", {
								'class': "dijitPlaceHolder dijitInputField",
								style: ""
							});
							hintSpan.appendChild(win.doc.createTextNode(this._messages.add_documents_document_name_is_file_name_hint));
							field.textbox.parentNode.appendChild(hintSpan);
						}
					}
				}
			}
		},

		/**
		 * @private
		 */
		_renderProperties: function(contentClass, repository, typeDocument, callback) {
			if (this._renderingClass && this._renderingClass.id == contentClass.id) {
				return;
			}

			contentClass.repository = repository;
			this._renderingClass = contentClass;

			if (this._addContentItemDialog._checkin) {
				var versionControl = contentClass.versionControl;
				if (versionControl != ecm.model.ContentClass.VERSION_CONTROL.OPTIONAL) {
					this._addContentItemDialog.addContentItemGeneralPane._createNewVersionButton.set("disabled", true);
					domClass.add(this._addContentItemDialog.addContentItemGeneralPane._createNewVersionLabel, "labelReadOnly");
					this._addContentItemDialog.addContentItemGeneralPane._replaceExistingVersionButton.set("disabled", true);
					domClass.add(this._addContentItemDialog.addContentItemGeneralPane._replaceExistingVersionLabel, "labelReadOnly");

					if (versionControl == ecm.model.ContentClass.VERSION_CONTROL.ALWAYS) {
						this._addContentItemDialog.addContentItemGeneralPane._createNewVersionButton.set('checked', true);
					} else {
						this._addContentItemDialog.addContentItemGeneralPane._replaceExistingVersionButton.set('checked', true);
					}
				} else {
					this._addContentItemDialog.addContentItemGeneralPane._createNewVersionButton.set("disabled", false);
					domClass.remove(this._addContentItemDialog.addContentItemGeneralPane._createNewVersionLabel, "labelReadOnly");
					this._addContentItemDialog.addContentItemGeneralPane._replaceExistingVersionButton.set("disabled", false);
					domClass.remove(this._addContentItemDialog.addContentItemGeneralPane._replaceExistingVersionLabel, "labelReadOnly");
				}
			}

			if (!this._commonProperties) {
				// Construct the correct properties pane for displaying property controls
				var commonPropertiesClass = this.commonPropertiesPaneClass;
				if (this._addContentItemDialog._entryTemplate && this._addContentItemDialog._entryTemplate.markup) {
					commonPropertiesClass = this._addContentItemDialog._entryTemplate.layoutPropertiesPaneClass;
				}
				var isReadOnly = false;
				if (this._addContentItemDialog._item && this._addContentItemDialog._item.hasPrivilege && this._addContentItemDialog._item.repository && this._addContentItemDialog._item.repository.type == "box") {
					isReadOnly = !this._addContentItemDialog._item.hasPrivilege("privEditProperties");
				}
				require([
					commonPropertiesClass
				], lang.hitch(this, function(cls) {
					this._commonProperties = new cls({
						_sourceItem: this._sourceItem,
						_titlePropertyName: this.getTitlePropertyName()
					});

					if (this._parentFolder && lang.isFunction(this._commonProperties.setParentFolder)) {
						this._commonProperties.setParentFolder(this._parentFolder);
					}

					this._commonPropertiesContainer.set("content", this._commonProperties);

					this.own(aspect.after(this._commonProperties, "onChange", lang.hitch(this, "onChange"), true));
					this.own(aspect.after(this._commonProperties, "onMarkingPropertyChange", lang.hitch(this, "onMarkingPropertyChange"), true));
					this.own(aspect.after(this._commonProperties, "onRetrySave", lang.hitch(this, "onRetrySave"), true));
					this.own(aspect.after(this._commonProperties, "onCompleteRendering", lang.hitch(this, "onCompleteRendering"), true));
					// Setup some attribute rendering features for multi-document add
					this.own(aspect.before(this._commonProperties, "renderAttributes", lang.hitch(this, this.beforeRenderAttributes), true));
					this.own(aspect.after(this._commonProperties, "renderAttributes", lang.hitch(this, this.onRenderAttributes), true));
					this.own(aspect.after(this._commonProperties, "onCompleteRendering", lang.hitch(this, this.afterRenderAttributes), true));

					this._commonProperties.createRendering(contentClass, this._addContentItemDialog._entryTemplate, this._addContentItemDialog._item, this._addContentItemDialog._checkin ? "checkin" : "create", isReadOnly, false, lang.hitch(this, function(attrDefs) {
						delete this._propertiesAreInvalid;
						this._checkExpandProperties(repository, attrDefs);
						if (!typeDocument) {
							this._validateFolderName();
						} else {
							this._validateFileName();
						}
						this.onCompleteRendering();
						delete this._renderingClass;
						if (callback) {
							callback();
						}
					}));
				}), lang.hitch(this, function(response, errorMessages) {
					this._propertiesAreInvalid = true;
					if (lang.isArray(errorMessages) && errorMessages.length > 0 && errorMessages[0].number == "1804") {
						this._classErrorMsg = errorMessages[0];
						this._addContentItemDialog._setErrorMessage(errorMessages[0], false, "text");
					}
					this.onCompleteRendering();
					delete this._renderingClass;
				}));
			} else {
				this._commonProperties.createRendering(contentClass, this._addContentItemDialog._entryTemplate, this._addContentItemDialog._item, this._addContentItemDialog._checkin ? "checkin" : "create", isReadOnly, false, lang.hitch(this, function(attrDefs) {
					delete this._propertiesAreInvalid;
					this._checkExpandProperties(repository, attrDefs);
					if (!typeDocument) {
						this._validateFolderName();
					} else {
						this._validateFileName();
					}
					delete this._renderingClass;
					if (callback) {
						callback();
					}
				}), lang.hitch(this, function(response, errorMessages) {
					this._propertiesAreInvalid = true;
					if (lang.isArray(errorMessages) && errorMessages.length > 0 && errorMessages[0].number == "1804") {
						this._classErrorMsg = errorMessages[0];
						this._addContentItemDialog._setErrorMessage(errorMessages[0], false, "text");
					}
					this.onCompleteRendering();
					delete this._renderingClass;
				}));
			}
		},

		/**
		 * @private
		 */
		_checkExpandProperties: function(repository, attrDefs) {
			// Return if the properties section is already expanded.
			if (this._addContentItemDialog.addContentItemPropertiesTitlePane.open) {
				return;
			}
			// Expand the properties section if this is CM and the content source type is "Item" (content cannot be stored, properties only).
			var expandProperties = (repository._isCM() && this._addContentItemDialog.addContentItemGeneralPane.getContentSourceType() == "Item");

			if (!expandProperties) {
				// Expand the properties section if there is an empty required property.
				expandProperties = array.some(attrDefs, function(attrDef) {
					var defaultValue = attrDef.defaultValue;
					if (attrDef.required && (!defaultValue || defaultValue.length == 0)) {
						return true;
					}
				});
			}
			if (expandProperties) {
				this._addContentItemDialog.addContentItemPropertiesTitlePane.toggle();
			}
		},

		/**
		 * @private
		 */
		_validateFolderName: function() {
			// For folders, validate the folder name.
			var field = this._commonProperties ? this._commonProperties.getFieldWithName(this.getTitlePropertyName()) : null;
			if (field && field.repositoryType == "box" && lang.isFunction(field.validator)) {
				field.invalidMessage = this._messages.invalid_box_folder_name_message;
				field.originalValidator = field.validator;
				field.set("maxLength", 255);
				field.validator = function(value, constraints) {
					if (/[\\\/]/.test(value)) {
						return false;
					} else if (this.required && this._isEmpty(value)) {
						return false;
					} else {
						var v = this.getValue ? this.getValue() : value;
						v = string.trim(v);
						if (v == "." || v == "..") {
							return false;
						} else {
							return this.originalValidator(value, constraints);
						}
					}
				};

			} else if (field && field.repositoryType != "cm" && lang.isFunction(field.validator)) {
				field.invalidMessage = this._messages.invalid_folder_name_message;
				field.originalValidator = field.validator;
				field.validator = function(value, constraints) {
					if (/[\\\/:*?"<>|]/.test(value)) {
						return false;
					} else if (this.required && this._isEmpty(value)) {
						return false;
					} else {
						return this.originalValidator(value, constraints);
					}
				};
			}
		},

		_validateFileName: function() {
			var field = this._commonProperties ? this._commonProperties.getFieldWithName(this.getTitlePropertyName()) : null;
			if (field && field.repositoryType == "box" && lang.isFunction(field.validator)) {
				field.invalidMessage = this._messages.invalid_box_file_name_message;
				field.originalValidator = field.validator;
				var self = this;
				field.validator = function(value, constraints) {
					if ((self._addContentItemDialog.addContentItemGeneralPane.getContentSourceType() != "ExternalURL") && /[\\\/]/.test(value)) {
						return false;
					} else if (this.required && this._isEmpty(value)) {
						return false;
					} else {
						var v = this.getValue ? this.getValue() : value;
						v = string.trim(v);
						if ((self._addContentItemDialog.addContentItemGeneralPane.getContentSourceType() != "ExternalURL") && (v == "." || v == "..")) {
							return false;
						} else {
							return this.originalValidator(value, constraints);
						}
					}
				};
			}
		},

		/**
		 * This event method is called when properties rendering completes.
		 */
		onCompleteRendering: function() {
		},

		/**
		 * This method assigns the file name of the selected content file as the document title value, if the document
		 * title is currently empty. (The file name is not assigned to the document title if the repository type is CM
		 * and the repository docNamePropSetWithFileName is false.) When multiple documents are added, the file name is
		 * assigned at a different point in the add processing. <br>
		 * <br>
		 * This is called after properties are rendered in the common properties pane, and before property values are
		 * retrieved from the property pane.
		 * 
		 * @since 2.0.2
		 */
		setDefaultDocumentTitle: function() {
			// If the document title is blank and a file has been selected, use the file name as the default value for the title.
			if (!this._addContentItemDialog.addContentItemGeneralPane.hasMultipleDocuments()) {
				if (!this._addContentItemDialog.repository._isOnDemand() && (!this._addContentItemDialog.repository._isCM() || (this._addContentItemDialog.repository._isCM() && this._addContentItemDialog.repository.docNamePropSetWithFileName))) {
					var titlePropertyName = this.getTitlePropertyName();
					if (titlePropertyName) {
						var currValue = this.getPropertyValue(titlePropertyName);
						if (!currValue || currValue.length == 0) {
							var fileName;
							if (this._addContentItemDialog.addContentItemGeneralPane.hasExternalFiles()) {
								var fileNameArray = this._addContentItemDialog.addContentItemGeneralPane._externalFileNames.get("value");
								fileName = ((fileNameArray != null) && (fileNameArray.length > 0)) ? fileNameArray[0] : "";
								if( fileName.indexOf("/") > -1 && fileName.indexOf("/") < fileName.length-1 ){
									fileName = fileName.substring( fileName.indexOf("/")+1, fileName.length );
								}
							} else {
								fileName = this._addContentItemDialog.addContentItemGeneralPane.getInputFileName();
							}
							if (fileName) {
								var attrDef = this._commonProperties ? this._commonProperties.attributeDefinitionsById[titlePropertyName] : null;
								if (attrDef && (!attrDef.dataType || (attrDef.dataType.indexOf && attrDef.dataType.indexOf("xs:string") > -1))) {
									this.setPropertyValue(titlePropertyName, fileName);
								}
							}
						}
					}
				}
			}
		},

		/**
		 * This method is used to obtain appropriate object structure for JSON serializing on add and checkin requests.
		 * It should only be used in this way, and no other use of the object structure from this method should be
		 * performed as this structure could change.
		 */
		getPropertiesJSON: function() {
			var propertiesJSON;
			if (this._commonProperties) {
				// Only assign the default document title from here if the title property is not displayed,
				// so that the user is allowed to add the document with an empty title when the property is displayed.
				var titlePropertyName = this.getTitlePropertyName();
				if (titlePropertyName && !this._commonProperties.isFieldDisplayed(titlePropertyName)) {
					this.setDefaultDocumentTitle();
				}

				// Some writable attributes may be flagged read only or hidden for the UI.
				// Include all read only, hidden, and empty property values.
				propertiesJSON = this._commonProperties.getPropertiesJSON(true, true, false);
			} else {
				propertiesJSON = [];
			}
			return propertiesJSON;
		},

		/**
		 * Retrieves the child component values.
		 * 
		 * @return An array of child component values objects. See the {@link ecm.widget.ChildComponentPropertiesPane}
		 *         <code>getValues</code> method.
		 */
		getChildComponentValues: function() {
			var childComponentValues = null;
			if (this._commonProperties) {
				childComponentValues = this._commonProperties.getChildComponentValues();
				if (childComponentValues == null) {
					childComponentValues = [];
				}
				
				// The LayoutPropertiesPane does not support child components.
				// If we are adding a new item (not check in), child components instances are not already defined, this is the LayoutPropertiesPane,
				// and the content class includes child component definitions - then define an instance for each child component type.
				// This reproduces the behavior of the non-property layout add dialog behavior.
				if (    !this._addContentItemDialog._checkin && childComponentValues.length == 0 && this._commonProperties.isInstanceOf(ecm.widget.LayoutPropertiesPane)  
				     && this._contentClass && this._contentClass.childComponentDefinitions && this._contentClass.childComponentDefinitions.length > 0) {
					// For each child component type, define one child component instance as a row of values.
					// The server will only create the child component instance if at least one of the child component properties has a non-empty value.
					for (var i = 0; i < this._contentClass.childComponentDefinitions.length; i++) {
						var childCompDef = this._contentClass.childComponentDefinitions[i];
						var childCompDefValues = [];
						
						// The non-property layout case sets the empty string "" for an empty value.
						// This fix is for the property layout case, and the property layout assigns null for an empty value,
						// so we will not convert an attribute definition null value to "".
						for (var j = 0; j < childCompDef.attributeDefinitions.length; j++) {
							var attrDef = childCompDef.attributeDefinitions[j];
							childCompDefValues.push({
								"name": childCompDef.id + "/" + attrDef.id,
								"value": attrDef.value,
								"dataType": attrDef.dataType,
								"label": attrDef.label
							});
						};
						
						childComponentValues.push({
							"name": childCompDef.id,
							"values": [{
								index: "row_1",
								values: childCompDefValues
							}]
						});
					};
				}
			}
			return childComponentValues;
		},
		/**
		 * Retrieves the template meatadata values.
		 * 
		 * @return An array of child template metadata objects. See the {@link ecm.widget.TemplateMetadataPane}
		 *         <code>getValues</code> method.
		 * @since 3.0
		 */
		getTemplateMetadataValues: function() {
			var metadataValues = null;
			if (this._commonProperties && this._commonProperties.getTemplateMetadataValues){
				metadataValues = this._commonProperties.getTemplateMetadataValues();
			}
			return metadataValues;
		},

		/**
		 * Retrieves the new folder name.
		 * 
		 * @return The name of the new folder.
		 * @deprecated Deprecated as of 2.0.3. Replaced by getItemName().
		 */
		getFolderName: function() {
			return this.getItemName();
		},

		/**
		 * Retrieves the new item name.
		 * 
		 * @return The name of the new item.
		 * @since 2.0.3
		 */
		getItemName: function() {
			return this._commonProperties ? this._commonProperties.getPropertyValue(this.getTitlePropertyName()) : null;
		},

		/**
		 * Displays the
		 * <q>folder name is not unique</q>
		 * error when that teamspace validation check fails.
		 * 
		 * @param msg
		 *            The error message string to display.
		 */
		setFolderUniqueNameEror: function(msg) {
			var field = this._commonProperties ? this._commonProperties.getFieldWithName(this.getTitlePropertyName()) : null;
			if (field) {
				dojoWin.scrollIntoView(field.domNode);
				setTimeout(function() {
					field.focus();
					field.displayMessage(msg);
					field.focus();
				}, 300);
			}
		},

		/**
		 * Sets the value for a properties pane property.
		 * 
		 * @param property
		 *            The string name (<code>Id</code>, not display name) of the property.
		 * @param value
		 *            The value to assign to the property.
		 * @return {Boolean} A value of <code>true</code> if the specified property is found, otherwise
		 *         <code>false</code>.
		 */
		setPropertyValue: function(property, value) {
			if (this._commonProperties) {
				var valueSet = this._commonProperties.setPropertyValue(property, value);

				// If the value was not set, it may be hidden so no property editor exists.
				// Set the value directly on the attribute definition.
				// For the case of add and checkin, the common properties pane attribute definitions 
				// are a private copy separate from the class definition attribute definitions.
				if (!valueSet) {
					dojo.some(this._commonProperties.attributeDefinitions, function(attrDef) {
						if (attrDef.id == property) {
							attrDef.defaultValue = value;
							valueSet = true;
							return true;
						}
					});
				}
			}
			return valueSet;
		},

		/**
		 * Retrieves the value for a property from the properties pane. Values for hidden properties are retrieved from
		 * the attribute definition.
		 * 
		 * @param property
		 *            The string name (<code>Id</code>, not display name) of the property.
		 * @return The property value.
		 */
		getPropertyValue: function(property) {
			var value;
			if (this._commonProperties) {
				if (this._commonProperties.isFieldDisplayed && this._commonProperties.isFieldDisplayed(property)) {
					value = this._commonProperties.getPropertyValue(property);
				} else {
					if (this._commonProperties.attributeDefinitions) {
						dojo.some(this._commonProperties.attributeDefinitions, function(attrDef) {
							if (attrDef.id == property) {
								value = attrDef.defaultValue;
								return true;
							}
						});
					}
				}
			}
			return value;
		},
		
		/**
		 * Peforms a case insensitive checks to see if an attribute exist in the attribute definition.
		 * 
		 * @param property
		 *            The string name (<code>Id</code>, not display name) of the property.
		 * @return the attribute definition if found.
		 * 
		 * @since 3.0.1
		 */
		hasProperty: function(property) {
			var value = null;
			if (this._commonProperties) {
	
				if (this._commonProperties.attributeDefinitions) {
					dojo.some(this._commonProperties.attributeDefinitions, function(attrDef) {
						if (attrDef.id.toLowerCase() == property.toLowerCase()) {
							value = attrDef.clone();
							return true;
						}
					});
				}
	
			}
			return value;
		},		

		/**
		 * Retrieves the name of the first displayed property that contains text values.
		 * 
		 * @return The string name (<code>Id</code>, not display name) of the property.
		 */
		getFirstTextPropertyName: function() {
			return this._commonProperties ? this._commonProperties.getFirstTextPropertyName() : null;
		},

		/**
		 * Retrieves the name of the document title property based on the repository type and selected class.
		 * 
		 * @return The string name (<code>Id</code>, not display name) of the document title property.
		 */
		getTitlePropertyName: function() {
			var titlePropertyName;
			var repository = this._addContentItemDialog.repository;
			if (repository._isP8()) {
				if (this._addContentItemDialog._typeDocument) {
					titlePropertyName = "DocumentTitle";
				} else {
					titlePropertyName = "FolderName";
				}
			} else if (repository._isCmis()) {
				titlePropertyName = "cmis:name";
			} else if (repository._isCM()) {
				if (this._contentClass) {
					titlePropertyName = this._contentClass.nameAttribute;
				}
			} else if (repository._isBox()) {
				titlePropertyName = "name";
			}
			if (!titlePropertyName) {
				// For now using the first property found in the properties pane.
				titlePropertyName = this.getFirstTextPropertyName();
			}
			return titlePropertyName;
		},

		_clearClassErrorMessage: function() {
			if (this._classErrorMsg) {
				this._addContentItemDialog._clearErrorMessage(this._classErrorMsg);
				delete this._classErrorMsg;
			}
		},

		/**
		 * Clears the current property table rendering.
		 */
		clearRendering: function() {
			if (this._commonProperties) {
				this._commonProperties.clearRendering();
				// Need to do more than just clear the rendering, if ET specifies custom layout we need to destroy old property table.
				if (lang.isFunction(this._commonProperties.destroyRecursive)) {
					this._commonProperties.destroyRecursive();
				} else if (lang.isFunction(this._commonProperties.destroy)) {
					this._commonProperties.destroy();
				}
				delete this._commonProperties;
			}
		},

		/**
		 * Tests if the content class is selected and all displayed properties have valid values.
		 * 
		 * @param onEditStatus
		 * @since 2.0.3 A boolean value. If <code>true</code>, item properties are being modified. Only required
		 *        property fields and property fields that have been modified are checked.
		 * @param onSaveStatus
		 * @since 2.0.3 A boolean value. If <code>true</code>, changes are being saved. The first property field
		 *        widget from the list of property fields with invalid values is returned.
		 * @param focus
		 * @since 2.0.3.8 A boolean value. If <code>true</code> and there is a field with an invalid value, focus is
		 *        automatically set to the invalid field.
		 * @return The field object for the invalid value. The value null is returned if all fields are valid.
		 */
		validate: function(onEditStatus, onSaveStatus, focus) {
			var errorField = null;
			
			if (!this._contentClass || this._propertiesAreInvalid) {
				errorField = this._contentClassSelector;
			}

			if (!errorField) {
				var classErrorMsg;
				if (this._addContentItemDialog._entryTemplate && !this._addContentItemDialog._checkin && !this._contentClass.allowsInstances) {
					classErrorMsg = ecm.model.Message.createErrorMessage("entry_template_class_restricted_error", [
						this._addContentItemDialog._entryTemplate.name,
						this._contentClass.name
					]);
				} else if (this._contentClass.repository._isCM()) {
					// If adding multiple documents to CM, check for properties that require a non-empty, unique value for each document.
					var uniqueError = false;
					if (this._commonProperties && this._addContentItemDialog.addContentItemGeneralPane.hasMultipleDocuments()) {
						uniqueError = array.some(this._commonProperties.attributeDefinitions, function(attributeDefinition) {
							// Check for any properties that require a value and require that the value be unique across all documents that are instances of this class.
							// Ignore system attributes and the CM name property "ICM$NAME" (automatically filled in with the filename).
							return (!attributeDefinition.system && attributeDefinition.id != "ICM$NAME" && attributeDefinition.required && attributeDefinition.uniqueValues);
						});
					}
					if (uniqueError) {
						var entryTemplateName = this._addContentItemDialog._entryTemplate ? this._addContentItemDialog._entryTemplate.name : null;
						if (entryTemplateName) {
							classErrorMsg = ecm.model.Message.createErrorMessage("add_document_multiple_unique_values_entry_template_error", [
								entryTemplateName,
								this._contentClass.name
							]);
						} else {
							classErrorMsg = ecm.model.Message.createErrorMessage("add_document_multiple_unique_values_error", [
								this._contentClass.name
							]);
						}
					}
				}

				if (classErrorMsg) {
					this._classErrorMsg = classErrorMsg;
					this._addContentItemDialog._setErrorMessage(classErrorMsg);
					errorField = this._contentClassSelector;
				} else {
					this._clearClassErrorMessage();
				}
	
				// By default, if this is the checkin dialog then edit mode should be enabled.
				if (typeof onEditStatus == "undefined") {
					onEditStatus = this._addContentItemDialog._checkin;
				}
	
				if (this._commonProperties) {
					errorField = this._commonProperties.validateAll(onEditStatus, onSaveStatus, focus);
				}
			}
			return errorField;
		},

		/**
		 * Retrieves the Id of the selected content class.
		 * 
		 * @return The selected content class Id string.
		 */
		getDocumentType: function() {
			return this._contentClass.id;
		},

		/**
		 * Resizes the common properties pane.
		 */
		resizeCommonProperties: function() {
			if (this._commonProperties) {
				this._commonProperties.resize();
			}
		},

		/**
		 * This event method is called when a displayed property value is changed.
		 */
		onChange: function() {
		},

		/**
		 * This event is fired when a save operation can be retried. See {@link ecm.widget.CommonPropertiesPane}
		 * <code>onRetrySave</code>.
		 */
		onRetrySave: function() {
		},

		/**
		 * This event method is called when a displayed marking property value is changed. (FileNet P8 only)
		 */
		onMarkingPropertyChange: function() {
		},

		/**
		 * Cleanup the properties pane.
		 */
		doCleanup: function() {
			this.clearRendering();
			if (this._contentClassTooltip) {
				this._contentClassTooltip.close();
				this._contentClassTooltip.destroy();
				delete this._contentClassTooltip;
			}
		},

		/**
		 * Sets an error on the display field for a property. For example, an error that is returned by the server
		 * because the new property value is invalid.
		 * 
		 * @param fieldName
		 *            The string name (<code>Id</code>, not display name) of the property.
		 * @param errorMessage
		 *            The error message string.
		 * @param errorValue
		 *            The new property value that failed.
		 */
		setFieldError: function(fieldName, errorMessage, errorValue) {
			if (this._commonProperties) {
				this._commonProperties.setFieldError(fieldName, errorMessage, errorValue);
			}
		},
		
		/**
		 * Assigns an error to the given template metadata field.
		 *
		 * @param templateId
		 *            The ID of the template metadata
		 * @param fieldName
		 *            The ID of the field
		 * @param errorMessage
		 *            The error message
		 * @since 3.0
		 */
		setTemplateMetadataFieldError: function(templateId, fieldName, errorMessage) {
			if (this._commonProperties)
				this._commonProperties.setTemplateMetadataFieldError(templateId, fieldName, errorMessage);
		},

		/**
		 * Sets the input focus to the specified property field.
		 * 
		 * @param fieldName
		 *            The string name (<code>Id</code>, not display name) of the field property.
		 */
		setFieldFocus: function(fieldName) {
			if (this._commonProperties) {
				this._commonProperties.setFieldFocus(fieldName);
			}
		},
		
		/**
		 * Places the focus on the given template metadata field.
		 * 
		 * @param templateId
		 *            The ID of the template metadata
		 * @param fieldName
		 *            The ID of the field
		 * @since 3.0
		 */
		setTemplateMetadataFieldFocus: function(templateId, fieldName) {
			if (this._commonProperties) {
				this._commonProperties.setTemplateMetadataFieldFocus(templateId, fieldName);
			}
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
				if (this._commonProperties && lang.isFunction(this._commonProperties.setParentFolder)) {
					this._commonProperties.setParentFolder(this._parentFolder);
				}
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
		 * Allows a list of classes to be filtered out of the class selector. The specified classes will not be shown in
		 * the class selector.
		 * 
		 * @param excludedItems
		 *            An array of class ids to be excluded.
		 */
		setExcludedItems: function(excludedItems) {
			this.excludedItems = excludedItems;
			if (this._contentClassSelector)
			   this._contentClassSelector.setExcludedItems(excludedItems);
		},
		
	});
});

//# sourceURL=/navigator/ecm/widget/AddContentItemPropertiesPane.js

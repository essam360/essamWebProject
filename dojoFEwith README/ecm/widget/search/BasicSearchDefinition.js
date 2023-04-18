/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/array", //
	"dojo/_base/sniff", //
	"dojo/string",//
	"dojo/aspect", //
	"dojo/dom-class", //
	"dojo/dom-geometry", //
	"dojo/dom-style", //
	"dojo/on",//
	"dojo/keys", //
	"dojo/store/Memory", //
	"dijit/_WidgetBase", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/form/Button", //
	"dijit/form/CheckBox", //
	"../../LoggerMixin", //
	"../../model/ContentItem", //
	"../../model/SearchClass", //
	"../../model/SearchContentClasses", //
	"../../model/SearchConfiguration", //
	"../../model/SearchCriterion",//
	"../../model/SearchFolder", //
	"../../model/SearchTemplate", //
	"../../model/admin/AdminConfig", //
	"../_FolderSelectorDropDown", //
	"./SearchInDropDown", //
	"../CheckBox", //
	"./SearchClassSelector", //
	"../HoverHelp", //
	"./AttributeDefinitionsForm", //
	"./SearchMoreOptions", //
	"./SearchPropertyOptions", //
	"./SearchResultsDisplayOptions", //
	"../ValidationTextBox", //
	"./TextSearchOptions", //
	"../dialog/MessageDialog", //
	"./SaveSearchDialog", //
	"../../model/_searchUtils", //
	"../../model/ChildComponentDefinition", //
	"../../model/ChildComponentSearchCriteria", //
	"../../model/Desktop", //
	"../../model/MetadataTemplateSearchCriteria", //
	"dojo/text!./templates/BasicSearchDefinition.html"
], //
function(declare, //
lang, //
array, //
has, //
string,//
aspect, //
domClass, //
domGeometry, //
domStyle, //
on,//
keys, //
Memory, //
_WidgetBase, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
dijitCheckBox, //
LoggerMixin, //
ContentItem, //
SearchClass, //
SearchContentClasses, //
SearchConfiguration, //
SearchCriterion,//
SearchFolder, //
SearchTemplate, //
AdminConfig, //
_FolderSelectorDropDown, //
SearchInDropDown, //
CheckBox, //
SearchClassSelector, //
HoverHelp, //
AttributeDefinitionsForm, //
SearchMoreOptions, //
SearchPropertyOptions, //
SearchResultsDisplayOptions, //
ValidationTextBox, //
TextSearchOptions, //
MessageDialog, //
SaveSearchDialog, //
utils, //
ChildComponentDefinition, //
ChildComponentSearchCriteria, //
Desktop, //
MetadataTemplateSearchCriteria, //
template) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchBuilder} widget
	 * @name ecm.widget.search.BasicSearchDefinition
	 * @class Provides a widget that is used by the SearchBuilder widget to define and save the search criteria.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.BasicSearchDefinition", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.search.BasicSearchDefinition.prototype */
		templateString: template,

		//The template being worked on
		searchTemplate: null,
		contentClass: null,
		attributeDefinitionFormWid: null,
		displaySearchInCtrl: false,
		folderSelector: null,
		_loaded: false,
		_attributeDefinitionFormValid: true,
		_metadataTemplateCriteriaFormValid: true,
		//reflect the label value for "Class"
		_class_label: "",
		saveSupported: false,
		defaultObjectType: "",

		/**
		 * A {@link ecm.model.Repository} object.
		 */
		repository: null,

		/**
		 * Comma separated string containing the list of repository types.
		 * 
		 * @since 2.0.3
		 */
		repositoryTypes: null,

		constructor: function() {
			this.messages = ecm.messages;
			this._class_label = ecm.messages.class_label;
		},

		startup: function() {
			this.inherited(arguments);
		},

		postCreate: function() {
			this._createMoreOptions();
			if (this.repository) {
				// Initialize it now
				this.setRepository(this.repository);
			}

			this.connect(this.contentClassSelector, "onLoaded", function() {
				this._classLoaded = true;
				if (this._folderLoaded)
					this.onLoad();
			});

			//connect the  templates changes to update  title change the templates the form loaded
			this.connect(this.contentClassSelector, "onContentClassSelected", this._onContentClassSelected);

			this.connect(this._textSearchOptions, "onChange", lang.hitch(this, function() {
				var hiddenSelected = this._textSearchOptions.isHiddenSelected();
				this._disableTextSearchText(hiddenSelected);
				this._updateTextSearchTextTitle();
				this._resizeTextSearchOptions();
				this.onChange();
			}));
			this.connect(this._hideTextCriteria, "onChange", lang.hitch(this, function(hidden) {
				var isHidden = hidden == SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN ? true : false;
				this._disableTextSearchText(isHidden);
				if (this.repository && this.repository._isCmis() && this._searchConfig.isCmisCapabilityQueryBothSeperated(this.repository.capabilityQuery)) {
					// Toggle between text search and meta data search
					domClass[isHidden || isHidden == "hidden" ? "remove" : "add"](this.CriteriaContentPart, "dijitHidden");
				}
			}));

			this._textSearchText.set("textDir", has("text-direction"));
			this.connect(this._textSearchText, "onKeyDown", "onKeyDown");
			this.connect(this._textSearchText, "onKeyUp", this._updateSearchButton);
			this.connect(this._textSearchText, "onChange", function() {
				this._updateSearchButton();
				this.onChange();
			});
			this.connect(this._propertyOptions, "onChange", function() {
				this._resizePropertyOptions();
				this.onChange();
			});

			this.connect(this.resultsDisplayOptions, "hide", lang.hitch(this, function() {
				this.resultsDisplayButton.focus();
			}));

			this._textSearchText.setHoverHelp(this._textSearchHoverHelp);
		},
		
		_updateSearchButton: function() {
			this.searchButton.set("disabled", !this._attributeDefinitionFormValid || !this._metadataTemplateCriteriaFormValid || !this._textSearchText.isValid() || (this.folderSelector != null && this.folderSelector.getSelected() != null && this.folderSelector.getSelected().item.id == ecm.model.FolderTreeModel.THIS_TEAMSPACE_ID));
		},

		_createMoreOptions: function() {
			if (this._moreOptions)
				this._moreOptions.destroy();
			this._moreOptions = new SearchMoreOptions({
				id: this.id + "_moreOptions",
				className: "optionsLink",
				propertyTextOptionHidden: true
			});
			this._moreOptions.placeAt(this._moreOptionsNode).startup();
			this._moreOptions.connect(this._moreOptions, "onObjectTypeChange", lang.hitch(this, "_onObjectTypeChange"));
			this._moreOptions.connect(this._moreOptions, "onChange", lang.hitch(this, function() {
				this._resizeMoreOptions();
				this.onChange();
			}));
		},
		
		/**
		 * Set value for authoring flag selector combobox of text search field. This is to replace the hide checkbox.
		 */
		_setAuthoringFlagSelector: function(editProperty) {
			var dataStore = new Memory();
			dataStore.data = [
			                  {id: SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE, label: this.messages.advanced_search_options_editable},
			                  {id: SearchCriterion.prototype.EDIT_PROPERTY.READONLY, label: this.messages.advanced_search_options_readonly},
			                  {id: SearchCriterion.prototype.EDIT_PROPERTY.REQUIRED, label: this.messages.advanced_search_options_required},
			                  {id: SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN, label: this.messages.advanced_search_options_hidden}
                  ];
			dataStore.getLabel = function(item){
				return item.label;
			}
			this._hideTextCriteria.set("store", dataStore);
			if (editProperty == SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE)
				this._hideTextCriteria.set("value", SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE);
			else if (editProperty == SearchCriterion.prototype.EDIT_PROPERTY.READONLY)
				this._hideTextCriteria.set("value", SearchCriterion.prototype.EDIT_PROPERTY.READONLY);
			else if (editProperty == SearchCriterion.prototype.EDIT_PROPERTY.REQUIRED)
				this._hideTextCriteria.set("value", SearchCriterion.prototype.EDIT_PROPERTY.REQUIRED);
			else if (editProperty == SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN)
				this._hideTextCriteria.set("value", SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN);
			else 
				this._hideTextCriteria.set("value", SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE);
		},

		_getTextSearchEditPropertyOption: function() {
			var options = {};
			if (this._textSearchText) {
				if (!this._textSearchText.get("disabled")){
					options.editProperty = this._hideTextCriteria.value;
				}
			}
			return options;
		},

		_updateTextSearchTextTitle: function() {
			var title = this.messages.text_search_label;
			if (!domClass.contains(this._textSearchOptions.domNode, "dijitHidden"))
				title += " " + this._textSearchOptions.getSummary();
			this._textSearchText.set("title", title);
		},

		_disableTextSearchText: function(isHidden) {
			if (isHidden)
				this._textSearchText.set("value", "");
			this._textSearchText.set("disabled", isHidden);
			if (isHidden) {
				this._textSearchText.set("placeHolder", "");
			} else {
				var placeHolder = this.messages.text_search_place_holder;
				if (this.repository && this.repository._isBox())
					placeHolder = this.messages.text_search_place_holder_box;
				else if (this.repository && this.repository.textSearchType == this._searchConfig.TEXT_SEARCH_TYPE.CASCADE && this._textSearchOptions.isProximitySelected())
					placeHolder = this.messages.text_search_place_holder_cascade_proximity;
				this._textSearchText.set("placeHolder", placeHolder);
			}
		},

		_resizeMoreOptions: function(resizeOnly) {
			var dropDownWidget = this.displaySearchInCtrl ? this.searchInDropDown : this.folderSelectorDropDown;
			var width = this._getFormWidth() - domGeometry.getMarginBox(this._folderLabelNode).w - domGeometry.getMarginBox(dropDownWidget.domNode).w - 20;
			width = width < 0 ? 0 : width;
			var height = domGeometry.getMarginBox(dropDownWidget.domNode).h;
			domGeometry.setMarginBox(this._moreOptions.domNode, {
				w: width,
				h: height
			});

			this._moreOptions.resize();

			if (!resizeOnly)
				this._moreOptions.summarize(width);
		},

		_getFormWidth: function() {
			var totalWidth = domGeometry.getContentBox(this.searchSection).w;
			var formWidth = this.attributeDefinitionFormWid ? domGeometry.getContentBox(this.attributeDefinitionFormWid.domNode).w : 0;
			if (formWidth > totalWidth)
				totalWidth = formWidth;

			return totalWidth;
		},

		_resizeTextSearchOptions: function(resizeOnly) {
			if (domClass.contains(this._textSearchOptions.domNode, "dijitHidden") || this.repository._isCM()) { // nothing to resize
				return;
			}

			var totalWidth = domGeometry.getContentBox(this.searchSection).w;
			var formWidth = domGeometry.getContentBox(this.attributeDefinitionFormWid.domNode).w;
			if (formWidth > totalWidth)
				totalWidth = formWidth;
			var width = this._getFormWidth() - 20;
			width = width < 0 ? 0 : width;
			var height = domGeometry.getMarginBox(this._textSearchText.domNode).h;
			domGeometry.setMarginBox(this._textSearchOptions.domNode, {
				w: width
			});
			if (!resizeOnly)
				this._textSearchOptions.summarize(width);
		},

		_resizePropertyOptions: function(resizeOnly) {
			if (domClass.contains(this.propertyOptionsArea, "dijitHidden") || domClass.contains(this._propertyOptions.domNode, "dijitHidden"))
				return;

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

		_onSave: function() {
			this._showSaveSearchDialog(false);
		},

		_onSaveAs: function() {
			this._showSaveSearchDialog(true);
		},

		_showSaveSearchDialog: function(savingAs) {
			if (this._updatingDependentAttributes && !this._deferredCallback) {
				// Defer saving until dependent attributes are updated
				this._deferredCallback = lang.hitch(this, "_showSaveSearchDialog", savingAs);
				return;
			}
			
			var repository = this.teamspace ? this.teamspace.repository : this.searchTemplate.repository;
			var args = {
				repository: repository,
				teamspace: this.teamspace,
				meetsMinimumCriteria: this._meetsMinimumCriteria(),
				validateRepository: lang.hitch(this, function(repository) {
					var config = SearchConfiguration.getSearchConfiguration({
						repository: repository
					});
					return config.canSaveSearches();
				}),
				callback: lang.hitch(this, function(attributes) {
					this.saveTemplate(attributes, savingAs);
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
				if (obj) {
					lang.mixin(args, obj);
				}

				if (this._saveSearchDialog)
					this._saveSearchDialog.destroy();
				this._saveSearchDialog = new SaveSearchDialog(args);
				this._saveSearchDialog.show();
			});
		},

		configureSaveButton: function(btn) {
			aspect.after(btn, "onClick", lang.hitch(this, this._onSave));
		},

		onCancel: function() {
		},

		onChange: function() {
		},

		_onAttributeDefinitionsChange: function() {
			var propCount = 0;
			if (this.attributeDefinitionFormWid) {
				var valid = this.attributeDefinitionFormWid.validate() ? false : true;
				this.attributeDefinitionFormWid.onFormValidate(valid);
				var objectType = this._moreOptions.getSelectedOptions().objectType;
				this.resultsDisplayOptions.setContentClass(this.contentClass, this.repository._isP8() ? this.contentClassSelector.isIncludeSubclasses() : false, objectType);
				if (this._loaded || this.searchTemplate.isNew()) {
					this.resultsDisplayOptions.setResultsDisplay(this.getResultsDisplayDefaults(objectType, this.contentClass), true);
				} else {
					this.resultsDisplayOptions.setResultsDisplay(this.searchTemplate.resultsDisplay);
				}
				propCount = this.attributeDefinitionFormWid.attributeDefinitions ? this.attributeDefinitionFormWid.attributeDefinitions.length : 0;
			}
			this.addPropertyButton.set("disabled", propCount == 0);
			this.showAllLink.set("disabled", propCount <= 0 || (this.repository._isCM() && this.contentClass.id == "$common"));
			if (!this._initialized) {
				// Update the search template with the loaded criteria to have an accurate baseline for asserting modifications
				this._prepareSearchTemplateForExecution(this.searchTemplate);
				this._initialized = true;
			}
			this._loaded = true;
			this.onChange();
		},

		/**
		 * Returns the default result display options for the given object type and content class.
		 * 
		 * @param objectType
		 *            The type of object the content class represents, i.e., "document" or "folder"
		 * @param contentClass
		 *            A {@link ecm.model.ContentClass} or {@link ecm.model.SearchContentClasses} object
		 * @returns An object containing the result display options (see {@link ecm.widget.search.SearchResultsDisplayOptions#setResultsDisplay} for details)
		 * 
		 * @since 2.0.3.8
		 */
		getResultsDisplayDefaults: function(objectType, contentClass) {
			// Note: Although it's not used here, the contentClass is available to facilitate plug-in overrides.
			return {
				"sortBy": ecm.model.admin.AdminConfig.PSEUDO_NAME,
				"sortAsc": true,
				"columns": lang.clone(this._searchConfig.getSearchDefaultColumns(objectType)),
				"magazineColumns": lang.clone(this._searchConfig.getSearchMagazineDefaultColumns(objectType))
			}
		},

		onKeyDown: function(e) {
			if (e.keyCode === keys.ENTER && !this.searchButton.get("disabled")) {
				// force onBlur() to update the value
				var w = dijit.getEnclosingWidget(e.target);
				if (w && w.onBlur) {
					w.onBlur();
				}
				this._search();
			}
		},

		/**
		 * @deprecated As of release 2.0.2. Use repository directly, e.g., basicSearchDefinition.repository.
		 */
		getRepository: function() {
			return this.repository;
		},

		setRepository: function(repository, teamspace) {
			this.repository = repository;
			this.teamspace = teamspace;
			this._searchConfig = this._getSearchConfiguration();
			this._init();
		},

		setTeamspace: function(teamspace) {
			this.teamspace = teamspace;
		},

		setShowMultiRepositorySelector: function(displaySearchInCtrl) {
			this.displaySearchInCtrl = displaySearchInCtrl;
		},

		setShowAllRepositories: function(showAllRepositories) {
			this.showAllRepositories = showAllRepositories;
		},

		/**
		 * Set comma separated list of the repository types that will be displayed in the repository selection control.
		 * 
		 * @param repositoryTypes
		 *            String value holding comma separated list of repository types to display.
		 * @since 2.0.3
		 */
		setRepositoryTypes: function(repositoryTypes) {
			this.repositoryTypes = repositoryTypes;
		},

		_init: function() {
			if (!this.searchTemplate) {
				this.searchTemplate = this.createSearchTemplate({
					id: "",
					name: "",
					repository: this.repository,
					description: ""
				});
			}

			if (!this._initialized && this.searchTemplate.isNew()) {
				// Set default values
				this.searchTemplate.objectType = this.defaultObjectType ? this.defaultObjectType : this._searchConfig.getDefaultSearchType();
				this.searchTemplate.includeSubclasses = this.repository._isP8();
				this.searchTemplate.andSearch = this._searchConfig.getMatchAll();
				this.searchTemplate.moreOptions = {
					objectType: this.searchTemplate.objectType,
					versionOption: this.repository.defaultSearchVersion || (this.repository._isP8() ? SearchMoreOptions.VERSION_OPTION.RELEASED : SearchMoreOptions.VERSION_OPTION.CURRENT),
					propertyTextAnded: true
				};
			}

			if (!this._initialized && this.searchTemplate.autoResolved) {
				var invalidMessage = "";
				if (this.searchTemplate.invalidRepository) {
					invalidMessage = invalidMessage + this.messages.search_invalid_repository;
				}
				if (this.searchTemplate.invalidClass) {
					if (invalidMessage.length > 0)
						invalidMessage += ", ";
					invalidMessage = invalidMessage + this.messages.search_invalid_class;
				}
				if (this.searchTemplate.invalidFolder) {
					if (invalidMessage.length > 0)
						invalidMessage += ", ";
					invalidMessage = invalidMessage + this.messages.search_invalid_folder;
				}
				if (this.searchTemplate.invalidFileType) {
					if (invalidMessage.length > 0)
						invalidMessage += ", ";
					invalidMessage = invalidMessage + this.messages.search_invalid_file_type;
				}
				if (this.searchTemplate.invalidProperty) {
					if (invalidMessage.length > 0)
						invalidMessage += ", ";
					invalidMessage = invalidMessage + this.messages.search_invalid_property;
				}
				if (this.searchTemplate.invalidTextSearch) {
					if (invalidMessage.length > 0)
						invalidMessage += ", ";
					invalidMessage = invalidMessage + this.messages.search_invalid_text_search;
				}
				if (this.searchTemplate.invalidWork) {
					if (invalidMessage.length > 0)
						invalidMessage += ", ";
					invalidMessage = invalidMessage + this.messages.search_invalid_work;
				}
				this._showWarningMessage(string.substitute(this.messages.search_auto_resolved_warning, [
					invalidMessage
				]));
			}

			domStyle.set(this.saveButton.domNode, "display", this.isSaveSupported() ? "" : "none");
			domStyle.set(this.saveAsButton.domNode, "display", this.isSaveSupported() ? "" : "none");

			if (this.displaySearchInCtrl == true) {
				this.folderSelector = this.searchInDropDown;
				this.folderSelector.setTeamspace(this.teamspace);
				this.folderSelector.setRepositoryTypes(this.repositoryTypes);
				if (this.showAllRepositories == true)
					this.folderSelector.displayAllRepositories = true;
				domStyle.set(this.folderSelectorDropDown, "display", "none");
			} else {
				this.folderSelector = this.folderSelectorDropDown;
				domStyle.set(this.searchInDropDown, "display", "none");
			}
			this.connect(this.folderSelector, "onFolderSelected", function(folder) {
				if (folder.item.repository.id != this.repository.id) {
					this.repository = folder.item.repository;
					this._searchConfig = this._getSearchConfiguration();
					this._initSearchRepositoryOptions(true);
					this._resizeMoreOptions(false);
					this._resizeTextSearchOptions(false);
				} else {
					this._updateSearchButton();
					this._resizeMoreOptions(true);
				}
				this._moreOptions.setVersionOptionDisabled(this.repository && this.repository._isP8Like() && !folder.root);
				this.onChange();
			});

			this.connect(this.folderSelector, "rootSet", function() {
				this._folderLoaded = true;
				if (this._classLoaded)
					this.onLoad();
			});

			// Set up search controls based on the current selected repository
			this._initSearchRepositoryOptions();
		},

		isSaveSupported: function() {
			return this.saveSupported && this._searchConfig.canSaveSearches();
		},

		onLoad: function() {
			this.resize();
		},

		_initSearchTextOptions: function() {
			if (this.repository._isBox()) {
				this._disableTextSearchText(false);
				this._textSearchHoverHelp.set("message", this.messages.text_search_hover_help_box);
				this._textSearchOptions.setRepository(this.repository, this._moreOptions.getSelectedOptions().objectType, true);
				domClass.remove(this._textSearchNode, "dijitHidden");
				domClass.remove(this._textSearchOptions.domNode, "dijitHidden");
			} else {
				this._textSearchOptions.setRepository(this.repository);

				var textSearchCriteria = this.searchTemplate ? this.searchTemplate.textSearchCriteria : [];
				var textCriterion = textSearchCriteria && textSearchCriteria.length ? textSearchCriteria[0] : null;
				var textCriteriaDefined = (textSearchCriteria instanceof Array) && textSearchCriteria.length > 0;
				if (textCriteriaDefined || this._searchConfig.isTextSearchTypeSupported(this.repository.textSearchType)) {
					// Disable text search if working with classes that aren't text searchable (including the All pseudo class)
					var cc = this.contentClass;
					if (!this.repository._isCM() || !cc || (cc.id != "$common" && (cc instanceof SearchContentClasses ? cc.isTextSearchable() : cc.textSearchable))) {
						domClass.remove(this._textSearchNode, "dijitHidden");
						if (this.repository._isP8()) {
							this._textSearchHoverHelp.set("message", this.messages.text_search_hover_help_p8);
							domClass.remove(this._textSearchOptions.domNode, "dijitHidden");
							domClass.add(this._hideTextCriteriaNode, "dijitHidden");
							if (this.repository.textSearchType == this._searchConfig.TEXT_SEARCH_TYPE.CASCADE)
								this._textSearchOptions.toggleProximityHoverHelp(true);
						} else {
							this._textSearchHoverHelp.set("message", this.messages.text_search_hover_help_cm);
							domClass.add(this._textSearchOptions.domNode, "dijitHidden");
							domClass.remove(this._hideTextCriteriaNode, "dijitHidden");
						}
						this._disableTextSearchText(false);
						this._moreOptions.setTextPropertyOptionHidden(!this.repository._isCM());
						this.resultsDisplayOptions.setTextSearchEnabled(this.repository._isP8() || this.repository._isCM());
					} else {
						domClass.add(this._textSearchNode, "dijitHidden");
						this._moreOptions.setTextPropertyOptionHidden(true);
						this.resultsDisplayOptions.setTextSearchEnabled(false);
					}

					if (!this.searchTemplate.isNew() && !textCriteriaDefined) {
						if (this.repository._isCM()){
							this._setAuthoringFlagSelector(SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN);
						}else{
							options = {
										operator: undefined,
										proximityDistance: 0,
										editProperty: SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN
									};
							this._textSearchOptions.setSelectedOptions(options);
						}
						this._disableTextSearchText(true);
					} else {
						if (textCriterion)
							this._setAuthoringFlagSelector(textCriterion.editProperty);
						else
							this._setAuthoringFlagSelector();
						this._disableTextSearchText(false);
					}

					if (this.repository._isCmis()) {
						if (this._searchConfig.isCmisCapabilityTextOnly(this.repository.capabilityQuery)) {
							domClass.add(this._hideTextCriteriaNode, "dijitHidden");
							domClass.add(this.CriteriaContentPart, "dijitHidden");
						} else {
							domClass.remove(this.CriteriaContentPart, "dijitHidden");
							if (this._searchConfig.isCmisCapabilityQueryBothSeperated(this.repository.capabilityQuery)) {
								// Disable text search by default
								this._setAuthoringFlagSelector();
								this._disableTextSearchText(true);
							}
						}
					} else {
						domClass.remove(this.CriteriaContentPart, "dijitHidden");
					}
				} else {
					domClass.add(this._textSearchNode, "dijitHidden");
					this._moreOptions.setTextPropertyOptionHidden(true);
					this.resultsDisplayOptions.setTextSearchEnabled(false);
				}
			}
		},

		_initSearchRepositoryOptions: function(reset) {
			var options = this.searchTemplate.moreOptions;
			var textCriteria = this.searchTemplate.textSearchCriteria;
			var textCriterion = textCriteria && textCriteria.length ? textCriteria[0] : null;

			// Show the include subfolders option only for P8 (done before setting the root folder
			// so it's reflected in the folder's label, e.g., "\P8 repository (Including subfolders)")
			this.folderSelector.setShowIncludeSubFolders(this.repository._isP8Like());

			if (reset) { // repository changed
				options = {
					objectType: this.defaultObjectType ? this.defaultObjectType : this._searchConfig.getDefaultSearchType(),
					versionOption: this.repository.defaultSearchVersion || (this.repository._isP8() ? SearchMoreOptions.VERSION_OPTION.RELEASED : SearchMoreOptions.VERSION_OPTION.CURRENT),
					propertyTextAnded: true
				};
				this._createMoreOptions();
				this._textSearchText.set("value", "");
			} else {
				// Reset the repository in case the search template is configured to search in a repository other than its own
				this.repository = utils.getSearchInRepository(this.searchTemplate);
				this._searchConfig = this._getSearchConfiguration();

				var folders = this.searchTemplate.folders;
				var searchFolder = folders instanceof Array && folders.length > 0 ? folders[0] : null;
				if (searchFolder) {
					if (searchFolder.id == ecm.model.FolderTreeModel.THIS_TEAMSPACE_ID) { // Modify a search with Search in = This teamspace
						this.folderSelector.selectRootInitially = false;
						this.folderSelector.setRoot(this.repository);
						this.folderSelector.setIncludeSubfolders(searchFolder.searchSubfolders);
						var pathname = "/" + ecm.messages.search_in_thisteamspaces;
						if (this.repository._isP8())
							pathname = "/Teamspaces" + pathname;
						var selectedItem = new ContentItem(ecm.model.FolderTreeModel.THIS_TEAMSPACE_ID, ecm.messages.search_in_thisteamspaces, this.repository, {
							PathName: pathname
						}, {
							wc_template: "Teamspace"
						});
						this.folderSelector.setSelected(selectedItem);
						this.folderSelector._folderSelector.teamspacemode = true;
					} else {
						this.repository.retrieveItem(searchFolder.id, lang.hitch(this, function(item) {
							this.folderSelector.selectRootInitially = false;
							this.folderSelector.setRoot(this.repository);
							this.folderSelector.setIncludeSubfolders(searchFolder.searchSubfolders);
							if (this.teamspace) {
								this.folderSelector.setSelected(item, true, searchFolder.name);
							} else {
								this.folderSelector.setSelected(item, false, searchFolder.name);
							}
						}));
					}
				} else if (this.teamspace && this.searchTemplate.isNew()) {
					this.folderSelector.selectRootInitially = false;
					this.folderSelector.setRoot(this.repository);
					this.teamspace.retrieveBaseFolder(lang.hitch(this, function(item) {
						// this seems to be necessary to get _onFolderSelect to not think that the
						// repository is selected
						if (!item.parent) {
							item.parent = this.repository;
						}

						this.folderSelector.setSelected(item, true);
						this._onFolderSelect(this.folderSelector.getSelected());
					}));
				} else {
					this.folderSelector.setRoot(this.repository);
				}

				this._textSearchText.set("value", textCriterion && textCriterion.text ? textCriterion.text : null);
			}

			this._moreOptions.setSelectedOptions(options);
			this._moreOptions.setRepository(this.repository);

			this._propertyOptions.setSelectedOptions({
				matchAll: this.searchTemplate.andSearch
			});

			if (!this.repository._isOnDemand()) {
				this.resultsDisplayOptions.setRepository(this.repository);
			}

			if (this.repository._isBox()) {
				// Remove the content class and property options
				domClass.add(this.contentClassSelectorArea, "dijitHidden");
				domClass.add(this.propertyOptionsArea, "dijitHidden");
				domClass.add(this._propertyOptions.domNode, "dijitHidden");
				domClass.remove(this.matchAllCriteriaMessageNode, "dijitHidden");
				this.resultsDisplayOptions.setShowClassProperty(false);
				this._onObjectTypeChange(options.objectType);
			} else {
				// Add the content class and property options
				domClass.remove(this.contentClassSelectorArea, "dijitHidden");
				domClass.remove(this.propertyOptionsArea, "dijitHidden");
				domClass.remove(this._propertyOptions.domNode, "dijitHidden");
				domClass.add(this.matchAllCriteriaMessageNode, "dijitHidden");
				this.resultsDisplayOptions.setShowClassProperty(true);
				this._initContentClassSelector(reset);
				
				// Remove the metadata template option
				domClass.add(this.metadataTemplateOptionArea, "dijitHidden");
				domClass.add(this.metadataTemplateCriteriaNode, "dijitHidden");
				if (this._metadataTemplateCriteriaForm) {
					this._metadataTemplateCriteriaForm.destroy();
					delete this._metadataTemplateCriteriaForm;
				}
			}

			this._textSearchOptions.showHideCriteriaChoicelist = this.saveSupported;
			this._textSearchOptions.setRepository(this.repository, options.objectType, !textCriterion);
			if (textCriterion) {
				this._textSearchOptions.setSelectedOptions(textCriterion);
			}
			this._updateTextSearchTextTitle();
		},

		_initContentClassSelector: function(reset) {
			// Reload the class selector if a new repository was selected (i.e., reset is true)
			// or the object type changed as a result of a reset
			var classSelectorLoaded = this.contentClassSelector.getRepository() != null;
			var objectType = this._moreOptions.getSelectedOptions().objectType;
			var rootClassId = this._searchConfig.getRootClassId(objectType);
			if (classSelectorLoaded && (reset || rootClassId != this.contentClassSelector.rootClassId))
				classSelectorLoaded = false;

			// Preselect the root class (first class for CM8) when loading the class selector
			// and working with a new search or repository (i.e., reset is true)
			this.contentClassSelector.defaultToFirstItem = !classSelectorLoaded && (this.searchTemplate.isNew() || !!reset);

			if (this.repository.allPseudoClassSupported && this.repository.hideSearchAllClasses()) {
				// Hide the All pseudo class unless we are working with an existing search that uses it
				this.contentClassSelector.hasAll = !this.searchTemplate.isNew() && this.searchTemplate.getSearchContentClass().id == "$common";
			}

			// Skip rendering when setting the root class since it will be done when the repository is set bellow
			this.contentClassSelector.setRootClassId(rootClassId, true);
			this.contentClassSelector.setShowIncludeSubclasses(this.repository._isP8());
			this.contentClassSelector.allowMultipleClasses = this.repository.supportsMultiClassSearch;
			this._setClassSelectorFilters(objectType);

			var classSelectionDeferred = false;
			if (classSelectorLoaded) {
				if (this.repository == this.contentClassSelector.getRepository()) {
					// Don't set the repository to avoid re-rendering the class selector
					this._setSelectedContentClass(this.searchTemplate.isNew() ? null : this.searchTemplate.getSearchContentClass());
				} else {
					classSelectionDeferred = true;
				}
			} else if (!this.searchTemplate.isNew() && !reset) { // existing search and repository unchanged
				classSelectionDeferred = true;
			} else { // new search or repository changed
				this.contentClassSelector.selectedContentClass = null;
				this.contentClassSelector.setRepository(this.repository);
			}

			if (classSelectionDeferred) {
				// Select the class defined in the search after the class selector has been loaded
				var handle = this.connect(this.contentClassSelector, "onLoaded", function() {
					this.disconnect(handle);
					this._setSelectedContentClass(this.searchTemplate.getSearchContentClass());
				});
				this.contentClassSelector.setRepository(this.repository);
			}
		},

		_setSelectedContentClass: function(contentClass) {
			var multiple = contentClass instanceof SearchContentClasses;
			this.contentClassSelector.setShowIncludeSubclasses(this.repository._isP8() && !multiple);
			this.contentClassSelector.setIncludeSubclasses(this.searchTemplate.includeSubclasses);
			this.contentClassSelector.setSelected(contentClass, multiple);
		},

		// set class selector filters:
		_setClassSelectorFilters: function(objectType) {
			if (this.repository._isCM()) {
				var docsOnly = false;
				var foldersOnly = false;
				if (objectType == SearchConfiguration.prototype.OBJECT_TYPE.DOCUMENT) {
					docsOnly = true;
				} else if (objectType == SearchConfiguration.prototype.OBJECT_TYPE.FOLDER) {
					foldersOnly = true;
				}
				this.contentClassSelector.setVisibleOnlyForDocument(docsOnly);
				this.contentClassSelector.setVisibleOnlyForFolder(foldersOnly);
			}
		},

		resize: function() {
			this._resizeMoreOptions();
			this._resizeTextSearchOptions();
			this._resizePropertyOptions();
		},

		/**
		 * Runs the search if the criteria is valid.
		 * 
		 * @public
		 */
		_search: function() {
			if (this._updatingDependentAttributes && !this._deferredCallback) {
				// Defer searching until dependent attributes are updated
				this._deferredCallback = lang.hitch(this, "_search");
				return;
			}
			
			var invalidEditor = this.attributeDefinitionFormWid && this.attributeDefinitionFormWid.validate();
			if (invalidEditor) {
				if (invalidEditor.focus)
					invalidEditor.focus();
			} else if (this._meetsMinimumCriteria()) {
				this._executeSearch();
			} else {
				var msg = this.repository._isBox() ? this.messages.search_insufficient_input_box : this.messages.search_insufficient_input;
				var focus = this.repository._isBox() ? this._textSearchText : null;
				this._showErrorMessage(msg, focus);
			}
		},

		_executeSearch: function() {
			this.onSearchStarted(this.keepSearchCriteriaExpanded.get("value"));
			this.searchButton.set("disabled", true);

			var template = this._prepareSearchTemplateForExecution();
			this.onSearchTemplatePrepared(template);

			var request = template.search(lang.hitch(this, function(results) {
				var newFolder = this.searchInDropDown ? this.searchInDropDown.getSelected() : null;
				if (newFolder) {
					if (this._isTeamspace(newFolder) && this.teamspace && this.teamspace.id)
						results.teamspaceId = this.teamspace["id"];
				}
				this.onSearchCompleted(results);
			}));
			var signal = aspect.after(request, "onRequestCompleted", lang.hitch(this, function() {
				signal.remove();
				this.searchButton.set("disabled", false);
			}));
		},

		/**
		 * @private Returns true if the ecm.model.SelectedFolder is a teamspace or teamspace folder.
		 */
		_isTeamspace: function(selectedFolder) {
			if (selectedFolder.isTeamspaceSubFolder) { // This value is not always set.  Need to look at the attributes to determine if it is a teamspace.
				return true;
			} else if (selectedFolder.item && selectedFolder.item.attributes && selectedFolder.item.attributes.ClbTeamspaceName) {
				return true;
			} else if (selectedFolder.item && selectedFolder.item.attributes && selectedFolder.item.attributes.PathName && selectedFolder.item.attributes.PathName.indexOf("/ClbTeamspaces") == 0) {
				return true;
			} else {
				return false;
			}
		},

		_reset: function() {
			if (this._updatingDependentAttributes && !this._deferredCallback) {
				// Defer resetting until dependent attributes are updated
				this._deferredCallback = lang.hitch(this, "_reset");
				return;
			}
			
			// Reload the initial settings
			this._loaded = false;
			this.setRepository(this.searchTemplate.repository, this.teamspace);
			this.onReset();
		},

		/**
		 * Event fired when the form is reset.
		 */
		onReset: function() {
		},

		_meetsMinimumCriteria: function() {
			if (this._textSearchText.get("value")) {
				return true;
			} else if (this.repository._isBox()) {
				return !!this._metadataTemplateCriteriaForm;
			}

			var macros = this._moreOptions.getSelectedOptions().macros;
			if (macros) {
				if (macros.fileTypes && macros.fileTypes.length)
					return true;
				if (macros.userActions && (macros.userActions[0].action.indexOf("checkedOut") == 0 || macros.userActions[0].users.length || macros.userActions[0].dates.length))
					return true;
			}

			var classId = this.attributeDefinitionFormWid && this.attributeDefinitionFormWid.getContentClass().id;
			if (classId == "$common" // All pseudo class 
					|| (this.attributeDefinitionFormWid && this.attributeDefinitionFormWid.isIncludeSubclasses() //
					&& ((this.repository._isP8() && (classId == "Document" || classId == "Folder")) //
					|| (this.repository._isCmis() && (classId == "cmis:document" || classId == "cmis:folder"))))) {
				return array.some(this.attributeDefinitionFormWid.getChildren(), function(attribDefWidget) {
					return utils.meetsMinimumCriteria({ "selectedOperator": attribDefWidget.getOperator(), "values": attribDefWidget.getValues() });
				});
			} else if (classId) { // subclass selected
				return true;
			}

			return false;
		},

		_setAttributeDefinitionFormFields: function(contentClass, includeSubclasses) {
			if (this.attributeDefinitionFormWid)
				this.attributeDefinitionFormWid.destroy();

			var fixed = this.repository._isBox();
			this.attributeDefinitionFormWid = new AttributeDefinitionsForm();
			this.attributeDefinitionFormWid.enableAdvancedSearchOptions = this.isSaveSupported();
			this.attributeDefinitionFormWid.displayMode = fixed ? "fixed" : "standard";
			this.attributeDefinitionFormWid.showSystemAttributes = this.repository._isBox();

			domClass[fixed ? "add" : "remove"](this.addPropertyButton.domNode, "dijitHidden");
			domClass[fixed ? "add" : "remove"](this.showAllLink.domNode, "dijitHidden");

			this.connect(this.addPropertyButton, "onKeyDown", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.TAB && evt.shiftKey) {
					var children = this.attributeDefinitionFormWid.getChildren();
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
			this.connect(this.attributeDefinitionFormWid, "onFormValidate", lang.hitch(this, function(valid) {
				this._attributeDefinitionFormValid = valid;
				this._updateSearchButton();
				this.saveButton.set("disabled", !valid);
				this.saveAsButton.set("disabled", !valid || this.searchTemplate.isNew());
			}));
			this.connect(this.attributeDefinitionFormWid, "onFinishLoadingAttributes", this._onAttributeDefinitionsChange);
			this.connect(this.attributeDefinitionFormWid, "onStartUpdatingDependentAttributes", function() {
				this._updatingDependentAttributes = true;
			});
			this.connect(this.attributeDefinitionFormWid, "onFinishUpdatingDependentAttributes", function() {
				this._updatingDependentAttributes = false;
				if (this._deferredCallback) {
					// Execute the callback after a small delay to ensure that updates have been applied
					setTimeout(lang.hitch(this, function() {
						this._deferredCallback();
						delete this._deferredCallback;
					}), 250);
				}
			});
			this.connect(this.attributeDefinitionFormWid, "onKeyDown", this.onKeyDown);

			var objectType = this._moreOptions.getSelectedOptions().objectType;
			var defaultAttribDefinitionId = this._searchConfig.getDefaultAttributeDefinitionId(objectType);
			this.attributeDefinitionFormWid.setDefaultAttributeDefinitionId(defaultAttribDefinitionId);
			this.attributeDefinitionFormWid.setContentClass(contentClass, includeSubclasses, objectType, !this._loaded ? this.searchTemplate.searchCriteria : null);
			this.attributeDefinitionForm.appendChild(this.attributeDefinitionFormWid.domNode);
			this.resize();
		},

		_showAllProperties: function() {
			if (!domClass.contains(document.body, "ecmWait")) {
				domClass.add(document.body, "ecmWait");
			}
			//this.showAllLink.set("disabled", true);
			if (this.attributeDefinitionFormWid.getChildren().length > 0) {// add only criteria that haven't already been added
				var self = this;
				var attbdfs = array.filter(this.attributeDefinitionFormWid.attributeDefinitions, function(adf) {
					var match = self.attributeDefinitionFormWid.findAttributeDefinitionWidgetsByAttributeDefinitionId(adf.id);
					var r = true;
					if (match && match.length > 0) {
						r = false;
					}
					return r;
				});

				var filteredAttbdfs = [];
				array.forEach(attbdfs, function(attributeDefinition, index) {
					if (attributeDefinition.isInstanceOf && attributeDefinition.isInstanceOf(ChildComponentDefinition)) {
						filteredAttbdfs.push(attributeDefinition);
					} else if (attributeDefinition.searchable && !attributeDefinition.subClassAttribute //
							&& (!attributeDefinition.hidden || self.attributeDefinitionFormWid.showHiddenAttributes) //
							&& (!attributeDefinition.system || self.attributeDefinitionFormWid.showSystemAttributes)) {
						filteredAttbdfs.push(attributeDefinition);
					}
				});

				if (filteredAttbdfs && filteredAttbdfs.length > 0) {
					this.attributeDefinitionFormWid.addAttributeDefintions(filteredAttbdfs, true);
				} else {
					this._showErrorMessage(this.messages.nomore_criteria_toappend_regular);
				}
			} else {
				this.attributeDefinitionFormWid.setShowAll(true);
			}
			domClass.remove(document.body, "ecmWait");
		},

		_addProperty: function() {
			if (this.attributeDefinitionFormWid) {
				var w = this.attributeDefinitionFormWid.addOneMoreAttributeDefinition();
				if (w && w.getNodeForFocus()) {
					w.getNodeForFocus().focus();
				}
				this.searchSection.scrollTop = this.searchSection.scrollHeight;
				this.onChange();
			}
		},
		
		_initMetadataTemplateOption: function() {
			this.repository.retrieveMetadataTemplates(lang.hitch(this, function(templates) {
				if (templates && templates.length) {
					// Populate the template list
					var options = [
						{
							value: "", 
							label: this.messages.box_search_select_template,
						}
					];
					array.forEach(templates, function(template) {
						options.push({
							value: template.id,
							label: template.name
						});
					});
					this.metadataTemplateSelect.removeOption(this.metadataTemplateSelect.getOptions());
					this.metadataTemplateSelect.addOption(options);
					this.metadataTemplateSelect.set("value", "");
					domClass.remove(this.metadataTemplateSelect.domNode, "dijitHidden");
					domClass.add(this.noMetadataTemplatesMessageNode, "dijitHidden");
				} else {
					domClass.add(this.metadataTemplateSelect.domNode, "dijitHidden");
					domClass.remove(this.noMetadataTemplatesMessageNode, "dijitHidden");
				}
				
				// Show time!
				domClass.remove(this.metadataTemplateOptionArea, "dijitHidden");
				domClass.remove(this.metadataTemplateCriteriaNode, "dijitHidden");
				this.onMetadataTemplateOptionInitialized();
			}));
		},
		
		/**
		 * Event fired when the metadata template option has been initialized (Box only).
		 * At this point, the template list is populated and ready for selection.
		 */
		onMetadataTemplateOptionInitialized: function() {
		},
		
		_onMetadataTemplateSelectChange: function() {
			if (this._metadataTemplateCriteriaForm) {
				this._metadataTemplateCriteriaForm.destroy();
				delete this._metadataTemplateCriteriaForm;
				this._metadataTemplateCriteriaFormValid = true;
				this._updateSearchButton();
			}

			var template = this.repository.getMetadataTemplate(this.metadataTemplateSelect.get("value"));
			if (template) {
				this._metadataTemplateCriteriaForm = new AttributeDefinitionsForm();
				this._metadataTemplateCriteriaForm.sortAttributes = false;
				this.connect(this._metadataTemplateCriteriaForm, "onFinishLoadingAttributes", lang.hitch(this, function() {
					// Sync the width of the property columns
					var width = this.attributeDefinitionFormWid._getMaxAttributeNameWidth();
					var otherWidth = this._metadataTemplateCriteriaForm._getMaxAttributeNameWidth();
					if (width != otherWidth) {
						var form = width > otherWidth ? this._metadataTemplateCriteriaForm : this.attributeDefinitionFormWid;
						width = (Math.max(width, otherWidth) + 32) + "px"; // accounts for hover help
						array.forEach(form._attributeDefinitonWidgets, function (w) {
							domStyle.set(w.allAttributeNameS, "width", width);
						});
					}
					this.metadataTemplateCriteriaNode.appendChild(this._metadataTemplateCriteriaForm.domNode);
				}));
				this.connect(this._metadataTemplateCriteriaForm, "onFormValidate", lang.hitch(this, function(valid) {
					this._metadataTemplateCriteriaFormValid = valid;
					this._updateSearchButton();
				}));
				this.connect(this._metadataTemplateCriteriaForm, "onKeyDown", this.onKeyDown);
				
				this._metadataTemplateCriteriaForm.setMetadataTemplate(template);
			}
		},

		/**
		 * This function returns true if there are any changes from the last saved time , that can be saved.
		 * 
		 * @return boolean
		 */
		hasUnsavedChanges: function() {
			return false;
		},

		_isTextSearchCriteriaDefined: function(searchCriteria) {
			var defined = this._textSearchText.get("value");
			if (!defined) {
				defined = array.some(searchCriteria, function(criterion) {
					return criterion.selectedOperator == "CONTAINS" && criterion.value;
				});
			}

			return defined;
		},

		/**
		 * Prepares the given search template for execution by updating it with the current form values.
		 * If a search template isn't provided, a new instance is returned.
		 * 
		 * @param searchTemplate
		 *            An instance of {@link ecm.model.SearchTemplate}
		 * @return The updated search template
		 * @public
		 */
		_prepareSearchTemplateForExecution: function(searchTemplate) {
			if (!searchTemplate) {
				var newSearch = this.searchTemplate.isNew();
				searchTemplate = this.createSearchTemplate({
					id: newSearch ? "" : (this.searchTemplate.id || ""),
					name: newSearch ? "" : (this.searchTemplate.name || ""),
					description: newSearch ? "" : (this.searchTemplate.description || ""),
					repository: this.repository
				});
			}
			this._updateSearchTemplate(searchTemplate);

			// Include criteria if it's not hidden (e.g., criteria is hidden when a CMIS repository's query compatibility type is "bothseparate")
			searchTemplate.searchCriteria = domClass.contains(this.CriteriaContentPart, "dijitHidden") ? [] : this.attributeDefinitionFormWid.createSearchCriteriaFromAttributeDefintions();
			
			// Include metadata template criteria, if any
			var metadataTemplateId = this.metadataTemplateSelect.get("value");
			if (metadataTemplateId && this._metadataTemplateCriteriaForm) {
				searchTemplate.metadataTemplateCriteria = new MetadataTemplateSearchCriteria(metadataTemplateId);
				searchTemplate.metadataTemplateCriteria.searchCriteria = this._metadataTemplateCriteriaForm.createSearchCriteriaFromAttributeDefintions();
			}

			// Important: search criteria must be set before the results display to determine if text search criteria is defined
			var textSearchCriteriaDefined = this._isTextSearchCriteriaDefined(searchTemplate.searchCriteria);
			searchTemplate.resultsDisplay = this.resultsDisplayOptions.processSearchResultsDisplay(searchTemplate.resultsDisplay, textSearchCriteriaDefined);

			return searchTemplate;
		},

		/**
		 * Event fired when the search is prepared for running.
		 * 
		 * @param searchTemplate
		 *            A {@link ecm.model.SearchTemplate} object
		 * @since 2.0.3.3
		 */
		onSearchTemplatePrepared: function(searchTemplate) {
		},

		saveTemplate: function(attributes, savingAs) {
			var ed = null;
			var storageRepository = attributes.parentFolderRepository || this.teamspace || this.repository;
			if (this.attributeDefinitionFormWid && (ed = this.attributeDefinitionFormWid.validate())) {
				ed.focus ? ed.focus() : "";
			} else if (this.attributeDefinitionFormWid && storageRepository) {
				var sTemplate = this.searchTemplate;
				var adding = sTemplate.isNew() || savingAs;
				if (adding) {
					sTemplate = this.createSearchTemplate({
						id: "",
						repository: attributes.parentFolderRepository || this.searchTemplate.repository,
						parentFolderId: attributes.parentFolderId,
						permissions: attributes.permissions
					});
				}
				sTemplate.name = attributes.name;
				sTemplate.description = attributes.description;
				sTemplate.autoRun = attributes.autoRun;
				sTemplate.showInTree = attributes.showInTree;
				this._updateSearchTemplate(sTemplate);
				sTemplate.searchCriteria = this.attributeDefinitionFormWid.createSearchCriteriaFromAttributeDefintions();

				var callback = lang.hitch(this, function(savedSearchTemplate) {
					if (adding) {
						// Remove the current search from the list of opened searches
						(this.teamspace || this.searchTemplate.repository).removeOpenedSearch(this.searchTemplate);

						if (savingAs) {
							// Unlock the current search
							this.searchTemplate.repository.unlockItems([
								this.searchTemplate
							]);
						}
					}

					// Replace the current search with the saved one
					this.searchTemplate = savedSearchTemplate;

					if (adding) {
						// Add the new search to the list of opened and recent searches
						this.searchTemplate = this.searchTemplate.clone();
						this.searchTemplate.UUID = this.searchTemplate.generateUUID();
						storageRepository.addOpenedSearch(this.searchTemplate);
						storageRepository.addRecentSearch(this.searchTemplate);
					}

					// Broadcast the changes
					this.onSearchSaved(this.searchTemplate);

					// Enable the Save As button
					this.saveAsButton.set("disabled", false);
				});
				if (adding) {
					storageRepository.addSearchTemplate(sTemplate, callback);
				} else {
					sTemplate.save(callback);
				}
			}
		},

		_updateSearchTemplate: function(searchTemplate) {
			var options = this._moreOptions.getSelectedOptions();
			searchTemplate.objectType = options.objectType;

			if (this.attributeDefinitionFormWid) {
				var contentClass = this.attributeDefinitionFormWid.getContentClass();
				searchTemplate.includeSubclasses = this.attributeDefinitionFormWid.isIncludeSubclasses();
				searchTemplate.setSearchContentClass(contentClass);
				searchTemplate.objectStores = [
					this._objectStore ? this._objectStore : {
						id: this.repository.objectStoreName,
						symbolicName: this.repository.objectStoreName,
						displayName: this.repository.objectStoreDisplayName,
						repositoryId: this.repository.id
					}
				];
			}

			if (this._folders)
				searchTemplate.folders = this._folders;
			if (!(searchTemplate.folders instanceof Array))
				searchTemplate.folders = [];

			searchTemplate.andSearch = this._propertyOptions.getSelectedOptions().matchAll;
			searchTemplate.moreOptions = options;
			searchTemplate.textSearchType = this.repository.textSearchType;

			if (!domClass.contains(this._textSearchNode, "dijitHidden")) {
				if (this._textSearchText.get("disabled")) {
					searchTemplate.textSearchCriteria = [];
				} else {
					var text = this._textSearchText.get("value");
					var textSearchCriteria = {
						text: text ? text : null,
						operator: ""
					};
					if (!domClass.contains(this._textSearchOptions.domNode, "dijitHidden"))
						lang.mixin(textSearchCriteria, this._textSearchOptions.getSelectedOptions());
					else
						lang.mixin(textSearchCriteria, this._getTextSearchEditPropertyOption());
					searchTemplate.textSearchCriteria = [
						textSearchCriteria
					];
				}
			} else {
				searchTemplate.textSearchCriteria = null;
			}

			if (!this.repository._isOnDemand()) { // not ready for OD
				var resultsDisplay = lang.clone(this.resultsDisplayOptions.getResultsDisplay());
				delete resultsDisplay.magazineColumns; // exclude until magazine view columns are configurable
				searchTemplate.resultsDisplay = resultsDisplay;
			}
		},

		/**
		 * Indicates whether the search criteria has been modified since the last time it was loaded or saved.
		 * 
		 * @return true if the search criteria has been modified since the last time it was loaded or saved, false
		 *         otherwise
		 */
		isCriteriaModified: function() {
			if (!this._initialized)
				return false;

			var newSearchTemplate = this._prepareSearchTemplateForExecution();
			return !this.searchTemplate.containsEqualCriteria(newSearchTemplate);
		},

		/**
		 * Event fired when a search has been saved.
		 * 
		 * @param searchTemplate
		 *            A {@link ecm.model.SearchTemplate} object
		 */
		onSearchSaved: function(searchTemplate) {
		},

		/**
		 * @param folder
		 *            an instance of {@link ecm.model.SelectedFolder}
		 */
		_onFolderSelect: function(/*ecm.model.SelectedFolder*/folder) {
			//If they selected the root folder in a repository, handle as though the repository was selected.
			if (utils.isRootFolder(folder)) {
				this._folders = [];
			} else {
				var path = folder.path;
				if (this.repository._isP8()) {
					path = path.substr(1);
					path = path.substr(path.indexOf("\\"));
				}
				var objectStoreName = folder.item.repository.objectStoreName || null;
				var searchFolder = new SearchFolder(folder.item.id, path, objectStoreName, objectStoreName, folder.includeSubfolders);
				this._folders = [
					searchFolder
				];
			}
			if (folder && folder.item && folder.item.repository) {
				this._objectStore = {
					id: folder.item.repository.objectStoreName,
					symbolicName: folder.item.repository.objectStoreName,
					displayName: folder.item.repository.objectStoreDisplayName,
					repositoryId: folder.item.repository.id
				};
			}
		},

		_onObjectTypeChange: function(objectType) {
			if (this.repository) {
				var rootId = this._searchConfig.getRootClassId(objectType);
				if (rootId) {
					if (this.repository._isBox()) {
						var contentClass;
						if (objectType == this._searchConfig.OBJECT_TYPE.ALL) {
							contentClass = array.map([
								"folder",
								"file",
								"web_link"
							], function(id) {
								return this.repository.getContentClass(id);
							}, this);
						} else {
							contentClass = this.repository.getContentClass(rootId);
						}
						this._onContentClassSelected(contentClass);
					} else {
						// set filters
						this._setClassSelectorFilters(objectType);
						this.contentClassSelector.defaultToFirstItem = true;

						// need to do this because searchconfig is not checking for "any" object type
						// and we need rootId to change to trigger a re-rendering of the class selector
						if (objectType == this._searchConfig.OBJECT_TYPE.ALL) {
							rootId = objectType;
						}
						this.contentClassSelector.setRootClassId(rootId);
					}
				}
			}
		},

		_onContentClassSelected: function(contentClass, includeSubclasses) {
			this.contentClass = (contentClass instanceof Array) ? new SearchContentClasses(contentClass) : contentClass;
			if (this._loaded) { // user changed class
				this._textSearchText.set("value", "");
			}
			this._initSearchTextOptions();
			this._setAttributeDefinitionFormFields(this.contentClass, includeSubclasses);
			if (this.repository._isBox())
				this._initMetadataTemplateOption();
			this.saveButton.set("disabled", false);
			this.saveAsButton.set("disabled", this.searchTemplate.isNew());
			if (this.folderSelector.getSelected())
				this._updateSearchButton();
		},

		onSearchStarted: function() {
		},

		/**
		 * @param resultSet
		 *            an instance of {@link ecm.model.ResultSet}
		 */
		onSearchCompleted: function(resultSet) {
		},

		_getSearchConfiguration: function() {
			return this.getSearchConfiguration();
		},

		_showResultsDisplayOptions: function() {
			this.resultsDisplayOptions.show();
		},

		_showErrorMessage: function(message, focus) {
			if (!this._messageDialog)
				this._messageDialog = new MessageDialog();
			if (focus) {
				var signal = aspect.after(this._messageDialog, "onHide", function() {
					signal.remove();
					focus.focus();
				});
			}
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

		destroy: function() {
			if (this._moreOptions) {
				this._moreOptions.destroy();
				delete this._moreOptions;
			}

			if (this.resultsDisplayOptions) {
				this.resultsDisplayOptions.destroy();
				delete this.resultsDisplayOptions;
			}

			if (this.attributeDefinitionFormWid) {
				this.attributeDefinitionFormWid.destroy();
				delete this.attributeDefinitionFormWid;
			}

			if (this._metadataTemplateCriteriaForm) {
				this._metadataTemplateCriteriaForm.destroy();
				delete this._metadataTemplateCriteriaForm;
			}

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
		},

		/*
		 * For extending search template and configuration
		 */
		createSearchTemplate: function(params) {
			return new SearchTemplate(params);
		},

		getSearchConfiguration: function() {
			var searchConfig = SearchConfiguration.getSearchConfiguration({
				repository: this.repository,
				teamspace: this.teamspace
			});
			return searchConfig;
		}

	});

});

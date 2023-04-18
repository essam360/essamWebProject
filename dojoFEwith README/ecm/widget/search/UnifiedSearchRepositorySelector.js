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
	"dojo/store/Memory",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/dom-class",
	"dojo/string",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/CheckBox",
	"ecm/widget/RepositorySelector",
	"../../LoggerMixin",
	"../../model/Desktop",
	"../../model/Repository",
	"../../model/SelectedFolder",
	"ecm/widget/RangeBoundTextBox",
	"./SearchSelector",
	"./SearchClassSelector",
	"./SearchMoreOptions",
	"ecm/model/SearchConfiguration",
	"ecm/model/SearchContentClasses",
	"./SearchInDropDown",
	"ecm/model/SearchRepository",
	"ecm/Messages",
	"ecm/model/_searchUtils",
	"ecm/model/Item",
	"ecm/model/SelectedFolder",
	"ecm/model/SearchFolder",
	"ecm/widget/dialog/LoginDialog",
	"ecm/widget/dialog/ErrorDialog",
	"dojo/text!./templates/UnifiedSearchRepositorySelector.html"
], function(declare, lang, array, aspect, MemoryStore, domStyle, domGeometry, domClass, string, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, CheckBox, ComboBox, LoggerMixin, Desktop, Repository, SelectedFolder, NumberTextBox, SearchSelector, SearchClassSelector, SearchMoreOptions, SearchConfiguration, SearchContentClasses, SearchInDropDown, SearchRepository, messages, utils, Item, SelectedFolder, SearchFolder, LoginDialog, ErrorDialog, template) {

	/**
	 * @private
	 * @name ecm.widget.search.UnifiedSearchRepositorySelector
	 * @class Provides an interface to select the scope of a search.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.UnifiedSearchRepositorySelector", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {

		templateString: template,

		widgetsInTemplate: true,

		includeSubfoldersCheckBox: false,

		folderSelectableCallback: null,

		_searchConfig: null,

		repository: null,

		constructor: function() {
			this.messages = ecm.messages;
			this._currentSelection = {};
		},

		_currentSelection: null,

		postCreate: function() {
			this.inherited(arguments);

			// Set the search field's label (this allows us to append a colon to the existing "Search" label without having to add a new string)
			this.templateSelectorLabelNode.innerHTML = string.substitute(this.messages.append_colon, [
				this.messages.search
			]);
		},

		/**
		 * sets up the dijit for a edit operation - disables switching of repository and the selected folder and class
		 * are prefilled
		 */
		_repositorySelectIntitiated: false,

		_editing: false,
		_adding: false,

		editRepository: function(params) {
			this._editing = true;
			this._editingrepository = params;
			if (!this._repositorySelectIntitiated) {
				this._repositorySelectIntitiated = true;
				this.repository = this._initRepositorySelect();
			}
			if (params && params.repository) {
				if (params instanceof Item) {
					this._currentSelection = lang.mixin({}, params.attributes);
				} else {
					this._currentSelection = lang.mixin({}, params);
				}
				if (this.repository == this._currentSelection.repository) {
					this._onRepositoryChange(this.repository);
				} else {
					this.repository = this._currentSelection.repository;
				}

				this.repositorySelect.getDropdown().set("value", this.repository.id);
			}
		},

		addRepository: function(params) {
			this._editing = false;
			this._editingrepository = params;
			if (!this._repositorySelectIntitiated) {
				this._repositorySelectIntitiated = true;
				this._initRepositorySelect();
			}

			if (!params) {
				params = {};
			}
			if (params) {
				if (params instanceof Item) {
					this._currentSelection = lang.mixin({}, params.attributes);
				} else {
					this._currentSelection = lang.mixin({}, params);
				}

				if (!this.repository) {
					var repositoryid = Desktop.defaultLayoutRepositories.search;
					var repo = null;
					if (repositoryid) {
						repo = Desktop.getRepository(repositoryid);
						if (!repo && Desktop.defaultLayoutRepositories.browse)
							repo = Desktop.getRepository(Desktop.defaultLayoutRepositories.browse);
						if (!repo && Desktop.defaultLayoutRepositories.others)
							repo = Desktop.getRepository(Desktop.defaultLayoutRepositories.others);
					}

					if (repo) {
						this.repository = repo;
						this._currentSelection.repository = this.repository;
					} else {
						repositoryid = this.repositorySelect.getDropdown().get("value");
						if (repositoryid) {
							repo = Desktop.getRepository(repositoryid);
							this.repository = repo;
							this._currentSelection.repository = this.repository;
						}
					}
				}

				if (this.repository && this.repositorySelect.getDropdown().get("value") == this.repository.id) {
					this._onRepositoryChange(this.repository);
				}

				if (!this._currentSelection.rootObject) {
					this._currentSelection.rootObject = this.repository;
				}

				this.repositorySelect.getDropdown().set("value", this.repository.id);
			}
		},

		/**
		 * Synthetic event raised when the dijit is ready to add a repository , class and the folder
		 */
		onAddRepository: function(params) {
			return true;
		},

		/**
		 * notifies when this dijit has gathered all the info necessary for one complete repository add action for
		 * unified search . Could be used to enable ok button when this widget is used in a dialog.
		 */
		onSelectionComplete: function(yes) {

		},

		getIdSuffix: function(repository) {
			var suffix = "_";
			//there will always be a suffix
			//first search repository will have _1
			//second search repository will have _2 and so on
			var count = 1;
			if (this.searchRepositories) {
				for (i in this.searchRepositories) {
					if (this.searchRepositories[i].repository.id == repository.id) {
						count++;
					}
				}
			}

			return suffix = "_" + count;
		},

		/**
		 * invokes onAddRepository synthetic event
		 */
		completeSelection: function() {
			var searchRepository = null;
			if (this._editing && this._editingrepository && this._editingrepository.id) {
				searchRepository = this._editingrepository.clone();
				searchRepository.id = this.repository.id, searchRepository.name = this.repository.name, searchRepository.repository = this.repository;
			} else {
				searchRepository = new SearchRepository({
					id: this.repository.id,
					name: this.repository.name,
					repository: this.repository
				});
			}

			if (this.repository.type == "box") {
				var options = this._moreOptions.getSelectedOptions();
				if (options.objectType == this._searchConfig.OBJECT_TYPE.ALL) {
					searchRepository.contentClass = new SearchContentClasses(array.map([
						"folder",
						"file",
						"web_link"
					], function(id) {
						return this.repository.getContentClass(id);
					}, this));
				} else {
					var classId = this._searchConfig.getRootClassId(options.objectType);
					searchRepository.contentClass = this.repository.getContentClass(classId);
				}
				
				var template = this.repository.getMetadataTemplate(this.metadataTemplateSelect.get("value"));
				searchRepository.metadataTemplate = template;
				searchRepository.selected_classes_label = template ? template.name : "";

				var folder = this._currentSelection.folder;
				var selectedFolder = this._currentSelection.selectedFolder;
				searchRepository.folder = folder;
				searchRepository.selectedFolder = selectedFolder;
				searchRepository.selected_folder_label = !folder || folder == this.folderSelector.root ? this.messages.folder_tree_repository_root_name : selectedFolder.getPathName();

				searchRepository.objectType = options.objectType;
				this._moreOptions.summarize();
				searchRepository.search_options_summary = this._moreOptions._optionsLink.summaryText;

				searchRepository.textSearchEnabled = this.enableTextSearchCheckBox.get("checked");
				searchRepository.text_search_enabled = searchRepository.textSearchEnabled ? this.messages.yes : this.messages.no;
			} else if (this.repository.type == "od") {
				searchRepository.searchTemplate = this._currentSelection.template;
				searchRepository.selected_classes_label = ecm.messages.not_applicable;
				searchRepository.search_options_summary = ecm.messages.not_applicable;
				if (searchRepository.searchTemplate)
					searchRepository.selected_folder_label = searchRepository.searchTemplate.name;
				searchRepository.text_search_enabled = this.messages.not_applicable;
			} else {
				searchRepository.contentClass = this._currentSelection.contentClass;
				searchRepository.searchSubclasses = this.searchClassSelector.isIncludeSubclasses();
				searchRepository.selected_classes_label = this.searchClassSelector.label;
				if (searchRepository.searchSubclasses) {
					searchRepository.selected_classes_label += " " + ecm.messages.include_subclasses_note;
				}

				//folders info
				searchRepository.folder = this._currentSelection.folder;
				searchRepository.selectedFolder = this._currentSelection.selectedFolder;

				//use "Entire repository in the case of a folder root
				if (this._currentSelection.folder == this.folderSelector.root || !this._currentSelection.folder) {
					searchRepository.selected_folder_label = this.messages.folder_tree_repository_root_name;
				} else {
					searchRepository.selected_folder_label = this._currentSelection.selectedFolder.getPathName();
					if (this.repository.type != "cm") {
						searchRepository.searchSubfolders = this.folderSelector.isIncludeSubfolders();
						if (searchRepository.searchSubfolders) {
							searchRepository.selected_folder_label += ecm.messages.unified_search_including_subfolders;
						}
					}
				}

				//options info
				var options = this._moreOptions.getSelectedOptions();
				searchRepository.objectType = options.objectType;
				searchRepository.version = options.versionOption;
				this._moreOptions.summarize();
				searchRepository.search_options_summary = this._moreOptions._optionsLink.summaryText;

				if (utils.isRepositoryTextSearchable(this.repository)) {
					searchRepository.textSearchEnabled = this.enableTextSearchCheckBox.get("checked");
					searchRepository.text_search_enabled = searchRepository.textSearchEnabled ? this.messages.yes : this.messages.no;
				} else {
					searchRepository.textSearchEnabled = false;
					searchRepository.text_search_enabled = this.messages.not_applicable;
				}
			}

			var r = this.onAddRepository(searchRepository);
			if (r && this._editing) {
				this._editing = false;
			}

			return r;
		},

		_removeConnection: function() {
			this._removeRepositorySelectionChangeConnect();
			this._removefolderSelectConnect();
			this._removeonObjectTypeChangeConnect();
			this._removeMoreOptionsOnChangeConnect();
			this._removeOnContentClassSelectedConnect();
			this._removeTemplateChangeConnect();
		},

		_setUpBoxConnections: function() {
			this._connectfolderSelectConnect();
			this._connectMoreOptionsOnChangeConnect();
		},

		_setUpODConnections: function() {
			this._connectTemplateChange();
		},

		_setUpOtherConnections: function() {
			this._connectRepositorySelectionChangeConnect();
			this._connectfolderSelectConnect();
			this._connectObjectTypeChangeConnect();
			this._connectMoreOptionsOnChangeConnect();
			this._connectOnContentClassSelectedConnect();
		},

		/**
		 * establishes dijit connections
		 */
		_initDijitsOthers: function() {
			this._removeConnection();
			this._setUpOtherConnections();
		},

		_initDijitsBox: function() {
			this._removeConnection();
			this._setUpBoxConnections();
		},

		_initDijitsOD: function() {
			this._removeConnection();
			this._setUpODConnections();
		},

		_removeonObjectTypeChangeConnect: function() {
			// Search More Options
			if (this._onObjectTypeChangeConnect) {
				this._onObjectTypeChangeConnect.remove();
			}
		},

		_connectObjectTypeChangeConnect: function() {
			this._onObjectTypeChangeConnect = aspect.after(this._moreOptions, "onObjectTypeChange", lang.hitch(this, "_onObjectTypeChange"), true);
		},

		_removeMoreOptionsOnChangeConnect: function() {
			// Search More Options
			if (this._onMoreOptionsOnChangeConnect) {
				this._onMoreOptionsOnChangeConnect.remove();

			}
		},

		_connectMoreOptionsOnChangeConnect: function() {
			var self = this;
			this._onMoreOptionsOnChangeConnect = aspect.after(this._moreOptions, "onChange", function() {
				self._resizeMoreOptions(false);
			}, true);
		},

		_connectTemplateChange: function() {
			this._onSearchTemplateSelectedConnect = aspect.after(this.templateSelector, "onSearchTemplateSelected", lang.hitch(this, "_onSearchTemplateSelected"), true);

		},

		_onSearchTemplateSelected: function(searchTemplate) {
			this._currentSelection.template = searchTemplate;
			this._validateSelectionState();
		},

		_removeTemplateChangeConnect: function() {
			if (this._onSearchTemplateSelectedConnect) {
				this._onSearchTemplateSelectedConnect.remove();
			}
		},

		_removefolderSelectConnect: function() {
			// folder select
			if (this._folderSelectConnect) {
				this._folderSelectConnect.remove();
			}
		},

		_connectfolderSelectConnect: function() {
			this._folderSelectConnect = aspect.after(this.folderSelector, "onFolderSelected", lang.hitch(this, "_onFolderSelect"), true);
		},

		_removeRepositorySelectionChangeConnect: function() {
			if (this._repositorySelectionChangeConnect) {
				this._repositorySelectionChangeConnect.remove();
			}
		},

		_connectRepositorySelectionChangeConnect: function() {
			this._repositorySelectionChangeConnect = aspect.after(this.repositorySelect, "onChange", lang.hitch(this, "_onRepositoryChange"), true);
		},

		_removeOnContentClassSelectedConnect: function() {
			if (this._onContentClassSelectedConnect) {
				this._onContentClassSelectedConnect.remove();
			}
		},

		_connectOnContentClassSelectedConnect: function() {
			//search class select
			this._onContentClassSelectedConnect = aspect.after(this.searchClassSelector, "onContentClassSelected", lang.hitch(this, "_contentClassSelected"), true);
		},

		_setSelectedContentClass: function(params) {
			var multiple = params.contentClass instanceof SearchContentClasses;
			if (params.searchSubclasses && this.repository._isP8()) {
				this.searchClassSelector.setIncludeSubclasses(params.searchSubclasses);
			} else if (params.searchSubclasses == undefined && this.repository._isP8()) {
				this.searchClassSelector.setIncludeSubclasses(true);
			} else if (this.repository._isP8()) {
				this.searchClassSelector.setIncludeSubclasses(false);
			}

			this.searchClassSelector.setSelected(params.contentClass, multiple);
		},

		/**
		 * @param folder
		 *            an instance of {@link ecm.model.SelectedFolder}
		 */
		_onFolderSelect: function(/*ecm.model.SelectedFolder*/folder) {
			//If they selected the root folder in a repository, handle as though the repository was selected.
			if (utils.isRootFolder(folder)) {
				this._currentSelection.folder = null;
				this._currentSelection.selectedFolder = null;
			} else {
				var path = folder.path;
				if (this.repository._isP8()) {
					path = path.substr(1);
					path = path.substr(path.indexOf("\\"));
				}
				var objectStoreName = folder.item.repository.objectStoreName || null;
				var searchFolder = new SearchFolder(folder.item.id, path, objectStoreName, objectStoreName, folder.includeSubfolders);
				this._currentSelection.folder = folder.item;
				this._currentSelection.selectedFolder = searchFolder;
			}

			this._moreOptions.setVersionOptionDisabled(this.repository && (this.repository._isBox() || (this.repository._isP8Like() && !folder.root)));
			this._validateSelectionState();
		},

		/**
		 * contentClasses: an array of selected subclasses subclassSearch : boolean true if searching in sub classes
		 * other wise false
		 */
		_contentClassSelected: function(contentClass, subclassSearch) {
			this._currentSelection.contentClass = ((contentClass instanceof Array) ? new SearchContentClasses(contentClass) : contentClass);
			this._currentSelection.searchSubclasses = this.searchClassSelector.isIncludeSubclasses();
			if (this.repository._isCM()) {
				var textSearchable = utils.isRepositoryTextSearchable(this.repository, this._currentSelection.contentClass);
				this._setEnableTextSearchDisabled(!textSearchable);
				if (!textSearchable)
					this.enableTextSearchCheckBox.set("checked", false);
			}
			this._validateSelectionState();
		},

		/**
		 * validates if all required info has been gathered for an add repository
		 */
		_validateSelectionState: function() {
			// more checks to come
			if (this.repository.type == "box") {
				this.onSelectionComplete(true);
			} else if (this.repository.type == "od") {
				if (this._currentSelection.template) {
					this.onSelectionComplete(true);
				} else {
					this.onSelectionComplete(false);
				}
			} else if (this.repository && this._currentSelection.contentClass) {
				this.onSelectionComplete(true);
			} else {
				this.onSelectionComplete(false);
			}
		},
		/**
		 * initial set up of the repository selector
		 */
		_initRepositorySelect: function() {
			//repository selector
			//should be able to support selecting by value and then disabling selecting
			var selectOptions = [];
			for (var i = 0; i < Desktop.repositories.length; i++) {
				var repository = Desktop.repositories[i];
				var selectOption = {
					id: repository.id,
					label: repository.name
				};
				selectOptions.push(selectOption);
			}

			var st = new MemoryStore({
				data: selectOptions
			});
			this.repositorySelect.set("store", st);

			return Desktop.repositories[0];
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
				this.searchClassSelector.setVisibleOnlyForDocument(docsOnly);
				this.searchClassSelector.setVisibleOnlyForFolder(foldersOnly);
			}
		},

		/**
		 * @param objectType
		 *            a String
		 */
		_onObjectTypeChange: function(objectType) {
			if (this.repository) {
				var rootId = this._searchConfig.getRootClassId(objectType);
				if (rootId) {
					this._setClassSelectorFilters(objectType);

					// need to do this because searchconfig is not checking for "any" object type
					// and we need rootId to change to trigger a re-rendering of the class selector
					if (objectType == "all") {
						rootId = objectType;
					}

					this.searchClassSelector.defaultToFirstItem = true;
					this.searchClassSelector.setRootClassId(rootId);
					this._validateSelectionState();
				}
			}

			this._resizeMoreOptions(false);
		},

		_setUpDijitsBox: function(params) {
			this._initDijitsBox();

			domClass.remove(this.folderSelectorRow, "dijitHidden");
			domClass.add(this.searchClassSelectorRow, "dijitHidden");
			domClass.remove(this.moreOptionsRow, "dijitHidden");
			domClass.add(this.templateSelectorRow, "dijitHidden");
			
			this.repository.retrieveMetadataTemplates(lang.hitch(this, function(templates) {
				if (templates && templates.length) {
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
					this.metadataTemplateSelect.set("value", params.metadataTemplate ? params.metadataTemplate.id : "");
					domClass.remove(this.metadataTemplateSelect.domNode, "dijitHidden");
					domClass.add(this.noMetadataTemplatesMessageNode, "dijitHidden");
				} else {
					domClass.add(this.metadataTemplateSelect.domNode, "dijitHidden");
					domClass.remove(this.noMetadataTemplatesMessageNode, "dijitHidden");
				}

				domClass.remove(this.metadataTemplateSelectRow, "dijitHidden");
			}));

			this._setUpMoreOptions(params);

			this._rootObject = params.rootObject || this.repository;
			this.folderSelector.selectRootInitially = true;
			this.folderSelector.setShowIncludeSubFolders(false);
			if (params.folder) {
				var name = (params.selectedFolder || params.folder).name;
				this.repository.retrieveItem(params.folder.id, lang.hitch(this, function(item) {
					this.folderSelector.selectRootInitially = false;
					this.folderSelector.setRoot(this._rootObject);
					this.folderSelector.setSelected(item, false, name);
					this.folderSelector.setIncludeSubfolders(params.searchSubfolders);
				}));
			} else {
				this.folderSelector.setRoot(this._rootObject);
			}

			this._resizeMoreOptions(false);

			domClass.remove(this.enableTextSearchRow, "dijitHidden");
			this.enableTextSearchCheckBox.set("checked", !params.metadataTemplate || !!params.textSearchEnabled);
			this._setEnableTextSearchDisabled(!params.metadataTemplate);

			this._validateSelectionState();
		},

		_setUpDijitsOD: function(params) {
			this._initDijitsOD();

			domClass.add(this.folderSelectorRow, "dijitHidden");
			domClass.add(this.searchClassSelectorRow, "dijitHidden");
			domClass.add(this.moreOptionsRow, "dijitHidden");
			domClass.add(this.enableTextSearchRow, "dijitHidden");
			domClass.remove(this.templateSelectorRow, "dijitHidden");
			domClass.add(this.metadataTemplateSelectRow, "dijitHidden");
			
			this.templateSelector.repository == null;
			this.templateSelector.setRepository(this.repository);

			if (params.searchTemplate) {
				this.templateSelector.setSelected(params.searchTemplate);
			}

			this._validateSelectionState();

		},

		_setUpDijitsOthers: function(params) {
			this._initDijitsOthers();

			this._resizeMoreOptions(false);
			domClass.remove(this.folderSelectorRow, "dijitHidden");
			domClass.remove(this.searchClassSelectorRow, "dijitHidden");
			domClass.remove(this.moreOptionsRow, "dijitHidden");
			domClass.add(this.templateSelectorRow, "dijitHidden");
			domClass.add(this.metadataTemplateSelectRow, "dijitHidden");

			this._setUpMoreOptions(params);

			this._rootObject = params.rootObject;
			if (!this._rootObject) {
				this._rootObject = this.repository;
			}

			//initialize folder selector
			this.folderSelector.selectRootInitially = true;

			if (params.preventSelectRoot) {
				this.folderSelector.preventSelectRoot = params.preventSelectRoot;
			}

			if (params.preventSelectRootTooltip) {
				this.folderSelector.preventSelectRoot = params.preventSelectRootTooltip;
			}

			if (params.unselectableFolderIds) {
				this.folderSelector.unselectableFolderIds = params.unselectableFolderIds;
			}

			if (this.repository._isP8Like()) {
				this.folderSelector.setShowIncludeSubFolders(true);
			} else {
				this.folderSelector.setShowIncludeSubFolders(false);
			}

			if (params.folder) {
				var namef = (params.selectedFolder || params.folder).name;
				this.repository.retrieveItem(params.folder.id, lang.hitch(this, function(item) {
					this.folderSelector.selectRootInitially = false;
					this.folderSelector.setRoot(this._rootObject);
					this.folderSelector.setSelected(item, false, namef);
					this.folderSelector.setIncludeSubfolders(params.searchSubfolders);
				}));
			} else {
				this.folderSelector.setRoot(this._rootObject);
				if (this.repository._isP8Like()) {
					this.folderSelector.setIncludeSubfolders(true);
				}
			}

			var objectType = this._moreOptions.getSelectedOptions().objectType;
			this._setClassSelectorFilters(objectType);

			// Display the "Include text search criteria" option if the repository is text searchable,
			// and disable it when adding a new CM repository until the class has been selected
			domClass[utils.isRepositoryTextSearchable(this.repository) ? "remove" : "add"](this.enableTextSearchRow, "dijitHidden");
			this.enableTextSearchCheckBox.set("checked", !!params.textSearchEnabled || this.repository.capabilityQuery == "fulltextonly");
			this._setEnableTextSearchDisabled((this.repository._isCM() && params.textSearchEnabled == null) || this.repository.capabilityQuery == "fulltextonly");

			//initialize search class selector
			var handlerTemp = aspect.after(this.searchClassSelector, "onLoaded", lang.hitch(this, function() {
				handlerTemp.remove();

				if (params.contentClass) {
					this._setSelectedContentClass(params);
				} else {
					this._setSelectedContentClass({
						contentClass: this.searchClassSelector.getSelected(),
						searchSubclasses: this.searchClassSelector.isIncludeSubclasses()
					});
				}
			}));

			this.searchClassSelector.allowMultipleClasses = this.repository.supportsMultiClassSearch;
			if (this.repository.type == "cm" || this.repository.type == "cmis") {
				this.searchClassSelector.setShowIncludeSubclasses(false);
			} else if (this.repository.type == "p8") {
				this.searchClassSelector.setShowIncludeSubclasses(true);
				if (params.searchSubclasses || params.searchSubclasses == null || params.searchSubclasses == undefined) {//subclasses is true add
					this.searchClassSelector.setIncludeSubclasses(true);
				} else {
					this.searchClassSelector.setIncludeSubclasses(false);
				}
			}

			if (params.contentClass) {
				this.searchClassSelector.defaultToFirstItem = false;
			} else {
				this.searchClassSelector.defaultToFirstItem = true;
			}

			var reload = false;
			if (this.repository.allPseudoClassSupported) {
				// Show the All pseudo class if it is not configured to be hidden or we are working with an existing search repository that uses it
				var hasAll = !this.repository.hideSearchAllClasses() || (params.contentClass != null && params.contentClass.id == "$common");
				reload = hasAll != this.searchClassSelector.hasAll;
				this.searchClassSelector.hasAll = hasAll;
			} else {
				this.searchClassSelector.hasAll = false;
			}

			var rootClassId = this._searchConfig.getRootClassId(objectType);
			this.searchClassSelector.setRootClassId(rootClassId, true);
			this.searchClassSelector.setRepository(this.repository, reload);

			this._resizeMoreOptions(false);

			this._validateSelectionState();
		},

		_setUpMoreOptions: function(params) {
			if (this._moreOptions.repository) {
				this._moreOptions.resetOptions();
				this._moreOptions.restoreOptions();
			}
			if (params.objectType || params.version) {
				this._moreOptions.setSelectedOptions({
					objectType: params.objectType,
					versionOption: params.version
				}, false);
			}
			this._moreOptions.repository = this.repository;
			this._moreOptions.initialize();
			domClass[this._moreOptions.isObjectTypeOptionHidden() && this._moreOptions.isVersionOptionHidden() ? "add" : "remove"](this.moreOptionsRow, "dijitHidden");
		},

		_resizeMoreOptions: function(resizeOnly) {
			var width = domGeometry.getMarginBox(this.domNode).w - 20;
			width = width < 0 ? 0 : width;
			var height = domGeometry.getMarginBox(this.domNode).h;
			domGeometry.setMarginBox(this._moreOptions.domNode, {
				w: width,
				h: height
			});

			this._moreOptions.resize();

			if (!resizeOnly)
				this._moreOptions.summarize(width);
		},

		/**
		 * dijit wiring for when the selected repository changes
		 */
		_setUpDijits: function(params) {
			if (this.repository.type == "box") {
				this._setUpDijitsBox(params);
			} else if (this.repository.type == "od") {
				this._setUpDijitsOD(params);
			} else {
				this._setUpDijitsOthers(params);
			}
		},

		_setUpRepositoryConnections: function(repositories) {
			var repository;
			if (repositories && repositories.length > 0) {
				repository = repositories[0];
			}

			if (repository.connected) {
				this._onRepositoryChange(repository);
			} else if (!repository.connected) {
				var loginDialog = LoginDialog.getLoginDialog();
				loginDialog.connectToRepository(repository, lang.hitch(this, "_onRepositoryChange", repository));

				var loginDialogHideHandler = aspect.after(loginDialog, "hide", lang.hitch(this, function() {
					if (this.repository && !repository.connected) {
						this.repositorySelect.getDropdown().set("value", this.repository.id);
					}
					loginDialogHideHandler.remove();
				}));
			}
		},

		/**
		 * event raised by the repository select filtering select
		 */
		_onRepositoryChange: function(repository) {
			this.repository = repository;
			this._searchConfig = SearchConfiguration.getSearchConfiguration({
				repository: repository
			});
			if (this.repository == this._currentSelection.repository) {
				this._setUpDijits(this._currentSelection);
			} else {
				this._currentSelection = {
					repository: this.repository
				};
				this._setUpDijits(this._currentSelection);
			}

			this._validateSelectionState();
		},
		
		_onMetadataTemplateSelectChange: function() {
			// Enable the text search option if a template was selected; otherwise, check and disable it
			if (this.metadataTemplateSelect.get("value")) {
				this._setEnableTextSearchDisabled(false);
			} else {
				this.enableTextSearchCheckBox.set("checked", true);
				this._setEnableTextSearchDisabled(true);
			}
		},

		_setEnableTextSearchDisabled: function(disabled) {
			this.enableTextSearchCheckBox.set("disabled", disabled);
			domClass[disabled ? "add" : "remove"](this.enableTextSearchLabel, "disabled");
		},

		_showErrorMessage: function(messagePrefix, messageInserts) {
			if (!this._errorDialog)
				this._errorDialog = new ErrorDialog();
			this._errorDialog.showMessage(Message.createErrorMessage(messagePrefix, messageInserts));
		},

		_nop: null
	});
});

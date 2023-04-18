/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/json",
	"dojo/_base/Deferred",
	"dojo/keys",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/aspect",
	"dojo/store/Memory",
	"dijit/registry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/layout/BorderContainer",
	"dijit/form/Select",
	"dijit/tree/ForestStoreModel",
	"dojox/collections/Dictionary",
	"idx/layout/TitlePane",
	"ecm/Messages",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/widget/RadioButton",
	"ecm/widget/ValidationTextBox",
	"idx/widget/SloshBucket",
	"ecm/widget/HoverHelp",
	"ecm/widget/FilterTextBox",
	"ecm/widget/NumberTextBox",
	"ecm/model/Permission",
	"ecm/model/SearchConfiguration",
	"ecm/widget/search/SearchMoreOptions",
	"ecm/widget/UserGroupPrivilegePane",
	"ecm/widget/dialog/UserGroupPermissionDialog",
	"idx/html",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/RepositorySearch.html"
],

function(declare, lang, array, json, Deferred, keys, domClass, domStyle, domGeom, aspect, MemoryStore, registry, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, BorderContainer, Select, //
ForestStoreModel, Dictionary, TitlePane, Messages, LoggerMixin, MessagesMixin, RadioButton, ValidationTextBox, SloshBucket, HoverHelp, FilterTextBox, NumberTextBox, //
Permission, SearchConfiguration, SearchMoreOptions, UserGroupPrivilegePane, UserGroupPermissionDialog, idxHtml, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.RepositorySearch
	 * @class Provides a pane that is used to configure the search properties, search operators, and search results for
	 *        a repository.
	 */
	return declare("ecm.widget.admin.RepositorySearch", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.RepositorySearch.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_availableDocPropDescsStore: null,
		_availableFolderPropDescsStore: null,
		_availablePropDescsStore: null,
		_selectedDocSearchPropertiesStore: null,
		_selectedFolderSearchPropertiesStore: null,
		_searchOperatorsData: null,
		_searchOperatorNameDic: new Dictionary(),

		// constant definition
		SEARCH_OP_DATE: "datetimeOp",
		SEARCH_OP_INTEGER: "integerOp",
		SEARCH_OP_STRING: "stringOp",
		SEARCH_OP_BOOLEAN: "booleanOp",
		SEARCH_OP_OBJECT: "objectOp",
		SEARCH_OP_USER: "userOp",
		SEARCH_OP_ID: "idOp",
		SEARCH_OP_FLOAT: "floatOp",

		constructor: function() {
			if (!this._searchOperatorsData) {
				this._searchOperatorsData = {};
			}
		},

		postCreate: function() {
			this.inherited(arguments);

			this.enableUnifiedSearchesRadioButton.setHoverHelp(this.unifiedSearchesHoverHelp);
			this.disableUnifiedSearchesRadioButton.setHoverHelp(this.unifiedSearchesHoverHelp);
			this.maxResultsUnlimited.setHoverHelp(this._max_results_field_hover_help);
			this.maxResultsLimit.setHoverHelp(this._max_results_field_hover_help);
			this._maxResults.setHoverHelp(this._max_results_field_hover_help);
			this.timeoutUnlimited.setHoverHelp(this._timeout_field_hover_help);
			this.timeoutLimit.setHoverHelp(this._timeout_field_hover_help);
			this._timeoutInSeconds.setHoverHelp(this._timeout_field_hover_help);
			this.matchAll.setHoverHelp(this._search_match_help);
			this.matchAny.setHoverHelp(this._search_match_help);

			this.default_search_type_Documents.setHoverHelp(this._default_search_type_help);
			this.default_search_type_Folders.setHoverHelp(this._default_search_type_help);
			this.default_search_type_Folders_and_Documents.setHoverHelp(this._default_search_type_help);

			this.restricted_search_type_Documents.setHoverHelp(this._restricted_search_type_help);
			this.restricted_search_type_Folders.setHoverHelp(this._restricted_search_type_help);

			this._releasedVersionRadioButton.setHoverHelp(this._searchVersionHoverHelp);
			this._currentVersionRadioButton.setHoverHelp(this._searchVersionHoverHelp);
			this._allVersionsRadioButton.setHoverHelp(this._searchVersionHoverHelp);

			this._allClassesSearch.setHoverHelp(this._allClassesSearchHoverHelp);

			this.own(aspect.after(this._searchPermissionsDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			
			this._maxResults.set("invalidMessage", this.messages.property_integer_invalid);
			this._timeoutInSeconds.set("invalidMessage", this.messages.property_integer_invalid);

			this.own(aspect.after(this._searchProperties, "onAddRemove", lang.hitch(this, "_onFieldChange")));
			this.own(aspect.after(this._searchProperties, "onMoved", lang.hitch(this, "_onFieldChange")));

			this.own(aspect.after(this._searchOperators, "onAddRemove", lang.hitch(this, "_onFieldChange")));
			this.own(aspect.after(this._searchOperators, "onMoved", lang.hitch(this, "_onFieldChange")));

			this.own(aspect.after(this._defaultSearchResultCols, "onAddRemove", lang.hitch(this, "_onFieldChange")));
			this.own(aspect.after(this._defaultSearchResultCols, "onMoved", lang.hitch(this, "_onFieldChange")));

			this.own(aspect.after(this._searchPropertiesFilter, "_onInput", lang.hitch(this, "_filterSearchProperties"), true));
			this.own(aspect.after(this._searchPropertiesFilter, "_setValueAttr", lang.hitch(this, "_filterSearchProperties"), true));

			this.own(aspect.after(this._defaultSearchResultsFilter, "_onInput", lang.hitch(this, "_filterSearchCols"), true));
			this.own(aspect.after(this._defaultSearchResultsFilter, "_setValueAttr", lang.hitch(this, "_filterSearchCols"), true));

			this._searchProperties.getGridTooltipText = lang.hitch(this, "_getGridTooltipText");
			this._searchOperators.getGridTooltipText = lang.hitch(this, "_getGridTooltipText");
			this._defaultSearchResultCols.getGridTooltipText = lang.hitch(this, "_getGridTooltipText");

			/* SearchCriteria operators */
			this._searchOperatorNameDic.add("EQ", "operator_EQUAL");
			this._searchOperatorNameDic.add("!EQ", "operator_NOTEQUAL");
			this._searchOperatorNameDic.add("LK", "operator_LIKE");
			this._searchOperatorNameDic.add("SW", "operator_STARTSWITH");
			this._searchOperatorNameDic.add("EW", "operator_ENDSWITH");
			this._searchOperatorNameDic.add("!LK", "operator_NOTLIKE");
			this._searchOperatorNameDic.add("NL", "operator_NULL");
			this._searchOperatorNameDic.add("!NL", "operator_NOTNULL");
			this._searchOperatorNameDic.add("LT", "operator_LESS");
			this._searchOperatorNameDic.add("LE", "operator_LESSOREQUAL");
			this._searchOperatorNameDic.add("GT", "operator_GREATER");
			this._searchOperatorNameDic.add("GE", "operator_GREATEROREQUAL");
			this._searchOperatorNameDic.add("BT", "operator_BETWEEN");
			this._searchOperatorNameDic.add("!BT", "operator_NOTBETWEEN");
			this._searchOperatorNameDic.add("IN", "operator_IN");
			this._searchOperatorNameDic.add("IA", "operator_INANY");
			this._searchOperatorNameDic.add("!IN", "operator_NOTIN");
			this._searchOperatorNameDic.add("CT", "operator_CONTAINS");

			this._searchPermissionsTitlePane.set("title", this.messages.admin_repcfg_search_permission_title);
			this._searchPropertiesTitlePane.set("title", this.messages.search_filtered_properties);
			this._searchOperatorsTitlePane.set("title", this.messages.search_filtered_operators);
			this._defaultSearchResultsTitlePane.set("title", this.messages.default_search_results)
			this._searchPropertiesFilter.set("placeholder", this.messages.property_contains_label);
			this._defaultSearchResultsFilter.set("placeholder", this.messages.property_contains_label);
		},

		destroy: function() {
			this.logEntry("destroy");
			this.cleanData();

			if (this._searchOperatorNameDic) {
				this._searchOperatorNameDic.clear();
				delete this._searchOperatorNameDic;
			}

			this.inherited(arguments);
			this.logExit("destroy");
		},

		cleanData: function() {
			this.logEntry("cleanData");
			if (this._availableDocPropDescsStore) {
				delete this._availableDocPropDescsStore;
			}
			if (this._availableFolderPropDescsStore) {
				delete this._availableFolderPropDescsStore;
			}
			if (this._availablePropDescsStore) {
				delete this._availablePropDescsStore;
			}
			if (this._selectedDocSearchPropertiesStore) {
				delete this._selectedDocSearchPropertiesStore;
			}
			if (this._selectedFolderSearchPropertiesStore) {
				delete this._selectedFolderSearchPropertiesStore;
			}

			if (this.colsDictionary) {
				this.colsDictionary.clear();
				delete this.colsDictionary;
			}

			if (this._searchOperatorsData) {
				array.forEach(this._searchOperatorsData, lang.hitch(this, function(entry) {
					if (entry.availableStore) {
						delete entry.availableStore;
					}
					if (entry.selectedStore) {
						delete entry.selectedStore;
					}
					delete entry.values;
					delete entry.option;
				}));
			}
			this._init = false;
			this.logExit("cleanData");
		},

		_deleteDataStore: function(store) {
			if (store) {
				store.save();
				store.close();
				delete store;
			}
		},

		// Called before save
		loadWithFieldValues: function(repositoryConfig) {
			this.logEntry("loadWithFieldValues");
			if (repositoryConfig.getType() == "cm" || repositoryConfig.getType() == "p8" || repositoryConfig.getType() == "cmis") {
				this._saveData(repositoryConfig);
			} else if (repositoryConfig.getType() == "od") {
				if (this.maxResultsUnlimited.get('checked')) {
					repositoryConfig.setSearchMaxResults("0"); // max number
				} else {
					repositoryConfig.setSearchMaxResults("" + this._maxResults.get('value'));
				}
			}
			this.logExit("loadWithFieldValues");
		},

		_saveData: function(repositoryConfig) {
			this.logEntry("_saveData");
			if (repositoryConfig.getType() == "cmis") {
				repositoryConfig.setSearchMaxResults("-1"); // not applicable.
			} else {
				repositoryConfig.setUnifiedSearchesEnabled(this.enableUnifiedSearchesRadioButton.get("checked"));
				if (this.maxResultsUnlimited.get('checked')) {
					repositoryConfig.setSearchMaxResults("0"); // max number
				} else {
					repositoryConfig.setSearchMaxResults("" + this._maxResults.get('value'));
				}
			}

			if (repositoryConfig.getType() == "p8" || repositoryConfig.getType() == "cmis" || repositoryConfig.getType() == "cm") {
				if (this.timeoutUnlimited.get('checked')) {
					repositoryConfig.setTimeoutInSeconds("0"); // max number
				} else {
					repositoryConfig.setTimeoutInSeconds("" + this._timeoutInSeconds.get('value'));
				}
			}

			if (repositoryConfig.getType() == "p8" || repositoryConfig.getType() == "cmis" || repositoryConfig.getType() == "cm") {
				repositoryConfig.setMatchAll(this.matchAll.get('checked'));

				var type = (this.default_search_type_Documents.get('checked') ? SearchConfiguration.prototype.OBJECT_TYPE.DOCUMENT : //
				this.default_search_type_Folders.get('checked') ? SearchConfiguration.prototype.OBJECT_TYPE.FOLDER : //
				this.default_search_type_Folders_and_Documents.get('checked') ? SearchConfiguration.prototype.OBJECT_TYPE.ALL : SearchConfiguration.prototype.OBJECT_TYPE.DOCUMENT);
				repositoryConfig.setDefaultSearchType(type);

				repositoryConfig.setRestrictedSearchDocumentsType(this.restricted_search_type_Documents.get('checked'));
				repositoryConfig.setRestrictedSearchFoldersType(this.restricted_search_type_Folders.get('checked'));

				var version = SearchMoreOptions.VERSION_OPTION.CURRENT;
				if (this._releasedVersionRadioButton.get("checked"))
					version = SearchMoreOptions.VERSION_OPTION.RELEASED;
				else if (this._allVersionsRadioButton.get("checked"))
					version = SearchMoreOptions.VERSION_OPTION.ALL;
				repositoryConfig.setDefaultSearchVersion(version);
			}

			if (repositoryConfig.getType() == "cm" && !this.repositoryData.repository.allPseudoClassHidden) {
				repositoryConfig.setAllClassesSearch(this._allClassesSearch.get('value'));
			}

			var values = this._getValuesFromMemoryStore(this._selectedDocSearchPropertiesStore);
			repositoryConfig.setSearchFilteredDocumentProperties(values);

			values = this._getValuesFromMemoryStore(this._selectedFolderSearchPropertiesStore);
			repositoryConfig.setSearchFilteredFolderProperties(values);

			for ( var dataType in this._searchOperatorsData) {
				repositoryConfig.setSearchFilteredOperators(dataType, this._getValuesFromMemoryStore(this._searchOperatorsData[dataType].selectedStore));
			}

			var nameField = this.repositoryData.defaultData.getNameFieldPlaceholder();
			var dataArray = this._defaultSearchResultCols.getSelectedItems();
			var detailValues = [];
			var magazineValues = [];
			for (var i = 0; i < dataArray.length; i++) {
				var item = dataArray[i];
				if (item.detailsView) {
					detailValues.push(item.value ? item.value : item.name);
				}
				if (item.magazineView && item.value != nameField) {
					magazineValues.push(item.value ? item.value : item.name);
				}
			}
			repositoryConfig.setSearchDefaultColumns(detailValues);
			repositoryConfig.setSearchMagazineDefaultColumns(magazineValues);

			if (repositoryConfig.getType() != "cmis" && repositoryConfig.getType() != "od") {
				var searchPermissions = this._searchPermissionsDataPane.get("userGroupData");
				if( typeof searchPermissions == "string" ){
					repositoryConfig.setSearchPermissions(searchPermissions);
				}else{
					repositoryConfig.setSearchPermissions(json.stringify(searchPermissions));
				}
					
				
			}

			this.logExit("_saveData");
		},

		/**
		 * Called when the user hits the Reset button or when the repository tab opens. Need to call load available and
		 * load selected in sequence but defer is too much for this.
		 */
		loadData: function(container, callback) {
			this.logEntry("loadData");
			this.cleanData();
			var type = this.repositoryData.type;
			if (type == "p8" || type == "cmis") { // update the search result instructions for p8 and cmis as they only apply to documents (cm applies to document and folders)
				this._defaultSearchResultsInstructions.innerHTML = this.messages.admin_search_default_search_results_p8_cmis_instruction;
			}

			if (type == "p8")
				this.searchAccessControlHover.set("message", this.messages.admin_repcfg_search_permission_hover_p8);
			else if (type == "cm")
				this.searchAccessControlHover.set("message", this.messages.admin_repcfg_search_permission_hover_cm);

			if (type == "cm" || type == "p8" || type == "cmis") {
				this._createStore();
				var d = new Deferred();
				d.then(lang.hitch(this, function(dummy) {
					this._loadSearchPermissions();
					this._loadSearchPropertiesSloshbucket();
					this._setupSearchOperators();
					this._loadSearchResultColsSloshbucket();
					this._loadSearchResultColsListeners();

					this._configureMiscControls();
					this._dataTypeSelect.set('value', this.repositoryData.defaultData.getAvailableOperators()[1]);
					this._dataTypeSelect.set('value', this.repositoryData.defaultData.getAvailableOperators()[0]);
					this._objectTypeSelect.set('value', 'document');
					this.resize();
					setTimeout(lang.hitch(this, this.initializationOnComplete, callback), 1000);
					return true;
				}));
				d.resolve(true);
			} else {
				this._configureMiscControls();
				this.resize();
				setTimeout(lang.hitch(this, this.initializationOnComplete, callback), 1000);
			}
			this.logExit("loadData");
		},

		initializationOnComplete: function(callback) {
			this._init = true;
			if (callback)
				callback();
		},

		_configureMiscControls: function() {
			var type = this.repositoryData.type;
			if (type == "cmis" || type == "od") {
				domStyle.set(this.unifiedSearchesRow, "display", "none");
				domStyle.set(this._searchPermissionsTitlePane.domNode, "display", "none");
			} else {
				this.unifiedSearchesHoverHelp.set("message", type == "p8" ? this.messages.admin_unified_searches_hover : this.messages.admin_unified_searches_cm_hover);
				if (this.repositoryData.repositoryConfig.getUnifiedSearchesEnabled())
					this.enableUnifiedSearchesRadioButton.set('checked', true);
				else
					this.disableUnifiedSearchesRadioButton.set('checked', true);
			}

			if (type == "cmis") {
				domStyle.set(this.maxResults_row, "display", "none");
			} else {
				if (this.repositoryData.repositoryConfig.getSearchMaxResults() == "0" || this.repositoryData.repositoryConfig.getSearchMaxResults() == "") {
					this.maxResultsUnlimited.set("checked", true);
					this._maxResults.set('value', this.repositoryData.defaultData.getSearchMaxResults());
					this._maxResults.set("disabled", true);
				} else {
					this.maxResultsLimit.set("checked", true);
					this._maxResults.set("disabled", false);
					this._maxResults.set('value', this.repositoryData.repositoryConfig.getSearchMaxResults());
				}
			}

			if (type == "od") { // disable rest of control in OD
				domStyle.set(this.timeout_row, "display", "none");
				domStyle.set(this.match_row, "display", "none");

				domStyle.set(this._searchPropertiesTitlePane.domNode, "display", "none");
				domStyle.set(this._defaultSearchResultsTitlePane.domNode, "display", "none");
				domStyle.set(this._searchOperatorsTitlePane.domNode, "display", "none");
			} else if (type == "cmis") {
				domStyle.set(this.timeout_row, "display", "none");
			} else {
				if (this.repositoryData.isNew())
					this.repositoryData.repositoryConfig.setTimeoutInSeconds(this.repositoryData.defaultData.getTimeoutInSeconds());
				if (this.repositoryData.repositoryConfig.getTimeoutInSeconds() == "0") {
					this.timeoutUnlimited.set("checked", true);
					this._timeoutInSeconds.set('value', this.repositoryData.defaultData.getTimeoutInSeconds());
					this._timeoutInSeconds.set("disabled", true);
				} else {
					this.timeoutLimit.set("checked", true);
					this._timeoutInSeconds.set("disabled", false);
					this._timeoutInSeconds.set('value', this.repositoryData.repositoryConfig.getTimeoutInSeconds());
				}
			}

			if (type != "od") {
				var matchAll = this.repositoryData.repositoryConfig.getMatchAll();
				(matchAll || matchAll == null) ? this.matchAll.set("checked", true) : this.matchAny.set("checked", true);
			}

			if (type == "cm") {
				// This option cannot be changed if set to hidden in the web.xml.
				if (this.repositoryData.repository.allPseudoClassHidden) {
					this._allClassesSearchHoverHelp.set("message", this.messages.admin_all_classes_search_removed_hover);
					this._allClassesSearch.set("disabled", true);
					this._allClassesSearch.set('value', this.repositoryData.repository.ALL_CLASSES_SEARCH.HIDDEN);
				} else {
					this._allClassesSearch.set('value', this.repositoryData.repositoryConfig.getAllClassesSearch());
				}
			} else {
				domStyle.set(this.default_search_type_Folders_and_Documents_control, "display", "none");
				domStyle.set(this.allClassesSearch_row, "display", "none");
			}

			if (type == "p8" || type == "cmis" || type == "cm") {
				var default_search_type = this.repositoryData.repositoryConfig.getDefaultSearchType();
				this.restricted_search_type_Documents.set('checked', this.repositoryData.repositoryConfig.getRestrictedSearchDocumentsType());
				this.restricted_search_type_Folders.set('checked', this.repositoryData.repositoryConfig.getRestrictedSearchFoldersType());
				if (type == "cmis" && !this.repositoryData.folderSearchSupported) {
					default_search_type = SearchConfiguration.prototype.OBJECT_TYPE.DOCUMENT; // just in case
					domStyle.set(this._searchPropertiesType, "display", "none");
				} else {
					domStyle.set(this.default_search_type_row, "display", "");
					domStyle.set(this.restricted_search_type_row, "display", "");
					if (!this.restricted_search_type_Documents.get('checked')) {
						this.restricted_search_type_Folders.set('disabled', true);
						if (type == "p8") {
							this._releasedVersionRadioButton.set('disabled', true);
							this._currentVersionRadioButton.set('disabled', true);
							this._allVersionsRadioButton.set('disabled', true);
						}

					} else {
						if (type == "p8") {
							this._releasedVersionRadioButton.set('disabled', false);
							this._currentVersionRadioButton.set('disabled', false);
							this._allVersionsRadioButton.set('disabled', false);
						}
					}
					if (!this.restricted_search_type_Folders.get('checked')) {
						this.restricted_search_type_Documents.set('disabled', true);
					}
				}

				if (default_search_type == undefined || default_search_type == null || default_search_type == SearchConfiguration.prototype.OBJECT_TYPE.DOCUMENT) {
					this.default_search_type_Documents.set("checked", true);
				} else if (default_search_type == SearchConfiguration.prototype.OBJECT_TYPE.FOLDER) {
					this.default_search_type_Folders.set("checked", true);
				} else if (type == "cm" && default_search_type == SearchConfiguration.prototype.OBJECT_TYPE.ALL) {
					this.default_search_type_Folders_and_Documents.set("checked", true);
				} else { // something unknown
					this.default_search_type_Documents.set("checked", true);
				}
			} else { // all other platforms
				domStyle.set(this.default_search_type_row, "display", "none");
				domStyle.set(this.restricted_search_type_row, "display", "none");
			}

			if (type == "p8" || type == "cm" || (type == "cmis" && this.repositoryData.capabilityAllVersionsSearchable)) {
				var defaultSearchVersion = this.repositoryData.repositoryConfig.getDefaultSearchVersion();
				if (type != "p8")
					domStyle.set(this._releasedVersionNode, "display", "none");
				else
					domClass.add(this._currentVersionRadioButton.domNode, "radioButton2");
				if (type == "p8" && (!defaultSearchVersion || defaultSearchVersion == SearchMoreOptions.VERSION_OPTION.RELEASED))
					this._releasedVersionRadioButton.set("checked", true);
				else if (defaultSearchVersion == SearchMoreOptions.VERSION_OPTION.ALL)
					this._allVersionsRadioButton.set("checked", true);
				else
					this._currentVersionRadioButton.set("checked", true);
				domStyle.set(this._searchVersionNode, "display", "");
			}
		},

		_setupSearchOperators: function() {
			this.logEntry("_setupSearchOperators");
			var options = [];
			var first = null;
			array.forEach(this.repositoryData.defaultData.getAvailableOperators(), lang.hitch(this, function(entry) {
				if (first == null)
					first = entry;
				options.push(this._searchOperatorsData[entry].option);
			}));
			this._loadOperatorsSloshbucket(first);
			if (this._dataTypeSelect.getOptions(0))
				this._dataTypeSelect.updateOption(options);
			else
				this._dataTypeSelect.addOption(options);
			this.logExit("_setupSearchOperators");
		},

		_loadOperatorsSloshbucket: function(dataType) {
			this.logEntry("_loadOperatorsSloshbucket");
			var availableStructure = [
				{
					field: "label",
					name: this.messages.admin_available_operators,
					width: "100%"
				}
			];
			this._searchOperators.setAvailableGridData(this._searchOperatorsData[dataType].availableStore, availableStructure);
			var selectedStructure = [
				{
					field: "label",
					name: this.messages.admin_selected_filtered_operators,
					width: "100%"
				}
			];
			this._searchOperators.setSelectedGridData(this._searchOperatorsData[dataType].selectedStore, selectedStructure);
			this.logExit("_loadOperatorsSloshbucket");
		},

		/* Handle permissions area */

		/**
		 * @private
		 */
		_loadSearchPermissions: function() {
			this.logEntry("_loadSearchPermissions");
			if (this.repositoryData.type == "p8" || this.repositoryData.type == "cm") {
				this._searchPermissionsDataPane.set("levels", this.repositoryData.repositoryConfig.getAddOnTooltipPermissionLevels()); 
				this._searchPermissionsDataPane.set("userGroupData", lang.clone(this.repositoryData.repositoryConfig.getSearchPermissions()));
				this._searchPermissionsDataPane.render();
			}
			this.logExit("_loadSearchPermissions");
		},

		/**
		 * @private
		 */
		_searchPermissionsButtonClick: function() {
			this.logEntry("_searchPermissionsButtonClick");

			var userGroupData = this._searchPermissionsDataPane.get("userGroupData");
			this._showSelectUserGroupPermissionDialog(userGroupData, lang.hitch(this, function() {
				this._searchPermissionsDataPane.set("userGroupData", userGroupData);
				this.onMarkDirty();
				this._searchPermissionsDataPane.render();
			}));

			this.logEntry("_searchPermissionsButtonClick");
		},

		/**
		 * @private Shows the add users dialog.
		 */
		_showSelectUserGroupPermissionDialog: function(data, callback) {
			var repository = this.repositoryData.repository;
			if (!repository.privileges.findUsersAndGroups) {
				if (!this._errorDialog) {
					this._errorDialog = new ErrorDialog();
				}
				this._errorDialog.showMessage(Message.createErrorMessage("admin_cannot_select_users_groups_error"));

			} else {
				if (this._userGroupPermissionDialog) {
					this._userGroupPermissionDialog.destroy();
				}

				var permissions = [];
				var selectedUserGroups = [];
				array.forEach(data, lang.hitch(this, function(accessControlItem) {
					if (accessControlItem.selectable) {
						permissions.push({
							value: accessControlItem.id,
							label: accessControlItem.label
						});
					}
					array.forEach(accessControlItem.usersGroups, lang.hitch(this, function(userGroup) {
						selectedUserGroups.push(userGroup);
					}));
				}));

				this._userGroupPermissionDialog = new UserGroupPermissionDialog({
					permissions: permissions,
					filteredItems: selectedUserGroups,
					defaultScope: "groups",
					showPseudoGroups: (repository.type == "p8"),
					repository: repository,
					callback: lang.hitch(this, function(permissionId, selectedUserGroups) {
						for ( var j in data) {
							var accessControlItem = data[j];
							if (accessControlItem.id == permissionId) {
								for (k in selectedUserGroups) {
									var group = lang.mixin({
										accessMask: accessControlItem.accessMask,
										accessType: Permission.ACCESS_TYPE.ALLOW,
										permissionSource: Permission.PERMISSION_SOURCE.DIRECT,
										inheritableDepth: 0
									}, selectedUserGroups[k]);
									accessControlItem.usersGroups.push(group);
								}
								break;
							}
						}
						if (callback) {
							callback();
						}
					})
				});
				this._userGroupPermissionDialog.show(repository);
			}
		},

		/* End Permissions */

		resetData: function() {
			if (this._init && !this.isResetingFields()) {
				this.loadData();
			}
		},

		// override
		onMarkDirty: function() {
		},

		_onFieldChange: function() {
			var type = this.repositoryData.type;
			if (this._init && !this.isResetingFields())
				this.onMarkDirty();
			if (!this.restricted_search_type_Documents.get('checked')) {
				this.restricted_search_type_Folders.set('disabled', true);
				this.default_search_type_Folders.set('checked', true);
				if (type == "p8") {
					this._releasedVersionRadioButton.set('disabled', true);
					this._currentVersionRadioButton.set('disabled', true);
					this._allVersionsRadioButton.set('disabled', true);
				}

			} else {
				if (type == "p8") {
					this._releasedVersionRadioButton.set('disabled', false);
					this._currentVersionRadioButton.set('disabled', false);
					this._allVersionsRadioButton.set('disabled', false);
				}
			}
			if (!this.restricted_search_type_Folders.get('checked')) {
				this.restricted_search_type_Documents.set('disabled', true);
				this.default_search_type_Documents.set('checked', true);
			}
			if (this.restricted_search_type_Documents.get('checked') && this.restricted_search_type_Folders.get('checked')) {
				this.restricted_search_type_Folders.set('disabled', false);
				this.restricted_search_type_Documents.set('disabled', false);
			}
			if ((this.restricted_search_type_Documents.get('checked') && //
			!this.restricted_search_type_Folders.get('checked')) //
					|| (!this.restricted_search_type_Documents.get('checked') && //
					this.restricted_search_type_Folders.get('checked')) //
			) {
				this.default_search_type_Documents.set('disabled', true);
				this.default_search_type_Folders.set('disabled', true);
				this.default_search_type_Folders_and_Documents.set('disabled', true);
			} else {
				this.default_search_type_Documents.set('disabled', false);
				this.default_search_type_Folders.set('disabled', false);
				this.default_search_type_Folders_and_Documents.set('disabled', false);
			}
		},

		/**
		 * Create search operator related structure by data type in _searchOperatorsData.
		 */
		_createSearchOperatorsData: function(operatorType) {
			this.logEntry("_createSearchOperatorsData");
			var availArray = [];
			array.forEach(this.repositoryData.defaultData.getSearchFilteredOperators(operatorType), lang.hitch(this, function(entry) {
				availArray.push({
					label: this.messages[this._searchOperatorNameDic.item(entry)],
					value: entry,
					id: entry
				});
			}));
			var selectedArray = [];
			array.forEach(this.repositoryData.repositoryConfig.getSearchFilteredOperators(operatorType), lang.hitch(this, function(entry) {
				selectedArray.push({
					label: this.messages[this._searchOperatorNameDic.item(entry)],
					value: entry,
					id: entry
				});
			}));
			this._searchOperatorsData[operatorType] = {
				availableStore: new MemoryStore({
					data: availArray
				}),
				selectedStore: new MemoryStore({
					data: selectedArray
				}),
				option: {
					value: operatorType,
					label: this.messages["admin_" + operatorType]
				}
			};
			this.logExit("_createSearchOperatorsData");
		},

		/**
		 * Need to clone property description array locally if more than one tab is using the same array to create an
		 * store in the slosh bucket that will cause "Invalid argument type" error.
		 */
		_createStore: function() {
			this.logEntry("_createStore");
			// Load the store containing the search results twisty
			var availablePropDescs = lang.clone(this.repositoryData.documentSystemPropDescs);
			availablePropDescs.push({
				label: ecm.messages.class_label_no_html_encode,
				value: "{CLASS}"
			});
			availablePropDescs.push({
				label: ecm.messages.name_label,
				value: this.repositoryData.defaultData.getNameFieldPlaceholder()
			});
			availablePropDescs.sort(lang.hitch(this, this._sort));
			for ( var i in availablePropDescs) {
				var item = availablePropDescs[i];
				item.id = item.value;
				item.magazineView = true;
				var showInDetailsView = true;
				if (this.repositoryData.type == "p8") {
					if (availablePropDescs[i].value == "CmThumbnails" || availablePropDescs[i].value.substring(0, 3) == "Clb") {
						showInDetailsView = false;
					}
				}
				item.detailsView = showInDetailsView;
			}
			this._availablePropDescsStore = new MemoryStore({
				data: availablePropDescs
			});

			// Load the document and folder properties stores for the search properties twisty
			var documentPropDescs = [];
			for (var i = 0; i < this.repositoryData.documentPropDescs.length; i++) {
				var newItem = lang.clone(this.repositoryData.documentPropDescs[i]);
				if (newItem.value != "{CLASS}" && (newItem.searchable == null || newItem.searchable)) {
					newItem.id = newItem.value;
					documentPropDescs.push(newItem);
				}
			}
			this._availableDocPropDescsStore = new MemoryStore({
				data: documentPropDescs
			});

			var folderPropDescs = [];
			for (var i = 0; i < this.repositoryData.folderPropDescs.length; i++) {
				var newItem = lang.clone(this.repositoryData.folderPropDescs[i]);
				if (newItem.searchable == null || newItem.searchable) {
					newItem.id = newItem.value;
					folderPropDescs.push(newItem);
				}
			}
			this._availableFolderPropDescsStore = new MemoryStore({
				data: folderPropDescs
			});

			// setup selected array
			var docItemArray = [];
			array.forEach(this.repositoryData.repositoryConfig.getSearchFilteredDocumentProperties(), lang.hitch(this, function(entry) {
				var foundItem = this.repositoryData.findColDefinition(entry.toLowerCase());
				if (foundItem) {
					var newItem = lang.clone(foundItem);
					newItem.id = newItem.value;
					docItemArray.push(newItem);
				} else {
					docItemArray.push({
						label: this.messages[entry] || this.messages[entry.toLowerCase()],
						value: entry,
						id: entry
					});
				}
			}));
			this._selectedDocSearchPropertiesStore = new MemoryStore({
				data: docItemArray
			});

			// setup selected array 
			var folderItemArray = [];
			array.forEach(this.repositoryData.repositoryConfig.getSearchFilteredFolderProperties(), lang.hitch(this, function(entry) {
				var foundItem = this.repositoryData.findColDefinition(entry.toLowerCase());
				if (foundItem) {
					var newItem = lang.clone(foundItem);
					newItem.id = newItem.value;
					folderItemArray.push(newItem);
				} else {
					folderItemArray.push({
						label: this.messages[entry] || this.messages[entry.toLowerCase()],
						value: entry,
						id: entry
					});
				}
			}));
			this._selectedFolderSearchPropertiesStore = new MemoryStore({
				data: folderItemArray
			});

			// Setup search operators data store in _searchOperatorsData
			array.forEach(this.repositoryData.defaultData.getAvailableOperators(), lang.hitch(this, function(entry) {
				this._createSearchOperatorsData(entry);
			}));
			this.logExit("_createStore");
		},

		/**
		 * Load search properties sloshbucket.
		 */
		_loadSearchPropertiesSloshbucket: function() {
			var docPropDescStructure = [
				{
					field: "label",
					name: this.messages.admin_displayed_properties,
					width: "100%"
				}
			];
			this._searchProperties.setAvailableGridData(this._availableDocPropDescsStore, docPropDescStructure);
			var structure = [
				{
					field: "label",
					name: this.messages.admin_selected_filtered_properties,
					width: "100%"
				}
			];
			this._searchProperties.setSelectedGridData(this._selectedDocSearchPropertiesStore, structure, this.repositoryData.defaultData.getFolderDefFixedCols());
		},

		/**
		 * Load search columns sloshbucket.
		 */
		_loadSearchResultColsSloshbucket: function() {
			this.logEntry("_loadSearchResultColsSloshbucket");
			var docPropDescStructure = [
				{
					field: "label",
					name: this.messages.admin_available_properties,
					width: "100%"
				}
			];
			this._defaultSearchResultCols.setAvailableGridData(this._availablePropDescsStore, docPropDescStructure);

			var itemArray = this.repositoryData.getSearchResultsColumnData();
			for (var i = 0; i < itemArray.length; i++) {
				var entry = itemArray[i];
				entry.id = entry.value;
				entry.order = i;
			}
			var store = new MemoryStore({
				data: itemArray
			});
			var self = this;
			var structure = [
				{
					field: "label",
					name: this.messages.admin_displayed_properties,
					width: "70%"
				},
				{
					field: "detailsView",
					name: this.messages.detail_view_show,
					widgetsInCell: true,
					navigable: true,
					style: 'align: center; text-align: center;',
					headerStyle: 'align: center; text-align: center;',
					width: "15%",
					decorator: function() {
						return '<span data-dojo-type="ecm/widget/CheckBox" data-dojo-attach-point="detailsCb" />';
					},
					setCellValue: function(data, storeData, cellWidget) {
						var disabled = false;
						if (!disabled && self.repositoryData.type == "p8") {
							var item = cellWidget.cell.row.item();
							if (item && item.value) {
								if (item.value == "CmThumbnails") {
									disabled = true;
								}
							}
						}
						this.detailsCb.set("disabled", disabled);
						this.detailsCb.set("checked", data);
					}
				},
				{
					field: "magazineView",
					name: this.messages.magazine_view_show,
					widgetsInCell: true,
					navigable: true,
					style: 'align: center; text-align: center;',
					headerStyle: 'align: center; text-align: center;',
					width: "15%",
					decorator: function() {
						return '<span data-dojo-type="ecm/widget/CheckBox" data-dojo-attach-point="magazineCb" />';
					},
					setCellValue: function(data, storeData, cellWidget) {
						var disabled = cellWidget.cell.row.index() == 0; // First row (Name) is disabled for magazine view
						this.magazineCb.set("disabled", disabled);
						this.magazineCb.set("checked", data);
					}
				}
			];
			this._defaultSearchResultCols.setSelectedGridData(store, structure, this.repositoryData.defaultData.getSearchResultDefFixedCols());
			this.logExit("_loadSearchResultColsSloshbucket");
		},

		_loadSearchResultColsListeners: function() {
			this.logEntry("_loadSearchResultColsListeners");
			this.own(aspect.after(this._defaultSearchResultCols.selectedGrid, "onCellClick", lang.hitch(this, function(evt) {
				var grid = this._defaultSearchResultCols.selectedGrid;
				if (evt.columnId == "2") {
					var disabled = grid.cell(evt.rowId, evt.columnId).widget().detailsCb.get("disabled");
					if (!disabled) {
						this._toggleCheckbox(grid, "detailsView", evt);
					}
				} else if (evt.columnId == "3") {
					var disabled = grid.cell(evt.rowId, evt.columnId).widget().magazineCb.get("disabled");
					if (!disabled) {
						this._toggleCheckbox(grid, "magazineView", evt);
					}
				}
			}), true));
			this.own(aspect.after(this._defaultSearchResultCols.selectedGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				var grid = this._defaultSearchResultCols.selectedGrid;
				if (evt.columnId == "2" && evt.keyCode == keys.SPACE) {
					var disabled = grid.cell(evt.rowId, evt.columnId).widget().detailsCb.get("disabled");
					if (!disabled) {
						this._toggleCheckbox(grid, "detailsView", evt);
					}
				} else if (evt.columnId == "3" && evt.keyCode == keys.SPACE) {
					var disabled = grid.cell(evt.rowId, evt.columnId).widget().magazineCb.get("disabled");
					if (!disabled) {
						this._toggleCheckbox(grid, "magazineView", evt);
					}
				}
			}), true));
			this.logExit("_loadSearchResultColsListeners");
		},

		_toggleCheckbox: function(grid, field, evt) {
			var item = grid.model.store.get(evt.rowId);
			if (item) {
				item[field] = !item[field];
				grid.model.store.put(item, {
					id: item.id,
					overwrite: true
				});

				//this.onMarkDirty();
				this._onFieldChange();
			}
		},

		_getGridTooltipText: function(grid, item) {
			if (item) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.label));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.value_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.value));
				toolTip.push("</span></div>");
				return toolTip.join("");
			}
			return "";
		},

		/**
		 * Event handler on selection changed for object type drop-down.
		 */
		_onObjectTypeChange: function(objectType) {
			this.logEntry("_onObjectTypeChange");
			var availableStructure = [
				{
					field: "label",
					name: this.messages.admin_displayed_properties,
					width: "100%"
				}
			];
			var structure = [
				{
					field: "label",
					name: this.messages.admin_selected_filtered_properties,
					width: "100%"
				}
			];
			if (objectType == SearchConfiguration.prototype.OBJECT_TYPE.DOCUMENT) {
				this._searchProperties.setAvailableGridData(this._availableDocPropDescsStore, availableStructure);
				this._searchProperties.setSelectedGridData(this._selectedDocSearchPropertiesStore, structure, this.repositoryData.defaultData.getFolderDefFixedCols());
			} else {
				this._searchProperties.setAvailableGridData(this._availableFolderPropDescsStore, availableStructure);
				this._searchProperties.setSelectedGridData(this._selectedFolderSearchPropertiesStore, structure, this.repositoryData.defaultData.getFolderDefFixedCols());
			}
			this._filterSearchProperties();
			var filterData = this._searchPropertiesFilter.get("value") || "";
			if (filterData != "") {
				this._searchProperties.filter({
					label: filterData
				});
			}
			this.logExit("_onObjectTypeChange");
		},

		/**
		 * Event handler on selection changed for search operator drop-down.
		 */
		_onDataTypeChange: function(dataType) {
			if (dataType == null || !this._init)
				return;
			this.logEntry("_onDataTypeChange");
			this._loadOperatorsSloshbucket(dataType);
			this.logExit("_onDataTypeChange");
		},

		// Check if all the data is valid
		validateData: function(focus) {
			if (this.maxResultsLimit.get('checked') && !this._maxResults.isValid()) {
				this.set("iconClass", "required");
				if (focus) {
					this._maxResults.focus();
				}
				return false;
			}
			if (this.timeoutLimit.get('checked') && !this._timeoutInSeconds.isValid()) {
				this.set("iconClass", "required");
				if (focus) {
					this._timeoutInSeconds.focus();
				}
				return false;
			}
			if (this.repositoryData.type != "od") {
				var dataArray = this._defaultSearchResultCols.getSelectedItems();
				if (!dataArray || dataArray.length == 0) {
					return false;
				}
				if (!this._hasMagazineSearchResultCols(dataArray) || !this._hasDetailsSearchResultCols(dataArray)) {
					return false;
				}
			}
			this.set("iconClass", "");
			return true;
		},

		_hasMagazineSearchResultCols: function(dataArray) {
			for (var i = 0; i < dataArray.length; i++) {
				if (dataArray[i].magazineView) {
					return true;
				}
			}
			return false;
		},

		_hasDetailsSearchResultCols: function(dataArray) {
			for (var i = 0; i < dataArray.length; i++) {
				if (dataArray[i].detailsView) {
					return true;
				}
			}
			return false;
		},

		compareValue: function(enabledControl, valueControl, value) {
			if (enabledControl.get('checked'))
				return value == valueControl.get('value');
			else
				return valueControl.get('value') == "" || value == valueControl.get('value');
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		isResetingFields: function() {
			var repositoryType = this.repositoryData.type;
			if ((repositoryType == "cm" || repositoryType == "p8") && this.enableUnifiedSearchesRadioButton.get("checked") != this.repositoryData.repositoryConfig.getUnifiedSearchesEnabled())
				return false;

			if (this.compareValue(this.maxResultsUnlimited, this._maxResults, this.repositoryData.repositoryConfig.getSearchMaxResults()))
				return false;

			if (repositoryType == "p8" || repositoryType == "cmis" || repositoryType == "cm") {
				if (this.compareValue(this.timeoutUnlimited, this.timeoutUnlimited, this.repositoryData.repositoryConfig.getTimeoutInSeconds()))
					return false;
			}

			if (repositoryType == "p8" || repositoryType == "cmis" || repositoryType == "cm") {
				if (this.matchAll.get('checked') != this.repositoryData.repositoryConfig.getMatchAll())
					return false;
			}

			// If the all classes search option can be changed, check if the value has changed.
			if (!this.repositoryData.repository.allPseudoClassHidden) {
				if (repositoryType == "cm" && this._allClassesSearch.get("value") != this.repositoryData.repositoryConfig.getAllClassesSearch())
					return false;
			}

			if (this.repositoryData.repositoryConfig && this._searchProperties) {
				if ((this._maxResults.get('value') != this.repositoryData.repositoryConfig.getSearchMaxResults()) || (this._timeoutInSeconds.get('value') != this.repositoryData.repositoryConfig.getTimeoutInSeconds())) {
					return false;
				}
				var aArray = this._convertFromObjectToArray(this._searchProperties.getSelectedItems());
				var bArray = this.repositoryData.repositoryConfig.getSearchFilteredProperties();
				if (!this._compareArray(aArray, bArray))
					return false;

				aArray = this._convertFromObjectToArray(this._defaultSearchResultCols.getSelectedItems());
				bArray = this.repositoryData.repositoryConfig.getSearchDefaultColumns();
				if (!this._compareArray(aArray, bArray))
					return false;

				for ( var dataType in this._searchOperatorsData) {
					var dataArray = this._getValuesFromMemoryStore(this._searchOperatorsData[dataType].selectedStore);
					if (!this._compareArray(this.repositoryData.repositoryConfig.getSearchFilteredOperators(dataType), dataArray))
						return false;
				}
			}
			return true;
		},

		_convertFromObjectToArray: function(objects) {
			var values = [];
			for (var i = 0; i < objects.length; i++) {
				values.push(objects[i].value);
			}
			return values;
		},

		/**
		 * Compare two array without consider position but has to satisfy A == B and B == A condition.
		 */
		_compareArray: function(aArray, bArray) {
			var same = array.every(aArray, function(item) {
				return array.indexOf(bArray, item) > -1;
			});

			same = same && array.every(bArray, function(item) {
				return array.indexOf(aArray, item) > -1;
			});
			return same;
		},

		resize: function(changeSize) {
			this.inherited(arguments);

			var size = domGeom.getContentBox(this.domNode);
			if (size.w < 0) {
				return;
			}
			domGeom.setMarginBox(this.repositorySearchContainer.domNode, {
				w: size.w,
				h: size.h - domGeom.getMarginBox(this._instructions).h
			});

			size = domGeom.getContentBox(this.repositorySearchContainer.domNode);
			if (this.repositorySearchContainer.firstChild && this.repositorySearchContainer.firstChild.getAttribute) {
				var firstDijit = registry.byNode(this.repositorySearchContainer.firstChild);
				if (firstDijit && firstDijit.resize) {
					firstDijit.resize(size);
				}
			}

			if (this._searchPropertiesTitlePane.open) {
				var titlePaneCB = domGeom.getContentBox(this._searchPropertiesTitlePane.domNode);
				titlePaneCB.h = titlePaneCB.h > 420 ? titlePaneCB : 420;
				var instructionMB = domGeom.getMarginBox(this._searchPropertiesInstruction);
				var typeMB = domGeom.getMarginBox(this._searchPropertiesType);
				var filterMB = domGeom.getMarginBox(this._searchPropertiesFilterArea);
				this._searchProperties.resize({
					w: size.w - 10,
					h: titlePaneCB.h - instructionMB.h - typeMB.h - filterMB.h - 75
				});
			}

			if (this._searchOperatorsTitlePane.open) {
				titlePaneCB = domGeom.getContentBox(this._searchOperatorsTitlePane.domNode);
				titlePaneCB.h = titlePaneCB.h > 380 ? titlePaneCB : 380;
				instructionMB = domGeom.getMarginBox(this._searchOperatorsInstruction);
				typeMB = domGeom.getMarginBox(this._searchOperatorsType);
				this._searchOperators.resize({
					w: size.w - 10,
					h: titlePaneCB.h - instructionMB.h - typeMB.h - 75
				});
			}

			if (this._defaultSearchResultsTitlePane.open) {
				titlePaneCB = domGeom.getContentBox(this._defaultSearchResultsTitlePane.domNode);
				titlePaneCB.h = titlePaneCB.h > 380 ? titlePaneCB : 380;
				instructionMB = domGeom.getMarginBox(this._defaultSearchResultsInstructions);
				filterMB = domGeom.getMarginBox(this._defaultSearchResultColsFilterArea);
				this._defaultSearchResultCols.resize({
					w: size.w - 10,
					h: titlePaneCB.h - instructionMB.h - filterMB.h - 75
				});
			}
		},

		/**
		 * Filter default columns by label.
		 */
		_filterSearchCols: function() {
			this.logEntry("_filterSearchCols");
			var filterData = this._defaultSearchResultsFilter.get("value") || "";
			this._defaultSearchResultCols.filter({
				label: filterData
			});
			this.logExit("_filterSearchCols");
		},

		/**
		 * Filter default columns by label.
		 */
		_filterSearchProperties: function() {
			this.logEntry("_filterSearchProperties");
			var filterData = this._searchPropertiesFilter.get("value") || "";
			this._searchProperties.filter({
				label: filterData
			});
			this.logExit("_filterSearchProperties");
		},

		_getValuesFromMemoryStore: function(store) {
			var values = [];
			var results = store.query();
			for (var i = 0; i < results.length; i++) {
				values.push(results[i].value);
			}
			return values;
		},

		_onUseMaxResultsUnlimited: function() {
			this._maxResults.set("disabled", true);
			setTimeout(lang.hitch(this, this._onFieldChange), 200);
		},

		_onUseMaxResultsLimit: function() {
			this._maxResults.set("disabled", false);
			setTimeout(lang.hitch(this, this._onFieldChange), 200);
		},

		_onUseTimeoutUnlimited: function() {
			this._timeoutInSeconds.set("disabled", true);
			setTimeout(lang.hitch(this, this._onFieldChange), 200);
		},

		_onUseTimeoutLimit: function() {
			this._timeoutInSeconds.set("disabled", false);
			setTimeout(lang.hitch(this, this._onFieldChange), 200);
		},

		setData: function(data) {
			this.repositoryData = data;
		},

		_sort: function(a, b) {
			if (a.label > b.label) {
				return 1;
			} else if (a.label < b.label) {
				return -1;
			} else
				return 0;
		},

		_nop: null
	});

});

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
	"dojo/_base/event",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojox/collections/ArrayList",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/form/RadioButton",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"idx/layout/TitlePane",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/widget/search/BasicSearchDefinition",
	"ecm/widget/search/SearchForm",
	"ecm/widget/RepositorySelector",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/Toolbar2",
	"ecm/widget/listView/modules/Breadcrumb",
	"ecm/widget/dialog/LoginDialog",
	"ecm/widget/search/SearchSelector",
	"dojo/text!./templates/SelectObject.html"
], function(declare, array, lang, aspect, event, domClass, domStyle, ArrayList, _TemplatedMixin, _WidgetsInTemplateMixin, Button, RadioButton, BorderContainer, ContentPane, TitlePane, MessagesMixin, LoggerMixin, Desktop, BasicSearchDefinition, SearchForm, RepositorySelector, ContentList, RowContextMenu, Bar, Toolbar, Breadcrumb, LoginDialog, SearchSelector, template) {

	/**
	 * @name ecm.widget.SelectObject
	 * @class Provides a widget that is used to select a repository object by entering a query.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.SelectObject", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.SelectObject.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * The version type. Intended for use with repository types that implement <code>released</code> and
		 * <code>current</code> versions as separate versions.
		 */
		_VERSION_SELECTION: {
			RELEASED: "released",
			CURRENT: "current"
		},

		/**
		 * Valid values for the <code>selectionMode</code> option.
		 */
		_SELECTION_MODE: {
			DOCUMENT: "document",
			FOLDER: "folder",
			ANY: "any"
		},

		/**
		 * A <code>_SELECTION_MODE</code> value. Specifies what object types can be selected.
		 */
		selectionMode: "any",

		/**
		 * An {@link ecm.model.Repository} object representing the current repository the select object widget will use.
		 */
		repository: null,

		/**
		 * Sets the option to allow selecting specific versions of a document. If <code>true</code> is specified, then
		 * a button is displayed that lists the versions of the selected document.
		 */
		showVersionSelection: false,

		/**
		 * If showVersionSelection is true, then this option allows the user to show or hide the select versions button.
		 * 
		 * @since 2.0.3
		 */
		showSelectVersionButton: true,

		/**
		 * Set to <code>true</code> to allow multiple selection of objects.
		 */
		multiSelect: true,

		/**
		 * Sets the option of whether to allow the <strong>Search in</strong> option to include multiple repositories
		 * or only the current repository. If set to <code>true</code>, then all FileNet P8 repositories in the same
		 * domain as the current repository will be available to search. If <code>false</code>, then only the current
		 * repository will available to search.
		 */
		showMultiRepositorySelector: false,

		/**
		 * Sets the option whether to display all repositories in the repository selector for the <strong>Search in</strong>
		 * option. If set to <code>true</code>, then all repositories assigned to the desktop will be available to
		 * search.
		 * 
		 * @since 2.0.3
		 */
		showAllRepositories: false,

		/**
		 * Sets the option of whether to allow the <strong>Existing search</strong> option to include a repository
		 * selector. If set to <code>true</code> then the user will have the option to select from multiple
		 * repositories to find documents to select. If <code>false</code> then only the current repository will be
		 * used.
		 * 
		 * @since 2.0.3
		 */
		showExistingSearchRepositorySelector: true,

		/**
		 * Sets the option whether to allow the <strong>Existing search</strong> option to include cross repository
		 * search templates. If set to <code>true</code> then cross repository search templates (if any) will be
		 * included in the search selector. If set to <code>false</code> then cross repository search templates will
		 * be excluded from the search selector.
		 * 
		 * @since 2.0.3
		 */
		showCrossRepositorySearches: true,

		/**
		 * Comma separated string containing the list of repository types.
		 * 
		 * @since 2.0.3
		 */
		repositoryTypes: "p8,cm,cmis,od",

		_defaultObjectType: "",

		_useCurrentState: false,

		/**
		 * Boolean indicating if the return data should include the version series id when selecting a specific P8 document version.
		 * 
		 * @since 3.0.1
		 */
		includeDocumentVsId: false,
		
		/**
		 * Constructs an {@link ecm.widget.SelectObject} object.
		 */
		constructor: function(cArgs) {
			this.logDebug("constructor");
		},

		postCreate: function() {
			this.logEntry("postCreate");

			// hide some buttons
			domClass.add(this.searchCriteria.saveButton.domNode, "dijitHidden");
			domClass.add(this.searchCriteria.saveAsButton.domNode, "dijitHidden");
			domClass.add(this.searchCriteria.cancelButton.domNode, "dijitHidden");
			this._onNewSearchClick();

			this.searchResults.multiSelect = this.multiSelect;
			this._createSearchConnections();

			this.setShowVersionSelection(this.showVersionSelection);
			this.setShowSelectVersionButton(this.showSelectVersionButton);
			this.logExit("postCreate");
		},

		postMixInProperties: function() {
			if (this.selectionMode == this._SELECTION_MODE.DOCUMENT || this.selectionMode == this._SELECTION_MODE.FOLDER) {
				this._defaultObjectType = this.selectionMode;
			}
		},

		/**
		 * Creates a repository selector, allowing the user to select a repository from which to retrieve search
		 * templates.
		 * 
		 * @private
		 * @since 2.0.3
		 */
		_createRepositorySelector: function() {
			var reposTypes = this.repositoryTypes;
			if (reposTypes) {
				// Remove box since box repository currently doesn't support saved search templates
				var reposTypeArray = new ArrayList(reposTypes.split(","));
				if (reposTypeArray.contains("box")) {
					reposTypeArray.remove("box");
				}
				// Remove OD from folder selection mode
				if (this.selectionMode == this._SELECTION_MODE.FOLDER) {
					if (reposTypeArray.contains("od")) {
						reposTypeArray.remove("od");
					}
				}
				reposTypes = reposTypeArray.toString();
			}

			var selectedId = "";
			if (this.repository) {
				selectedId = this.repository.id;
			}

			this.repositorySelector = new RepositorySelector({
				id: this.id + "_repositorySelector",
				repositoryTypes: reposTypes,
				viewMode: 2,
				label: this.messages.admin_repository,
				defaultSelectedId: selectedId
			});

			this.connect(this.repositorySelector, "onSelect", lang.hitch(this, function(repositories) {
				var repository;
				if (repositories && repositories.length > 0) {
					repository = repositories[0];
				}

				if (repository != this.repository) {
					if (!this.searchResultsTitle.open) {
						this.searchResultsTitle.toggle();
					}
					this.searchForm.clearForm();
					this.searchResults.reset();
					this.searchResults.setGridExtensionModules(this._getContentListGridModules());
					this.searchResults.setContentListModules(this._getContentListModules());
				}
				this.repository = repository;

				if (this.repository && !this.repository.connected) {
					var loginDialog = LoginDialog.getLoginDialog();
					loginDialog.connectToRepository(repository, lang.hitch(this, function() {
						if (this.searchSelector)
							this.searchSelector.setRepository(this.repository);
					}));

					var loginDialogHideHandler = aspect.after(loginDialog, "hide", lang.hitch(this, function() {
						if (this.repository && !this.repository.connected) {
							this.repositorySelector.getDropdown().set("value", this.repository.id);
						}
						loginDialogHideHandler.remove();
					}));
				} else if (this.repository && this.searchSelector) {
					this.searchSelector.setRepository(this.repository);
				}
			}));

			// Block right-click event, so the browser doesn't show an annoying right-click window
			this.connect(this.repositorySelector.domNode, "oncontextmenu", function(evt) {
				event.stop(evt);
				return false;
			});

			if (this.repositorySelector.getNumRepositories() > 1 && this.showExistingSearchRepositorySelector) {
				this.searchSelectorArea.appendChild(this.repositorySelector.domNode);
			}
		},

		/**
		 * @private
		 * @since 2.0.3
		 */
		_createSearchConnections: function() {
			this.connect(this.searchCriteria, "onSearchCompleted", lang.hitch(this, function(resultSet) {
				if (this.showVersionSelection) {
					if (resultSet.repository.type != "p8") {
						domClass.add(this.selVersionCurrentReleased, "dijitHidden");
					} else {
						domClass.remove(this.selVersionCurrentReleased, "dijitHidden");
					}
					domStyle.set(this.selVersionArea, "display", "block");
				} else {
					domStyle.set(this.selVersionArea, "display", "none");
				}

				if (!this.searchResultsTitle.open) {
					this.searchResultsTitle.toggle();
				}
				if (this.searchDefTitle.open && !this.searchCriteria.keepSearchCriteriaExpanded.checked) {
					this.searchDefTitle.toggle();
				}
				resultSet.parentFolder.name = this.messages.search_results; // breadcrumb uses this name
				this.searchResults.setResultSet(resultSet);
			}));

			this.connect(this.searchForm, "onSearchCompleted", lang.hitch(this, function(resultSet) {
				if (this.showVersionSelection && resultSet.repository && resultSet.repository.type != "od") {
					if (resultSet.repository.type != "p8") {
						domClass.add(this.selVersionCurrentReleased, "dijitHidden");
					} else {
						domClass.remove(this.selVersionCurrentReleased, "dijitHidden");
					}
					domStyle.set(this.selVersionArea, "display", "block");
				} else { // cross-repository search
					domStyle.set(this.selVersionArea, "display", "none");
				}

				if (!this.searchResultsTitle.open) {
					this.searchResultsTitle.toggle();
				}
				if (this.searchDefTitle.open) {
					this.searchDefTitle.toggle();
				}
				this.searchResults.setResultSet(resultSet);
			}));

			this.searchResults.onBeforeSetResultSet = lang.hitch(this, function(resultSet) { // allows selecting breadcrumb to set the resultSet toolbar & context menu values
				if (resultSet) {
					resultSet.folderContextMenuDef = "SelectObjectFolderContextMenu";
					resultSet.itemContextMenuDef = "SelectObjectItemContextMenu";
					resultSet.toolbarDef = "SelectObjectToolbar";
				}
			});

			this.connect(this.searchResults, "onRowSelectionChange", function(selectedItems) {
				var isValid = this._validateSelection(selectedItems);
				this._setVersionBtnState(selectedItems);
				this.onSelectionChange(selectedItems, isValid);
			});

			this.connect(this.searchResults, "onOpenItem", lang.hitch(this, function(item) {
				// restore radio button state
				var useCurrent = this._useCurrentState == null ? false : this._useCurrentState;
				useCurrent ? this.useCurrentRadio.set("checked", "checked") : this.useReleasedRadio.set("checked", "checked");
			}));
		},

		/**
		 * Creates the search selector widget, allowing users to leverage existing searches to add documents or folders.
		 * 
		 * @private
		 * @since 2.0.3
		 */
		_createSearchSelector: function() {
			if (!this.searchSelector) {
				this.searchSelector = new SearchSelector({
					toolbarEnabled: false,
					showCrossRepositorySearches: this.showCrossRepositorySearches
				});
				this.searchSelectorArea.appendChild(this.searchSelector.domNode);

				var dropDown = this.repositorySelector.getDropdown();
				if (dropDown) {
					this.searchSelector.setRepository(Desktop.getRepository(dropDown.get("value")));
				}

				this.connect(this.searchSelector, "onSearchTemplateSelected", lang.hitch(this, function(selectedItems) {
					this.searchResults.reset();
					this.searchResults.setGridExtensionModules(this._getContentListGridModules());
					this.searchResults.setContentListModules(this._getContentListModules());

					var searchTemplate;
					if (lang.isArray(selectedItems))
						searchTemplate = selectedItems[0];
					else
						searchTemplate = selectedItems;

					if (searchTemplate)
						this.searchForm.setSearchTemplate(searchTemplate.clone());
					domStyle.set(this.searchForm.domNode, "display", "block");
				}));
			}
		},

		/**
		 * Sets the repository.
		 * 
		 * @since 2.0.3 Added filtered repository behavior. If repository is not enabled to show in Search then use
		 *        default repository instead
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 */
		setRepository: function(repository) {
			if (repository && !repository.showInSearchView)
				repository = ecm.model.desktop.getDefaultRepository();

			this.repository = repository;
			if (this.repository.type != "od")
				this.searchCriteria.setRepository(this.repository);
			this.searchResults.setGridExtensionModules(this._getContentListGridModules());
			this.searchResults.setContentListModules(this._getContentListModules());
		},

		/**
		 * The array of item class ids to display in the class selector.
		 * 
		 * @param itemList
		 *            An array of class ids, if specified then only those classes are displayed in the class selector.
		 * @since 2.0.3
		 */
		setClassSelectorItemList: function(itemList) {
			this.searchCriteria.contentClassSelector.itemList = itemList;
		},

		/**
		 * Sets the class selector as disabled.
		 * 
		 * @param disabled
		 *            Boolean indicating if the class selector should be disabled.
		 * @since 2.0.3
		 */
		setClassSelectorDisabled: function(disabled) {
			this.searchCriteria.contentClassSelector.setDisabled(disabled);
		},

		/**
		 * @private
		 */
		_getContentListGridModules: function() {
			var array = [];
			array.push(RowContextMenu);
			return array;
		},

		/**
		 * @private
		 */
		_getContentListModules: function() {
			var array = [];
			array.push({
				moduleClass: Bar,
				top: [
					[
						[
							{
								moduleClass: Toolbar
							}
						]
					],
					[
						[
							{
								moduleClass: Breadcrumb
							}
						]
					]
				]
			});
			return array;
		},

		/**
		 * Sets the option that determines if the <strong>Search in</strong> selector presents multiple repositories or
		 * only the current repository. If set to <code>true</code>, then all FileNet P8 repositories in the same
		 * domain as the current repository will be available to search. If <code>false</code>, then only the current
		 * repository will be available to search.
		 * 
		 * @param showMultiRepositorySelector
		 *            If <code>true</code>, then allow multiple repositories in the
		 *            <q>search in</q>
		 *            option. If <code>false</code>, then only the current repository will appear.
		 */
		setShowMultiRepositorySelector: function(showMultiRepositorySelector) {
			this.showMultiRepositorySelector = showMultiRepositorySelector;
			this.searchCriteria.setShowMultiRepositorySelector(showMultiRepositorySelector);
		},

		/**
		 * Sets the option that determines if the <strong>Search in</strong> selector presents all repositories
		 * assigned to the current desktop. If set to <code>true</code>, then all repositories assigned to the
		 * desktop will be available to search. *
		 * 
		 * @param showAllRepositories
		 *            If <code>true</code>, then allow all repositories assigned to the desktop in the
		 *            <q>search in</q>
		 */
		setShowAllRepositories: function(showAllRepositories) {
			this.showAllRepositories = showAllRepositories;
			this.searchCriteria.setShowAllRepositories(showAllRepositories);
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

			// The search builder does not support OD, so we will remove OD from the list of
			// repository types supplied to the search builder widget.
			if (this.repositoryTypes) {
				var reposTypeArray = new ArrayList(this.repositoryTypes.split(","));

				if (reposTypeArray.contains("od")) {
					reposTypeArray.remove("od");
				}
				repositoryTypes = reposTypeArray.toString();
			}
			this.searchCriteria.setRepositoryTypes(repositoryTypes);
		},

		/**
		 * Sets the selection mode to control what object types can be selected. Valid values are <code>any</code>,
		 * <code>document</code>, or <code>folder</code>.
		 * 
		 * @param selectionMode
		 *            A <code>_SELECTION_MODE</code> value. If <code>any</code> is specified, then any object type
		 *            can be selected. If <code>document</code>, only documents can be selected. If
		 *            <code>folder</code>, only folders can be selected.
		 */
		setSelectionMode: function(selectionMode) {
			this.selectionMode = selectionMode;
		},

		/**
		 * Sets the selection mode to control what object types can be selected. Valid values are <code>any</code>,
		 * <code>document</code>, or <code>folder</code>.
		 * 
		 * @param includeDocumentVsId
		 *            If <code>true</code>, then the return data will include the version series id for P8 document.
		 */
		setIncludeDocumentVsId: function(includeDocumentVsId) {
			this.includeDocumentVsId = includeDocumentVsId;
		},
		
		/**
		 * @private Show the content item versions in the results list
		 */
		_showDocVersions: function(item) {
			item.repository.retrieveVersions(item, null, lang.hitch(this, function(resultSet) {
				item.name = this.messages.select_object_breadCrumb_version_prefix + item.name; // breadcrumb uses this name
				resultSet.parentFolder = item;
				this.searchResults.setResultSet(resultSet);
				// clear radio buttons
				if (item.repository.type == "p8") {
					this.useCurrentRadio.set("checked", "");
					this.useReleasedRadio.set("checked", "");
				}
				// disable the version buttons
				this._setVersionBtnState([]);
			}));
		},

		/**
		 * @private Display the selected document versions
		 */
		_onPickVersionClick: function() {
			var items = this.searchResults.getSelectedItems();
			if (items && items.length == 1) {
				var item = items[0];
				if (!item.isFolder()) {
					this._showDocVersions(item);
				}
			}
		},

		/**
		 * @private
		 */
		_validateSelection: function(selectedItems) {
			this.logEntry("_validateSelection");
			var isValid = false;
			if (selectedItems && selectedItems.length > 0) {
				isValid = true;
				if (this.selectionMode == this._SELECTION_MODE.FOLDER || this.selectionMode == this._SELECTION_MODE.DOCUMENT) {
					for (i in selectedItems) {
						var contentItem = selectedItems[i];
						if (this.selectionMode == this._SELECTION_MODE.FOLDER && !contentItem.isFolder()) {
							isValid = false;
							break;
						} else if (this.selectionMode == this._SELECTION_MODE.DOCUMENT && contentItem.isFolder()) {
							isValid = false;
							break;
						}
					}
				}
			}
			this.logExit("_validateSelection");
			return isValid;
		},

		/**
		 * @private
		 */
		_setVersionBtnState: function(selectedItems) {
			// set state of static version button:
			var disabled = true;
			if (!this.isShowingVersions() && selectedItems.length == 1) {
				disabled = selectedItems[0].isFolder();
				// If in cm repository, check the versioning model on the individual selected documents
				if (selectedItems[0].repository.type == "cm") {
					disabled = !selectedItems[0].versionControl;
				}
			}
			this.staticVersionButton.set("disabled", disabled);

			// set state of current/released radios:
			disabled = true;
			if (this.showVersionSelection && !this.isShowingVersions() && selectedItems.length > 0) {
				// check if at least 1 doc is selected
				for (i in selectedItems) {
					if (!selectedItems[i].isFolder()) {
						disabled = false;
						break;
					}
				}
			}
			if (selectedItems.length == 0 || (selectedItems[0].repository.type != "cm" && selectedItems[0].repository.type != "cmis")) {
				this.useCurrentRadio.set("disabled", disabled);
				this.useReleasedRadio.set("disabled", disabled);
				if (disabled) {
					domClass.add(this.useCurrentLabel, "radioDisabled");
					domClass.add(this.useReleasedLabel, "radioDisabled");
				} else {
					domClass.remove(this.useCurrentLabel, "radioDisabled");
					domClass.remove(this.useReleasedLabel, "radioDisabled");
				}
			}
		},

		/**
		 * @private
		 */
		_onUseCurrentChange: function() {
			this._useCurrentState = this.useCurrentRadio.checked;
		},

		/**
		 * Event function that is called when an item is selected in the search results.
		 * 
		 * @param selectedItems
		 *            An array of content items that are selected in the results list.
		 * @param isValid
		 *            A boolean value indicating if the selection is valid, based on <code>selectionMode</code>.
		 */
		onSelectionChange: function(selectedItems, isValid) {
		},

		/**
		 * Returns the currently selected items in the results.
		 * 
		 * @param callback
		 *            A callback function that is called with the selected items list.
		 * @return An array of objects with these properties:
		 *         <ul>
		 *         <li><code>id</code>: the id of the content item</li>
		 *         <li><code>name</code>: the name of the content item</li>
		 *         <li><code>mimetype</code>: the mimetype of the content item</li>
		 *         <li><code>contentItem</code>: the content item object</li>
		 *         <li><code>vsId</code>: for FileNet P8 documents, the version series id (only if current or
		 *         released version is specified)</li>
		 *         <li><code>version</code>: a string representing whether the item is the current or released
		 *         version id</li>
		 *         </ul>
		 */
		getSelectedItems: function(callback) {
			this.logEntry("getSelectedItems");
			var selectedItems = [];
			var validateItems = [];
			var version = null;
			var resultItems = this.searchResults.getSelectedItems();
			if (this.showVersionSelection && !this.isShowingVersions()) {
				// check the repository type and then the version selection specified
				if (resultItems[0].repository.type == "p8") {
					version = this.useCurrentRadio.checked ? "current" : "released";
				} else {
					version = "current";
				}
			}

			array.forEach(resultItems, lang.hitch(this, function(item) {
				var selItem = {
					id: item.id,
					name: item.name,
					mimetype: item.mimetype,
					contentItem: item,
					vsId: null,
					"version": null
				};
				
				if (!item.isFolder()) {
					if (version || this.includeDocumentVsId) {						
						selItem.version = version;
						if (item.repository.type == "p8") {
							selItem.vsId = item["vsId"];
							// if getting current or released, may need to re-fetch that version
							if (version == "current") {
								if (item.getValue("IsCurrentVersion") != "true") {
									validateItems.push(item);
								}
							} else if (version == "released") {
								if (item.getValue("VersionStatus") != "1") {
									validateItems.push(item);
								}
							}
						}
					}
				}				
				selectedItems.push(selItem);
			}));

			if (validateItems.length > 0) {
				// Use repository of the first selected item because the initial repository of SelectObject maybe a different one
				var repository = selectedItems[0].contentItem.repository;
				repository.retrieveVersions(validateItems, version, function(resultSet) {
					// update the selectedItems
					for (i in selectedItems) {
						var resultItems = resultSet.items;
						for (j in resultItems) {
							if (selectedItems[i].vsId && selectedItems[i].vsId == resultItems[j]["vsId"]) {
								// update the selected item
								selectedItems[i].id = resultItems[j].id;
								selectedItems[i].name = resultItems[j].name;
								selectedItems[i].mimetype = resultItems[j].mimetype;
								selectedItems[i].contentItem = resultItems[j];
								break;
							}
						}
					}
					callback(selectedItems);
				});
			} else {
				callback(selectedItems);
			}
			this.logExit("getSelectedItems");
		},

		/**
		 * Determines if the results list is currently displaying a version list.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the results list is a versions list, otherwise
		 *         <code>false</code>.
		 */
		isShowingVersions: function() {
			return this.searchResults.getResultSet().context != undefined ? this.searchResults.getResultSet().context == "PropertiesVersions" : false;
		},

		/**
		 * Sets the option to allow selecting specific versions of a document. If <code>true</code> is specified, then
		 * a button is displayed that lists the versions of the selected document.
		 * 
		 * @param showVersionSelection
		 *            If <code>true</code> then the version selection button is displayed. If <code>false</code>
		 *            then there is no option to display document versions.
		 */
		setShowVersionSelection: function(showVersionSelection) {
			this.showVersionSelection = showVersionSelection;
			if (showVersionSelection) {
				domStyle.set(this.selVersionArea, "display", "");
			} else {
				domStyle.set(this.selVersionArea, "display", "none");
			}
		},

		/**
		 * Sets the option to allow showing the select versions button that is displayed when showVersionSelection is
		 * true.
		 * 
		 * @since 2.0.3
		 * @param showSelectVersionButton
		 *            If <code>true</code> and showVersionSelction is <code>true</code>, then the select version
		 *            button is displayed. If <code>false</code> and showVersionSelction is <code>true</code>, then
		 *            the select version button is not displayed.
		 */
		setShowSelectVersionButton: function(showSelectVersionButton) {
			this.showSelectVersionButton = showSelectVersionButton;
			if (this.showSelectVersionButton) {
				domClass.remove(this.staticVersionButton.domNode, "dijitHidden");
				domClass.remove(this.searchResults.domNode, "noVersionButton");
			} else {
				domClass.add(this.staticVersionButton.domNode, "dijitHidden");
				domClass.add(this.searchResults.domNode, "noVersionButton");
			}
		},

		/**
		 * @since 2.0.3
		 * @private
		 */
		_onNewSearchClick: function(evt) {
			domStyle.set(this.searchCriteria.domNode, "display", "block");
			domStyle.set(this.searchForm.domNode, "display", "none");
			domStyle.set(this.searchSelectorArea, "display", "none");

			if (this.searchResultsTitle.open) {
				this.searchResultsTitle.toggle();
			}
			this.searchResults.reset();
			this.searchResults.setGridExtensionModules(this._getContentListGridModules());
			this.searchResults.setContentListModules(this._getContentListModules());
		},

		/**
		 * @since 2.0.3
		 * @private
		 */
		_onExistingSearchClick: function(evt) {
			domStyle.set(this.searchCriteria.domNode, "display", "none");
			domStyle.set(this.searchSelectorArea, "display", "block");

			if (this.searchForm._searchTemplate)
				domStyle.set(this.searchForm.domNode, "display", "block");

			if (this.searchResultsTitle.open) {
				this.searchResultsTitle.toggle();
			}
			this.searchResults.reset();
			this.searchResults.setGridExtensionModules(this._getContentListGridModules());
			this.searchResults.setContentListModules(this._getContentListModules());

			if (!this.repositorySelector) {
				this._createRepositorySelector();
				this._createSearchSelector();
			}
		}, 
		
		resize: function() {
			this.inherited(arguments);
			this.searchResults.resize();
		}
	});
});

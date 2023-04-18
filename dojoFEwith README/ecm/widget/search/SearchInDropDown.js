/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/data/ItemFileWriteStore",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/keys",
	"dojo/on",
	"dojo/string",
	"dojox/collections/ArrayList",
	"dijit/TooltipDialog",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/focus",
	"dijit/Tooltip",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dijit/form/CheckBox",
	"dijit/form/FilteringSelect",
	"dijit/form/TextBox",
	"idx/html",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/model/FolderTreeModel",
	"ecm/model/Item",
	"ecm/model/Repository",
	"ecm/model/SelectedFolder",
	"ecm/model/Teamspace",
	"ecm/widget/dialog/LoginDialog",
	"ecm/widget/Ellipsis",
	"ecm/widget/FilterTextBox",
	"ecm/widget/FolderSelector",
	"./SearchInDropDownInput",
	"dojo/text!./templates/SearchInDropDown.html"
], function(declare, lang, array, event, has, aspect, ItemFileWriteStore, domClass, domConstruct, domGeom, domStyle, domAttr, keys, on, string, ArrayList, TooltipDialog, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, focus, Tooltip, ContentPane, Button, CheckBox, FilteringSelect, TextBox, idxHtml, LoggerMixin, Desktop, FolderTreeModel, Item, Repository, SelectedFolder, Teamspace, LoginDialog, Ellipsis, FilterTextBox, FolderSelector, SearchInDropDownInput, template) {

	/**
	 * @name ecm.widget.search.SearchInDropDown
	 * @class Provides an interface to select the scope of a search.
	 * @augments dijit._WidgetBase
	 */
	var SearchInDropDown = declare("ecm.widget.search.SearchInDropDown", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.search.SearchInDropDown.prototype */
		templateString: template,

		/**
		 * This option causes the control to display the top level repository or teamspace in the label.
		 */
		showRepositoryTeamspace: false,

		/**
		 * Whether the root node of the control should be selected initially.
		 */
		selectRootInitially: true,

		/**
		 * Whether the root node should be made unselectable.
		 */
		preventSelectRoot: false,

		/**
		 * Displayed in tooltip when the user hovers over root node when it is not selectable.
		 */
		preventSelectRootTooltip: null,

		/**
		 * Whether the include subfolders check box should be displayed.
		 */
		showIncludeSubFolders: false,

		/**
		 * Whether the control should be disabled.
		 */
		disabled: false,

		/**
		 * Sets whether a folder selection by the user is required.
		 */
		isRequired: false,

		/**
		 * Array of folder IDs which will be non-selectable in the tree.
		 */
		unselectableFolderIds: null,

		/**
		 * Whether the teamspaces choice will be displayed if the repository supports teamspaces.
		 */
		displaySelectTeamspacesNode: true,

		/**
		 * Whether the repositories choice will be displayed.
		 */
		displaySelectRepositoriesNode: true,

		/**
		 * Whether the repository drop-down list will be displayed.
		 * 
		 * @since 2.0.2
		 */
		displayRepositoryDropDownList: true,

		/**
		 * Whether the "Search In" title will be displayed.
		 */
		displayForSearch: true,

		/**
		 * @since 2.0.2 Adds a class to the drop-down div.
		 */
		dropDownClass: "ecmSearchInDropDownPopUpContent",

		/**
		 * The {@link ecm.model.Respository} object.
		 */
		repository: null,

		/**
		 * An optional function called with a repository belonging to the same domain as the primary repository. If
		 * defined, the repository will only be added to the repository selection list if the return value is true.
		 * 
		 * @since 2.0.2
		 */
		validateRepository: null,

		/**
		 * An optional flag indicate this control is embedded in Add Document wizard if value is true. And in this case
		 * it will look for Browse feature in desktop and if it is enabled then it will use showInBrowseView attribute
		 * to remove any repository doesn't have it set ,otherwise it will use showinSearchView to filter repository.
		 * Default is to use showInSearchView attribute.
		 * 
		 * @since 2.0.3
		 */
		displayFilteredRepositories: false,

		/**
		 * An optional flag that allows you to display all the repositories assigned to the current desktop including
		 * IBM FileNet P8 repositories that are in a different domain.
		 * 
		 * @since 2.0.3
		 */

		displayAllRepositories: false,

		_repositoryTypes: null,

		/**
		 * The label of the widget.
		 */
		label: "",

		/**
		 * @private
		 */
		_selectedFolder: null,
		/**
		 * @private
		 */
		_rootObject: null,
		/**
		 * @private
		 */
		_teamspace: null,

		/**
		 * @private
		 */
		_isRepository: false,

		/**
		 * Name of the repository teamspace.
		 */
		repositoryTeamspaceName: null,
		/**
		 * @private
		 */
		_isSelectableCallback: null,

		/**
		 * @private
		 */
		_isSelectableCallbackObject: null,

		/**
		 * @private
		 */
		_madeSelection: false,
		/**
		 * @private
		 */
		_toolTip: null,
		/**
		 * @private
		 */
		_selectTeamspacesNode: null,
		/**
		 * @private
		 */
		_selectRepositoriesNode: null,
		/**
		 * @private
		 */
		_currentSelection: null,
		/**
		 * @private
		 */
		_filter: null,
		/**
		 * @private
		 */
		_rootSet: false,
		/**
		 * @private
		 */
		_initiallySelectedFolder: null,
		/**
		 * @private
		 */
		_formatter: null,
		/**
		 * @private
		 */
		_displayStatusDialogEventHandle: null,
		/**
		 * @private
		 */
		_hideStatusDialogEventHandle: null,
		/**
		 * @private
		 */
		_messageDiv: null,
		/**
		 * @private
		 */
		_messageText: null,
		/**
		 * @private
		 */
		_messageLink: null,
		/**
		 * @private
		 */
		_messageLinkFocused: false,
		/**
		 * @private
		 */
		_displayingFilteredResultSet: false,

		/**
		 * @private
		 */
		rootItemToFilter: null,
		/**
		 * Option of if set the width in force.
		 */
		forceWidth: false,

		/**
		 * Whether should display folders or teamspaces initially
		 * 
		 * @since 2.0.3
		 */
		displayTeamspacesInitially: false,

		/**
		 * @private
		 */
		_toolTipTimer: null,

		/**
		 * Launches after the widget is created.
		 */
		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			this.inherited(arguments);

			this._formatter = Desktop.valueFormatter;

			if (this._rootObject) {
				this._createRendering();
			}

			// If the login dialog is displayed because of the session timeout, make sure the
			// dropdown is closed. Win 7 IE defect 12453.
			var loginDialog = LoginDialog.getLoginDialog();
			this.connect(loginDialog, "show", lang.hitch(this, function() {
				if (this._dropdown) {
					this._dropdown.closeDropDown();
				}
			}));

			this._toolTip = new Tooltip({
				position: [
					"above",
					"below",
					"after",
					"before"
				]
			});

			// Display the tooltip when the control on mouseover and focus events.
			this.connect(this, "_onFocus", function() {
				// Add timeout for usability and accessibility
				this._toolTipTimer = setTimeout(lang.hitch(this, function() {
					if (this._toolTip.label.length > 0 && !this._dropdownOpened) {
						this._toolTip.open(this.domNode);
					}
				}), 2000);
			});

			this.connect(this, "_onBlur", function() {
				if (!this._dropdownOpened)
					this._hasBeenBlurred = true;
				if (this._toolTipTimer) {
					clearTimeout(this._toolTipTimer);
					this._toolTipTimer = null;
				}
				this._toolTip.close();
			});

			this.connect(this, "onMouseOver", lang.hitch(this, function() {
				if (this._toolTip.label.length > 0) {
					this._toolTip.open(this.domNode);
				}
			}));

			this.connect(this, "onMouseOut", lang.hitch(this, function() {
				this._toolTip.close();
			}));

			this.textDir = has("text-direction");

			this.logExit(methodName);
		},

		/**
		 * Destroys the control.
		 * 
		 * @public
		 */
		destroy: function() {
			var methodName = "destroy";
			this.logEntry(methodName);
			this.inherited(arguments);

			if (this._ellipsis)
				this._ellipsis.destroy();
			if (this._dropdown && !this._dropdown._destroyed) {
				Tooltip.hide(this._dropdown.domNode);
				this._dropdown.closeDropDown();
				this._dropdown.destroy();
			}
			if (this._toolTip)
				this._toolTip.destroy();
			if (this._folderSelector)
				this._folderSelector.destroy();
			if (this._selectTeamspacesNode)
				this._selectTeamspacesNode.destroy();
			if (this._selectRepositoriesNode)
				this._selectRepositoriesNode.destroy();
			if (this.repositorySelect)
				this.repositorySelect.destroy();
			if (this._filter)
				this._filter.destroy();
			if (this._incSubFolders)
				this._incSubFolders.destroy();
			if (this._okButton)
				this._okButton.destroy();
			if (this._cancelButton)
				this._cancelButton.destroy();
			if (this._extensionData) {
				for ( var i in this._extensionData) {
					var data = this._extensionData[i];
					if (data.button) {
						data.button.destroy();
					}
					if (data.extObj && data.extObj.destroy) {
						data.extObj.destroy();
					}
				}
			}
			if (this._treeFocusNodeListener) {
				this._treeFocusNodeListener.remove();
				this._treeFocusNodeListener = null;
			}

			ecm.model.desktop._onRequestRevertStatusDialogRefocus();

			this.logExit(methodName);
		},

		/**
		 * Sets the root repository, teamspace, or folder of the control.
		 * 
		 * @public
		 * @param rootObject
		 *            An ecm.model.Repository, ecm.model.Teamspace, or ecm.model.Item to be used as the root node of the
		 *            control.
		 */
		setRoot: function(rootObject) {
			var methodName = "setRoot";
			this.logEntry(methodName, "rootObject = " + rootObject.name);

			if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(Repository)) {
				this._isRepository = true;
				this.repository = rootObject;
				//Change root folder display name to "Entire Repository"
				this.repositoryTeamspaceName = rootObject.name;
				this.logDebug(methodName, "Root object is repository");
			} else if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(Teamspace)) {
				this.repository = rootObject.repository;
				this._teamspace = rootObject;
				this.repositoryTeamspaceName = rootObject.name;
				this.logDebug(methodName, "Root object is teamspace");
			} else if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(Item) && rootObject.isFolder() == true) {
				this.repository = rootObject.repository;
				this.repositoryTeamspaceName = this.repository.name;
				this.logDebug(methodName, "Root object is folder");
			} else {
				this.logDebug(methodName, "Invalid root object");
				throw ("Invalid ecm.widget._FolderSelector.setRoot: Invalid object type");
			}
			this._rootObject = rootObject;

			// If not disabled, create the dropdown control.
			if (this.disabled == false) {
				this._createRendering();
			}

			if (this.selectRootInitially == true) {
				if (rootObject.isInstanceOf(Repository)) {
					// If the repository doesn't support foldering, set the label and disable the control.
					if (!this.repository.getPrivilege("foldering")) {
						this.setLabel(this.repository.name);
						this.setDisabled(true);
						this.rootSet();
					} else {
						rootObject.retrieveItem("/", lang.hitch(this, function(rootFolder) {
							this._handleRootFolderSelection(rootFolder);
						}));
					}
				} else if (rootObject.isInstanceOf(Teamspace)) {
					rootObject.repository.retrieveItem(rootObject.id, lang.hitch(this, function(rootFolder) {
						this._handleRootFolderSelection(rootFolder);
					}));
				} else {
					this._handleRootFolderSelection(rootObject);
				}
			} else {
				this.rootSet();

				// If there is an initially selected folder, select it here. Otherwise, set the label to blank.
				if (this._initiallySelectedFolder != null) {
					this.setSelected(this._initiallySelectedFolder);
				} else {
					this.setLabel("");
				}
			}
			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_handleRootFolderSelection: function(rootFolder) {
			var methodName = "_handleRootFolderSelection";
			this.logEntry(methodName, "rootFolder = " + rootFolder.name);

			var rootIsSelectable = true;
			if (this._isSelectableCallback != null) {
				if (this._isSelectableCallbackObject != null) {
					rootIsSelectable = this._isSelectableCallback.apply(this._isSelectableCallbackObject, [
						rootFolder,
						this._isSelectableCallbackObject.permissionToCheck || this._isSelectableCallback.permissionToCheck
					]);
				} else if (this._isSelectableCallback.permissionToCheck)
					rootIsSelectable = this._isSelectableCallback(rootFolder, this._isSelectableCallback.permissionToCheck);
			}

			if (rootIsSelectable) {
				var repositoryOrTeamspace = this._teamspace ? this._teamspace : this.repository;

				// Set the label.
				var lbl;
				if (this.showRepositoryTeamspace) {
					if (this._rootObject.isInstanceOf && this._rootObject.isInstanceOf(Item)) {
						// Root object is folder
						lbl = this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder, [
							this.repositoryTeamspaceName,
							this._rootObject.name
						]));
					} else {
						lbl = this._formatter.formatPath(string.substitute(ecm.messages.selected_root, [
							this._rootObject.name
						]));
					}
				} else {
					lbl = this._rootObject.name;
				}

				// If there is no initially selected folder, set the label to the repository or teamspace and select the root folder.
				if (this._initiallySelectedFolder == null) {
					this._selectedFolder = new SelectedFolder(rootFolder, this.showIncludeSubFolders, repositoryOrTeamspace);
					this.onFolderSelected(this._selectedFolder);
					this.setLabel(lbl);
				}
			}
			this.rootSet();

			// If we have an initially selected folder passed in from the caller, select it here.
			if (this._initiallySelectedFolder != null) {
				this.setSelected(this._initiallySelectedFolder);
			}
			this.logExit(methodName);
		},

		/**
		 * Event to notify caller that setting root object is complete.
		 */
		rootSet: function() {
			var methodName = "rootSet";
			this.logEntry(methodName);

			this._rootSet = true;

			this.logExit(methodName);
		},

		/**
		 * Sets the control to be disabled.
		 * 
		 * @public
		 * @param disabled
		 *            Boolean indicating whether the control will be disabled.
		 */
		setDisabled: function(disabled) {
			var methodName = "setDisabled";
			this.logEntry(methodName);

			this.disabled = disabled;
			if (this._dropdown) {
				this._dropdown.set("disabled", disabled);
			}

			this.logExit(methodName);
		},

		/**
		 * Returns boolean indicating whether the control is disabled.
		 * 
		 * @public
		 * @return Boolean indicating whether the control is disabled.
		 */
		getDisabled: function() {
			return this.disabled;
		},

		/**
		 * Sets focus to the control
		 * 
		 * @public
		 */
		setFocus: function() {
			var methodName = "setFocus";
			this.logEntry(methodName);

			if (this._dropdown) {
				this._dropdown.focus();
			}

			this.logExit(methodName);
		},

		/**
		 * Sets the parent teamspace for the control.
		 * 
		 * @public
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object.
		 */
		setTeamspace: function(teamspace) {
			var methodName = "setTeamspace";
			this.logEntry(methodName);

			this._teamspace = teamspace;

			this.logExit(methodName);
		},

		/**
		 * Get the teamspace.
		 * 
		 * @public
		 * @since 2.0.3.1
		 * @returns teamspace A {@link ecm.model.Teamspace} object.
		 */
		getTeamspace: function() {
			return this._teamspace;
		},

		/**
		 * Get the filter widget.
		 * 
		 * @public
		 * @since 2.0.3.1
		 */
		getFilter: function() {
			return this._filter;
		},

		/**
		 * Sets the control to show/hide the Include subfolders check box.
		 * 
		 * @public
		 * @param showIncludeSubFolders
		 *            Boolean indicating whether to show the Include subfolders checkbox.
		 */
		setShowIncludeSubFolders: function(showIncludeSubFolders) {
			var methodName = "setShowIncludeSubFolders";
			this.logEntry(methodName);

			this.showIncludeSubFolders = showIncludeSubFolders;
			if (this._folderSelector) {
				this._folderSelector.showIncludeSubfolders = showIncludeSubFolders;
			}
			this._setDropdownStyle();

			this.logExit(methodName);
		},

		/**
		 * Set comma separated list of the repository types that will be displayed in the repository selection control.
		 * 
		 * @param repositoryTypes
		 *            String value holding comma separated list of repository types to display.
		 * @since 2.0.3
		 */
		setRepositoryTypes: function(repositoryTypes) {
			if (repositoryTypes != null && repositoryTypes.length > 0) {
				this._repositoryTypes = new ArrayList(repositoryTypes.split(","));
			}
		},

		/**
		 * Sets the callback function to determine whether a folder is selectable.
		 * 
		 * @public
		 * @param callbackFunction
		 *            The function used to determine whether a folder is selectable.
		 * @param callbackObject
		 *            An instance of ecm/widget/FolderSelectorCallback. This callback will be used to call the
		 *            callbackFunction
		 */
		setIsSelectableCallback: function(callbackFunction, callbackObject) {
			var methodName = "setIsSelectableCallback";
			this.logEntry(methodName);

			this._isSelectableCallback = callbackFunction;
			this._isSelectableCallbackObject = callbackObject;

			this.logExit(methodName);
		},

		/**
		 * Returns the callback function to determine whether a folder is selectable.
		 * 
		 * @public
		 * @return Callback function to determine whether a folder is selectable.
		 */
		getIsSelectableCallback: function() {
			return this._isSelectableCallback;
		},

		/**
		 * Returns all the repositories available for selection.
		 * 
		 * @2.0.3 Added filtered repositories
		 * @public
		 * @return an array of repositories
		 */
		getAvailableRepositoriesForSelection: function() {
			var filteredRepositories = [];
			var browseFeature = {};
			browseFeature.id = "browsePane";
			var useSearchViewAttribute = true;

			//if the Browse feature hasn't been enabled to the desktop
			if (Desktop.getFeature(browseFeature) && this.displayFilteredRepositories)
				useSearchViewAttribute = false;

			// TODO: this code needs to be updated to account for the WorkView (where SelectObject dialog is used).
			for ( var i = 0; i < Desktop.repositories.length; i++) {
				if (useSearchViewAttribute && Desktop.repositories[i].showInSearchView)
					filteredRepositories.push(Desktop.repositories[i]);
				else if (!useSearchViewAttribute && Desktop.repositories[i].showInBrowseView)
					filteredRepositories.push(Desktop.repositories[i]);
			}
			return filteredRepositories;
		},

		setUnselectableFolders: function(unselectableFolders) {
			var methodName = "setUnselectableFolders";
			this.logEntry(methodName);

			this.unselectableFolders = unselectableFolders;

			this.logExit(methodName);
		},

		_setDropdownidAttr: function(id) {
			this._dropdownid = id;
		},

		_setArialabelledbyAttr: function(id) {
			this._dropdownAriaLabelledBy = id;
		},

		_createFolderSelector: function() {
			var methodName = "_createFolderSelector";
			this.logEntry(methodName);

			var folderSelectorClasses = "";
			if (this.displayForSearch == true) {
				if (this.repositorySelect != null) {
					folderSelectorClasses = "searchInFolderSelectorContent ecmSearchInRightPaneHeight";
				} else {
					folderSelectorClasses = "searchInFolderSelectorContent ecmSearchInRightPaneHeightNoRepoSelect";
				}
			} else {
				folderSelectorClasses = "searchInFolderSelectorContent ecmSearchInPaneHeightNoTitle";
			}

			//Create the FolderSelector widget
			this._folderSelector = this.createFolderSelector({
				'id': this.id + '_FolderSelector',
				'class': folderSelectorClasses,
				'selectRootInitially': this.selectRootInitially,
				'preventSelectRoot': this.preventSelectRoot,
				'preventSelectRootTooltip': this.preventSelectRootTooltip,
				'unselectableFolders': this.unselectableFolders,
				'showIncludeSubfolders': this.showIncludeSubFolders,
				'rootItemToFilter': this.rootItemToFilter
			});
			this.logExit(methodName);
		},

		/**
		 * Creates the folder selector control.
		 * 
		 * @public
		 * @param params
		 *            The parameters used to create the folder selector
		 */
		createFolderSelector: function(params) {
			var methodName = "createFolderSelector";
			this.logEntry(methodName);

			return new FolderSelector(params);

			this.logExit(methodName);
		},

		_createRendering: function() {
			var methodName = "_createRendering";
			this.logEntry(methodName);

			if (this._folderSelector) {
				this._folderSelector.destroy();
				this._folderSelector = null;
			}

			if (this._dropdown) {
				Tooltip.hide(this._dropdown.domNode);
				this._dropdown.destroy();
				this._dropdown = null;
			}

			if (this.preventSelectRoot == true) {
				this.selectRootInitially = false;
			}

			// main content div:
			this._popupContent = domConstruct.create("div", {
				'class': 'ecmSearchInDropDownPopUpContent ' + (this.dropDownClass) ? this.dropDownClass : "",
				'id': this.id + '_RepoFolderSelectorPopUpContent'
			});

			if (this.displayForSearch == true) {
				var titleDiv = domConstruct.create("div", {
					innerHTML: this.title ? idxHtml.escapeHTML(this.title) : ecm.messages.search_in_title,
					'class': 'ecmSearchInTitle'
				});
				this._popupContent.appendChild(titleDiv);
			}

			var mainBorder = domConstruct.create("div", {
				'class': 'ecmSearchInMainBorder'
			});
			this._popupContent.appendChild(mainBorder);

			var leftPaneClasses = "";
			if (this.displayForSearch == true) {
				leftPaneClasses = "ecmSearchInLeftPane ecmSearchInPaneHeight";
			} else {
				leftPaneClasses = "ecmSearchInLeftPane ecmSearchInPaneHeightNoTitle";
			}
			this._leftPane = domConstruct.create("div", {
				'class': leftPaneClasses
			});
			mainBorder.appendChild(this._leftPane);

			if (this.displaySelectTeamspacesNode == true && this.repository.teamspacesEnabled == true) {
				var teamspacesDiv = domConstruct.create("div");
				this._leftPane.appendChild(teamspacesDiv);
				this._selectTeamspacesNode = new Button({
					label: Desktop.getConfiguredLabelsvalue("workspaces"),
					'class': "fieldText",
					'baseClass': "buttonLinks"
				}, teamspacesDiv);
				this.connect(this._selectTeamspacesNode, "onClick", lang.hitch(this, function(evt) {
					this._selectTeamspaces();
				}));
			}

			if (this.displaySelectRepositoriesNode == true) {
				var repositoriesDiv = domConstruct.create("div");
				this._leftPane.appendChild(repositoriesDiv);
				this._selectRepositoriesNode = new Button({
					label: Desktop.getConfiguredLabelsvalue("repository"),
					'class': "fieldText",
					'baseClass': "buttonLinks"
				}, repositoriesDiv);
				this.connect(this._selectRepositoriesNode, "onClick", lang.hitch(this, function() {
					this._selectRepositories();
				}));
			}

			if (this.constructor.extensions && this.constructor.extensions.length > 0) {
				if (!this._extensionData) {
					this._extensionData = [];
				}
				for ( var i = 0; i < this.constructor.extensions.length; i++) {
					var extension = this.constructor.extensions[i];
					if (extension && extension.paneClass) {
						var widgetClass = extension.paneClass;
						var extObj = new widgetClass(extension.params);
						var ext = {
							extObj: extObj,
							extension: extension
						};
						this._extensionData.push(ext);
						if (extObj.canDisplay) {
							extObj.canDisplay(this, lang.hitch(this, function(bool) {
								if (bool) {
									var extDiv = domConstruct.create("div");
									this._leftPane.appendChild(extDiv);
									var button = new Button({
										label: (extObj.title) ? extObj.title : i,
										'class': "fieldText",
										'baseClass': "buttonLinks"
									}, extDiv);
									ext.button = button;
									this.connect(button, "onClick", lang.hitch(this, "_selectExtension", ext));
								}
							}));
						}
					}
				}
			}

			this._rightPane = domConstruct.create("div", {
				'class': 'ecmSearchInRightPane'
			});
			if (this.isLeftToRight()) {
				domStyle.set(this._rightPane, "right", "0");
			} else {
				domStyle.set(this._rightPane, "left", "0");
			}
			mainBorder.appendChild(this._rightPane);

			var topRightDiv = domConstruct.create("div", {
				'class': 'ecmTopRightSearchIn'
			});
			this._rightPane.appendChild(topRightDiv);

			// If there are repository types specified, load the search in control appropriately
			if (this._repositoryTypes && this._repositoryTypes.count > 0) {
				var allRepositories = this.getAvailableRepositoriesForSelection();
				// Default the current repository to something, otherwise could be null if not in allRepositories list.
				var currentRepositoryId = this.repository.id;
				var currentRepository = this.repository;
				for ( var m in allRepositories) {
					if (allRepositories[m].name == this.repositoryTeamspaceName) {
						currentRepositoryId = allRepositories[m].id;
						currentRepository = allRepositories[m];
					}
				}

				var opStore = this._createItemFileWriteStore(currentRepositoryId);
				if (this.displayAllRepositories == true) {
					// Get all the repositories assigned to the desktop
					this._loadAllRepositories(allRepositories, currentRepository, opStore);
				} else {
					// Get all the p8 repositories that are in the same domain as the current repository
					this._loadRepositoriesFromDomain(allRepositories, currentRepository, opStore);
					// Filter out other repositories that are not of the correct type 
					for ( var i in allRepositories) {
						var repository = allRepositories[i];
						if (repository.type != "p8" && this._repositoryTypes.contains(repository.type) && repository.name != this.repositoryTeamspaceName) {
							opStore.newItem({
								value: repository.id,
								label: repository.name
							});
						}
					}
				}

				this._createFilteringSelect(currentRepositoryId, opStore);

				this.connect(this.repositorySelect, "onChange", lang.hitch(this, function(repositoryId) {
					this._handleRepositoryChange(repositoryId);
				}));
				topRightDiv.appendChild(this.repositorySelect.domNode);
			} else {
				if (this.displayRepositoryDropDownList && this.repository.type == "p8") {
					var allRepositories = this.getAvailableRepositoriesForSelection();
					// Default the current repository to something, otherwise could be null if not in allRepositories list.
					var currentRepositoryId = this.repository.id;
					var currentRepository = this.repository;
					for ( var m in allRepositories) {
						if (allRepositories[m].name == this.repositoryTeamspaceName) {
							currentRepositoryId = allRepositories[m].id;
							currentRepository = allRepositories[m];
							break;
						}
					}

					var opStore = this._createItemFileWriteStore(currentRepositoryId);
					if (this.displayAllRepositories == true) {
						// Get all the repositories assigned to the desktop
						this._loadAllRepositories(allRepositories, currentRepository, opStore);
					} else {
						this._loadRepositoriesFromDomain(allRepositories, currentRepository, opStore);
					}
					this._createFilteringSelect(currentRepositoryId, opStore);

					this.connect(this.repositorySelect, "onChange", lang.hitch(this, function(repositoryId) {
						this._handleRepositoryChange(repositoryId);
					}));
					topRightDiv.appendChild(this.repositorySelect.domNode);
				} else if (this.displayRepositoryDropDownList && this.repository.type == "cm") {
					this.cmRepoTextBox = new TextBox({
						value: this.repositoryTeamspaceName,
						title: this.repositoryTeamspaceName,
						"class": "searchInRepoTextBox",
						readOnly: true
					});
					topRightDiv.appendChild(this.cmRepoTextBox.domNode);
				}
			}

			//Add filter box
			this._filter = new FilterTextBox({
				placeholder: ecm.messages.name_contains_label,
				"class": "searchInFilter"
			});

			if (this.repositorySelect != null || this.cmRepoTextBox != null) {
				domClass.add(this._filter.domNode, "searchInFilterRepoSelect");
			}

			//this._filter._setValueAttr("Search(starts with)");
			topRightDiv.appendChild(this._filter.domNode);

			//this._filtersearchbtn = new Button({
			//iconClass: "ecmSearchInDropDownFilterSearchButton"
			//});
			//this._rightPane.appendChild(this._filtersearchbtn.domNode);
			this._filterData = "";
			this.connect(this._filter, "_setValueAttr", "_filterItems");
			this.connect(this._filter, "_onInput", lang.hitch(this, function(evt) {
				// Don't filter on tab events.
				if (evt.keyCode != keys.TAB) {
					this._filterItems();
				} else {
					if (evt.shiftKey == false) {
						if (this._filter.get("value").length > 0) {
							if (this._messageDiv.style.display != "none") {
								this._messageLink.focus();
							} else {
								this._folderSelector._folderTree._tree.focusNode(this._folderSelector._folderTree._tree.lastFocused);
							}
						}
					} else {
						if (this.repositorySelect != null) {
							this.repositorySelect.focus();
						} else if (this.cmRepoTextBox) {
							this.cmRepoTextBox.focus();
						} else if (this._selectRepositoriesNode != null) {
							this._selectRepositoriesNode.focus();
						} else if (this._selectTeamspacesNode != null) {
							this._selectTeamspacesNode.focus();
						} else {
							this._cancelButton.focus();
						}
					}
				}
			}));
			domStyle.set(this._filter.domNode, "display", "none");

			// Add the elements to support server side filtering.
			this._messageDiv = domConstruct.create("div");
			domClass.add(this._messageDiv, "inlineMessage inlineMessageInfo searchInMessageArea");
			this._rightPane.appendChild(this._messageDiv);

			this._messageText = domConstruct.create("span");
			this._messageDiv.appendChild(this._messageText);

			var linkSpan = domConstruct.create("span");
			this._messageDiv.appendChild(linkSpan);

			this._messageLink = domConstruct.create("a", {
				href: '#'
			});
			linkSpan.appendChild(this._messageLink);
			this._messageLink.onfocus = lang.hitch(this, function(evt) {
				this._messageLinkFocused = true;
			});
			this._messageLink.onblur = lang.hitch(this, function(evt) {
				this._messageLinkFocused = false;
			});

			domStyle.set(this._messageDiv, "display", "none");

			// Add the FolderSelector widget.
			this._createFolderSelector();

			// Create the include subfolders checkbox and connect it to the underlying
			// folder selector. Needed for scroll bars to appear correctly.
			this._incSubFolders = new CheckBox({
				'id': this.id + '_incSubFoldersChk',
				'name': this.id + '_incSubFoldersChk'
			});
			if (this._includeSubfolders) {
				delete this._includeSubfolders;
				this._incSubFolders.set("checked", true);
			}
			this._folderSelector._incSubfoldersCheckbox = this._incSubFolders;
			this._folderSelector.setIsSelectableCallback(this._isSelectableCallback, this._isSelectableCallbackObject);
			this._folderSelector.setTeamspace(this._teamspace);
			this._rightPane.appendChild(this._folderSelector.domNode);
			this.connect(this._folderSelector, "onFolderDblClick", lang.hitch(this, function() {
				this._pickSelectedItemAndClose();
			}));

			// Connect paging events. Connect to the status dialog show/hide events in the desktop here to avoid accumulating connections.
			this.connect(this._folderSelector, "onPagingStart", lang.hitch(this, function() {

				// Connect to the desktop onDisplayStatusDialog event.
				if (this._displayStatusDialogEventHandle == null) {
					this._displayStatusDialogEventHandle = this.connect(Desktop, "onDisplayStatusDialog", lang.hitch(this, function() {
						if (this._dropdown) {
							this._dropdown.setAllowCloseOnBlur(false);

							// Connect to event when status dialog is hidden to restore state changed above.
							this._hideStatusDialogEventHandle = this.connect(Desktop, "onHideStatusDialog", lang.hitch(this, function() {
								if (this._dropdown) {
									var _this = this;
									// Allow some time for the status dialog to close .
									setTimeout(function() {
										_this._focusLastFocused();
										_this._dropdown.setAllowCloseOnBlur(true);

										// Disconnect here to avoid accumulating connections on the onHideStatusDialog event.
										if (_this._hideStatusDialogEventHandle != null) {
											_this.disconnect(_this._hideStatusDialogEventHandle);
											_this._hideStatusDialogEventHandle = null;
										}
									}, 500);
								}
							}));
						}
					}));
				}
			}));

			this.connect(this._folderSelector, "onPagingComplete", lang.hitch(this, function() {
				if (this._displayStatusDialogEventHandle != null) {
					this.disconnect(this._displayStatusDialogEventHandle);
					this._displayStatusDialogEventHandle = null;
				}
			}));

			domStyle.set(this._folderSelector._includeSubfoldersNode, "display", "none");

			// add button bar
			var buttonPaneClasses = "";
			if (this.displayForSearch == true) {
				buttonPaneClasses = "buttonArea ecmSearchInSearchButtonAreaWidth";
			} else {
				buttonPaneClasses = "buttonArea ecmSearchInButtonAreaWidth";
			}

			this._buttonPane = domConstruct.create("div", {
				'class': buttonPaneClasses,
				'id': this.id + '_FolderSelectorButtonPane'
			});

			// include subfolders pane. The checkbox was created above.
			var subFoldersPane = domConstruct.create("div", {
				'class': 'incSubFoldersArea',
				'id': this.id + '_includeSubfoldersNode'
			});
			this._buttonPane.appendChild(subFoldersPane);
			subFoldersPane.appendChild(this._incSubFolders.domNode);
			var incSubFoldersLbl = domConstruct.create("label", {
				innerHTML: ecm.messages.include_subfolders,
				'for': this.id + '_incSubFoldersChk'
			});
			subFoldersPane.appendChild(incSubFoldersLbl);

			this._okButton = new Button({
				label: ecm.messages.ok_button_label,
				disabled: true,
				'id': this.id + '_okButton'
			});
			this.connect(this._okButton, "onClick", lang.hitch(this, function() {
				this._pickSelectedItemAndClose();
			}));
			this._buttonPane.appendChild(this._okButton.domNode);

			this.connect(this._folderSelector, "onFolderSelect", lang.hitch(this, function(/*ecm.model.Item*/item) {

				// Try to get the selected folder from the folder selector widget.

				var selectRepo = true;
				if (this._currentSelection && this._currentSelection == this._selectTeamspacesNode) {
					selectRepo = false;
				}

				if (this._folderSelector.getSelected(selectRepo) == null) {
					this._okButton.set("disabled", true);
				} else {
					this._okButton.set("disabled", false);
					if (this.showIncludeSubFolders) {
						if (item.template == "Teamspace") {
							this._incSubFolders.set("checked", true);
							this._incSubFolders.set("disabled", true);
						}
					}
				}
			}));

			this._cancelButton = new Button({
				label: ecm.messages.cancel,
				'id': this.id + '_cancelButton'
			});
			this.connect(this._cancelButton, "onClick", lang.hitch(this, function() {
				this._dropdown.closeDropDown();
				this.setFocus();
			}));
			this._buttonPane.appendChild(this._cancelButton.domNode);
			this._popupContent.appendChild(this._buttonPane);

			if (!this._dropdown) {
				var tooltipDialog = new TooltipDialog({
					content: this._popupContent
				});
				var id = this._dropdownid ? this._dropdownid : this.id + '_Folders';
				this._dropdown = new SearchInDropDownInput({
					'class': 'ecmDropDownInput',
					forceWidth: this.forceWidth,
					dropDown: tooltipDialog,
					id: id,
					labelId: this._dropdownAriaLabelledBy
				});
				this._dropdown.set("disabled", this.disabled);
				this._dropdown.setParent(this);

				var _this = this;
				this.connect(this._dropdown, "openDropDown", function() {
					ecm.model.desktop._onRequestOverrideStatusDialogRefocus(false);
					this._dropdownOpened = true;

					this._toolTip.close();
					if (this._folderSelector._folderTree._tree == null && _this.disabled == false && _this._rootObject) {
						var savedSelectedItem = this._selectedFolder && this._selectedFolder.item && !this._selectedFolder.root ? this._selectedFolder.item : null;

						if (_this.displayTeamspacesInitially) {
							_this._selectTeamspaces();
						} else if (_this.displaySelectRepositoriesNode) {
							_this._selectRepositories();
						} else {
							var foundIt = false;
							if (_this._extensionData && _this._extensionData.length > 0) {
								for ( var i = 0; i < _this._extensionData.length; i++) {
									if (_this._extensionData[i].button) {
										foundIt = true;
										_this._selectExtension(_this._extensionData[i]);
										break;
									}
								}
							}
							if (!foundIt) {
								_this._selectRepositories();
							}
						}
						this.own(aspect.after(this._folderSelector, "onFolderTreeRendered", lang.hitch(this, function() {
							if (has("trident") || has("ie")) { // Selecting a tree node with a long label in a scroller that has the scroller in the tree's parent causes IE to scroll
								var self = this;
								if (this._treeFocusNodeListener) {
									this._treeFocusNodeListener.remove();
									this._treeFocusNodeListener = null;
								}
								this._treeFocusNodeListener = aspect.around(this._folderSelector._folderTree._tree, "focusNode", function(originalFunc) {
									return function(node) {
										var scrollLeft = self._folderSelector && self._folderSelector.domNode ? self._folderSelector.domNode.scrollLeft : null;
										var ret = originalFunc.apply(this, arguments); // call the original method to create the new item
										if (self._folderSelector && self._folderSelector.domNode && scrollLeft != undefined) {
											self._folderSelector.domNode.scrollLeft = scrollLeft;
										}
										return ret;
									};
								});
							}
							
							if (savedSelectedItem) { // If selected an item before loading the pulldown, then select it after opening the pulldown
								this.setSelected(savedSelectedItem);
								this._folderSelector._folderTree.set('selectedItem', savedSelectedItem);
								this._folderSelector.scrollSelectedIntoView();
							} else {
								this._folderSelector.selectRootNode();
							}
						})));
					} else {
						if (_this._folderSelector._selectedItem) {
							_this._folderSelector._folderTree.set('selectedItem', _this._folderSelector._selectedItem);
						}
						_this._folderSelector.scrollSelectedIntoView();
					}

					if (domStyle.get(this._messageDiv, "display") != "none") {
						this.resizeFolderSelectorForMessage();
					}
				});

				this.connect(this._dropdown, "closeDropDown", function() {
					this._dropdown.setKeepDropDownOpen(false);
					// Note: ideally the drop-down would remain open while logging into a repository
					// but there are underlay issues that prevent it, thus, we keep the opened state
					// during login and reopen the the drop-down when the login dialog closes
					if (!this._loginDialogOpened)
						this._dropdownOpened = false;

					dijit.hideTooltip(this._folderSelector._toolTipTarget);
					ecm.model.desktop._onRequestRevertStatusDialogRefocus();
				});

				this._ellipsis = new Ellipsis();
				this._dropdown.containerNode.appendChild(this._ellipsis.domNode);

				if (this.selectRootInitially == true && _this._rootObject) {
					this._incSubFolders.set('checked', true);
				}
			}
			if (this.domNode && this._dropdown.domNode) {
				this.domNode.appendChild(this._dropdown.domNode);
			}
			if (this.domNode) {
				domClass.add(this.domNode, "dijitInline");
			}

			this._setDropdownStyle();
			this.logExit(methodName);
		},

		_createItemFileWriteStore: function(currentRepositoryId) {
			var opStore = new ItemFileWriteStore({
				data: {
					identifier: "value",
					label: "label",
					items: [
						{
							label: this.repositoryTeamspaceName,
							value: currentRepositoryId,
							selected: true
						}
					]
				}
			});
			return opStore;
		},

		_createFilteringSelect: function(currentRepositoryId, opStore) {
			this.repositorySelect = new FilteringSelect({
				id: this.id + '_select2',
				"class": "searchInRepoSelector",
				store: opStore,
				searchAttr: "label",
				value: currentRepositoryId,
				fetchProperties: {
					sort: [
						{
							attribute: "label",
							descending: false
						}
					]
				}
			});
		},

		_loadRepositoriesFromDomain: function(allRepositories, currentRepository, opStore) {
			var methodName = "_loadRepositoriesFromDomain";
			this.logEntry(methodName);
			array.forEach(allRepositories, function(repository) {
				if (repository._isP8() && repository.connected && repository.id != currentRepository.id && repository.domainId && repository.domainId == currentRepository.domainId && (!this.validateRepository || this.validateRepository(repository))) {
					opStore.newItem({
						value: repository.id,
						label: repository.name
					});
				}
			}, this);
			this.logExit(methodName);
		},

		_loadAllRepositories: function(allRepositories, currentRepository, opStore) {
			var methodName = "_loadAllRepositories";
			this.logEntry(methodName);
			array.forEach(allRepositories, function(repository) {
				if (repository.id != currentRepository.id && repository.type != "od") {
					if (this._repositoryTypes && this._repositoryTypes.contains(repository.type) || this._repositoryTypes == null) {
						opStore.newItem({
							value: repository.id,
							label: repository.name
						});
					}
				}
			}, this);
			this.logExit(methodName);
		},

		_focusLastFocused: function() {
			var folderTree = this._folderSelector._folderTree;
			var node = folderTree && folderTree._tree ? folderTree._tree.lastFocused : null;
			if (node) {
				folderTree._tree.focusNode(node);
			}
		},

		_filterItems: function(forceFilter) {
			var methodName = "_filterItems";
			this.logEntry(methodName);

			var filterData = this._filter.get("value");
			var clearing = false;
			if (filterData == null || filterData.length == 0) {
				clearing = true;
			}

			if (clearing == true && this._displayingFilteredResultSet == true) {
				// Avoid duplicate calls to the server here.
				if ((this._filterData != filterData) && (this._folderSelector._folderTree.treeModel)) {
					this._folderSelector._folderTree.treeModel.reload();
				}
				this._filterData = filterData;
				this._displayingFilteredResultSet == false;
				this._hideMessage();
				if (this._displayingRecent) {
					this._displayMessage(this._displayingRecent, ecm.messages.displaying_recent_results);
				}
			} else {
				var callback = lang.hitch(this, function(childNodesCount, hasMore) {
					var teamspaceRecentListMode = false;
					if (this._folderSelector._folderTree.treeModel.teamspacesResultSet && this._folderSelector._folderTree.treeModel.teamspacesResultSet.displayingRecent)
						teamspaceRecentListMode = true;

					if (clearing == true || (hasMore == false && !teamspaceRecentListMode)) {
						this._hideMessage();
						if (teamspaceRecentListMode)
							this._displayMessage(childNodesCount, ecm.messages.displaying_recent_results);

					} else if (hasMore == true || this._displayingFilteredResultSet == true || teamspaceRecentListMode == true) {
						this._displayMessage(childNodesCount);
					}
				});

				// dont execute the filter if nothing changed
				if ((forceFilter || this._filterData != filterData) && this._folderSelector._folderTree.treeModel) {
					this._filterData = filterData;
					this._folderSelector._folderTree.treeModel.applyFilter("*" + filterData + "*", callback);
				}
			}
			this.logExit(methodName);
		},
		/**
		 * @private
		 */
		_displayMessage: function(childNodesCount, replacementMessage) {
			if (this._displayingFilteredResultSet == true) {
				this._hideMessage();
			}
			var message2 = replacementMessage == null ? ecm.messages.teamspace_filter_results : replacementMessage;
			var message = string.substitute(message2, [
				childNodesCount
			]);

			if (!replacementMessage) {
				this._messageText.innerHTML = message + " " + ecm.messages.more_results_on_server + " ";
				this._messageLink.innerHTML = ecm.messages.search_all_teamspaces;
				this._messageLink.onkeypress = lang.hitch(this, function(evt) {
					if (evt.keyCode == 13) {
						this._filterTeamspacesOnServer();
					}
				});
				this._messageLink.onclick = lang.hitch(this, function(evt) {
					this._filterTeamspacesOnServer();
				});
			} else {
				this._messageText.innerHTML = message;
				this._messageLink.innerHTML = "";
				this._messageLink.onkeypress = null;
			}
			if (domStyle.get(this._messageDiv, "display") == "none") {
				domStyle.set(this._messageDiv, "display", "block");
				this.resizeFolderSelectorForMessage();
			}
		},
		/**
		 * @private
		 */
		_filterTeamspacesOnServer: function() {
			this._folderSelector._folderTree.treeModel.searchAllTeamspaces(this._filter.get("value"), lang.hitch(this, function(filteredTeamspaces) {

				this._displayingFilteredResultSet = true;
				this._hideMessage();

				this._messageText.innerHTML = ecm.messages.displaying_filtered_results;
				this._messageLink.innerHTML = ecm.messages.clear_filter;
				this._messageLink.onkeypress = lang.hitch(this, function(evt) {
					if (evt.keyCode == 13) {
						this._filter.set("value", "");
					}
				});
				this._messageLink.onclick = lang.hitch(this, function(evt) {
					this._filter.set("value", "");
				});
				domStyle.set(this._messageDiv, "display", "block");
				this.resizeFolderSelectorForMessage();
			}));
		},

		/**
		 * @private
		 */
		resizeFolderSelectorForMessage: function() {
			var paneContentBox = domGeom.getContentBox(this._rightPane);
			domStyle.set(this._messageDiv, "width", paneContentBox.w - 24 + "px");

			var folderSelectorMarginBox = domGeom.getMarginBox(this._folderSelector.domNode);
			var messageMarginBox = domGeom.getMarginBox(this._messageDiv);
			folderSelectorMarginBox.h = folderSelectorMarginBox.h - messageMarginBox.h + 5;
			domGeom.setMarginBox(this._folderSelector.domNode, folderSelectorMarginBox);
		},

		/**
		 * @private
		 */
		_hideMessage: function() {
			if (domStyle.get(this._messageDiv, "display") != "none") {
				var messageMarginBox = domGeom.getMarginBox(this._messageDiv);
				var folderSelectorMarginBox = domGeom.getMarginBox(this._folderSelector.domNode);
				folderSelectorMarginBox.h = folderSelectorMarginBox.h + messageMarginBox.h - 5;
				domStyle.set(this._messageDiv, "display", "none");
				domGeom.setMarginBox(this._folderSelector.domNode, folderSelectorMarginBox);
			}
		},

		/**
		 * @private Selects the button in the left pane.
		 */
		_selectButton: function(button) {
			if (this._selectRepositoriesNode != null) {
				domClass.remove(this._selectRepositoriesNode.domNode, "ecmSearchInDropDownButtonSelected");
			}
			if (this._selectTeamspacesNode != null) {
				domClass.remove(this._selectTeamspacesNode.domNode, "ecmSearchInDropDownButtonSelected");
			}
			if (this._extensionData) {
				for ( var i in this._extensionData) {
					if (this._extensionData[i].button) {
						domClass.remove(this._extensionData[i].button.domNode, "ecmSearchInDropDownButtonSelected");
					}
				}
			}
			domClass.add(button.domNode, "ecmSearchInDropDownButtonSelected");
		},

		_selectTeamspaces: function() {
			var methodName = "_selectTeamspaces";
			this.logEntry(methodName);

			this._selectButton(this._selectTeamspacesNode);

			if (this.repositorySelect) {
				domStyle.set(this.repositorySelect.domNode, "display", "");
				domClass.add(this.repositorySelect.domNode, "searchInRepoTeamspaces");
			}
			if (this.cmRepoTextBox) {
				domClass.add(this.cmRepoTextBox.domNode, "searchInRepoTeamspaces");
			}

			if (this._currentSelection != this._selectTeamspacesNode) {
				this._currentSelection = this._selectTeamspacesNode;
				//change to display teamspaces
				this._folderSelector.isFirstNodeasTeamspaces = true;
				this._folderSelector.setRoot(this._rootObject);
				domStyle.set(this._filter.domNode, "display", "block");
				domStyle.set(this._folderSelector._folderTree.domNode, "overflow", "visible");
				this._okButton.set("disabled", true);
				if (this.repository) {
					aspect.after(this.repository, "_retrieveTeamspaceFolderResultSetCompleted", lang.hitch(this, function() {
						if (!this._displayingFilteredResultSet && this._folderSelector._folderTree && this._folderSelector._folderTree.treeModel.teamspacesResultSet && this._folderSelector._folderTree.treeModel.teamspacesResultSet.displayingRecent) {
							var recentNumber = this._folderSelector._folderTree.treeModel.teamspacesResultSet.displayingRecent;
							this._displayingRecent = recentNumber;
							this._displayMessage(recentNumber, ecm.messages.displaying_recent_results);
						}
					}));
				}

				// Resize folder selector.
				domClass.remove(this._folderSelector.domNode, "ecmSearchInRightPaneHeight ecmSearchInRightPaneHeightNoRepoSelect ecmSearchInPaneHeightNoTitle");
				if (this.displayForSearch == true) {
					domClass.add(this._folderSelector.domNode, "ecmSearchInRightPaneHeight");
				} else {
					domClass.add(this._folderSelector.domNode, "ecmSearchInPaneHeightNoTitle");
				}

// this doesn't seem to work quite right and it is causing some script errors:
//			aspect.after(this._folderSelector._folderTree, "onRendered", lang.hitch(this, function() {
//				if (this._teamspace) { // Pre select the current teamspace in the teamspace tree
//					var self = this;
//					setTimeout(function() {
//						self._folderSelector._folderTree.treeModel.getRoot(function(rootItem) {
//							var path = [];
//							path.push(rootItem.id);
//							if (self._teamspace.getRepository()._isP8()) {
//								path.push("Teamspace," + rootItem.getObjectStore().id + "," + self._teamspace.id);
//							} else
//								path.push(self._teamspace.id);
//							self._folderSelector._folderTree._setPathAttr(path);
//						});
//					}, 10);
//				}
//				this._filterItems(true); // Reapply the current filter if it was specified
//				this._okButton.set("disabled", false);
//			}));
			}
			this.logExit(methodName);
		},

		_selectExtension: function(ext) {
			var methodName = "_selectExtension";
			this.logEntry(methodName);
			this._selectButton(ext.button);
			if (this._currentSelection != ext.button) {
				this._currentSelection = ext.button;
				ext.extObj.showData(this);
			}
			this.logExit(methodName);
		},

		_selectRepositories: function() {
			var methodName = "_selectRepositories";
			this.logEntry(methodName);

			// Clear the filter.
			this._filter.set("value", "");
			this._filterItems();

			this._selectButton(this._selectRepositoriesNode);

			if (this.repositorySelect) {
				domStyle.set(this.repositorySelect.domNode, "display", "");
				if (this.repositorySelect.domNode && domClass.contains(this.repositorySelect.domNode, "searchInRepoTeamspaces")) {
					domClass.remove(this.repositorySelect.domNode, "searchInRepoTeamspaces");
				}
			}
			if (this.cmRepoTextBox && this.cmRepoTextBox.domNode && domClass.contains(this.cmRepoTextBox.domNode, "searchInRepoTeamspaces")) {
				domClass.remove(this.cmRepoTextBox.domNode, "searchInRepoTeamspaces");
			}

			if (this._currentSelection != this._selectRepositoriesNode) {
				this._currentSelection = this._selectRepositoriesNode;
				//change to display repositorys
				this._folderSelector.isFirstNodeasTeamspaces = false;
				this._folderSelector.setRoot(this._rootObject);
				domStyle.set(this._filter.domNode, "display", "none");
				domStyle.set(this._folderSelector._folderTree.domNode, "overflow", "visible");
				if (!(this._rootObject && this._rootObject.isInstanceOf && this._rootObject.isInstanceOf(Item) && this._rootObject.isFolder())) {
					// the root is not a folder
					this._folderSelector._folderTree._rootFolderName = ecm.messages.folder_tree_repository_root_name;
				}
			}
			this._hideMessage();

			domClass.remove(this._folderSelector.domNode, "ecmSearchInRightPaneHeight ecmSearchInRightPaneHeightNoRepoSelect ecmSearchInPaneHeightNoTitle");
			if (this.displayForSearch == true) {
				if (this.repositorySelect != null || this.cmRepoTextBox != null) {
					domClass.add(this._folderSelector.domNode, "ecmSearchInRightPaneHeight");
				} else {
					domClass.add(this._folderSelector.domNode, "ecmSearchInRightPaneHeightNoRepoSelect");
				}
			} else {
				domClass.add(this._folderSelector.domNode, "ecmSearchInPaneHeightNoTitle");
			}

			this.logExit(methodName);
		},

		_setDropdownStyle: function() {
			var methodName = "_setDropdownStyle";
			this.logEntry(methodName);

			if (this._popupContent) {
				domClass.remove(this._popupContent, "hideIncludeSubFolders");

				if (this.showIncludeSubFolders == false) {
					domClass.add(this._popupContent, "hideIncludeSubFolders");
				}
			}
			this.logExit(methodName);
		},

		/**
		 * Returns the currently selected item in the control.
		 * 
		 * @public
		 * @return The selected {@link ecm.model.SelectedFolder} object.
		 */
		getSelected: function() {
			return this._selectedFolder;
		},

		/**
		 * Returns the folder selector widget within this dropdown.
		 * 
		 * @since 2.0.3
		 */
		getFolderSelector: function() {
			return this._folderSelector;
		},

		/**
		 * Sets the folder selected in the control
		 * 
		 * @public
		 * @param folder
		 *            {@link ecm.model.Item} corresponding to the selected folder.
		 */
		setSelected: function(/*ecm.model.Item*/folder, isTeamspaceFolder, pathName) {
			var methodName = "setSelected";
			this.logEntry(methodName, "Folder is " + folder.name);

			if (this._rootSet) {

				if (isTeamspaceFolder) {
					var repositoryOrTeamspace = this._teamspace ? this._teamspace : this.repository;
					this._selectedFolder = new SelectedFolder(folder, this.showIncludeSubFolders, repositoryOrTeamspace, false);
					this._selectedFolder.isTeamspaceSubFolder = true;
				} else {
					this._folderSelector.setSelected(folder);
					this._selectedFolder = this._folderSelector.getSelected();
				}

				if (folder.rootFolder && this._rootObject.isInstanceOf && (this._rootObject.isInstanceOf(Repository) || this._rootObject.isInstanceOf(Teamspace))) {
					this.setLabel(this.repositoryTeamspaceName);
				} else if (folder.id == FolderTreeModel.THIS_TEAMSPACE_ID) {
					this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder, [
						this.repositoryTeamspaceName,
						folder.name
					])));
				} else if (pathName) {
					var label;
					pathName = pathName.replace(/\//g, "\\");
					if (pathName.lastIndexOf("\\") > 0) { // more than one level deep
						label = this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder_ellipsis, [
							this.repositoryTeamspaceName,
							folder.name
						]));
					} else { // directly under root folder
						label = this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder, [
							this.repositoryTeamspaceName,
							pathName.substring(1)
						]));
					}
					this._selectedFolder.displayedPath = "\\" + this.repositoryTeamspaceName + pathName;
					this.setLabel(label);
				} else if (isTeamspaceFolder == true) {
					if (folder.repository.type == "p8") {
						this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder, [
							this.repositoryTeamspaceName,
							folder.attributes.ClbTeamspaceName
						])));
					} else {
						//cm8
						this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder, [
							this.repositoryTeamspaceName,
							folder.attributes.clbTitle
						])));
					}
				} else {
					if (this.showRepositoryTeamspace) {
						this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder, [
							this.repositoryTeamspaceName,
							folder.name
						])));
					} else {
						this.setLabel(folder.name);
					}
				}
				this._initiallySelectedFolder = null;
				this.onFolderSelected(this._selectedFolder);
			} else {
				this._initiallySelectedFolder = folder;
			}
			this.logExit(methodName);
		},

		/**
		 * Sets whether the Include subfolders check box will be displayed.
		 * 
		 * @public
		 * @param includeSubfolders
		 *            Boolean indicating whether the Include subfolders checkbox will be displayed.
		 */
		setIncludeSubfolders: function(includeSubfolders) {
			var methodName = "setIncludeSubfolders";
			this.logEntry(methodName);

			if (this._incSubFolders) { // rendered
				this._incSubFolders.set("checked", includeSubfolders);
			} else {
				this._includeSubfolders = includeSubfolders;
			}

			this.logExit(methodName);
		},

		/**
		 * Returns a boolean indicating the Include subfolders check box checked state.
		 * 
		 * @public
		 * @param includeSubfolders
		 *            Boolean indicating whether the Include subfolders check box will be displayed.
		 */
		isIncludeSubfolders: function(includeSubfolders) {
			var methodName = "isIncludeSubfolders";
			this.logEntry(methodName);

			this.logExit(methodName);
			return this._incSubFolders.get("checked");
		},

		_pickSelectedItemAndClose: function() {
			var methodName = "_pickSelectedItemAndClose";
			this.logEntry(methodName);

			var selectRepo = true;
			if (this._currentSelection && this._currentSelection == this._selectTeamspacesNode) {
				selectRepo = false;
			}
			this._selectedFolder = this._folderSelector.getSelected(selectRepo);

			if (this._selectedFolder != null) {

				// Set the label to reflect the selection.
				var folderItem = this._selectedFolder.item;

				if (this.showRepositoryTeamspace) {
					if (this._currentSelection != this._selectTeamspacesNode && this._currentSelection != this._selectRepositoriesNode) { // plugin extension
						this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder_ellipsis, [
							this.repositoryTeamspaceName,
							folderItem.name
						])));
					
					} else if (folderItem.parent == null && this._rootObject.isInstanceOf && (this._rootObject.isInstanceOf(Repository) || this._rootObject.isInstanceOf(Teamspace))) {
						this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root, [
							this.repositoryTeamspaceName
						])));

					} else if (folderItem.parent == null || folderItem.parent.parent == null) {
						if (this._currentSelection == this._selectTeamspacesNode && folderItem.id != FolderTreeModel.THIS_TEAMSPACE_ID) {
							//when select teamspaces,the label should contain the teamspace dispalyed name
							if (this.repository.type == "p8") {
								this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder, [
									this.repositoryTeamspaceName,
									folderItem.attributes.ClbTeamspaceName
								])));
							} else { //cm8
								this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder, [
									this.repositoryTeamspaceName,
									folderItem.attributes.clbTitle
								])));
							}
						} else {
							this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder, [
								this.repositoryTeamspaceName,
								folderItem.name
							])));
						}
					} else {
						this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder_ellipsis, [
							this.repositoryTeamspaceName,
							folderItem.name
						])));
					}

				} else if (folderItem.parent == null && this._rootObject.isInstanceOf && (this._rootObject.isInstanceOf(Repository) || this._rootObject.isInstanceOf(Teamspace))) {
					this.setLabel(this.repositoryTeamspaceName);

				} else {
					this.setLabel(folderItem.name);
				}

				this.onFolderSelected(this._selectedFolder);
				this._dropdown.closeDropDown();
				this.validate();
				this._madeSelection = true;
				this.setFocus();
				if (this._toolTip.label.length > 0) {
					this._toolTip.open(this.domNode);
				}
			}
			this.logExit(methodName);
		},

		/*
		 * Called when the user chooses a folder by double clicking it or single clicking, then clicking OK.
		 */
		onFolderSelected: function(/*ecm.model.SelectedFolder*/selectedFolder) {
		},

		/**
		 * Sets the text for the control.
		 * 
		 * @public
		 * @param label
		 *            The text that will be displayed.
		 * @param displayInTooltip
		 *            Boolean indicating whether the label should be displayed in a tooltip when the mouse is hovered.
		 */
		setLabel: function(label, displayInTooltip) {
			var methodName = "_pickSelectedItemAndClose";
			this.logEntry(methodName, "Label is " + label);

			if (!this._dropdown) {
				this._createRendering();
			}

			this._ellipsis.set("content", "");

			// Use separate spans for the folder name and include subfolders hint to avoid
			// alignment issues.
			domConstruct.create("div", {
				"class": "dijitInline",
				innerHTML: has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(label)) : idxHtml.escapeHTML(label)
			}, this._ellipsis.containerNode.firstChild, "last");

			// Add the including subfolders text if subfolders were selected.
			if (this.showIncludeSubFolders == true && this._incSubFolders.get("checked") == true) {
				domConstruct.create("div", {
					innerHTML: ecm.messages.selection_including_subfolders,
					"class": "dijitInline includeSubfoldersText"
				}, this._ellipsis.containerNode.firstChild, "last");
			}

			setTimeout(lang.hitch(this, function() {
				this._ellipsis.layout();

				// Disconnect the tooltip handler in the ellipsis object since we will handle that ourselves.
				this._ellipsis._disconnectTooltip();

				// When the surrounding containers are not yet sized,
				// the ellipsis height is set to 0 and the label is not displayed.
				// Check for this condition and set the height to the standard size.
				var h = domStyle.get(this._ellipsis.domNode, "height");
				if (h == 0) {
					domStyle.set(this._ellipsis.domNode, "height", "15px");
				}

			}));

			if (displayInTooltip == false) {
				this._toolTip.label = "";
			} else {

				// Set the tooltip text.
				if (this._selectedFolder != null) {
					var toolTipText = "<div class=\"folderSelectorTooltip\"><div>";
					if (this._currentSelection != this._selectTeamspacesNode) {
						this._selectedFolder.repositorySelected = true;
						toolTipText += this._formatter.formatPath(this._selectedFolder.path);
					} else {
						this._selectedFolder.repositorySelected = false;
						var displayedpath = this._selectedFolder.displayedPath;
						if (displayedpath == null || displayedpath == "\\undefined") {
							//in the init status,the toopltip path has the same value with the lable
							displayedpath = label;
							toolTipText += this._formatter.formatPath(displayedpath);
						} else {
							toolTipText += this._formatter.formatPath(this._selectedFolder.displayedPath);
						}
					}
					if (this.showIncludeSubFolders == true && this._incSubFolders.get("checked") == true) {
						toolTipText += "</div><div class=\"includeSubfoldersText\">" + ecm.messages.selection_including_subfolders + "</div>";
					}
					toolTipText += "</div>";
					this._toolTip.label = toolTipText;
				}
			}
			this.logExit(methodName);
		},

		/**
		 * Checks to see whether the user has selected a value when required to do so.
		 * 
		 * @public
		 * @return Boolean indicating whether the control is valid.
		 */
		isValid: function() {
			var isValid = true;
			if (this._dropdown) {
				if (this.isRequired == true && this.disabled == false && this._selectedFolder == null) {
					isValid = false;
				}
			}
			return isValid;
		},

		/**
		 * Checks the control for validity.
		 * 
		 * @public
		 * @return Boolean indicating whether the control is valid.
		 */
		validate: function() {
			var methodName = "validate";
			var isValid = true;
			// Only validate this control if it was used. The _dropdown member does not exist if the control was hidden.
			if (this._dropdown) {
				Tooltip.hide(this._dropdown.domNode);
				if (this.isRequired == true && this.disabled == false && this._selectedFolder == null) {
					domClass.add(this._dropdown.domNode, "Error");
					this.setFocus();
					Tooltip.show(ecm.messages.property_missingMessage, this._dropdown.domNode);
					isValid = false;
					this.logDebug(methodName, "Control is invalid");
				} else {
					domClass.remove(this._dropdown.domNode, "Error");
					this.logDebug(methodName, "Control is valid");
				}
			}
			return isValid;
		},

		_handleRepositoryChange: function(repositoryId) {
			var repository = Desktop.getRepository(repositoryId);
			if (repository.connected) {
				this._selectRepository(repository);
			} else {
				var dialog = LoginDialog.getLoginDialog();
				var onCancelSignal = aspect.after(dialog, "onCancel", lang.hitch(this, function() {
					// Restore the previous selection and reopen the drop-down
					onCancelSignal.remove();
					this._loginDialogOpened = false;
					if (this._rootObject)
						this.repositorySelect.set("value", this._rootObject.id);
					if (this._dropdown) {
						setTimeout(lang.hitch(this, function() {
							this._dropdown.openDropDown();
						}), 100);
					}
				}));
				this._loginDialogOpened = true;
				dialog.setRepository(repository);
				dialog.show(false, null, lang.hitch(this, function() {
					// Reopen the drop-down and select the repository
					onCancelSignal.remove();
					this._loginDialogOpened = false;
					if (this._dropdown) {
						setTimeout(lang.hitch(this, function() {
							this._dropdown.setKeepDropDownOpen(true);
							var handle = aspect.after(this._folderSelector, "onFolderTreeRendered", lang.hitch(this, function() {
								handle.remove();
								this._dropdown.setKeepDropDownOpen(false);
							}));
							this._dropdown.openDropDown();
							setTimeout(lang.hitch(this, function() {
								this._selectRepository(repository);
							}), 1000);
						}), 100);
					}
				}));
			}
		},

		_selectRepository: function(repository) {
			if (this._rootObject && this._rootObject.id == repository.id)
				return;

			this._rootObject = repository;
			if (this._currentSelection == this._selectRepositoriesNode || this._currentSelection == this._selectTeamspacesNode) {
				this._folderSelector.setRoot(repository);
				this._folderSelector._folderTree._rootFolderName = ecm.messages.folder_tree_repository_root_name;
				domStyle.set(this._folderSelector._folderTree.domNode, "overflow", "visible");
				this.repositoryTeamspaceName = repository.name;
			} else {
				for ( var i in this._extensionData) {
					if (this._extensionData[i].button == this._currentSelection) {
						this._extensionData[i].extObj.showData(this);
						break;
					}
				}
			}
		}
	});

	/**
	 * This static method allows the <code>SearchInDropDown</code> to be extended with additional sections.
	 * 
	 * @param extensionClass
	 *            The constructor function for creating an instance of the extenstion.
	 * @since 2.0.3.1
	 * @memberof ecm.widget.search.SearchInDropDown
	 */
	SearchInDropDown.addExtension = function(extensionClass, params) {
		if (!SearchInDropDown.extensions) {
			SearchInDropDown.extensions = [];
		}
		SearchInDropDown.extensions.push({
			paneClass: extensionClass,
			params: params
		});
	};
	return SearchInDropDown;
});

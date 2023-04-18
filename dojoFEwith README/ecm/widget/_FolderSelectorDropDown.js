/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/keys",
	"dojo/string",
	"dijit/form/Button",
	"dijit/form/CheckBox",
	"dijit/layout/ContentPane",
	"dijit/Tooltip",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/html",
	"../LoggerMixin",
	"../Messages",
	"../model/Item",
	"../model/WorkItem",
	"../model/Teamspace",
	"../model/SelectedFolder",
	"../model/Desktop",
	"./Ellipsis",
	"./_FolderSelectorDropDownInput",
	"./FolderSelector",
	"./dialog/LoginDialog",
	"dojo/text!./templates/_FolderSelectorDropDown.html"
],

function(declare, //
lang, //
event, //
has, //
domClass, //
domConstruct, //
domStyle, //
domAttr, //
keys, //
string, //
Button, //
CheckBox, //
ContentPane, //
Tooltip, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
idxHtml, //
LoggerMixin, //
Messages, //
Item, //
WorkItem, //
Teamspace, //
SelectedFolder, //
Desktop, //
Ellipsis, //
_FolderSelectorDropDownInput, //
FolderSelector, //
LoginDialog, //
template) {
	/**
	 * @name ecm.widget._FolderSelectorDropDown
	 * @class Provides a tree or dropdown interface to select a folder from the repository
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget._FolderSelectorDropDown", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget._FolderSelectorDropDown.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * This option causes the control to display the top level repository or teamspace in the label.
		 */
		showRepositoryTeamspace: false,

		/**
		 * Boolean indicating whether the root node of the control should be selected initially.
		 */
		selectRootInitially: true,

		/**
		 * Boolean indicating whether the root node should be made unselectable.
		 */
		preventSelectRoot: false,

		/**
		 * String displayed in tooltip when user hovers over root node when it is not selectable.
		 */
		preventSelectRootTooltip: null,

		/**
		 * Boolean indicating whether the include subfolders checkbox should be displayed.
		 */
		showIncludeSubFolders: false,

		/**
		 * Boolean indicating whether the control should be disabled.
		 */
		disabled: false,

		/**
		 * Boolean set to require users to pick a folder.
		 */
		isRequired: false,

		/**
		 * Array of folder IDs which will be non-selectable in the tree.
		 */
		unselectableFolderIds: null,

		/**
		 * The {@link ecm.model.Respository} object.
		 */
		repository: null,

		label: "",
		_selectedFolder: null,
		_rootObject: null,
		_teamspace: null,
		_isRepository: false,
		repositoryTeamspaceName: null,
		_isSelectableCallback: null,
		_madeSelection: false,
		_toolTip: null,
		_rootSet: false,
		_initiallySelectedFolder: null,
		_formatter: null,
		_displayStatusDialogEventHandle: null,
		_hideStatusDialogEventHandle: null,
		_toolTipTimer: null,

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			this.inherited(arguments);

			this._formatter = ecm.model.desktop.valueFormatter;

			this.textDir = has("text-direction");

			if (this._rootObject) {
				this._createRendering();
			}

			// If the login dialog is displayed because of the session timeout, make sure the
			// dropdown is closed. Win 7 IE defect 12453.
			var loginDialog = ecm.widget.dialog.LoginDialog.getLoginDialog();
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
				this.logDebug(methodName, "_onFocus");
				// Add timeout for usability and accessibility
				this._toolTipTimer = setTimeout(lang.hitch(this, function() {
					if (this._toolTip.label.length > 0 && !this._dropdownOpened) {
						this.logDebug(methodName, "opening tooltip");
						this._toolTip.open(this.domNode);
					}
				}), 2000);
			});

			this.connect(this, "_onBlur", function() {
				this.logDebug(methodName, "_onBlur");
				if (!this._dropdownOpened)
					this._hasBeenBlurred = true;
				if (this._toolTipTimer) {
					clearTimeout(this._toolTipTimer);
					this._toolTipTimer = null;
				}
				this._toolTip.close();
			});

			this.connect("onMouseOver", function() {
				if (this._toolTip.label.length > 0) {
					this.logDebug(methodName, "_onMouseOver");
					this._toolTip.open(this.domNode);
				}
			});

			this.connect("onMouseOut", function() {
				this.logDebug(methodName, "_onMouseOut");
				this._toolTip.close();
			});

			this.logExit(methodName);
		},

		/**
		 * Returns the repository
		 * 
		 * @public
		 * @returns The {@link ecm.model.Repository} for the control.
		 */
		getRepository: function() {
			return this.repository;
		},

		/**
		 * Destroys the control.
		 */
		destroy: function() {
			var methodName = "destroy";
			this.logEntry(methodName);

			this._selectedFolder = null;

			this._cleanupRendering();

			if (this._toolTip) {
				this._toolTip.destroy();
				this._toolTip = null;
			}

			this.inherited(arguments);
			ecm.model.desktop._onRequestRevertStatusDialogRefocus();
			this.logExit(methodName);
		},

		/**
		 * Sets the root repository, teamspace or folder of the control.
		 * 
		 * @public
		 * @param root
		 *            An ecm.model.Repository, ecm.model.Teamspace, or ecm.model.Item to be used as the root node of the
		 *            control.
		 * @param objectStore
		 *            The object store for the root object. May be null.
		 */
		setRoot: function(rootObject, objectStore) {
			var methodName = "setRoot";
			this.logEntry(methodName, "rootObject = " + rootObject.name);

			if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(ecm.model.Repository)) {
				this._isRepository = true;
				this.repository = rootObject;
				this.repositoryTeamspaceName = rootObject.name;
				this.logDebug(methodName, "Root object is repository");
			} else if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(ecm.model.Teamspace)) {
				this.repository = rootObject.repository;
				this._teamspace = rootObject;
				this.repositoryTeamspaceName = rootObject.name;
				this.logDebug(methodName, "Root object is teamspace");
			} else if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(ecm.model.WorkItem)) {
				var rootObjectContentItem = rootObject.contentItem;
				this.repository = rootObjectContentItem.repository;
				this.repositoryTeamspaceName = this.repository.name;
				this.logDebug(methodName, "Root object is workitem");
			} else if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(ecm.model.Item) && rootObject.isFolder() == true) {
				this.repository = rootObject.repository;
				this.repositoryTeamspaceName = this.repository.name;
				this.logDebug(methodName, "Root object is folder");
			} else {
				this.logDebug(methodName, "Invalid root object");
				throw ("Invalid ecm.widget._FolderSelector.setRoot: Invalid object type");
			}
			this._rootObject = rootObject;
			this._objectStore = objectStore || (this._rootObject.getObjectStore && this._rootObject.getObjectStore());

			// If not disabled, create the dropdown control.
			if (this.disabled == false) {
				this._createRendering();
			}

			// Call to disable the dropdown if they set the disabled flag directly without calling setDisabled.
			this.setDisabled(this.disabled);

			if (this.selectRootInitially == true) {
				if (rootObject.isInstanceOf(ecm.model.Repository)) {
					// If the repository doesn't support foldering, set the label and disable the control.
					if (!this.repository.getPrivilege("foldering")) {
						this.setLabel(this.repository.name);
						this.setDisabled(true);
						this.rootSet();
					} else {
						rootObject.retrieveItem("/", lang.hitch(this, function(rootFolder) {
							this._handleRootFolderSelection(rootFolder);
						}), null, null, null, this._objectStore ? this._objectStore.id : "");
					}
				} else if (rootObject.isInstanceOf(ecm.model.Teamspace) && rootObject.type != "template") {
					rootObject.repository.retrieveItem(rootObject.id, lang.hitch(this, function(rootFolder) {
						this._handleRootFolderSelection(rootFolder);
					}), null, null, null, this._objectStore ? this._objectStore.id : "");
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

		_handleRootFolderSelection: function(rootFolder) {
			var methodName = "_handleRootFolderSelection";
			this.logEntry(methodName);

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
					if (this._rootObject.isInstanceOf && this._rootObject.isInstanceOf(ecm.model.Item)) {
						// Root object is folder
						lbl = this._formatter.formatPath(string.substitute(selected_root_folder, [
							this.repositoryTeamspaceName,
							_this._rootObject.name
						]));
					} else {
						lbl = this._formatter.formatPath(string.substitute(ecm.messages.selected_root, [
							this._rootObject.name
						]));
					}
				} else {
					// If passed in root folder is the actual root folder and the associated 
					// object store does not match the active repository object store...
					if (rootFolder.objectStore && rootFolder.rootFolder && (rootFolder.objectStore.symbolicName != this.repository.objectStoreName)) {
						// Then use the display name for the repository associated with the root folder's object store.
						var repo = ecm.model.desktop.getRepositoryOfObjectStore(rootFolder.objectStore.symbolicName, this.repository.domainId);
						if (repo) {
							lbl = repo.name;
						} else { // Else no associated repository, use the root folder's object store display name.
							lbl = rootFolder.objectStore.displayName;
						}
					} else { // Else the root folder is not the root or is from the active repository.
						lbl = this._rootObject.name;
					}
				}

				// If there is no initially selected folder, set the label to the repository or teamspace and select the root folder.
				if (this._initiallySelectedFolder == null && this.selectRootInitially == true) {
					this._selectedFolder = new SelectedFolder(rootFolder, this.showIncludeSubFolders, repositoryOrTeamspace, this._teamspace ? false : true);
					this.onFolderSelected(this._selectedFolder);
					this.setLabel(lbl);
				}
			} else {
				// If this folder selector is disabled, and this is not the repository root folder,
				// then select the invalid folder so that the user can see the invalid state.
				if (this.disabled && !rootFolder.rootFolder) {
					// Select the invalid folder root so that the user can see the invalid state.
					this._selectedFolder = new SelectedFolder(rootFolder, this.showIncludeSubFolders, repositoryOrTeamspace, this._teamspace ? false : true);
					this._hasBeenBlurred = true;
					this.setLabel(rootFolder.name, false);
					setTimeout(lang.hitch(this, function() {
						this.validate();
					}), 0);
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
		 * Sets the control to be disabled
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
				// Set the focus, even when it is disabled.
				this._dropdown.focusNode.focus()
			} else {
				this.domNode.focus();
			}

			this.logExit(methodName);
		},

		/**
		 * Sets the parent teamspace for the control
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
		 * Returns the current tool tip for the control
		 * 
		 * @public
		 * @returns A {@link dijit.Tooltip}.
		 */
		getToolTip: function() {
			return this._toolTip;
		},

		/**
		 * Sets control to show/hide include subfolders checkbox.
		 * 
		 * @public
		 * @param showIncludeSubFolders
		 *            Boolean indicating whether to show the include subfolders checkbox.
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
		 * Sets folders that will be unselectable in the control.
		 * 
		 * @public
		 * @param unselectableFolders
		 *            Array of {@link ecm.widget.UnselectableFolder} objects where the corresponding folder nodes in the
		 *            control will not be selectable.
		 */
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

		/**
		 * @private Creates the folder selector internally
		 */
		_createFolderSelector: function() {
			var methodName = "_createFolderSelector";
			this.logEntry(methodName);

			if (this._folderSelector) {
				this._folderSelector.destroy();
				this._folderSelector = null;
			}

			var folderSelector = this.createFolderSelector({
				'id': this.id + '_FolderSelector',
				'class': 'folderSelectorDropDownContent',
				'selectRootInitially': this.selectRootInitially,
				'preventSelectRoot': this.preventSelectRoot,
				'preventSelectRootTooltip': this.preventSelectRootTooltip,
				'unselectableFolderIds': this.unselectableFolderIds,
				'unselectableFolders': this.unselectableFolders,
				'showIncludeSubfolders': this.showIncludeSubFolders
			});

			//mantains backwards compatibility with R2 where we set this._folderSelector directly
			if (folderSelector)
				this._folderSelector = folderSelector;

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

		_cleanupRendering: function() {
			if (this._dropdown) {
				if (this._dropdown.domNode) {
					Tooltip.hide(this._dropdown.domNode);
				}
				this._dropdown.closeDropDown();
			}
			if (this._ellipsis) {
				this._ellipsis.destroy();
				this._ellipsis = null;
			}
			if (this._incSubFolders) {
				this._incSubFolders.destroy();
				this._incSubFolders = null;
			}
			if (this._cancelButton) {
				this._cancelButton.destroy();
				this._cancelButton = null;
			}
			if (this._okButton) {
				this._okButton.destroy();
				this._okButton = null;
			}
			if (this._folderSelector) {
				this._folderSelector.destroy();
				this._folderSelector = null;
			}
			if (this._dropdown) {
				this._dropdown.destroy();
				this._dropdown = null;
			}
		},

		_createRendering: function() {
			var methodName = "_createRendering";
			this.logEntry(methodName);

			this._cleanupRendering();

			if (this.preventSelectRoot == true) {
				this.selectRootInitially = false;
			}

			// main content div:
			this._popupContent = domConstruct.create("div", {
				'class': 'ecmFolderSelectorDropDownPopUpContent',
				'id': this.id + '_RepoFolderSelectorPopUpContent'
			});

			// Add the FolderSelector widget.
			this._createFolderSelector();

			// Create the include subfolders checkbox and connect it to the underlying
			// folder selector. Needed for scroll bars to appear correctly.
			this._incSubFolders = new CheckBox({
				'id': this.id + '_incSubFoldersChk',
				'name': this.id + '_incSubFoldersChk'
			});
			this._folderSelector._incSubfoldersCheckbox = this._incSubFolders;
			this._folderSelector.setIsSelectableCallback(this._isSelectableCallback, this._isSelectableCallbackObject);
			this._folderSelector.setTeamspace(this._teamspace);
			this._popupContent.appendChild(this._folderSelector.domNode);
			this.connect(this._folderSelector, "onFolderDblClick", lang.hitch(this, function() {
				this._pickSelectedItemAndClose();
			}));

			// Connect paging events. Connect to the status dialog show/hide events in the desktop here to avoid accumulating connections.
			this.connect(this._folderSelector, "onPagingStart", lang.hitch(this, function() {

				// Connect to the desktop onDisplayStatusDialog event.
				if (this._displayStatusDialogEventHandle == null) {
					this._displayStatusDialogEventHandle = this.connect(ecm.model.desktop, "onDisplayStatusDialog", lang.hitch(this, function() {
						if (this._dropdown) {
							this._dropdown.setAllowCloseOnBlur(false);

							// Connect to event when status dialog is hidden to restore state changed above.
							this._hideStatusDialogEventHandle = this.connect(ecm.model.desktop, "onHideStatusDialog", lang.hitch(this, function() {
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
			var buttonPane = domConstruct.create("div", {
				'class': 'buttonArea',
				'id': this.id + '_FolderSelectorButtonPane'
			});

			// include subfolders pane. The checkbox was created above.
			var subFoldersPane = domConstruct.create("div", {
				'class': 'incSubFoldersArea',
				'id': this.id + '_includeSubfoldersNode'
			});
			buttonPane.appendChild(subFoldersPane);
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
			buttonPane.appendChild(this._okButton.domNode);

			this.connect(this._folderSelector, "onFolderSelect", lang.hitch(this, function(/*ecm.model.Item*/item) {

				// Try to get the selected folder from the folder selector widget.
				if (this._folderSelector.getSelected() == null) {
					this._okButton.set("disabled", true);
				} else {
					this._okButton.set("disabled", false);
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
			buttonPane.appendChild(this._cancelButton.domNode);
			this._popupContent.appendChild(buttonPane);

			// This is cleaned up by _FolderSelectorDropDownInput.
			var cp = new ContentPane();
			cp.set("content", this._popupContent);

			if (!this._dropdown) {
				var id = this._dropdownid ? this._dropdownid : this.id + '_Folders';
				this._dropdown = new _FolderSelectorDropDownInput({
					'class': 'ecmDropDownInput',
					dropDown: cp,
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
						_this._folderSelector.setRoot(_this._rootObject, _this._objectStore);
						domStyle.set(_this._folderSelector._folderTree.domNode, "overflow", "visible");
						this._dropdown.connect(this._folderSelector._folderTree, "onRendered", lang.hitch(this, function() {
							this._folderSelector.selectRootNode();
						}));
					} else {
						_this._folderSelector.scrollSelectedIntoView();
					}
				});

				this.connect(this._dropdown, "closeDropDown", function() {
					this._dropdownOpened = false;

					Tooltip.hide(this._folderSelector._toolTipTarget);
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

			this._handleKeyboard(cp);

			this.logExit(methodName);
		},

		_focusLastFocused: function() {
			var node = this._folderSelector._folderTree._tree.lastFocused;
			if (node) {
				this._folderSelector._folderTree._tree.focusNode(node);
			}
		},

		_handleKeyboard: function(cp) {
			var methodName = "_handleKeyboard";
			this.logEntry(methodName);

			//handle tab key
			this.connect(cp, "onKeyUp", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.TAB) {
					event.stop(evt);
					if (evt.shiftKey == false) {
						if (this._folderSelector._folderTree.focused) {
							if (this.showIncludeSubFolders == true && !this._incSubFolders.disabled) {
								this._incSubFolders.focus();
							} else if (!this._okButton.disabled) {
								this._okButton.focus();
							} else {
								this._cancelButton.focus();
							}
						} else if (this._incSubFolders.focused) {
							if (!this._okButton.disabled) {
								this._okButton.focus();
							} else {
								this._cancelButton.focus();
							}
						} else if (this._okButton.focused) {
							this._cancelButton.focus();
						} else if (this._cancelButton.focused) {
							this._folderSelector._folderTree._tree.focusNode(this._folderSelector._folderTree._tree.lastFocused);
						}
					} else {
						if (this._cancelButton.focused) {
							if (!this._okButton.disabled) {
								this._okButton.focus();
							} else if (this.showIncludeSubFolders == true) {
								this._incSubFolders.focus();
							} else {
								this._folderSelector._folderTree._tree.focusNode(this._folderSelector._folderTree._tree.lastFocused);
							}
						} else if (this._okButton.focused) {
							if (this.showIncludeSubFolders == true && !this._incSubFolders.disabled) {
								this._incSubFolders.focus();
							} else {
								this._folderSelector._folderTree._tree.focusNode(this._folderSelector._folderTree._tree.lastFocused);
							}
						} else if (this._incSubFolders.focused) {
							this._folderSelector._folderTree._tree.focusNode(this._folderSelector._folderTree._tree.lastFocused);
						} else if (this._folderSelector._folderTree.focused) {
							this._cancelButton.focus();
						}
					}
				}
			}));

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
		 * Sets the folder selected in the control
		 * 
		 * @public
		 * @param folder
		 *            {@link ecm.model.Item} corresponding to the selected folder.
		 */
		setSelected: function(folder) {
			var methodName = "setSelected";
			this.logEntry(methodName);

			if (this._rootSet) {
				if (this._folderSelector) {
					this._folderSelector.setSelected(folder);
					this._selectedFolder = this._folderSelector.getSelected();
				} else {
					this._selectedFolder = new SelectedFolder(folder, this.showIncludeSubFolders, this._teamspace ? this._teamspace : this.repository, this._teamspace ? false : true);
					this.onFolderSelected(this._selectedFolder);
				}

				if (folder.rootFolder && (this._rootObject && this._rootObject.isInstanceOf && (this._rootObject.isInstanceOf(ecm.model.Repository) || this._rootObject.isInstanceOf(ecm.model.Teamspace)))) {
					this.setLabel(this.repositoryTeamspaceName);
				} else {
					this.setLabel(folder.name);
				}
				this._initiallySelectedFolder = null;
				this.onFolderSelected(this._selectedFolder);
			} else {
				this._initiallySelectedFolder = folder;
			}

			this.logExit(methodName);
		},

		/**
		 * Sets whether the include subfolders checkbox will be displayed.
		 * 
		 * @public
		 * @param includeSubfolders
		 *            Boolean indicating whether the include subfolders checkbox will be displayed.
		 */
		setIncludeSubfolders: function(includeSubfolders) {
			var methodName = "setIncludeSubfolders";
			this.logEntry(methodName);

			if (this._incSubFolders) { // rendered
				this._incSubFolders.set("checked", includeSubfolders);
			}

			this.logExit(methodName);
		},

		_pickSelectedItemAndClose: function() {
			var methodName = "_pickSelectedItemAndClose";
			this.logEntry(methodName);

			this._selectedFolder = this._folderSelector.getSelected();

			if (this._selectedFolder != null) {

				// Set the label to reflect the selection.
				var folderItem = this._selectedFolder.item;

				if (this.showRepositoryTeamspace) {
					if (folderItem.parent == null && (this._rootObject && this._rootObject.isInstanceOf && (this._rootObject.isInstanceOf(ecm.model.Repository) || this._rootObject.isInstanceOf(ecm.model.Teamspace)))) {

						this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root, [
							this.repositoryTeamspaceName
						])));
					} else if (folderItem.parent.parent == null) {
						this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder, [
							this.repositoryTeamspaceName,
							folderItem.name
						])));
					} else {
						this.setLabel(this._formatter.formatPath(string.substitute(ecm.messages.selected_root_folder_ellipsis, [
							this.repositoryTeamspaceName,
							folderItem.name
						])));
					}
				} else {
					if (folderItem.parent == null && (this._rootObject && this._rootObject.isInstanceOf && (this._rootObject.isInstanceOf(ecm.model.Repository) || this._rootObject.isInstanceOf(ecm.model.Teamspace)))) {

						this.setLabel(this.repositoryTeamspaceName);
					} else {
						this.setLabel(folderItem.name);
					}
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

		/**
		 * Called when the user chooses a folder by double clicking it or single clicking, then clicking OK.
		 * 
		 * @param selectedFolder
		 *            The selected {@link ecm.model.SelectedFolder} object.
		 */
		onFolderSelected: function(selectedFolder) {
		},

		/**
		 * Sets the text for the control
		 * 
		 * @public
		 * @param label
		 *            The text that will be displayed.
		 * @param displayInTooltip
		 *            Boolean indicating whether the label should be displayed in a tooltip when the mouse is hovered.
		 */
		setLabel: function(label, displayInTooltip) {
			var methodName = "setLabel";
			this.logEntry(methodName);

			if (!this._dropdown) {
				this._createRendering();
			}

			this._ellipsis.set("content", "");

			// Use separate spans for the folder name and include subfolders hint to avoid
			// alignment issues.
			domConstruct.create("div", {
				"class": "dijitInline",
				innerHTML: idxHtml.escapeHTML(label)
			}, this._ellipsis.containerNode.firstChild, "last");
			this.applyTextDir(this._ellipsis.containerNode.firstChild.lastChild);

			// Add the including subfolders text if subfolders were selected.
			if (this.showIncludeSubFolders == true && this._incSubFolders.get("checked") == true) {
				domConstruct.create("div", {
					innerHTML: ecm.messages.selection_including_subfolders,
					"class": "dijitInline includeSubfoldersText"
				}, this._ellipsis.containerNode.firstChild, "last");
			}

			setTimeout(lang.hitch(this, function() {
				if (this._ellipsis) {
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
				}
			}));

			if (displayInTooltip == false) {
				this._toolTip.label = "";
			} else {

				// Set the tooltip text.
				if (this._selectedFolder != null) {
					var toolTipText = "<div class=\"folderSelectorTooltip\"><div>" + this._formatter.formatPath(this._selectedFolder.path);
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
			delete this._errorTooltip;
			if (this._dropdown) {
				if (this.isRequired == true && this.disabled == false && this._selectedFolder == null) {
					isValid = false;
					this._errorTooltip = ecm.messages.property_missingMessage;
				}
			}
			if (isValid && this._selectedFolder && this._isSelectableCallback != null) {
				if (this._isSelectableCallbackObject != null) {
					isValid = this._isSelectableCallback.apply(this._isSelectableCallbackObject, [
						this._selectedFolder.item,
						this._isSelectableCallbackObject.permissionToCheck || this._isSelectableCallback.permissionToCheck
					]);
				} else if (this._isSelectableCallback.permissionToCheck) {
					isValid = this._isSelectableCallback(this._selectedFolder.item, this._isSelectableCallback.permissionToCheck);
				}
				if (!isValid && this._isSelectableCallback.notSelectableTooltip) {
					this._errorTooltip = this._isSelectableCallback.notSelectableTooltip;
				}
			}
			return isValid;
		},

		/**
		 * Checks the control for validity
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
				var blurred = !this._dropdownOpened && this._hasBeenBlurred;
				if (!this.isValid()) {
					if (blurred) {
						domClass.add(this._dropdown.domNode, "Error");
						this.setFocus();
						Tooltip.show(this._errorTooltip, this._dropdown.domNode);
					}
					isValid = false;
					this.logDebug(methodName, "Control is invalid");
				} else if (blurred) {
					domClass.remove(this._dropdown.domNode, "Error");
					this.logDebug(methodName, "Control is valid");
				}
			}
			return isValid;
		}
	});
});

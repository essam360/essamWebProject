/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/string",
	"dojo/aspect",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/Tooltip",
	"../../Messages",
	"../../model/Desktop",
	"../../model/Item",
	"../../model/Repository",
	"../../model/Teamspace",
	"../../model/WorkItem",
	"../Ellipsis",
	"../dialog/SelectObjectDialog",
	"../dialog/LoginDialog",
	"./_AdminFolderSelectorDropDownInput",
	"idx/html",
	"dojo/text!./templates/_AdminFolderSelectorDropDown.html"
], //
function(declare, //
lang, //
connect, //
string, //
aspect, //
construct, //
domClass, //
style, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
Tooltip, //
Messages, //
Desktop, //
Item, //
Repository, //
Teamspace, //
WorkItem, //
Ellipsis, //
SelectObjectDialog, //
LoginDialog, //
_AdminFolderSelectorDropDownInput, //
html, //
template) {

	/**
	 * @public
	 * @name ecm.widget.admin._AdminFolderSelectorDropDown
	 * @class Provides a dropdown interface to select a folder from the repository using search.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.admin._AdminFolderSelectorDropDown", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		templateString: template,
		widgetsInTemplate: true,

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
		 * Displayed in tooltip when user hovers over root node when it is not selectable.
		 */
		preventSelectRootTooltip: null,
		/**
		 * Whether the control should be disabled.
		 */
		disabled: false,
		/**
		 * Is the user required to select a folder?
		 */
		isRequired: false,
		/**
		 * Array of folder IDs which will be non-selectable in the tree.
		 */
		unselectableFolderIds: null,

		label: "",

		_selectedFolderItem: null,
		_rootObject: null,
		_repository: null,
		_teamspace: null,
		_isRepository: false,
		_repositoryTeamspaceName: null,
		_isSelectableCallback: null,
		_madeSelection: false,
		_toolTip: null,
		_rootSet: false,
		_initiallySelectedFolder: null,

		postCreate: function() {
			this.inherited(arguments);
			if (this._rootObject) {
				this._createRendering();
			}

			// If the login dialog is displayed because of the session timeout, make sure the dropdown is closed.
			var loginDialog = ecm.widget.dialog.LoginDialog.getLoginDialog();
			this.own(aspect.after(loginDialog, "show", lang.hitch(this, function() {
				if (this._dropdown) {
					this._dropdown.closeDropDown();
				}
			}), true));

			this._toolTip = new Tooltip({
				position: [
					"above",
					"below",
					"after",
					"before"
				]
			});

			// Display the tooltip when the control on mouseover and focus events.
			this.own(aspect.after(this, "_onFocus", lang.hitch(this, function() {
				if (this._toolTip.label.length > 0) {
					this._toolTip.open(this.domNode);
				}
			}), true));

			this.own(aspect.after(this, "_onBlur", lang.hitch(this, function() {
				this._toolTip.close();
			}), true));

			this.own(aspect.after(this, "onMouseOver", lang.hitch(this, function() {
				if (this._toolTip.label.length > 0) {
					this._toolTip.open(this.domNode);
				}
			}), true));

			this.own(aspect.after(this, "onMouseOut", lang.hitch(this, function() {
				this._toolTip.close();
			}), true));
		},

		destroy: function() {
			if (this._dropdown) {
				Tooltip.hide(this._dropdown.domNode);
				this._dropdown.closeDropDown();
				this._dropdown.destroy();
				this._dropdown = null;
			}
			if (this._toolTip && (this._toolTip != null)) {
				this._toolTip.destroy();
				this._toolTip = null;
			}
			this.inherited(arguments);
		},

		/**
		 * Sets the root repository, teamspace or folder of the control.
		 * 
		 * @param root
		 *            An ecm.model.Repository, ecm.model.Teamspace, or ecm.model.Item to be used as the root node of the
		 *            control.
		 */
		setRoot: function(rootObject, objectStore) {
			if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(Repository)) {
				this._isRepository = true;
				this._repository = rootObject;
				this._repositoryTeamspaceName = rootObject.name;
			} else if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(Teamspace)) {
				this._repository = rootObject.repository;
				this._teamspace = rootObject;
				this._repositoryTeamspaceName = rootObject.name;
			} else if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(ecm.modelItem) && rootObject.isFolder() == true) {
				this._repository = rootObject.repository;
				this._repositoryTeamspaceName = this._repository.name;
			} else if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(WorkItem)) {
				var rootObjectContentItem = rootObject.contentItem;
				if (rootObjectContentItem.isFolder() == true) {
					this._repository = rootObject.repository;
					this._repositoryTeamspaceName = this._repository.name;
				}
			} else {
				throw ("Invalid ecm.widget._AdminFolderSelector.setRoot: Invalid object type");
			}
			this._rootObject = rootObject;
			this._objectStore = objectStore || (this._rootObject.getObjectStore && this._rootObject.getObjectStore());

			// If not disabled, create the dropdown control.
			if (this.disabled == false) {
				this._createRendering();
			}

			if (this.selectRootInitially == true) {
				if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(Repository)) {
					// If the repository doesn't support foldering, set the label and disable the control.
					if (!this._repository.getPrivilege("foldering")) {
						this.setLabel(this._repository.name);
						this.setDisabled(true);
						this.rootSet();
					} else {
						rootObject.retrieveAdminRoot("/", lang.hitch(this, function(rootFolder) {
							this._handleRootFolderSelection(rootFolder);
						}), null, null, null, this._objectStore ? this._objectStore.id : "");
					}
				} else if (rootObject && rootObject.isInstanceOf && rootObject.isInstanceOf(Teamspace)) {
					rootObject._repository.retrieveItem(rootObject.id, lang.hitch(this, function(rootFolder) {
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
		},

		_handleRootFolderSelection: function(rootFolder) {
			var rootIsSelectable = true;
			if (this._isSelectableCallback != null && this._isSelectableCallback.permissionToCheck) {
				rootIsSelectable = this._isSelectableCallback(rootFolder, this._isSelectableCallback.permissionToCheck);
			}

			if (rootIsSelectable) {
				var repositoryOrTeamspace = this._teamspace ? this._teamspace : this._repository;
				// Set the label.
				var lbl;
				if (this.showRepositoryTeamspace) {
					if (this._rootObject.isInstanceOf && this._rootObject.isInstanceOf(Item)) {
						// Root object is folder
						lbl = string.substitute(selected_root_folder, [
							this._repositoryTeamspaceName,
							_this._rootObject.name
						]);
					} else {
						lbl = string.substitute(ecm.messages.selected_root, [
							this._rootObject.name
						]);
					}
				} else {
					// If passed in root folder is the actual root folder and the associated 
					// object store does not match the active repository object store...
					if (rootFolder._objectStore && rootFolder.rootFolder && (rootFolder._objectStore.symbolicName != this._repository.objectStoreName)) {
						// Then use the display name for the repository associated with the root folder's object store.
						var repo = Desktop.getRepositoryOfObjectStore(rootFolder._objectStore.symbolicName, this._repository.domainId);
						if (repo) {
							lbl = repo.name;
						} else { // Else no associated repository, use the root folder's object store display name.
							lbl = rootFolder._objectStore.displayName;
						}
					} else { // Else the root folder is not the root or is from the active repository.
						lbl = this._rootObject.name;
					}
				}

				// If there is no initially selected folder, set the label to the repository or teamspace and select the root folder.
				if (this._initiallySelectedFolder == null) {
					this._selectedFolderItem = rootFolder;
					this.onFolderSelected(this._selectedFolderItem);
					this.setLabel(lbl);
				}
			}
			this.rootSet();
			// If we have an initially selected folder passed in from the caller, select it here.
			if (this._initiallySelectedFolder != null) {
				this.setSelected(this._initiallySelectedFolder);
			}
		},

		/**
		 * Event to notify caller that setting root object is complete.
		 */
		rootSet: function() {
			this._rootSet = true;
		},

		/**
		 * Set disabled.
		 * 
		 * @param disabled
		 *            Boolean indicating if disabled.
		 */
		setDisabled: function(/*boolean*/disabled) {
			this.disabled = disabled;
			if (this._dropdown) {
				this._dropdown.set("disabled", disabled);
			}
		},

		/**
		 * Get disabled.
		 * 
		 * @return Boolean indicating if disabled.
		 */
		getDisabled: function() {
			return this.disabled;
		},

		setFocus: function() {
			if (this._dropdown) {
				this._dropdown.focus();
			}
		},

		/**
		 * Set teamspace.
		 * 
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 */
		setTeamspace: function(teamspace) {
			this._teamspace = teamspace;
		},

		setIsSelectableCallback: function(callbackFunction) {
			this._isSelectableCallback = callbackFunction;
		},

		getIsSelectableCallback: function() {
			return this._isSelectableCallback;
		},

		setUnselectableFolders: function(unselectableFolders) {
			this.unselectableFolders = unselectableFolders;
		},

		/**
		 * Create the select object dialog.
		 */
		createFolderSelector: function(callback) {
			this._folderSelector = new SelectObjectDialog({
				selectionMode: "folder",
				showVersionSelection: false,
				multiSelect: false,
				repository: this._repository,
				showMultiRepositorySelector: false,
				repositoryTypes: "cm,cmis,p8"
			});
			domClass.add(this._folderSelector.domNode, "ecmAdminFolderSelectorDropDown");
		},

		_createRendering: function() {
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

			// Add the FolderSelector widget.
			this.createFolderSelector();

			if (!this._dropdown) {
				this._dropdown = new _AdminFolderSelectorDropDownInput({
					'class': 'ecmDropDownInput',
					id: this.id + '_Folders'
				});
				this._dropdown.set("disabled", this.disabled);

				// Override loadAndOpenDropDown to open the SelectObjectDialog instead.
				this._dropdown.loadAndOpenDropDown = lang.hitch(this, function() {
					this._toolTip.close();
					this._folderSelector.show(lang.hitch(this, function(items) {
						this._selectedFolderItem = null;
						if (items && (items != null) && (items.length > 0)) {
							this._selectedFolderItem = items[0].contentItem;
						}
						this._pickSelectedItemAndClose();
					}));
					this._folderSelector.resize();
				});

				this.own(aspect.after(this._dropdown, "closeDropDown", lang.hitch(this, function() {
					Tooltip.hide(this._folderSelector._toolTipTarget);
				}), true));

				this._ellipsis = new Ellipsis();
				this._dropdown.containerNode.appendChild(this._ellipsis.domNode);
			}
			if (this.domNode && this._dropdown.domNode) {
				this.domNode.appendChild(this._dropdown.domNode);
			}
			if (this.domNode) {
				domClass.add(this.domNode, "dijitInline");
			}
			this._setDropdownStyle();
		},

		_setDropdownStyle: function() {
		},

		/**
		 * Return the currently selected item.
		 * 
		 * @return Instance of {@link @ecm.model.Item}.
		 */
		getSelected: function() {
			return this._selectedFolderItem;
		},

		/**
		 * Set the selected folder item.
		 * 
		 * @param folderItem
		 *            Instance of {@link @ecm.model.Item}.
		 */
		setSelected: function(/*ecm.model.Item*/folderItem) {
			this._selectedFolderItem = folderItem;
			this.setLabel(folderItem.name);
		},

		_pickSelectedItemAndClose: function() {
			if (this._selectedFolderItem != null) {
				// Set the label to reflect the selection.
				var folderItem = this._selectedFolderItem;
				if (this.showRepositoryTeamspace) {
					if (folderItem.parent == null && (rootObject && rootObject.isInstanceOf && (this._rootObject.isInstanceOf(Repository) || this._rootObject.isInstanceOf(Teamspace)))) {
						this.setLabel(string.substitute(ecm.messages.selected_root, [
							this._repositoryTeamspaceName
						]));
					} else if (folderItem.parent.parent == null) {
						this.setLabel(string.substitute(ecm.messages.selected_root_folder, [
							this._repositoryTeamspaceName,
							folderItem.name
						]));
					} else {
						this.setLabel(string.substitute(ecm.messages.selected_root_folder_ellipsis, [
							this._repositoryTeamspaceName,
							folderItem.name
						]));
					}
				} else {
					this.setLabel(folderItem.name);
				}
				this.onFolderSelected(this._selectedFolder);
				this._dropdown.closeDropDown();
				//this._folderSelector.hide();
				this.validate();
				this._madeSelection = true;
				this.setFocus();
				if (this._toolTip.label.length > 0) {
					this._toolTip.open(this.domNode);
				}
			}
		},

		/**
		 * Event fired when the user chooses a folder by double clicking it or single clicking, then clicking OK.
		 */
		onFolderSelected: function(/*ecm.model.SelectedFolder*/selectedFolder) {
		},

		/**
		 * Set the data to display in the label.
		 * 
		 * @param label
		 *            Label to display.
		 */
		setLabel: function(label, displayInTooltip) {
			if (!this._dropdown) {
				this._createRendering();
			}
			this._ellipsis.set("content", "");
			construct.create("span", {
				innerHTML: html.escapeHTML(label)
			}, this._ellipsis.containerNode.firstChild, "last");

			setTimeout(lang.hitch(this, function() {
				this._ellipsis.layout();

				// Disconnect the tooltip handler in the ellipsis object since we will handle that ourselves.
				this._ellipsis._disconnectTooltip();

				// When the surrounding containers are not yet sized, 
				// the ellipsis height is set to 0 and the label is not displayed.
				// Check for this condition and set the height to the standard size.
				var h = style.get(this._ellipsis.domNode, "height");
				if (h == 0) {
					style.set(this._ellipsis.domNode, "height", "15px");
				}
			}));

			if (displayInTooltip == false) {
				this._toolTip.label = "";
			} else if (this._selectedFolderItem) {
				this._toolTip.label = this._selectedFolderItem.getDisplayValue();
			}
		},

		/**
		 * Returns boolean indicating if valid.
		 */
		isValid: function() {
			var isValid = true;
			if (this._dropdown) {
				if (this.isRequired == true && this.disabled == false && this._selectedFolderItem == null) {
					isValid = false;
				}
			}
			return isValid;
		},

		/**
		 * Returns true.
		 */
		validate: function() {
			return true;
		}
	});
});

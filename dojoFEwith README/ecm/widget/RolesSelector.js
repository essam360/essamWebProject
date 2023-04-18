/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/dom-geometry",
	"dojo/keys",
	"dijit/registry",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/Tooltip",
	"dijit/form/Select",
	"dijit/form/Button",
	"dijit/form/RadioButton",
	"dijit/form/TextBox",
	"dojox/grid/DataGrid",
	"idx/html",
	"ecm/model/_ModelStore",
	"ecm/model/Repository",
	"ecm/model/Directory",
	"ecm/model/User",
	"ecm/model/UserGroup",
	"./_MoveUpDownMixin",
	"dojo/text!./templates/RolesSelector.html"
], function(declare, lang, connect, array, has, domClass, domStyle, domAttr, geometry, keys, registry, ContentPane, _TemplatedMixin, _WidgetsInTemplateMixin, Tooltip, Select, Button, RadioButton, TextBox, DataGrid, idxHtml, _ModelStore, Repository, Directory, User, UserGroup, _MoveUpDownMixin, template) {
	/**
	 * @name ecm.widget.RolesSelector
	 * @class Provides a widget that is used to select Roelsp. This widget can be configured to display to roless. 
	 * The widget can also be configured to support multiple selections or only
	 *        single selections.
	 * @augments dijit._Widget
	 */
	var RolesSelector = declare("ecm.widget.RolesSelector", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_MoveUpDownMixin
	], {

		/** @lends ecm.widget.RolesSelector.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_QUERY_MODE: {
			USERS: "users",
			ALL: "all"
		},

		_SELECTION_MODE: {
			SINGLE: "single",
			MULTIPLE: "extended"
		},

		_SEARCH_FOR_MODE: {
			USERS: "users",
			ALL: "groups"
		},

		_MAX_ROWS: 500,

		_messages: ecm.messages,

		/**
		 * An instance of {@link ecm.model.Repository} representing the repository from which users or groups will be
		 * selected.
		 */
		repository: null,

		/**
		 * Indicates the query mode of the User Group Selector widget. Sets to all for both user and group queries and
		 * users for users query only. The default is all.
		 */
		queryMode: "all",

		/**
		 * Indicates the selection mode of the User Group Selector widget. Sets the selection mode to extended for multi
		 * select operation and single for single select operation. The default is extended.
		 */
		selectionMode: "extended",

		/**
		 * Sets to default query mode when using queryMode = all. The default is users.
		 */
		defaultScope: "users",

		_availableGridItems: null,
		_selectedGridItems: null,

		_resultStore: null,
		_selectedStore: null,

		/**
		 * Sets to true to enable pseudo groups (#Authenticated User) selection for P8. The default is false.
		 */
		showPseudoGroups: false,

		/**
		 * Sets to true to enable pseudo user (#CREATOR-OWNER) selection for P8. The default is false.
		 * 
		 * @since 2.0.3.1
		 */
		showCreatorOwnerAccount: false,

		/**
		 * Sets to true to enable pseudo users (Me) selection. The default is false.
		 */
		showPseudoUsers: false,

		/**
		 * Hide the user that is currently logged into the repository.
		 * 
		 * @since 2.0.3.3
		 */
		hideCurrentUser: false,

		hasSorting: false,

		_abitraryMode: false,

		/**
		 * Constructor
		 */
		constructor: function(args) {
			this._directoriesById = {};
			if (!this._availableGridItems) {
				this._availableGridItems = [];
			}
			if (!this._selectedGridItems) {
				this._selectedGridItems = [];
			}
			if (args) {
				if (args.selectedItems)
					this._selectedGridItems = lang.clone(args.selectedItems);
				this.queryAcrossDomains = args["queryAcrossDomains"] != true ? false : true;
				this.excludeICMAdmin = !!args["excludeCMAdminAccounts"];
			}
		},

		postCreate: function() {
			this.inherited(arguments);
			this.textDir = has("text-direction");
			domAttr.set(this._addButton.focusNode, "aria-label", this._messages.add_tooltip);
			domAttr.set(this._removeButton.focusNode, "aria-label", this._messages.remove_tooltip);

			// Render the available and selected grids
			this._renderResultGrid();
			if (this.queryMode == this._QUERY_MODE.USERS) {
				domClass.add(this._scopeSection, "dijitHidden");
				domStyle.set(this._nameType, "display", "none");
				this._addNameLabel.innerHTML = this._messages.add_user_label;
			} else {
				this._scope.set("value", this.defaultScope);
				if (this.showPseudoGroups) {
					this._scope.addOption({
						label: idxHtml.escapeHTML(this._messages.pseudo_group_label),
						value: "pseudogroups"
					});
				}
			}

			if (this.selectionMode == this._SELECTION_MODE.SINGLE) {
				domClass.add(this._centerPane, "dijitHidden");
				domClass.add(this._buttonPane, "dijitHidden");
				domStyle.set(this._moveUpDownButtonContainer, "display", "none");
			} else {
				if (!this.hasSorting) { // hide the up down arrows pane if sorting is disabled
					domStyle.set(this._moveUpDownButtonContainer, "display", "none");
				} else {
					domClass.add(this._selectedDataGridContainer, "hasSorting");
				}
				this._renderSelectedGrid();

				// create a tooltip for the add button
				var toolTip = new dijit.Tooltip({
					connectId: [
						this._addButton.domNode
					],
					label: idxHtml.escapeHTML(this._messages.add_tooltip)
				});
				toolTip.startup();
				// create a tooltip for the remove button
				toolTip = new dijit.Tooltip({
					connectId: [
						this._removeButton.domNode
					],
					label: idxHtml.escapeHTML(this._messages.remove_tooltip),
					showDelay: 700
				});
				toolTip.startup();
			}

			if (this.showPseudoUsers)
				this._pseudoUserOptionsNode.style.display = "block";
		},

		/**
		 * Sets the selected items list. The selected items are displayed in the selected list.
		 * 
		 * @param selectedItems
		 *            An array of {@link ecm.model.User} or {@link ecm.model.UserGroup}
		 */
		setSelectedItems: function(selectedItems) {
			this._selectedGridItems = lang.clone(selectedItems);
			if (this._selectedGridItems.length > 0 && this._selectedGridItems[0] == "") // normalizes empty array
				this._selectedGridItems.pop();
			if (this._selectedStore) {
				this._selectedStore._arrayOfTopLevelItems = this._selectedGridItems;
				this._selectedGrid.setStore(this._selectedStore);
				this._selectedGrid.update();
			}
			if (this.showPseudoUsers)
				this._updatePseudoUserOptions();
		},

		/**
		 * Sets the filtered items list. The filtered items are filtered out from the available list.
		 * 
		 * @param filteredItems
		 *            An array of {@link ecm.model.User} or {@link ecm.model.UserGroup}
		 */
		setFilteredItems: function(filteredItems) {
			this.filteredItems = filteredItems;
		},

		/**
		 * Renders the user group selector pane
		 */
		createRendering: function(repository) {
			// If the repository allows searching of users/groups, show the search fields.  Otherwise, show arbitrary add fields.
			if (repository) {
				this.repository = repository;
				domClass.add(this._addSection, "dijitHidden");
				domClass.add(this._scopeSection, "dijitHidden");
				domClass.remove(this._searchSection, "dijitHidden");
				domClass.add(this._buttonPane2, "dijitHidden");
				
				if (repository._isP8()) {
					this.repository.getDirectories(lang.hitch(this, function(domains) {
						this._directoriesById = {};
						array.forEach(domains, function(dir) {
							this._directoriesById[dir.id] = dir;
						}, this);

						this._renderDomains(domains);

						// Don't display the realm selector if there is only one realm listed.
						if (this._directoryName.options.length < 2) {
							domClass.add(this._directorySection, "dijitHidden");
						}
					}));
				} else {
					domClass.add(this._directorySection, "dijitHidden");
					this.onLoaded();
				}

				this._setUserSearchLabel();
			}
		},

		_setUserSearchLabel: function() {
			this._criteriaTextBox.set("placeholder", this._messages.name_starts_with_label);
			this._criteriaTextBox.set("value", "");
			this._searchTypeLabel.innerHTML = this._messages.name_starts_with_label;
		},

		_onDirectoryNameChange: function() {
			if (this.repository._isP8() && this._scope.isLoaded() && this._scope.get("value") == "pseudogroups") {
				// Update the pseudo groups since they may differ per realm
				this._onChange("pseudogroups");
			}
		},

		/**
		 * @private
		 */
		_onChange: function(event) {
			if (this._scope.isLoaded()) {
				if (event == "pseudogroups") {
					this._criteriaTextBox.set("disabled", true);
					this._criteriaTextBox.set("value", "");
					this._searchButton.set("disabled", true);
					var pseudoAccounts = new Array();

					// If working with a P8 realm that has a principal category, use the realm pseudo group
					// for the all users group, e.g., #REALM-USERS(Internal); otherwise, fall back to #AUTHENTICATED-USERS
					var dir = this._directoriesById[this._directoryName.value];
					if (this.repository._isP8() && dir && dir.principalCategory && dir.symbolicName) {
						pseudoAccounts.push(ecm.model.UserGroup.getRealmUsersPseudoGroup(dir.symbolicName));
					} else {
						pseudoAccounts.push(ecm.model.UserGroup.getAuthenticatedUsersPseudoGroup());
					}
					if (this.repository._isP8() && this.showCreatorOwnerAccount) {
						pseudoAccounts.push(ecm.model.User.getCreatorOwnerPseudoUser());
					}
					this._availableGridItems = this._filterAvailableList(pseudoAccounts);
					if (this._availableGridItems.length == 0) { // all pseudo groups were filtered out.
						this._displayWarning(this._messages.fitered_items);
					} else {
						this._displayWarning("");
					}
					this._resultGrid.setStore(this._resultStore);
					setTimeout(lang.hitch(this, function() {
						this._resultGrid.focus.setFocusIndex(0, 0);
						this._resultGrid.focus.focusGrid();
					}), 10);
				} else {
					this._criteriaTextBox.set("disabled", false);
					this._searchButton.set("disabled", false);
					this._availableGridItems = [];
					this._resultGrid.setStore(this._resultStore);
					this._setUserSearchLabel();
				}
				var width = geometry.getMarginBox(this._topPane).w;
				this._resizeTopPaneControls(width);
			}
		},

		/**
		 * @private
		 */
		_onNameTypeChanged: function() {
		},

		/**
		 * @private
		 */
		_isSharePluginEnabled: function() {
			var result = false;
			if (!this.repository || !this.repository._isP8())
				return result;

			// if share plugin is enabled override it to always use custom (share will be detected only on P8)
			if (!(this.repository.isSharePluginEnabled === undefined)) {
				result = true;
			}

			// alternate method of detecting share plugin
			if (!result && this.repository.attributes && this.repository.attributes.length) {
				for ( var i = 0; i < this.repository.attributes.length; i++) {
					var att = this.repository.attributes[i];
					if (att && (!(att.isSharePluginEnabled === undefined))) {
						result = true;
						break;
					}
				}
			}

			return result;
		},

		/**
		 * @private
		 */
		_onSearch: function(event) {
			var query = this._criteriaTextBox.get("value");
			var directoryName = null;
			if (query.length > 0) {
				if (this.repository._isP8()) {
					directoryName = this._directoryName.value;
				} else if (!this.repository._isBox()) {
					query += "%";
				}

				var thisSearchType = null; // default to passing null, which lets the repository choose the behavior

				// if share plugin is enabled override it to always use custom (share will be detected only on P8)
				if (this._isSharePluginEnabled()) {
					thisSearchType = 1;
				}
				this.repository.findRoles(lang.hitch(this, "_onComplete"), directoryName, query, thisSearchType, null, (this._MAX_ROWS + 1).toString(), null, this.queryAcrossDomains, this.excludeCMAdminAccounts);
			}
		},

		/**
		 * @private
		 */
		_onAdd: function() {
			var selectedItems = this._resultGrid.selection.getSelected();
			// Add items to the selected list
			this._addItems(selectedItems);
		},

		_onAddArbitrary: function() {
			var name = this._addNameTextBox.get("value");

			// Verify that the item is not one of the filtered items.  If so,
			// display an error.
			if (this.filteredItems && this.filteredItems.length > 0) {
				for ( var i in this.filteredItems) {
					if (this.filteredItems[i].shortName.toLowerCase() == name.toLowerCase()) {
						if (this._nameTypeGroupRadioButton.get("checked")) {
							this._displayWarning(this._messages.group_already_selected);
						} else {
							this._displayWarning(this._messages.user_already_selected);
						}
						return;
					}
				}
			}

			// Add item to the selected list
			var item;
			itme = new Role({
				id: name,
				displayName: name
			});
			this._addItems([
				item
			]);
			this._addNameTextBox.set("value", "");
			this._addArbitraryButton.set("disabled", true);
		},

		/**
		 * @private
		 */
		_addItems: function(selectedItems) {
			if (selectedItems.length) {
				var index = this._selectedGridItems.length;
				array.forEach(selectedItems, lang.hitch(this, function(item) {
					this._selectedGrid.store.newItem(lang.clone(item));
				}));

				this._selectedGrid.setStore(this._selectedStore);
				this._selectedGrid.update();

				// Scrolls to the first new row
				if (this._selectedGridItems.length > index) {
					var self = this;
					var focusIndex = index;
					setTimeout(lang.hitch(this, function() {
						this._selectedGrid.focus.setFocusIndex(focusIndex, 0);
						this._selectedGrid.scrollToRow(focusIndex);
						this._selectedGrid.focus.focusGrid();
					}), 10);
				}

				this.onAdd(selectedItems);
				this.onChange();
			}

			// Removes the selected item from the available list.
			var index = this._resultGrid.selection.selectedIndex;
			array.forEach(selectedItems, lang.hitch(this, function(item) {
				this._resultGrid.store.deleteItem(item);
			}));

			this._resultGrid.selection.clear();
			this._resultGrid.update();
		},

		/**
		 * Event fired after new items are added to the available list.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.User} and/or {@link ecm.model.UserGroup} object.
		 */
		onAdd: function(items) {
		},

		/**
		 * @private
		 */
		_onRemove: function() {
			// Removes the selected item from the selected list.
			var items = this._selectedGrid.selection.getSelected();
			var index = this._selectedGrid.selection.selectedIndex;
			this._removeItems(items, index);
		},

		/**
		 * @private
		 */
		_removeItems: function(selectedItems, selectedIndex) {
			// Removes the selected item from the selected list.
			if (this._selectedGrid != null) {
				if (selectedItems.length > 0) {
					array.forEach(selectedItems, lang.hitch(this, function(item) {
						this._selectedGrid.store.deleteItem(item);
					}));

					this.onRemove(selectedItems);
					this.onChange();
				}
				this._selectedGrid.selection.clear();
				if (selectedIndex > 0)
					this._selectedGrid.scrollToRow(selectedIndex - 1);

				this._selectedGrid.update();
			}
		},

		/**
		 * Event fired after items are removed from the available list.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.User} and/or {@link ecm.model.UserGroup} object.
		 */
		onRemove: function(items) {
		},

		/**
		 * Event fired when showing the pane. This is triggered by the RoleSelectorPane onShow event.
		 */
		onShow: function() {
			this._criteriaTextBox.set("value", "");
			this._criteriaTextBox.set("textDir", this.textDir);
			if (this._resultGrid) {
				this._resultGrid.selection.clear();
			}
			this._availableGridItems = [];
			this._displayWarning("");
			if (this._resultGrid) {
				this._resultGrid.setStore(this._resultStore);
			}
			if (this.selectedItems && this._selectedGrid) {
				if (this.selectedItems[0] == "") // Fixed some quirk where selected item equals ""
					this.selectedItems.pop();
				this._selectedGrid.selection.clear();
				this._selectedGrid.setStore(this._selectedStore);
			}
			if (this.showPseudoUsers) {
				this._updatePseudoUserOptions();
				if (!this._specificUsersRadioButton.get("checked"))
					this.clearSelectedItems();
			}
		},

		/**
		 * @private
		 */
		_getSelectedGridItems: function() {
			var items = [];
			if ((this.selectionMode == "extended" || this._abitraryMode) && this._selectedGrid) {
				items = this._selectedGridItems;
			} else if (this._resultGrid) {
				items = this._resultGrid.selection.getSelected();
			}
			return items;
		},

		/**
		 * Returns the current selected users and groups
		 * 
		 * @return An array of {@link ecm.model.User} and/or {@link ecm.model.UserGroup} object.
		 */
		getSelectedItems: function() {
			var selectedItems = [];
			if (this.showPseudoUsers && this._meRadioButton.get("checked")) {
				selectedItems.push(lang.clone(RolesSelector.PSEUDO_USER_ME));
			} else if (!this.showPseudoUsers || this._specificUsersRadioButton.get("checked")) {
				selectedItems = this._getSelectedGridItems();
			}
			return selectedItems;
		},

		/**
		 * Clears the current selected users and groups from the Selected list.
		 */
		clearSelectedItems: function() {
			if (this.selectionMode == "extended" && this._selectedGrid) {
				this._selectedGridItems = [];
				this._selectedGrid.selection.clear();
				this._selectedGrid.setStore(this._selectedStore);
				this._selectedGrid.update();
			}
		},

		/**
		 * @private
		 */
		_renderDomains: function(directories) {
			var selectOptions = [];
			for ( var i = 0; i < directories.length; i++) {
				var directory = directories[i];
				var selectOption = {
					value: directory.id,
					label: idxHtml.escapeHTML(directory.name)
				};
				selectOptions.push(selectOption);
			}
			this._directoryName.addOption(selectOptions);
			this._directoryName.selected = true;
			this.onLoaded();
		},

		/**
		 * Fired when the selector is loaded.
		 * 
		 * @since 2.0.3.3
		 */
		onLoaded: function() {
		},

		/**
		 * @private
		 */
		_onComplete: function(response) {
			var currentUserRemoved = false;
			if (this.hideCurrentUser) {
				currentUserRemoved = array.some(response, function(item, i) {
					if (this.repository.userId == item.shortName) {
						response.splice(i, 1);
						return true;
					}
				}, this);
			}
			if (response.length > this._MAX_ROWS) {
				response.pop(); // Remove the extra item.
				this._displayWarning(lang.replace(this._messages.more_items, [
					this._MAX_ROWS
				]));
			} else if (response.length == 0) {
				if (currentUserRemoved) {
					this._displayWarning(this._messages.user_cannot_select_self);
				} else {
					this._displayWarning(this._messages.no_item_found);
				}
			} else {
				this._displayWarning("");
			}
			this._availableGridItems = this._filterAvailableList(response);
			if (this._availableGridItems.length != response.length) {
				this._displayWarning(this._messages.fitered_items);
			}
			if (this._resultGrid) {
				this._resultGrid.selection.clear();
				this._resultGrid.setStore(this._resultStore);
				if (this._availableGridItems.length > 0) {
					setTimeout(lang.hitch(this, function() {
						this._resultGrid.focus.setFocusIndex(0, 0);
						this._resultGrid.selection.select(0);
						this._resultGrid.focus.focusGrid();
					}), 100);
				}
			}
		},

		/**
		 * @private
		 */
		_filterAvailableList: function(items) {
			if (this.filteredItems && this.filteredItems.length > 0) {
				var filteredMap = {};
				array.forEach(this.filteredItems, function(item) {
					filteredMap[item.shortName] = item;
				});
				var filteredItems = [];
				array.forEach(items, function(entry, index) {
					if (!filteredMap[entry.shortName]) {
						filteredItems.push(entry);
					}
				});
				return filteredItems;
			} else {
				return items;
			}
		},

		/**
		 * @private
		 */
		_displayWarning: function(message) {
			var warningMessage = idxHtml.escapeHTML(message);
			this._infoText.innerHTML = warningMessage;
			if (message.length > 0) {
				this._infoPane.style.display = "block";
			} else {
				this._infoPane.style.display = "none";
			}
			this._resizeGridPane();
		},

		/**
		 * @private
		 */
		_renderResultGrid: function() {
			// Initialize result grid data store
			this._resultStore = new ecm.model._ModelStore(this, this._getAvailableStore, function(item) {
				return this._newItem(this._availableGridItems, item);
			}, function(item) {
				return this._deleteItem(this._availableGridItems, item);
			});

			var layout = [
				{
					field: "name",
					name: this._messages.available_heading,
					width: "100%",
					formatter: lang.hitch(this, function(data, rowIndex) {
						return this._getCellValue(this._resultGrid.getItem(rowIndex));
					})
				}
			];

			// Renders available grid.
			this._resultGrid = new DataGrid({
				canSort: function() {
					return false;
				},
				selectionMode: this.selectionMode,
				store: this._resultStore,
				structure: layout,
				textDir: this.textDir
			});

			this._resultDataGrid.appendChild(this._resultGrid.domNode);
			this._resultGrid.startup(); // Call startup to render the grid
			this._connectGridTooltip(this._resultGrid);
			if (this.selectionMode == this._SELECTION_MODE.MULTIPLE) {
				connect.connect(this._resultGrid, "onRowDblClick", this, function(e) {
					if (domClass.contains(this._resultGrid.domNode, "dijitDisabled"))
						return;

					this._dimissGridToolTip(this._resultGrid, e);
					var item = this._resultGrid.getItem(e.rowIndex);
					this._addItems([
						item
					]);
				});
				connect.connect(this._resultGrid, "onSelected", this, function(index) {
					this._addButton.set("disabled", false);
				});
				connect.connect(this._resultGrid, "onDeselected", this, function(index) {
					this._addButton.set("disabled", true);
				});
			} else {
				connect.connect(this._resultGrid, "onRowDblClick", this, function(e) {
					this._dimissGridToolTip(this._resultGrid, e);
					this.onChange();
				});
				connect.connect(this._resultGrid, "onSelected", this, function(index) {
					this.onSelectionChanged(this._resultGrid.selection.getSelected());
				});
				connect.connect(this._resultGrid, "onDeselected", this, function(index) {
					this.onSelectionChanged();
				});
			}
		},

		/**
		 * @private
		 */
		_renderSelectedGrid: function() {
			// Initialize result grid data store
			this._selectedStore = new ecm.model._ModelStore(this, this._getSelectedStore, function(item) {
				return this._newItem(this._selectedGridItems, item);
			}, function(item) {
				return this._deleteItem(this._selectedGridItems, item);
			});
			this._selectedStore._arrayOfTopLevelItems = this._selectedGridItems;

			var layout = [
				{
					field: "name",
					name: this._messages.selected_heading,
					formatter: lang.hitch(this, function(data, rowIndex) {
						return this._getCellValue(this._selectedGrid.getItem(rowIndex));
					}),
					width: "100%"
				}
			];

			// Renders available grid.
			this._selectedGrid = new DataGrid({
				canSort: function() {
					return false;
				},
				selectionMode: "extended",
				store: this._selectedStore,
				structure: layout,
				textDir: this.textDir
			});

			this._selectedDataGrid.appendChild(this._selectedGrid.domNode);
			this._selectedGrid.startup(); // Call startup to render the grid
			this._connectGridTooltip(this._selectedGrid);
			this.connect(this._selectedGrid, "onRowDblClick", function(e) {
				if (domClass.contains(this._selectedGrid.domNode, "dijitDisabled"))
					return;

				this._dimissGridToolTip(this._selectedGrid, e);
				var item = this._selectedGrid.getItem(e.rowIndex);
				this._removeItems([
					item
				], e.rowIndex);
			});
			this.connect(this._selectedGrid, "onSelected", function(index) {
				this._removeButton.set("disabled", false);
				this._removeButton2.set("disabled", false);
			});
			connect.connect(this._selectedGrid, "onDeselected", this, function(index) {
				this._removeButton.set("disabled", true);
				this._removeButton2.set("disabled", true);
			});
			if (this.hasSorting) {
				this.connect(this._selectedGrid.selection, "onChanged", function() {
					this._upButton.set('disabled', !this._hasRowsToMoveUp(this._selectedGrid));
					this._downButton.set('disabled', !this._hasRowsToMoveDown(this._selectedGrid));
				});
			}
		},

		/**
		 * @private
		 */
		_connectGridTooltip: function(grid) {
			this._gridTooltipTimer = {};
			connect.connect(grid, "onRowMouseOver", this, function(e) {
				if (this._gridTooltipTimer[grid.id]) {
					clearTimeout(this._gridTooltipTimer[grid.id]);
				}
				this._gridTooltipTimer[grid.id] = setTimeout(lang.hitch(this, function() {
					this._showTooltip(e, grid);
				}), 700);
			});
			connect.connect(grid, "onRowMouseOut", this, function(e) {
				this._dimissGridToolTip(grid, e);
			});
		},

		/**
		 * @private
		 */
		_dimissGridToolTip: function(grid, e) {
			clearTimeout(this._gridTooltipTimer[grid.id]);
			delete this._gridTooltipTimer[grid.id];
			this._hideTooltip(e);
		},

		/**
		 * @private
		 */
		_getAvailableStore: function(callback) {
			callback(this._availableGridItems);
		},

		/**
		 * @private
		 */
		_getSelectedStore: function(callback) {
			callback(this._selectedGridItems);
		},

		/**
		 * @private
		 */
		_newItem: function(items, item) {
				items.push(item);
				return true;
		},

		/**
		 * @private
		 */
		_deleteItem: function(items, item) {
			var index = array.indexOf(items, item);
			if (index != -1) {
				items.splice(index, 1);
				return true;
			}
			return false;
		},

		/**
		 * @private
		 */
		_showTooltip: function(event, grid) {
			var item = grid.getItem(event.rowIndex);
			if (item) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(this._messages.display_name) + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(item.displayName)) : idxHtml.escapeHTML(item.displayName));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(this._messages.description_label) + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(item.description)) : idxHtml.escapeHTML(item.description));
				toolTip.push("</span></div>");
				Tooltip.show(toolTip.join(""), event.cellNode, [
					"after",
					"before",
					"above",
					"below"
				], !this.isLeftToRight(), this.textDir);//38360
			}
		},

		/**
		 * @private
		 */
		_hideTooltip: function(event) {
			Tooltip.hide(event.cellNode);
		},

		/**
		 * @private
		 */
		_getCellValue: function(item) {
			var cellValue = "";
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.UserGroup)) {
				cellValue = "<span class=\"groupIcon\"><img src=\"dojo/resources/blank.gif\" alt=\"" + idxHtml.escapeHTML(this._messages.group) + "\"></img></span>";
			} else {
				cellValue = "<span class=\"userIconSpan\"><img src=\"dojo/resources/blank.gif\" alt=\"" + idxHtml.escapeHTML(this._messages.user) + "\"></img></span>";
			}
			cellValue += "<span class=\"nameText\">" + (this.repository._isP8() ? idxHtml.escapeHTML(item.displayName) : idxHtml.escapeHTML(item.name)) + "</span>";

			return cellValue;
		},

		/**
		 * @private
		 */
		_onMouseOut: function(event) {
			this._searchButton.set("disabled", this._criteriaTextBox.get("value").length == 0);
		},

		/**
		 * @private
		 */
		_onKeyPress: function(event) {
			if (this._criteriaTextBox.get("value").length > 0) {
				if (event.keyCode == keys.ENTER) {
					this._onSearch(event);
				}
				this._searchButton.set("disabled", false);
			} else {
				this._searchButton.set("disabled", true);
			}
		},

		/**
		 * @private
		 */
		_onAddNameTextChange: function(event) {
			this._addArbitraryButton.set("disabled", this._addNameTextBox.get("value").length == 0);
		},

		/**
		 * Cleans up the widget
		 */
		destroy: function() {
			if (this._resultGrid) {
				if (this._resultGrid.domNode) {
					this._resultGrid.destroyRecursive();
				}
				delete this._resultGrid;
			}
			if (this._selectedGrid) {
				if (this._selectedGrid.domNode) {
					this._selectedGrid.destroyRecursive();
				}
				delete this._selectedGrid;
			}

			this._selectedGridItems = null;
			this._availableGridItems = null;
			this._resultStore = null;
			this._selectedStore = null;

			this.inherited(arguments);
		},

		/**
		 * Sets the initial to the criteria box.
		 */
		focus: function() {
			this._criteriaTextBox.focus();
		},

		/**
		 * Resizes the widget
		 */
		resize: function() {
			this.inherited(arguments);
			this._resizeGridPane();
		},

		/**
		 * @private
		 */
		_resizeTopPaneControls: function(width) {
			// Resize textbox
			var scopeWidth = geometry.getMarginBox(this._scope.domNode).w;
			var buttonBoxWidth = geometry.getMarginBox(this._searchButton.domNode).w;
			var criteriaWidth = geometry.getMarginBox(this._criteriaTextBox.domNode).w;
			if ((scopeWidth + buttonBoxWidth + criteriaWidth) > width) {
				var deltaWidth = width - scopeWidth - buttonBoxWidth - 20;
				if (deltaWidth > 100) { // don't resize text box if not enough room
					geometry.setMarginBox(this._criteriaTextBox.domNode, {
						w: deltaWidth
					});
				}
			}
		},

		/**
		 * @private
		 */
		_resizeGridPane: function() {
			var box = geometry.getMarginBox(this.domNode);
			var height = box.h;
			var width = box.w;
			if (width > 0) {
				var padding = 25;
				var topPaneMarginBox = geometry.getMarginBox(this._topPane);
				if (this.repository && this.repository.privileges.findUsersAndGroups) { // showing search fields
					if (this.selectionMode == this._SELECTION_MODE.SINGLE) {
						this._resizeGrid(height - topPaneMarginBox.h - padding, width - padding);
					} else {
						var buttonWidth = geometry.getMarginBox(this._buttonPane).w;
						var gridWidth = ((width - buttonWidth)) / 2;
						var gridHeight = height > (topPaneMarginBox.h + padding) ? height - topPaneMarginBox.h - padding : topPaneMarginBox.h;
						if (this.hasSorting) {
							gridWidth = gridWidth - 30;
						}
						this._resizeGrid(gridHeight, gridWidth - padding);
						var leadingPaneMarginBox = geometry.getMarginBox(this._leadingPane);
						geometry.setMarginBox(this._centerPane, {
							w: width - gridWidth,
							h: leadingPaneMarginBox.h
						});
					}
				} else { // showing arbitrary add fields
					var buttonPane2MarginBox = geometry.getMarginBox(this._buttonPane2);
					var gridWidth = width;
					var gridHeight = height > (topPaneMarginBox.h + buttonPane2MarginBox.h + padding) ? height - topPaneMarginBox.h - buttonPane2MarginBox.h - padding : topPaneMarginBox.h;
					geometry.setMarginBox(this._centerPane, {
						w: gridWidth,
						h: gridHeight
					});
					if (this._resultGrid) {
						this._resultGrid.resize({
							h: gridHeight,
							w: 1
						});
					}
					var centerPaneContentBox = geometry.getContentBox(this._centerPane);
					if (this._selectedGrid) {
						this._selectedGrid.resize({
							h: centerPaneContentBox.h,
							w: centerPaneContentBox.w
						});
					}
					var centerPaneMarginBox = geometry.getMarginBox(this._centerPane);
					geometry.setMarginBox(this._buttonPane2, {
						t: centerPaneMarginBox.t + centerPaneMarginBox.h
					});
				}
				this._resizeTopPaneControls(width);
			}
		},

		/**
		 * @private
		 */
		_resizeGrid: function(height, width) {
			if (this._resultGrid) {
				this._resultGrid.resize({
					h: height,
					w: width
				});
			}
			if (this._selectedGrid) {
				this._selectedGrid.resize({
					h: height,
					w: width
				});
			}
		},

		/**
		 * Event fired when the available grid row selection changed.
		 * 
		 * @since 2.0.3
		 */
		onSelectionChanged: function(item) {
		},

		/**
		 * Event fired after double clicking a grid row when in a single selection mode or when the selected items have
		 * changed in the extended mode
		 */
		onChange: function() {
		},

		/**
		 * @private
		 */
		_handleSpecificUsersRadioButtonChange: function(checked) {
			this._setUserGroupControlsDisabled(!checked);
		},

		/**
		 * @private
		 */
		_updatePseudoUserOptions: function() {
			var items = this._getSelectedGridItems();
			if (!items.length || items[0].id == RoleSelector.PSEUDO_USER_ME.id) {
				if (!items.length)
					this._anyoneRadioButton.set("checked", true);
				else
					this._meRadioButton.set("checked", true);
				this._setUserGroupControlsDisabled(true);
			} else {
				this._specificUsersRadioButton.set("checked", true);
				this._setUserGroupControlsDisabled(false);
			}
		},

		/**
		 * @private
		 */
		_setUserGroupControlsDisabled: function(disabled) {
			array.forEach(registry.findWidgets(this.domNode), function(widget) {
				if (widget.isInstanceOf && widget.isInstanceOf(RadioButton))
					return;
				if (!disabled && (widget == this._addButton || widget == this._removeButton))
					return;
				if (widget.isInstanceOf && widget.isInstanceOf(DataGrid)) {
					if (disabled) {
						widget.selection.clear();
						widget.selection.setMode("none");
						domClass.add(widget.domNode, "dijitDisabled");
					} else {
						widget.selection.setMode("extended");
						domClass.remove(widget.domNode, "dijitDisabled");
					}
				} else {
					widget.set("disabled", disabled);
				}
			}, this);
		},

		/**
		 * Event fired when the up button is clicked.
		 */
		_onClickUp: function() {
			this._moveUpSelectedRows(this._selectedGrid);
		},

		/**
		 * Event fired when the down button is clicked.
		 */
		_onClickDown: function() {
			this._moveDownSelectedRows(this._selectedGrid);
		},

		_nop: null
	});

	/**
	 * This is a special pseudo user called Me.
	 */
	RolesSelector.PSEUDO_USER_ME = new User({
		id: "{ME}",
		name: ecm.messages.me,
		shortName: "{ME}",
		displayName: ecm.messages.me
	});

	return RolesSelector;
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/string",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/window",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"../../model/Desktop",
	"../RepositorySelector",
	"./_ManageTeamspaceMixin",
	"./_LaunchBarDialogPane",
	"ecm/widget/FilterTextBox",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/modules/Toolbar2",
	"gridx/modules/Filter",
	"dojo/text!./templates/TeamspaceFlyoutPane.html"
],

function(declare, //
lang, //
array, //
string, //
domStyle, //
domClass, //
domConstruct, //
window, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
BorderContainer, //
ContentPane, //
TabContainer, //
Desktop, //
RepositorySelector, //
_ManageTeamspaceMixin, //
_LaunchBarDialogPane, //
FilterTextBox, //
ContentList, //
RowContextMenu, //
Toolbar, //
FilterModule, //
template) {

	/**
	 * @name ecm.widget.layout.TeamspaceFlyoutPane
	 * @class Provides a fly-out pane that is used for the teamspaces feature in the launch bar.
	 * @augments ecm.widget.layout._LaunchBarDialogPane
	 */
	return declare("ecm.widget.layout.TeamspaceFlyoutPane", [
		_LaunchBarDialogPane,
		_ManageTeamspaceMixin
	], {
		/** @lends ecm.widget.layout.TeamspaceFlyoutPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * @private
		 */
		_teamspaces_label: "",

		/**
		 * @private
		 */
		_templates_label: "",

		/**
		 * Renders the widget.
		 */
		buildRendering: function() {
			this._teamspaces_label = ecm.model.desktop.getConfiguredLabelsvalue("workspaces");
			this._templates_label = ecm.model.desktop.getConfiguredLabelsvalue("templates");
			this.inherited(arguments);
		},

		/**
		 * Called after widget creation.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this._createContentLists();

			this.defaultLayoutRepositoryComponent = "teamspaces";
			this.createRepositorySelector();
			this.connectRepositorySelector();
			this.connectDesktopListeners();
			this._tabContainer.startup();
			this.connect(this, "onRepositoryChange", "focus");

			// lazy load templates or teamspaces pane
			this._tabContainer.watch("selectedChildWidget", lang.hitch(this, function(name, pPane, tPane) {
				if (tPane.getChildren()[0].dojoAttachPoint == "templateContents") {
					if (this._templatesLoaded == undefined || this._templatesLoaded == false) {
						this._setupTemplates();
						this._templatesLoaded = true;
					}
				} else {
					if (this._teamspacesLoaded == undefined || this._teamspacesLoaded == false) {
						this._setupTeamspaces();
						this._teamspacesLoaded = true;
					}
				}
			}));

			this.logExit("postCreate");
		},
		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this.inherited(arguments);
			this._cleanUpActions();
		},

		/**
		 * @private
		 */
		_createContentLists: function() {
			domClass.add(this.templateContents.gridArea.domNode, "magazineView");
			this.templateContents.setGridExtensionModules(this._getContentListGridModules());
			this.templateContents.setContentListModules(this._getContentListModules());

			domClass.add(this.teamspaceContents.gridArea.domNode, "magazineView");
			this.teamspaceContents.setGridExtensionModules(this._getContentListGridModules());
			this.teamspaceContents.setContentListModules(this._getContentListModules());

			this.connect(this.templateContents, "onOpenItem", lang.hitch(this, function(item, data) {
				this.onOpenItem(item, data, this);
			}));
			this.connect(this.teamspaceContents, "onOpenItem", "onOpenItem");
		},

		_clearTeamspaceFilter: function() {
			if (this.teamspaceContents._myFilter) {
				this.teamspaceContents._myFilter.set("value", "");
			}
		},

		_clearTemplateFilter: function() {
			if (this.templateContents._myFilter) {
				this.templateContents._myFilter.set("value", "");
			}
		},

		_cleanUpActions: function() {
			if (this.teamspaceContents._myFilter) {
				this.teamspaceContents._myFilter.destroy();
			}
			if (this.templateContents._myFilter) {
				this.templateContents._myFilter.destroy();
			}
			if (this.teamspaceContents._myButtons) {
				array.forEach(this.teamspaceContents._myButtons, function(button, index) {
					button.destroy();
				});
			}
			if (this.templateContents._myButtons) {
				array.forEach(this.templateContents._myButtons, function(button, index) {
					button.destroy();
				});
			}
		},

		/**
		 * @private
		 */
		_isFlyout: function() {
			return true;
		},

		/**
		 * Adds actions to the toolbar at the top of the contentList.
		 */
		setActions: function(actions, contentList) {
			// Add the actions as buttons
			var buttons = [];
			var selectedItems = contentList.getSelectedItems();
			array.forEach(actions, lang.hitch(this, function(action) {
				if (action.isVisible(this.repository, selectedItems)) {
					var button = this._createActionButton(action, contentList);
					buttons.push(button);
					domConstruct.place(button.domNode, contentList.buttonArea, "last");
					button.startup();
				}
			}));
			contentList._myButtons = buttons;

			// Add the filter
			var filter = new FilterTextBox({
				placeholder: ecm.messages.process_filter_label
			});
			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			var filterDataFunction = lang.hitch(this, "_filterData", filter, contentList);
			this.connect(filter, "_onInput", filterDataFunction);
			this.connect(filter, "_setValueAttr", filterDataFunction);
			contentList._myFilter = filter;
			domStyle.set(filter.domNode, "width", "100px");
			domStyle.set(filter.domNode, "marginTop", "2px");
			domConstruct.place(filter.domNode, contentList.buttonArea, "last");
			filter.startup();
		},

		/**
		 * Called when user enters data in the FilterTextBox.
		 */
		_filterData: function(filter, contentList) {
			var value = filter.get("value");
			this._prevFilter = string.trim(value).toLowerCase();
			var grid = contentList.grid;
			if (grid) {
				grid.model.filter(this._filterCheckerFunction);
				grid.body.refresh();
			}
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 */
		_filterChecker: function(row, id) {
			return row.item.name.toLowerCase().indexOf(this._prevFilter) > -1;
		},

		/**
		 * Get the content list grid modules.
		 */
		_getContentListGridModules: function() {
			var array = [];
			array.push(RowContextMenu);
			array.push(FilterModule);
			return array;
		},

		/**
		 * Get the content list modules.
		 */
		_getContentListModules: function() {
			var array = [];
			/* array.push({
				moduleClass: Toolbar,
				hasActionsButton: false
			}); */
			return array;
		},

		/**
		 * Adds focus to the pane.
		 */
		focus: function() {
			if (this.repositorySelector && this.repositorySelector.getDropdown()) {
				this.repositorySelector.getDropdown().focus();
			}
		},

		/**
		 * Loads the content of the pane.
		 */
		loadContent: function() {
			this.logEntry("loadContent");
			this.focus(); // focus 1st before calling setPaneDefaultLayoutRepository so that if it causes the logon dialog to show, the focus will go back to flyout when done logging on
			if (!this.repository) {
				this.setPaneDefaultLayoutRepository();
			} else if (!this.isLoaded && this.repository && this.repository.connected) {
				this.setRepository(this.repository);
				this.isLoaded = true;
				this.needReset = false;
			}
			this.logExit("loadContent");
		},

		/**
		 * Resets the content of this pane.
		 */
		reset: function() {
			this.logEntry("reset");
			this.setRepository(this.repository);
			this.needReset = false;
			this.logExit("reset");
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/string",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/dom-geometry",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/aspect",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"gridx/modules/CellWidget",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Filter",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"./_LaunchBarPane",
	"./_ManageEntryTemplatesMixin",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/ColumnWidth",
	"ecm/widget/listView/gridModules/FilterBar",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/gridModules/VirtualVScroller",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/RepositorySelector",
	"ecm/widget/listView/modules/FilterDataServer",
	"ecm/widget/listView/modules/ViewDetail",
	"ecm/widget/listView/modules/ViewMagazine",
	"ecm/widget/listView/modules/Toolbar2",
	"ecm/widget/listView/modules/InlineMessage",
	"ecm/widget/entryTemplateBuilder/Builder",
	"../../model/Desktop",
	"../../model/ResultSet",
	"../../model/EntryTemplate",
	"../dialog/LoginDialog",
	"dijit/layout/ScrollingTabController",
	"dojo/text!./templates/ManageEntryTemplatesPane.html"
],

function(declare, //
array, //
lang, //
string, //
domStyle, //
domAttr, //
domGeometry, //
domClass, //
domConstruct, //
aspect, //
BorderContainer, //
ContentPane, //
CellWidget, //
ColumnResizer, //
Filter, //
Focus, //
SelectRow, //
ExtendedSelectRow, //
_LaunchBarPane, //
_ManageEntryTemplatesMixin, //
ContentList, //
ColumnWidth, //
FilterBar, //
RowContextMenu, //
VirtualVScroller, //
Bar, //
RepositorySelectorModule, //
FilterDataServer, //
ViewDetail, //
ViewMagazine, //
Toolbar, //
InlineMessage, //
EntryTemplateBuilder, //
Desktop, //
ResultSet, //
EntryTemplate, //
LoginDialog, //
ScrollingTabController, //
template) {

	/**
	 * @name ecm.widget.layout.ManageEntryTemplatesPane
	 * @class Provides a widget that displays a list of all entry templates that the current user can edit. From the
	 *        list, a user with appropriate authority can open, edit, and delete entry templates. A user with the
	 *        appropriate authority can also open the builder to create new entry templates from this widget.
	 * @augments ecm.widget.layout._LaunchBarPane, ecm.widget.layout._ManageEntryTemplatesMixin
	 */
	return declare("ecm.widget.layout.ManageEntryTemplatesPane", [
		_LaunchBarPane,
		_ManageEntryTemplatesMixin
	], {
		/** @lends ecm.widget.layout.ManageEntryTemplatesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * @private
		 */
		_entryTemplates_label: "",

		/**
		 * Renders the widget.
		 */
		buildRendering: function() {
			this._entryTemplates_label = Desktop.getConfiguredLabelsvalue("entry_templates");
			this.inherited(arguments);
		},

		/**
		 * Called after widget creation.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this._tabContainer.startup();
			this.expandTabContainerTabWidth();

			this._createContentList();
			this._defaultLayoutRepositoryComponent = "entryTemplates";

			this.own(aspect.after(this, "onRepositoryChange", lang.hitch(this, "focus"), true));
			this.own(aspect.after(Desktop, "onLogin", lang.hitch(this, function(repository) {
				if (this.selected) {
					var repository = this._getDefaultLayoutRepository();
					if (repository) {
						this._setRepositorySelector(repository);
						if (repository.connected) {
							this.setRepository(repository);
							if (!this.isLoaded) {
								this.loadContent();
							}
						} else {
							LoginDialog.getLoginDialog().connectToRepository(repository, lang.hitch(this, function() {
								this.setRepository(repository);
								if (!this.isLoaded) {
									this.loadContent();
								}
							}));
						}
					}
				}
			}), true));
			this.own(aspect.after(Desktop, "onLogout", lang.hitch(this, function(repository) {
				this.repository = null;
				this.isLoaded = false;
				this._contentListModulesLoaded = null;
				this.getContentsListView().setResultSet(null);

				var children = this._tabContainer.getChildren();
				if (children) {
					array.forEach(children, function(child) {
						if (child.get("closable")) {
							this.closeTab(child);
						}
					}, this);
				}
			}), true));
			this.logExit("postCreate");
		},

		expandTabContainerTabWidth: function() {
			var controllerWidget = this._tabContainer.controllerWidget && this._tabContainer.controllerWidget();
			if (controllerWidget) {
				this.own(aspect.before(controllerWidget, "onAddChild", function(page, insertIndex) {
					var width = domStyle.get(controllerWidget.containerNode, "width");
					if (width == 0) {
						domStyle.set(controllerWidget.containerNode, "width", "600px");
					}
				}, true));
			}
		},

		/**
		 * Adds an entry template builder tab.
		 * 
		 * @param entryTemplate
		 *            The entry template for the builder tab to create.
		 */
		addEntryTemplateBuilder: function(entryTemplate) {
			if (entryTemplate) {
				require([
					entryTemplate.entryTemplateBuilderWidgetClass
				], lang.hitch(this, function(EntryTemplateBuilderClass) {
					this.addEntryTemplateBuilderTabPane(new EntryTemplateBuilderClass({
						repository: entryTemplate ? entryTemplate.repository : null,
						container: this,
						entryTemplate: entryTemplate
					}));
				}));
			}
		},

		/**
		 * Adds the provided entry template builder pane as a new tab.
		 * 
		 * @param entryTemplateBuilder
		 *            An instance of {@link ecm.widget.entryTemplateBuilder.Builder} that will be added as a new tab.
		 *            This builder instance should be initialized with a repository and an entry template.
		 */
		addEntryTemplateBuilderTabPane: function(entryTemplateBuilder) {
			if (entryTemplateBuilder && entryTemplateBuilder.isInstanceOf && entryTemplateBuilder.isInstanceOf(EntryTemplateBuilder)) {
				this._addTab(entryTemplateBuilder);
			}
		},

		/**
		 * @private Adds the pane as a tab.
		 */
		_addTab: function(pane) {
			var childPane;
			if (pane.entryTemplate && pane.entryTemplate.id && pane.entryTemplate.mode == "edit") {
				array.some(this._tabContainer.getChildren(), function(c) {
					if (c.entryTemplate && c.entryTemplate.id == pane.entryTemplate.id && c.entryTemplate.mode == "edit") {
						childPane = c;
						return true;
					}
					return false;
				});
			}

			if (childPane)
				this._tabContainer.selectChild(childPane);
			else {
				this._tabContainer.addChild(pane);
				this._tabContainer.selectChild(pane);
			}
		},

		/**
		 * Closes the tab.
		 */
		closeTab: function(pane) {
			this._tabContainer.closeChild(pane);
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this.inherited(arguments);
		},

		/**
		 * @private Loads the entry templates list.
		 */
		_loadEntryTemplates: function() {
			this.logEntry("_loadEntryTemplates");
			if (this.repository && this.repository.entryTemplatesEnabled) {
				this.repository.retrieveEntryTemplatesResultSet(lang.hitch(this, function(resultSet) {
					this._entryTemplatesLoaded = true;
					if (resultSet) {
						resultSet.container = this;
					}
					this.getContentsListView().setResultSet(resultSet);
				}), "all", true);
			}
			this.logExit("_loadEntryTemplates");
		},

		/**
		 * @private Sets the repository selector.
		 */
		_setRepositorySelector: function(repository) {
			if (repository) {
				var repositorySelector = this.getContentsListView().getContentListModule("repositorySelector");
				if (repositorySelector) {
					repositorySelector.setRepositoryId(repository.id);
					this._tabContainer.selectChild(this.entryTemplatesPane);
				}
			}
		},

		/**
		 * @private Creates the content list.
		 */
		_createContentList: function() {
			this.getContentsListView().coreModules = [
				CellWidget,
				ColumnResizer,
				Focus,
				{
					moduleClass: VirtualVScroller,
					lazyTimeout: 200,
					lazy: true
				},
				ColumnWidth
			];

			this.getContentsListView().setGridExtensionModules(this._getContentListGridModules());
			this.getContentsListView().setContentListModules(this._getContentListModules());
			domAttr.set(this.getContentsListView().domNode, "role", "region");
			domAttr.set(this.getContentsListView().domNode, "aria-label", ecm.messages.entryTemplates_content_list_label);

			this.own(aspect.after(this.getContentsListView(), "onOpenItem", lang.hitch(this, "onOpenItem"), true));
			this.own(aspect.after(this.getContentsListView(), "onContentListModulesLoaded", lang.hitch(this, function() {
				if (!this._contentListModulesLoaded) {
					this._setRepositorySelector(this.repository);
					var repositorySelector = this.getContentsListView().getContentListModule("repositorySelector");
					if (repositorySelector) {
						this.own(aspect.after(repositorySelector, "onSelect", lang.hitch(this, "_onSelectRepository"), true));
					}
					this._contentListModulesLoaded = true;
				}
			})));

			this.getContentsListView().setResultSet(null);
		},

		/**
		 * @private Called when a repository is selected in the repository selector.
		 */
		_onSelectRepository: function(repository) {
			if (repository && repository.entryTemplatesEnabled && repository != this.repository) {
				if (repository.connected) {
					this.setRepository(repository);
					this.onRepositoryChange(this, repository);

				} else {
					var loginDialog = LoginDialog.getLoginDialog();
					var currentRepo = this.repository;
					// set the repo to the selected repo in case any repo's on change events are fired during the logon process.
					this.repository = repository;
					loginDialog.connectToRepository(repository, lang.hitch(this, function() {
						if (this.repository) {
							if (repository.connected) {
								if (!this.isLoaded) {
									this.loadContent();
								}
								this.setRepository(repository);
								this.onRepositoryChange(this, repository);
							} else {
								this._setRepositorySelector(this.repository);
							}
						}
					}));

					this.own(aspect.after(loginDialog, "hide", lang.hitch(this, function() {
						if (!repository.connected) {
							this.repository = currentRepo;
							this._setRepositorySelector(this.repository);
						}
					}), true));
				}
			}
		},

		/**
		 * Get the content list grid modules.
		 */
		_getContentListGridModules: function() {
			var array = [];
			array.push(RowContextMenu);
			array.push(Filter);
			array.push({
				moduleClass: FilterBar,
				conditionContain: ecm.messages.operator_LIKE,
				conditionStartWith: ecm.messages.operator_STARTSWITH,
				conditionEndWith: ecm.messages.operator_ENDSWITH,
				conditions: {
					string: [
						'contain',
						'startWith',
						'endWith'
					]
				}
			});
			return array;
		},

		/**
		 * Get the content list modules.
		 */
		_getContentListModules: function() {
			var viewModules = [];
			if (this.feature && this.feature.configurations && this.feature.configurations.showViews && this.feature.configurations.showViews.length > 0) {
				for (var i = 0; i < this.feature.configurations.showViews.length; i++) {
					var viewId = this.feature.configurations.showViews[i];
					if (viewId == "detail") {
						viewModules.push(ViewDetail);
					} else if (viewId == "magazine") {
						viewModules.push(ViewMagazine);
					}
				}
			}
			if (viewModules.length == 0) {
				viewModules.push(ViewMagazine);
				viewModules.push(ViewDetail);
			}

			var array = [];
			array.push({
				moduleClass: Bar,
				top: [
					[
						[
							{
								moduleClass: RepositorySelectorModule,
								"className": "BarRepositorySelector",
								validateRepository: lang.hitch(this, function(repository) {
									return (repository && repository.entryTemplatesEnabled && repository.showInEntryTemplateView);
								})
							},
							{
								moduleClass: Toolbar
							},
							{
								moduleClass: FilterDataServer,
								"className": "BarFilterData"
							},
							{
								moduleClasses: viewModules,
								"className": "BarViewModules"
							}
						]
					],
					[
						[
							{
								moduleClass: InlineMessage
							}
						]
					]
				]
			});
			return array;
		},

		/**
		 * Adds focus to the pane.
		 */
		focus: function() {
			var repositorySelector = this.getContentsListView().getContentListModule("repositorySelector");
			if (repositorySelector) {
				repositorySelector.focus();
			}
		},

		/**
		 * Get contents list view.
		 */
		getContentsListView: function() {
			return this.entryTemplatesContents;
		},

		/**
		 * Event invoked when a repository changes
		 * 
		 * @param pane
		 *            The pane.
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 */
		onRepositoryChange: function(pane, repository) {
		},

		/**
		 * Loads the content of the pane.
		 */
		loadContent: function() {
			this.logEntry("loadContent");
			this.focus(); // focus 1st before calling setPaneDefaultLayoutRepository so that if it causes the logon dialog to show, the focus will go back to flyout when done logging on
			if (!this.repository) {
				this._setPaneDefaultLayoutRepository();

			} else if (!this.isLoaded && this.repository.connected) {
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
		},
		
		addFeatureContextSelector: function(domNode) {
			var rs = this.getContentsListView().getContentListModule("repositorySelector");
			if (rs && !domClass.contains(rs.domNode, "dijitHidden")) {
				if (rs.domNode.parentNode && domClass.contains(rs.domNode.parentNode, "BarRepositorySelector"))
					domClass.add(rs.domNode.parentNode, "dijitHidden");
				domConstruct.place(rs.domNode, domNode, "last");
			}
		}
	});
});

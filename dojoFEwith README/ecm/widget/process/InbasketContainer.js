/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/dom-attr",
	"dijit/Tooltip",
	"dijit/form/DropDownButton",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/layout/BorderContainer",
	"gridx/modules/extendedSelect/Row",
	"../../MessagesMixin",
	"../../LoggerMixin",
	"../../model/Desktop",
	"../../model/Message",
	"../listView/gridModules/RowContextMenu",
	"../listView/modules/Bar",
	"../listView/modules/Breadcrumb",
	"../listView/modules/Toolbar2",
	"../listView/modules/P8InbasketToolbar",
	"../listView/modules/DocInfo",
	"../listView/ContentList",
	"./InbasketFilterContainer",
	"./InbasketFiltersPane",
	"dojo/text!./templates/InbasketContainer.html"
],

function(declare, lang, construct, domAttr, Tooltip, DropDownButton, ContentPane, TabContainer, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ExtendedSelectRow, MessagesMixin, LoggerMixin, Desktop, Message, RowContextMenu, Bar, Breadcrumb, Toolbar, P8InbasketToolbar, DocInfo, ContentList, InbasketFilterContainer, InbasketFiltersPane, template) {

	/**
	 * @name ecm.widget.process.InbasketContainer
	 * @class Provides a widget that is used to display the in-baskets that are associated with an IBM FileNet Process
	 *        Engine role. Each in-basket is displayed in a {@link ecm.widget.listView.ContentList} widget that is
	 *        contained in the InbasketTabContainer widget.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.process.InbasketContainer", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.InbasketContainer.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * A {@link ecm.model.ProcessInbasket} object holding current selected in-basket information.
		 */
		selectedInbasket: null,

		/**
		 * A {@link ecm.model.Repository} object.
		 */
		repository: null,

		/**
		 * An array of {@link ecm.widget.listView.ContentList} widgets for rendering the in-basket list.
		 */
		contentLists: null,

		/**
		 * An array of {@link ecm.widget.process.InbasketFilterContainer} widgets for rendering the filter criteria for
		 * each in-basket.
		 */
		filterContainers: null,

		_inbaskets: null,
		_selectedWorklist: null,
		_index: 0,

		constructor: function() {
			if (!this.contentLists) {
				this.contentLists = [];
				this.filterContainers = [];
			}
		},

		postCreate: function() {
			this.inherited(arguments);
		},

		/**
		 * Sets the selected in-basket index.
		 * 
		 * @param index
		 *            An <code>int</code> value for the selected index.
		 */
		setSelectedIndex: function(index) {
			this._index = index;
		},

		_getContentListGridModules: function(repository) {
			var array = [];
			array.push(RowContextMenu);
			array.push({
				moduleClass: ExtendedSelectRow,
				canSwept: false
			// disabling sweep selection to allows users to select text in the grid, copy it (control c), and paste it in the filter
			});
			return array;
		},

		_getContentListModules: function(repository, inbasket) {
			var array = [];
			if (repository.type == "cm") {
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
				var config = ecm.model.desktop.getFeatureById("workPane").configurations;
				if (config && config.showDocumentInfoPane) {
					//only show the doc info pane when set it is shown.
					array.push({
						moduleClass: DocInfo,
						selectAutoOpen: config.documentInfoPaneOpenOnSelection,
						showSystemProps: false
					});
				}
			} else if (repository.type == "p8") {
				array.push({
					moduleClass: Bar,
					top: [
						[
							[
								{
									moduleClass: P8InbasketToolbar,
									queueType: inbasket ? inbasket.queueType : "",
									queueName: inbasket ? inbasket.queueName : ""
								}
							]
						],
						[
							[
								{
									moduleClass: Breadcrumb,
									disabled: true
								}
							]
						]
					]
				});
				// Never auto open the info pane in a P8 inbasket! Do not check the auto open config for P8....
				array.push({
					moduleClass: DocInfo,
					showSystemProps: true, // There are only system properties in this view (no custom), expand system by default
					showPreview: false,
					selectAutoOpen: false
				});
			}
			return array;
		},

		/**
		 * Returns the <code>int</code> index value for the specified in-basket. Returns <code>-1</code> if not
		 * found.
		 * 
		 * @param inbasket
		 *            A {@link ecm.model.ProcessInbasket} object to look for in the list.
		 * @returns {Integer} holding index value.
		 */
		getInbasketTabIndex: function(inbasket) {
			var openedInbaskets = this.tabContainer.getChildren();
			for (var i = 0; i < openedInbaskets.length; i++) {
				if (openedInbaskets[i].title == inbasket.name) {
					this._selectedContentList = openedInbaskets[i];
					return i;
				}
			}
			return -1;
		},

		/**
		 * Creates a {@link ecm.widget.listView.ContentList} widget for the current in-basket tab.
		 * 
		 * @param index
		 *            An {Integer} value that specifies the index into the <code>ContentList</code> array at which to
		 *            add a new list view (this is the same as the tab index).
		 */
		createInbasketTab: function(index) {
			this.logEntry("createInbasketTab");
			this.contentLists[index] = new ContentList({
				selectFirstRowOnSetResult: true,
				emptyMessage: this.messages.inbasket_is_empty,
				title: this._inbaskets[index].name
			// title is the tab title & is not used by content list
			});

			this.contentLists[index].setGridExtensionModules(this._getContentListGridModules(this.repository));
			this.contentLists[index].setContentListModules(this._getContentListModules(this.repository, this._inbaskets[index]));
			domAttr.set(this.contentLists[index].domNode, "role", "region");
			domAttr.set(this.contentLists[index].domNode, "aria-label", this.messages.work_content_list_label);

			this.connect(this.contentLists[index], "onModulesLoaded", lang.hitch(this, function() {
				if (this.repository.type == "cm") {
					var config = ecm.model.desktop.getFeatureById("workPane").configurations;
					if (config && config.documentInfoPaneDefaultOpen) {
						this.contentLists[index].gridContainer.restore("trailing");
						this.contentLists[index].gridContainer.onPanelOpen();
					}
				}
			}));

			this.tabContainer.addChild(this.contentLists[index]);
			this.logExit("createInbasketTab");
		},

		/**
		 * Selects the Tab in the tab container for the current selected content list.
		 */
		selectCurrentContentList: function() {
			this.tabContainer.selectChild(this._selectedContentList);
			this.tabContainer.resize();
		},

		/**
		 * Sets the selected content list
		 * 
		 * @param selectedContentList
		 *            A {@link ecm.widget.listView.ContentList} widget
		 */
		setSelectedContentList: function(selectedContentList) {
			this._selectedContentList = selectedContentList;
		},

		/**
		 * Returns a {@link ecm.widget.listView.ContentList} widget object that is currently selected.
		 * 
		 * @returns {ecm.widget.listView.ContentList} widget
		 */
		getSelectedContentList: function() {
			return this._selectedContentList;
		},

		/**
		 * Sets the selected work list.
		 * 
		 * @param worklist
		 *            A {@link ecm.model.Worklist} object
		 */
		setSelectedWorklist: function(worklist) {
			this._selectedWorklist = worklist;
		},

		/**
		 * Sets the process role that the in-baskets will be retrieved from.
		 * 
		 * @param processRole
		 *            An {@link ecm.model.ProcessRole} object.
		 */
		setProcessRole: function(processRole) {
			this._processRole = processRole;
		},

		/**
		 * Returns an {@link ecm.model.ProcessRole} object that the in-baskets were retrieved from.
		 * 
		 * @returns An {ecm.model.ProcessRole} object.
		 */
		getProcessRole: function() {
			return this._processRole;
		},

		/**
		 * Sets an array of {@link ecm.model.ProcessInbasket} objects.
		 */
		setInbaskets: function(inbaskets) {
			this._inbaskets = inbaskets;
		},

		/**
		 * Returns an array of {@link ecm.model.ProcessInbasket} objects.
		 * 
		 * @returns {ecm.model.ProcessInbasket} object array.
		 */
		getInbaskets: function() {
			return this._inbaskets;
		},

		/**
		 * Returns an {@link ecm.model.ProcessInbasket} object from the specified index.
		 * 
		 * @param index
		 *            An {Integer} value for the index of the in-basket to return.
		 * @returns {ecm.model.ProcessInbasket}
		 */
		getInbasket: function(index) {
			return this._inbaskets[index];
		},

		/**
		 * Retrieves the in-basket result set list of work items.
		 * 
		 * @param inbasket
		 *            A {@link ecm.model.ProcessInbasket} object to retrieve the work items result set from.
		 * @param index
		 *            An {Integer} value for the index of the content list to add the result set items to.
		 */
		retrieveResultSet: function(inbasket, index) {
			this.logEntry("retrieveResultSet");
			this._index = index;
			this.selectedInbasket = inbasket;
			this.selectedInbasket.retrieveFilterCriteria(lang.hitch(this, function(filterClass) {
				var filterValues;
				if (filterClass) {
					this.configureFilterArea(this.selectedInbasket, index);
					filterValues = this._filterContainer.getFilterValues();
				}
				this.selectedInbasket.retrieveWorkItems(lang.hitch(this, function(resultSet) {
					this.resultSet = resultSet;
					this.contentLists[index].setResultSet(this.resultSet);
					this._borderContainer.resize();
				}), null, null, false, filterValues);
			}));
			this.setSelectedContentList(this.contentLists[index]);
			this.logExit("retrieveResultSet");
		},

		/**
		 * Sets the repository.
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 */
		setRepository: function(repository) {
			this.repository = repository;
			this.worklistContents.setGridExtensionModules(this._getContentListGridModules(repository));
			this.worklistContents.setContentListModules(this._getContentListModules(repository));
			domAttr.set(this.worklistContents.domNode, "role", "region");
			domAttr.set(this.worklistContents.domNode, "aria-label", this.messages.work_content_list_label);
		},

		/**
		 * Returns a {@link ecm.model.Repository} object.
		 * 
		 * @returns {ecm.model.Repository}
		 */
		getRepository: function() {
			return this.repository;
		},

		/**
		 * A function that refreshes the current in-basket work items list.
		 * 
		 * @param filters
		 *            An array of filter values to be used when retrieving the in-basket work items list.
		 */
		refresh: function(filters) {
			this.logEntry("refresh");
			if (this.repository.type == "p8") {
				var filterValues = filters;
				if (!filterValues) {
					filterValues = this._filterContainer.getFilterValues();
				}
				var index = this._index;
				this._filterContainer.updateFilterSummary();
				this._inbaskets[index].retrieveWorkItems(lang.hitch(this, function(resultSet) {
					this.resultSet = resultSet;
					this.contentLists[index].setResultSet(this.resultSet);
					this._borderContainer.resize();
				}), null, null, true, filterValues);
				this.setSelectedContentList(this.contentLists[index]);
			} else {
				this.worklistContents.getResultSet().refresh();
			}
			this.logExit("refresh");
		},

		/**
		 * Configures the filter criteria widget and creates a {@link ecm.widget.process.InbasketFilterContainer}
		 * widget.
		 * 
		 * @param inbasket
		 *            An {@link ecm.model.ProcessInbasket} object from which to get the filter criteria information.
		 * @param index
		 *            An {Integer} value for the index of the content list. This value is used to connect the filter
		 *            widget.
		 */
		configureFilterArea: function(inbasket, index) {
			this.logEntry("configureFilterArea");
			this._index = index;
			if (this.filterContainers[index] && this.filterContainers[index].domNode) {
				this._filterContainer = this.filterContainers[index];
			} else {
				this._filterContainer = new InbasketFilterContainer({
					region: "top",
					inbasket: inbasket,
					contentList: this.contentLists[index],
					inbasketContainer: this
				});
				this.filterContainers[index] = this._filterContainer;
			}
			construct.place(this._filterContainer.domNode, this.contentLists[index].topContainer.domNode, "after");
			this.logExit("configureFilterArea");
		},

		/**
		 * Sets the status message on the desktop for the status widget (if displayed).
		 */
		setMessage: function() {
			if (this.selectedInbasket) {
				var message = this.selectedInbasket.message;
				if (ecm.model.desktop) {
					ecm.model.desktop.addMessage(new Message({
						number: message.number,
						level: 0,
						text: message.text,
						explanation: message.explanation,
						userResponse: message.userResponse,
						adminResponse: message.adminResponse
					}));
				}
			}
		},

		/**
		 * Function to resize the widget.
		 */
		resize: function() {
			try {
				if (this.getSelectedContentList()) {
					this._borderContainer.resize();
				}
				if (this._filterContainer) {
					this._filterContainer.resize();
				}
			} catch (e) {
				;
			}
		},

		destroy: function() {
			if (this.contentLists) {
				for ( var i in this.contentLists) {
					this.contentLists[i].destroyRecursive();
					this.contentLists[i] = null;
				}
				this.contentLists = null;
			}
			if (this.filterContainers) {
				for ( var i in this.filterContainers) {
					this.filterContainers[i].destroyRecursive();
					this.filterContainers[i] = null;
				}
				this.filterContainers = null;
			}
			this.selectedInbasket = null;
			this.repository = null;
			this._inbaskets = null;
			this._selectedWorklist = null;
			this.inherited(arguments);
		}
	});
});

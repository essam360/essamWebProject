/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/date/stamp",
	"dojo/has",
	"dojox/grid/DataGrid",
	"dojo/data/ItemFileWriteStore",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"idx/layout/ContentPane",
	"ecm/Logger",
	"ecm/Messages",
	"ecm/model/Desktop",
	"ecm/model/ValueFormatter",
	"dojo/text!./templates/TrackerMilestonesPane.html"
],

function(declare, lang, connect, domClass, geometry, stamp, has, DataGrid, ItemFileWriteStore, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ContentPane, Logger, Messages, Desktop, ValueFormatter, template) {

	/**
	 * @name ecm.widget.process.TrackerMilestonesPane
	 * @class Provides a pane that is used to view the milestones for an IBM FileNet P8 workflow.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.process.TrackerMilestonesPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.process.TrackerMilestonesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,
		_workItem: null,
		_milestonesRetrieved: false,
		_stepMilestones: true,
		_workClassName: null,

		postCreate: function() {
			this.inherited(arguments);
		},

		/**
		 * Called to set the work item object into the milestones pane.
		 * 
		 * @param workItem
		 *            A {@link ecm.model.WorkItem} object.
		 */
		setItem: function(workItem) {
			if (workItem) {
				this._workItem = workItem;
			}
		},

		/**
		 * Retrieves the milestone information for the work item and renders it in the milestones pane.
		 */
		render: function() {
			if (this._workItem && !this._milestonesRetrieved) {
				if (this._stepMilestones) {
					this._workItem.retrieveTrackerMilestones(lang.hitch(this, function(response) {
						this._createGrid(response);
						this._setGridData(this._levels[0]); // first level in the milestone level selector
						this._createLevelSelector();
						this.milestonesBorderContainer.resize();
						this.onCompleteRendering();
					}));
				} else {
					this._workItem.retrieveMilestones(lang.hitch(this, function(response) {
						this._createGrid(response);
						this._setGridData(this._levels[0]); // first level in the milestone level selector
						this._createLevelSelector();
						this.milestonesBorderContainer.resize();
						this._workClassName = response.name;
						this.onCompleteRendering();
					}));
				}
				this._milestonesRetrieved = true;
			}
		},

		/**
		 * An event function called after the widget is finished rendering.
		 */
		onCompleteRendering: function() {
		},

		_createGrid: function(response) {

			var structure = this._buildStructure();
			var iconCell = structure[0];
			iconCell.formatter = this._iconCellFormatter;

			this._items = response.datastore.milestones;
			this._store = this._buildStore(this._items, 1);
			if (this._grid) {
				this._milestonesArea.domNode.removeChild(this._grid.domNode);
				this._grid.destroyRecursive();
			}
			this._grid = new DataGrid({
				region: "center",
				selectionMode: "none",
				structure: structure,
				store: this._store,
				style: "width:100%",
				noDataMessage: this._messages.process_tracker_milestones_empty,
				canSort: function() {
					return false;
				}
			}, document.createElement("div"));

			domClass.add(this._grid.domNode, "ecmTrackerGrid");

			this._milestonesArea.domNode.appendChild(this._grid.domNode);
			this._grid.startup();
		},

		_createLevelSelector: function() {
			if (this._levelSelect) {
				this._levelSelector.removeChild(this._levelSelect.domNode);
				this._levelSelect.destroyRecursive();
				this._levelSelect = null;
			}

			var uniqueLevels = this._buildUniqueLevels(this._levels);
			var options = [];

			for (var i = 0; i < uniqueLevels.length; i++) {
				options.push({
					label: uniqueLevels[i],
					value: uniqueLevels[i]
				});
			}

			this._levelSelect = new dijit.form.Select({
				id: this.id + "_levelSelect",
				options: options
			});

			this._levelSelector.appendChild(this._levelSelect.domNode);

			this.connect(this._levelSelect, "onChange", function(milestoneLevel) {
				this._setGridData(milestoneLevel);
			});
		},

		_buildStore: function(items, milestoneLevelFilter) {
			var _items = [];
			this._levels = [];
			var isoDate;

			for (var i = 0; i < items.length; i++) {
				var milestoneItem = items[i];
				var milestoneLevel = milestoneItem.level;
				this._levels.push(milestoneLevel);

				if (milestoneLevel <= milestoneLevelFilter) {
					var date = "";
					if (milestoneItem.reached != null) {
						isoDate = stamp.fromISOString(milestoneItem.reached);
						date = ecm.model.desktop.valueFormatter.formatDate(isoDate, {
							formatLength: "short",
							fullYear: true
						});
					}

					var completed = date != "" ? true : false;

					this._blankGif = require.toUrl("dojo/resources/blank.gif");
					_items.push({
						"completedicon": completed,
						"milestone": milestoneItem.milestone,
						"level": milestoneLevel,
						"message": milestoneItem.message,
						"reached": date
					});
				}
			}

			return new ItemFileWriteStore({
				data: {
					items: _items
				}
			});
		},

		_iconCellFormatter: function(completed, rowIndex) {
			// to get past the html escaping of grid, return an object that nullifies the replace
			var IconValue = function(completed) {
				this.completed = completed;
				this._blankGif = require.toUrl("dojo/resources/blank.gif");
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				var data = '';

				if (completed == true) {
					data += '<img role="presentation" class="ecmMilestoneCompleteIcon" alt="' + ecm.messages.tracker_milestone_completed + '" title="' + ecm.messages.tracker_milestone_completed + '" src="' + this._blankGif + '"/>';
				} else {
					data += '&nbsp;';
				}
				return data;
			};

			IconValue.prototype.replace = function() {
				return this;
			};

			return new IconValue(completed);
		},

		_buildUniqueLevels: function(levels) {
			levels = levels.sort(function(a, b) {
				return a - b;
			});

			var uniqueLevels = [
				levels[0]
			];
			for (var i = 1; i < levels.length; i++) {
				if (levels[i - 1] !== levels[i]) {
					uniqueLevels.push(levels[i]);
				}
			}
			return uniqueLevels;
		},

		_setGridData: function(milestoneLevel) {
			this._store = this._buildStore(this._items, milestoneLevel);
			this._grid.setStore(this._store);
		},

		_buildStructure: function() {
			return [
				{
					field: "completedicon",
					name: "&nbsp;",
					attrs: "aria-label='" + this._messages.tracker_milestone_completed + "'",
					nosort: true,
					width: has("webkit") ? "30px" : "16px"
				},
				{
					field: "milestone",
					name: this._messages.process_tracker_milestone,
					nosort: true,
					width: "320px"
				},
				{
					field: "level",
					name: this._messages.process_tracker_milestone_level,
					nosort: true,
					width: "50px"

				},
				{
					field: "message",
					name: this._messages.process_tracker_message,
					nosort: true,
					width: "100%"
				},
				{
					field: "reached",
					name: this._messages.process_tracker_datereached,
					nosort: true,
					width: "125px"
				}
			];
		},

		/**
		 * Function to resize the widget.
		 */
		resize: function() {
			this.inherited(arguments);
			var cb = this._contentBox || geometry.getContentBox(this.containerNode);
			// note: if widget has padding this._contentBox will have l and t set,
			// but don't pass them to resize() or it will doubly-offset the child
			this.milestonesBorderContainer.resize({
				w: cb.w,
				h: cb.h
			});
		},

		destroy: function() {
			if (this._grid) {
				if (this._grid.domNode) {
					this._milestonesArea.domNode.removeChild(this._grid.domNode);
					this._grid.destroyRecursive();
				}
				this._grid = null;
			}
			if (this._levelSelect) {
				if (this._levelSelect.domNode) {
					this._levelSelector.removeChild(this._levelSelect.domNode);
					this._levelSelect.destroyRecursive();
				}
				this._levelSelect = null;
			}
			this._items = null;
			this._levels = null;
			this._store = null;
			this._workItem = null;
			this.inherited(arguments);
		}
	});
});

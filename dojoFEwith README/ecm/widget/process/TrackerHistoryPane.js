/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/date/stamp",
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
	"idx/html",
	"dojo/text!./templates/TrackerHistoryPane.html"
],

function(declare, lang, has, domClass, domStyle, geometry, stamp, DataGrid, ItemFileWriteStore, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ContentPane, Logger, Messages, Desktop, ValueFormatter, idxHtml, template) {

	/**
	 * @name ecm.widget.process.TrackerHistoryPane
	 * @class Provides a widget that is used to view the history of an IBM FileNet P8 workflow.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.process.TrackerHistoryPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.process.TrackerHistoryPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,
		_workItem: null,
		_historyRetrieved: false,

		/**
		 * A boolean that indicates if the workflow is an approval workflow.
		 */
		isApprovalWorkflow: false,
		/**
		 * Renders only the last history entry when true.
		 */
		showLatestHistoryEntryOnly: false,
		/**
		 * A boolean that shows or hides the tracker history map selector.
		 */
		showHistoryMap: true,

		postCreate: function() {
			this.inherited(arguments);
		},

		/**
		 * Called to set the work item object into the history pane.show
		 * 
		 * @param workItem
		 *            A {@link ecm.model.WorkItem} object.
		 */
		setItem: function(workItem) {
			if (workItem) {
				if (this._workItem && this._workItem != workItem) {
					this._historyRetrieved = false;
				}
				this._workItem = workItem;
			}
		},

		/**
		 * Retrieve the history information for the work item and render it in the history pane.
		 */
		render: function() {
			if (this._workItem && !this._historyRetrieved) {
				this._workItem.retrieveTrackerHistory(lang.hitch(this, function(response) {
					if (this.showHistoryMap) {
						this._createMapSelector(response);
					} else {
						domStyle.set(this._selectorArea.domNode, "display", "none");
					}
					this._createGrid(response);
					this.historyBorderContainer.resize();
					this.onCompleteRendering();
				}));
				this._historyRetrieved = true;
			}
		},

		/**
		 * An event function called after the widget is finished rendering.
		 */
		onCompleteRendering: function() {
		},

		_createGrid: function(response) {
			var historyItems = response.datastore.historyItems;
			if (this.showLatestHistoryEntryOnly) {
				this._items = new Array(historyItems[historyItems.length - 2]); // Gets the entry before the last history entry.  It is the last processed history item.
			} else {
				this._items = historyItems;
			}

			if (this._grid) {
				this._historyArea.domNode.removeChild(this._grid.domNode);
				this._grid.destroyRecursive();
			}
			this._store = this._buildStore(this._items, "all");
			this._grid = new DataGrid({
				region: "top",
				"aria-label": this._messages.process_tracker_history,
				selectionMode: "none",
				structure: this._buildStructure(),
				store: this._store,
				canSort: function() {
					return false;
				}
			}, document.createElement("div"));

			domClass.add(this._grid.domNode, "ecmTrackerGrid");

			this._historyArea.domNode.appendChild(this._grid.domNode);
			var cb = this._contentBox || geometry.getContentBox(this.containerNode);
			// Give the grid an initial size to start with (adjusted for filter map control height).
			this._grid.resize({
				w: cb.w,
				h: cb.h - 40
			});
			this._grid.startup();

			// Connects the history first column to show the user information tooltip.
			this.connect(this._grid, "onCellMouseOver", function(e) {
				var memberItem = e.cellIndex == 2 ? this._grid.getItem(e.rowIndex) : null; // only for the participant cell
				if (memberItem && memberItem.historyParticipant) {
					this._tooltipNode = e.cellNode;
					var toolTip = [];
					toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(ecm.messages.display_name) + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(memberItem.historyParticipant[0].displayName[0])) : idxHtml.escapeHTML(memberItem.historyParticipant[0].displayName[0]));
					toolTip.push("</span></div>");
					toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(ecm.messages.name) + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(memberItem.historyParticipant[0].name[0])) : idxHtml.escapeHTML(memberItem.historyParticipant[0].name[0]));
					toolTip.push("</span></div>");
					toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(ecm.messages.shortName) + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(memberItem.historyParticipant[0].shortName)) : idxHtml.escapeHTML(memberItem.historyParticipant[0].shortName[0]));
					toolTip.push("</span></div>");
					dijit.showTooltip(toolTip.join(""), e.cellNode, this.tooltipPosition);
				} else {
					dijit.hideTooltip(e.cellNode);
					this._tooltipNode = null;
				}
			});

			this.connect(this._grid, "onCellMouseOut", function(e) {
				dijit.hideTooltip(e.cellNode);
				this._tooltipNode = null;
			});

		},

		_createMapSelector: function(response) {
			if (this._mapSelect) {
				this._mapSelector.removeChild(this._mapSelect.domNode);
				this._mapSelect.destroyRecursive();
			}
			this._maps = response.datastore.workflowMaps;

			var options = [];
			options.push({
				label: this._messages.process_tracker_history_allmaps,
				value: 'all',
				selected: true
			}, {
				label: this._messages.process_tracker_history_workflow,
				value: 'Workflow'
			});

			var width = 11;
			// add submaps to map selector
			for (var i = 0; i < this._maps.length; i++) {
				var map = this._maps[i];
				width = Math.max(width, map.length);
				if (map != 'Workflow' && map != 'Malfunction' && map != 'Terminate')
					options.push({
						label: map,
						value: map
					});
			}

			options.push({
				label: this._messages.process_tracker_history_malfunction,
				value: 'Malfunction'
			}, {
				label: this._messages.process_tracker_history_terminate,
				value: 'Terminate'
			});

			this._mapSelect = new dijit.form.Select({
				options: options,
				style: "width:" + width * 10 + "px",
				id: this._mapSelector.id + "_Select"
			});

			this._mapSelector.appendChild(this._mapSelect.domNode);

			this.connect(this._mapSelect, "onChange", function(mapName) {
				this._store = this._buildStore(this._items, mapName);
				this._grid.setStore(this._store);
			});
		},

		_buildStore: function(items, map) {
			var _items = [];
			var isoDate;

			for (var i = 0; i < items.length; i++) {
				var historyItem = items[i];
				var date = "";
				if (historyItem.completed != null) {
					isoDate = stamp.fromISOString(historyItem.completed);
					date = ecm.model.desktop.valueFormatter.formatDate(isoDate, {
						formatLength: "short",
						fullYear: true
					});
				}

				if (historyItem.map == map || map == "all") {
					_items.push({
						"stepName": historyItem.stepName,
						"cycle": historyItem.cycle,
						"participant": this._getParticipantName(historyItem),
						"completed": date,
						"response": historyItem.response,
						"comments": historyItem.comments,
						"historyParticipant": historyItem.historyParticipant
					});
				}
			}
			return new ItemFileWriteStore({
				data: {
					items: _items
				}
			});
		},

		_getParticipantName: function(historyItem) {
			if (historyItem.participantDisplayName && historyItem.participantDisplayName.length > 0)
				return historyItem.participantDisplayName;
			else
				return historyItem.participant;
		},

		_buildStructure: function() {
			return [
				{
					field: "stepName",
					name: this._messages.process_tracker_stepname,
					nosort: true,
					width: "150px"
				},
				{
					field: "cycle",
					name: this.isApprovalWorkflow ? this._messages.process_tracker_review_cycle : this._messages.process_tracker_cycle,
					nosort: true,
					width: "40px"
				},
				{
					field: "participant",
					name: this._messages.process_tracker_participant,
					nosort: true,
					width: "115px"
				},
				{
					field: "completed",
					name: this._messages.process_tracker_completed,
					nosort: true,
					width: "115px"
				},
				{
					field: "response",
					name: this._messages.process_tracker_response,
					nosort: true,
					width: "150px"
				},
				{
					field: "comments",
					name: this._messages.process_tracker_comments,
					nosort: true,
					width: "100%",
					formatter: function(data) {
						return data.replace(/\n/g, "<br>");
					}
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
			if (this._grid) {
				// Give the grid an initial size to start with (adjusted for filter map control height).
				this._grid.resize({
					w: cb.w,
					h: cb.h - 40
				});
			}
			this.historyBorderContainer.resize({
				w: cb.w,
				h: cb.h
			});
		},

		destroy: function() {
			if (this._grid) {
				if (this._grid.domNode) {
					this._historyArea.domNode.removeChild(this._grid.domNode);
					this._grid.destroyRecursive();
				}
				this._grid = null;
			}
			if (this._mapSelect) {
				if (this._mapSelect.domNode) {
					this._mapSelector.removeChild(this._mapSelect.domNode);
					this._mapSelect.destroyRecursive();
				}
				this._mapSelect = null;
			}
			this._workItem = null;
			this._maps = null;
			this._items = null;
			this._store = null;
			this.inherited(arguments);
		}
	});
});

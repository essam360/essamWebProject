/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/store/Memory",
	"dijit/Tooltip",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/ColumnResizer",
	"gridx/modules/CellWidget",
	"idx/html",
	"../../model/Desktop",
	"./BaseDialog",
	"./ErrorDialog",
	"./MessageDialog",
	"dojo/text!./templates/BatchResultsDialogContent.html"
],

function(declare, //
lang, //
domClass, //
domGeom, //
MemoryStore, //
Tooltip, //
Grid, //
Cache, //
Focus, //
SelectRow, //
SingleSort, //
ColumnResizer, //
CellWidget, //
idxHtml, //
Desktop, //
BaseDialog, //
ErrorDialog, //
MessageDialog, //
template) {

	/**
	 * @name ecm.widget.dialog.BatchResultsDialog
	 * @class Provides a dialog box that displays the results of a batch operation. This dialog requires that an object
	 *        be passed to the constructor that provides these four public variables:
	 *        <ul>
	 *        <li><code>dialogTitle</code></li>
	 *        <li><code>dialogIntro</code></li>
	 *        <li><code>columns</code></li>
	 *        <li><code>statusItems</code></li>
	 *        </ul>
	 *        <p>
	 *        Descriptions of the public variable are provided below.
	 *        </p>
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.BatchResultsDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.BatchResultsDialog.prototype */

		// Dialog title.
		dialogTitle: "",

		// Dialog introduction text.
		dialogIntro: "",

		// An array of column descriptors for the grid.
		//
		//   [ {field: "name",          name: "File name", width: "20%" },
		//     {field: "status",        name: "Status",    width: "10%"},
		//     {field: "statusMessage", name: "Message",   width: "70%"} ]
		//
		columns: null,

		// An array of status objects that contain values for each column and an ecm.model.Message object
		// (message) for the item result details. Only the message object is required. The message object
		// may be any ecm.model.Message instance, one created directly or by createErrorMessage().
		//
		//   [ { name: "Test1.txt", status: "Error", statusMessage: "Error message.", message: msgObject },
		//     { name: "Test2.txt", status: "Cancelled", statusMessage: "Cancelled message.", message: msgObject} ]
		//
		statusItems: null,

		contentString: template,
		widgetsInTemplate: true,

		/**
		 * @private
		 */
		constructor: function() {
			if (!this.columns) {
				this.columns = [];
			}
			if (!this.statusItems) {
				this.statusItems = [];
			}
		},

		/**
		 * Creates the batch results dialog.
		 */
		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmBatchResultsDialog");
			this.setTitle(this.dialogTitle);
			this.setIntroText(this.dialogIntro);
			this._detailsButton = this.addButton(this.messages.batch_results_dialog_details_label, "_details", false, false, "DETAILS");

			// This dialog does not make any changes. Change the cancel button to close.
			this.cancelButton.set("label", this.messages.close);
		},

		/**
		 * Shows the batch results dialog.
		 */
		show: function() {
			var d = this.inherited(arguments);
			this._createGrid();
			return d;
		},

		/**
		 * @private
		 */
		_createGrid: function() {
			this._grid = new Grid({
				region: "center",
				cacheClass: Cache,
				store: this._createStore(),
				structure: this.columns,
				selectRowTriggerOnCell: true,
				modules: [
					ColumnResizer,
					CellWidget,
					Focus,
					{
						moduleClass: SelectRow,
						multiple: false,
						triggerOnCell: true
					},
					{
						moduleClass: SingleSort,
						initialOrder: [
							{
								colId: 1,
								descending: false
							}
						]
					}
				]
			});

			domClass.add(this._resultsGrid, "compact gridxWholeRow gridxAlternatingRows");
			this._resultsGrid.appendChild(this._grid.domNode);
			this._grid.startup();
			this.resize();

			this._connectGridTooltip();
			this.connect(this._grid.select.row, "onSelectionChange", lang.hitch(this, this._updateButtonState));
			this.connect(this._grid, "onRowDblClick", lang.hitch(this, function(evt) {
				this._dismissGridToolTip(evt);
				this._details();
			}));

			// Select the first row.
			this._grid.select.row.selectById("0");
			this._updateButtonState();
		},

		_createStore: function() {
			var items = [];
			if (this.statusItems) {
				for ( var i in this.statusItems) {
					// An id is required for each item. Use the row index.
					var item = {
						"id": "" + i
					};
					var statusItem = this.statusItems[i];
					for ( var prop in statusItem) {
						if (statusItem.hasOwnProperty(prop)) {
							item[prop] = statusItem[prop];
						}
					}
					items.push(item);
				}
			}
			return new MemoryStore({
				data: items
			});
		},

		_getSelected: function() {
			return this._grid && this._grid.select ? this._getItems(this._grid.select.row.getSelected()) : [];
		},

		_getItems: function(rowIndexes) {
			var items = [];
			for ( var i in rowIndexes) {
				var row = this._grid.row(rowIndexes[i]);
				if (row) {
					items.push(row.item());
				}
			}
			return items;
		},

		/**
		 * @private
		 */
		_getMessage: function(item) {
			return ((item && item.message) ? item.message : null);
		},

		/**
		 * @private
		 */
		_addMessagePart: function(message, part) {
			if (part && part.length > 0) {
				if (message.length > 0) {
					message.push("<br/><br/>");
				}
				message.push(part);
			}
		},

		/**
		 * @private
		 */
		_showTooltip: function(evt) {
			this._dismissGridToolTip(evt);

			var row = this._grid.row(evt.rowIndex);
			if (!row) {
				return;
			}
			var item = row.item();
			if (!item) {
				return;
			}

			var tooltipMsg = "";
			var message = this._getMessage(item);

			var tooltipMsgParts = [];

			this._addMessagePart(tooltipMsgParts, item.name);
			this._addMessagePart(tooltipMsgParts, item.status);
			this._addMessagePart(tooltipMsgParts, message.text);

			// If this is an error message, show everything.
			if (message.level >= 2) {
				this._addMessagePart(tooltipMsgParts, message.explanation);
				this._addMessagePart(tooltipMsgParts, message.userResponse);
				this._addMessagePart(tooltipMsgParts, message.adminResponse);
			}

			this._tooltipRowNode = row.node();
			Tooltip.show(tooltipMsgParts.join(""), this._tooltipRowNode, [
				"above",
				"below",
				"after",
				"before"
			], !this.isLeftToRight(), this.textDir);//38360
		},

		/**
		 * @private
		 */
		_getSelectedMessage: function() {
			var items = this._getSelected();
			if (items.length > 0) {
				return this._getMessage(items[0]);
			}
			return null;
		},

		/**
		 * @private
		 */
		_dismissGridToolTip: function(evt) {
			if (this._gridTooltipTimer[this._grid.id]) {
				clearTimeout(this._gridTooltipTimer[this._grid.id]);
				delete this._gridTooltipTimer[this._grid.id];
			}
			Tooltip.hide(this._tooltipRowNode);
			delete this._tooltipRowNode;
		},

		/**
		 * @private
		 */
		_connectGridTooltip: function() {
			this._gridTooltipTimer = {};
			this.connect(this._grid, "onRowMouseOver", lang.hitch(this, function(evt) {
				if (this._gridTooltipTimer[this._grid.id]) {
					clearTimeout(this._gridTooltipTimer[this._grid.id]);
				}
				this._gridTooltipTimer[this._grid.id] = setTimeout(lang.hitch(this, function() {
					this._showTooltip(evt);
				}), 700);
			}));
			this.connect(this._grid, "onRowMouseOut", lang.hitch(this, function(evt) {
				this._dismissGridToolTip(evt);
			}));
		},

		/**
		 * @private
		 */
		_updateButtonState: function() {
			// Disable the button if there is no selected message to display.
			this._detailsButton.set("disabled", (this._getSelectedMessage() == null));
		},

		/**
		 * @private
		 */
		_details: function() {
			var message = this._getSelectedMessage();
			if (message.level >= 2) {
				if (!this._errorDialog) {
					this._errorDialog = new ErrorDialog();
				}
				this._errorDialog.showMessage(message);
			} else {
				// The message text can only be set on create.
				if (this._messageDialog) {
					this._messageDialog.destroy();
				}
				this._messageDialog = new MessageDialog({
					text: message.text
				});
				this._messageDialog.show();
			}
		},

		/**
		 * Resizes the widget
		 */
		resize: function() {
			this.inherited(arguments);

			if (this._resultsGrid && this._grid) {
				var paneContentBox = domGeom.getContentBox(this._resultsGrid);
				this._grid.resize({
					h: paneContentBox.h,
					w: paneContentBox.w
				});
			}
		},

		/**
		 * Cleans up the widget.
		 */
		destroy: function() {
			if (this._grid) {
				if (this._grid.domNode) {
					this._grid.destroyRecursive();
				}
				delete this._grid;
			}
			if (this._errorDialog) {
				this._errorDialog.destroyRecursive();
				delete this._errorDialog;
			}
			if (this._messageDialog) {
				this._messageDialog.destroyRecursive();
				delete this._messageDialog;
			}
			this.inherited(arguments);
		}
	});
});

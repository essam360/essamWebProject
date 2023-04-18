/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/store/DataStore",
	"dojo/data/ItemFileWriteStore",
	"dojox/grid/DataGrid",
	"idx/html",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Repository",
	"ecm/model/WorkItem",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/dialog/MessageDialog",
	"dojo/text!./templates/TransferedWorkflowsDialogContent.html"

], function(declare, lang, domClass, DataStore, ItemFileWriteStore, DataGrid, idxHtml, LoggerMixin, Messages, Repository, WorkItem, BaseDialog, MessageDialog, template) {

	/**
	 * Displays a dialog where the user can select a transfered workflow to launch.
	 * 
	 * @name ecm.widget.dialog.TransferedWorkflowsDialog
	 * @class Provides a dialog box that is used to launch a transfered workflow.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.TransferedWorkflowsDialog", [
		BaseDialog,
		LoggerMixin
	], {
		/** @lends ecm.widget.dialog.TransferedWorkflowsDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmTransferedWorkflowsDialog");
			this.setTitle(this.messages.transfered_workflows_dialog_title);
			this.setIntroText(this.messages.transfered_workflows_dialog_info_text);
			this._selectButton = this.addButton(this.messages.transfered_workflows_dialog_select_button_label, "_select", false, false, "SELECT");
		},

		/**
		 * Makes the dialog visible.
		 */
		show: function() {
			this.logEntry("show");
			var d;
			if (this.items && this.items.length > 0) {
				this._createGrid(this.items);
				d = this.inherited(arguments);
			} else {
				var workItem = new WorkItem({
					id: "_id",
					name: "_name",
					repository: this.repository,
					connectionPoint: this.repository.connectionPoint
				});
				workItem.retrieveTransferedWorkflows(lang.hitch(this, function(items) {
					if (items.length > 0) {
						this.logDebug("Total items:" + items.length);
						this._createGrid(items);
						this.inherited("show", []);
					} else {
						this.logDebug("no transfered workflow found.");
						this._showMessage(this.messages.transfered_workflows_dialog_no_item_found);
					}
				}));
			}
			this.logExit("show");
			return d;
		},

		_showMessage: function(msg) {
			if (!this._messageDialog) {
				this._messageDialog = new MessageDialog();
			}
			this._messageDialog.showMessage(msg);
		},

		_createGrid: function(items) {
			this.logEntry("_createGrid");
			if (this._grid) {
				if (this._grid.domNode) {
					this._transferedWorkflowsGrid.removeChild(this._grid.domNode);
					this._grid.destroyRecursive();
				}
			}
			// create store:
			this._substore = new ItemFileWriteStore({
				data: {
					items: items
				}
			});

			// create structure:
			var layout = [];
			if (this.showDescription) {
				layout.push({
					field: "name",
					name: this.messages.transfered_workflows_dialog_name_col_hdr,
					formatter: lang.hitch(this, function(data, rowIndex) {
						return idxHtml.escapeHTML(this._getDisplayName(rowIndex));
					}),
					width: "35%"
				});
				layout.push({
					field: "description",
					name: this.messages.subscriptions_dialog_desc_col_hdr,
					formatter: lang.hitch(this, function(data, rowIndex) {
						var item = this._grid.getItem(rowIndex);
						if (item.description) {
							return idxHtml.escapeHTML(item.description);
						} else {
							return "";
						}
					}),
					width: "65%"
				});
			} else {
				layout.push({
					field: "name",
					name: this.messages.transfered_workflows_dialog_name_col_hdr,
					width: "100%"
				});
			}

			this._grid = new DataGrid({
				structure: layout,
				store: this._substore,
				selectionMode: "single"
			});

			this.connect(this._grid, "onCellClick", "_updateButtonState");
			this.connect(this._grid, "onRowClick", "_onRowClick");
			this.connect(this._grid, "onRowDblClick", "_onRowDblClick");
			this.connect(this._grid, "onStyleRow", "_onStyleRow");

			this._transferedWorkflowsGrid.appendChild(this._grid.domNode);
			this._grid.startup();
			this._updateButtonState();

			this.logExit("_createGrid");
		},

		_getDisplayName: function(rowIndex) {
			var item = this._grid.getItem(rowIndex);
			if (item.displayName) {
				return item.displayName;
			} else {
				return item.name;
			}
		},

		_onStyleRow: function(inRow) {
			// This event handler is really for support of keyboarding, specifically using the ENTR key to
			// select one of the row items, need to make sure the "Select" button is enabled as well.
			var item = this._grid.getItem(inRow.index);
			if (item) {
				if (inRow.selected) {
					this._selectButton.set("disabled", false);
				}
			}
		},

		_select: function() {
			var item = this._grid.selection.getSelected();
			if (item) {
				this._launchItem(item[0]);
			}
		},

		_onRowDblClick: function(event) {
			var item = this._grid.getItem(event.rowIndex);
			if (item) {
				this._launchItem(item);
			}
		},

		_launchItem: function(item) {
			this.logEntry("_launchItem");
			this.onCancel();
			// Launch using item name which is the work class name of a transfered workflow
			var workItem = new WorkItem({
				id: item.name[0],
				name: item.name[0],
				repository: this.repository,
				connectionPoint: this.repository.connectionPoint,
				workclass_name: item.name[0]
			});
			// Gets the attachment id as needed.
			if (this.contentItem) {
				var attachmentId = workItem.createAttachmentId(this.contentItem);
				workItem.F_AttachmentId = attachmentId;
			}
			ecm.widget.dialog.stepProcessorWindow.launchTransferedWorkflow(workItem);
			this.logExit("_launchItem");
		},

		_onRowClick: function(event) {
			var sel = false;
			var item = this._grid.getItem(event.rowIndex);
			if (item) {
				sel = true;
			}
			this._selectButton.set("disabled", !sel);
		},

		_updateButtonState: function() {
			this.logEntry("_updateButtonState");
			var sel = false;
			var items = this._grid.selection.getSelected();
			if (items && items.length > 0) {
				sel = true;
			}
			this._selectButton.set("disabled", !sel);
			this.logExit("_updateButtonState");
		},

		destroy: function() {
			if (this._messageDialog) {
				this._messageDialog.destroyRecursive();
				this._messageDialog = null;
			}
			if (this._grid) {
				if (this._grid.domNode) {
					this._transferedWorkflowsGrid.removeChild(this._grid.domNode);
					this._grid.destroyRecursive();
				}
				this._grid = null;
			}
			this._substore = null;
			this.inherited(arguments);
		}
	});
});

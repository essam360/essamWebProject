/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/query", //
	"dojo/_base/sniff", //
	"dojo/dom-class", //
	"dojo/data/ItemFileWriteStore", //
	"dojox/grid/DataGrid", //
	"dijit/form/Button", //
	"idx/html", //
	"./BaseDialog", //
	"./MessageDialog", //
	"ecm/model/Desktop", //
	"dojo/text!./templates/UnfileDialogContent.html"
], //
function(declare, //
lang, //
query, //
has, //
domClass, //
ItemFileWriteStore, //
DataGrid, //
Button, //
idxHtml, //
BaseDialog, //
MessageDialog, //
Desktop, //
template) {

	/**
	 * @name ecm.widget.dialog.UnfileDialog
	 * @class Provides a dialog box that is used to remove a document or a folder from a folder.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.UnfileDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.UnfileDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		expandable: false,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmUnfileDialog");
			this.setTitle(this.messages.unfile_dialog_title);
			this.setIntroText(this.messages.unfile_dialog_info_text);
			this._unfileButton = this.addButton(this.messages.unfile_dialog_remove_button_label, "_unfile", false, false, "REMOVE");
		},

		/**
		 * Shows the unfile dialog.
		 * 
		 * @param item
		 *            An {@link ecm.model.ContentItem} object that represents the item that is to be unfiled.
		 * @param folder
		 *            Can be null, an {@link ecm.model.ContentItem} object that represents the folder from which the
		 *            item is to be unfiled. In the unfile dialog, all of the folders in which the item is filed in will
		 *            be listed. If this argument is set, then the folder is selected by default.
		 */
		show: function(item, folder) {
			this._folder = folder;
			this._item = item;
			var showCallback = lang.hitch(this, function() {
				this.inherited("show", []);
				this.resize();
			});
			this._showFoldersFiledIn(showCallback);
		},

		/**
		 * @private Display all the folders the document is filed in
		 */
		_showFoldersFiledIn: function(showCallback) {
			//get folders filed in
			var self = this;
			this._item.retrieveFoldersFiledIn(function(folders, columns) {
				self._createGrid(folders, columns, showCallback);
			});

		},

		/**
		 * @private
		 */
		_createGrid: function(folders, columns, showCallback) {
			if (this._grid) {
				this._grid.destroy();
			}

			var formatter = ecm.model.desktop.valueFormatter;

			// create store:
			var items = [];
			var notSelectableCount = 0;
			for (i in folders) {
				var fld = folders[i];
				var isselected = false;
				var selectable = fld.hasPrivilege("privRemoveFromFolder");
				if (!selectable) {
					notSelectableCount++;
				}
				if (this._folder && (this._folder.id == fld.id) && selectable) {
					// The retrieved folder has attributes that the folder tree does not, including "PathName".
					lang.mixin(this._folder.attributes, fld.attributes);
					fld = this._folder;
					isselected = true;
				}
				items.push({
					name: fld.name,
					selected: isselected,
					path: formatter.formatPath(fld.getValue("PathName")),
					canSelect: selectable,
					contentItem: fld
				});
			}
			var fldstore = new ItemFileWriteStore({
				data: {
					items: items
				}
			});

			// Get column headers.
			var pathNameHeader = this.messages.unfile_dialog_path_col_hdr;

			for (j in columns) {
				var column = columns[j];
				if (column.field == "PathName") {
					pathNameHeader = idxHtml.escapeHTML(column.name);
					break;
				}
			}

			// create structure:
			var layout = [
				{
					field: "selected",
					name: " ",
					attrs: "aria-label='" + this.messages.unfile_dialog_select_folder_col_hdr + "'",
					width: "30px",
					type: dojox.grid.cells.Bool,
					"styles": "text-align:center;",
					editable: true
				},
				{
					field: "name",
					name: this.messages.unfile_dialog_folder_col_hdr,
					width: (this._item.repository.type == "p8" ? "30%" : "100%")
				}
			];

			// only show path for P8:
			if (this._item.repository.type == "p8") {
				layout.push({
					field: "path",
					name: pathNameHeader,
					width: "70%"
				});
			}
			this._grid = new DataGrid({
				structure: layout,
				store: fldstore,
				textDir: has("text-direction")
			});
			this.connect(this._grid, "onCellClick", "_updateButtonState");
			this.connect(this._grid, "onStyleRow", "_onStyleRow");
			if (notSelectableCount > 0) {
				this._connectGridToolTip(this._grid);
			}

			this._folderGrid.appendChild(this._grid.domNode);
			this._grid.startup();
			this._updateButtonState();

			// show the dialog (unless the doc is not filed)
			if (folders.length > 0) {
				showCallback();
			}

			// display error message if not filed in any folders
			var msg = null;
			if (folders.length == 0) {
				msg = this.messages.unfile_dialog_not_filed_msg;
			} else if (folders.length == notSelectableCount) {
				msg = this.messages.unfile_dialog_no_rights_to_unfile_msg;
			}
			if (msg != null) {
				var dialog = new MessageDialog({
					text: msg
				});
				dialog.show();
			}
		},

		/**
		 * @private
		 */
		_connectGridToolTip: function(grid) {
			// show a tooltip if the folder is not selectable
			this.connect(grid, "onRowMouseOver", lang.hitch(this, function(evt) {
				var item = grid.getItem(evt.rowIndex);
				if (item && !item.canSelect[0]) {
					dijit.showTooltip(this.messages.unfile_dialog_folder_not_selectable_tooltip, evt.cellNode);
				}
			}));
			this.connect(grid, "onRowMouseOut", lang.hitch(this, function(evt) {
				dijit.hideTooltip(evt.cellNode);
			}));
		},

		/**
		 * @private
		 */
		_onStyleRow: function(inRow) {
			var item = this._grid.getItem(inRow.index);
			if (item) {
				if (!item.canSelect[0]) {
					inRow.customClasses += " rowDisabled";
					var checkbox = query("input[type$=checkbox]", inRow.node);
					if (checkbox != null && checkbox.length >= 0) {
						checkbox[0].disabled = true;
					}
				}
			}
		},

		/**
		 * @private
		 */
		_selectAll: function(select) {
			for (var i = 0; i < this._grid.rowCount; i++) {
				var item = this._grid.getItem(i);
				if (item) {
					if (item.canSelect[0]) {
						item.selected[0] = select;
					}
				}
			}
			this._grid.update();
			this._updateButtonState();
		},

		/**
		 * @private
		 */
		_clickSelectAll: function() {
			this._selectAll(true);
		},

		/**
		 * @private
		 */
		_clickDeselectAll: function() {
			this._selectAll(false);
		},

		/**
		 * @private
		 */
		_unfile: function() {
			for (var i = 0; i < this._grid.rowCount; i++) {
				var item = this._grid.getItem(i);
				if (item && item.selected[0] == true) {
					var fld = item.contentItem[0];
					fld.removeFromFolder(this._item);
				}
			}
			this.onCancel();
		},

		/**
		 * @private
		 */
		_updateButtonState: function() {
			var sel = false;
			for (var i = 0; i < this._grid.rowCount; i++) {
				var item = this._grid.getItem(i);
				if (item && item.selected[0] == true) {
					sel = true;
					break;
				}
			}
			this._unfileButton.set("disabled", !sel);
		}
	});
});

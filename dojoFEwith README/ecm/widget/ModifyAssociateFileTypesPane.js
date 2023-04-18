/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/event",
	"dojo/_base/sniff", //
	"dojo/dom-class", //
	"dojo/dom-construct", //
	"dojo/dom-style", //
	"dojo/dom-attr",//
	"dojo/dom-geometry",//	
	"dojo/aspect",//
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/form/Button", //
	"dijit/form/DropDownButton", //
	"dijit/form/Textarea", //
	"dijit/layout/BorderContainer",//
	"dijit/layout/ContentPane", //
	"idx/html", //
	"../MessagesMixin", //         
	"../LoggerMixin", //
	"../model/Item", //
	"../model/Teamspace", //
	"./DropDownDialog", //
	"./listView/ContentList", //
	"ecm/model/ResultSet",
	"gridx/modules/Filter",
	"ecm/widget/Ellipsis",//
	"ecm/widget/listView/modules/Label",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/gridModules/FilterBar",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/Breadcrumb",
	"ecm/widget/listView/modules/FilterData",
	"ecm/widget/listView/modules/ViewDetail",
	"ecm/widget/listView/modules/ViewMagazine",
	"ecm/widget/listView/modules/Toolbar2",
	"ecm/widget/listView/modules/InlineMessage",
	"ecm/widget/dialog/BaseDialog",
	"dojo/text!./templates/ModifyAssociateFileTypesPane.html"
], //
function(declare, //
lang, //
event, //
has, //
domClass, //
domConstruct, //
domStyle, //
domAttr, //
domGeometry,//
aspect,//
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
DropDownButton, //
Textarea, //
BorderContainer,//
ContentPane, //
idxHtml, //
MessagesMixin, //         
LoggerMixin, //
Item, //
Teamspace, //
DropDownDialog, //
ContentList, //
ResultSet,//
Filter,//
Ellipsis,//
Label,//
RowContextMenu, //
FilterBar, //
Bar, //
Breadcrumb,//
FilterData, //
ViewDetail, //
ViewMagazine, //
Toolbar, //
InlineMessage, //
BaseDialog,//
template) { //

	/**
	 * @name ecm.widget.ModifyAssociateFileTypesPane
	 * @class Provides a widget that is used to display file types of an EntryTemplates
	 * @augments
	 */
	return declare("ecm.widget.ModifyAssociateFileTypesPane", [
		BorderContainer,
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.ModifyAssociateFileTypesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * folder item to be set
		 */
		_item: null,
		/**
		 * the selected row index in the selected entry template contentlist
		 */
		_selectedRow: -1,
		/**
		 * folder destination or entrytemplate destination
		 */
		_folderDest: true,
		/**
		 * the selected row index in the available entry template contentlist
		 */
		_selectedRowToBeAdded: -1,
		/**
		 * readOnly flag
		 */
		readOnly: false,
		postCreate: function() {
			this.logEntry("postCreate");
			this._fileTypesSelected.itemPropArea.splitter = false;
			this._fileTypessAvailable.itemPropArea.splitter = false;
			this.connect(this._fileTypesSelected, "onRowSelectionChange", lang.hitch(this, function(items) {
				if (items.length > 0) {
					var item = items[0];

					var rowId = this._fileTypesSelected.grid.store.getIdentityId(item.id);
					var rowIndex = this._fileTypesSelected.grid.model.idToIndex(rowId);
					var size = this._fileTypesSelected.grid.model.size();
					if (rowIndex >= 0) {
						if (!this.readOnly) {
							this._removeButton.set("disabled", false);
						}
						this._viewSelected.set("disabled", false);
					}
					this._selectedRow = rowIndex;
				}
			}));
			this.connect(this._fileTypessAvailable, "onRowSelectionChange", lang.hitch(this, function(items) {
				if (items.length > 0) {
					var item = items[0];
					var rowId = this._fileTypessAvailable.grid.store.getIdentityId(item.id);
					var rowIndex = this._fileTypessAvailable.grid.model.idToIndex(rowId);
					if (rowIndex >= 0) {
						if (!this.readOnly) {
							this._addButton.set("disabled", false);
						}
						this._viewAvailable.set("disabled", false);
					}
					this._selectedRowToBeAdded = rowIndex;
				}
			}));
			this.connect(this._fileTypesSelected, "onRender", lang.hitch(this, function(item) {
				if (this._selectedRow >= 0) {
					this._fileTypesSelected.grid.select.row.selectById(this._fileTypesSelected.grid.model.indexToId(this._selectedRow));
					this._fileTypesSelected.onRowSelectionChange([
						this._fileTypesSelected.grid.row(this._selectedRow).item()
					]);
				}
			}));
			this.connect(this._fileTypessAvailable, "onRender", lang.hitch(this, function(item) {
				if (this._selectedRowToBeAdded >= 0) {
					this._fileTypessAvailable.grid.select.row.selectById(this._fileTypessAvailable.grid.model.indexToId(this._selectedRowToBeAdded));
					this._fileTypessAvailable.onRowSelectionChange([
						this._fileTypessAvailable.grid.row(this._selectedRowToBeAdded).item()
					]);
				}
			}));
			this.connect(this._folderDestination, "onClick", lang.hitch(this, function(event) {
				this._clickFolderRadioButton();
			}));
			this.connect(this._ETDestination, "onClick", lang.hitch(this, function(event) {
				this._clickETRadioButton();
			}));
			this.own(aspect.after(this, "onShow", lang.hitch(this, "_InitialUpdate"), true));
			this._setupAvailableListColumns();
			this._setupSelectedListColumns();
			this.logExit("postCreate");
		},
		/**
		 * @private
		 */
		_clickFolderRadioButton: function() {
			if (!this._folderDest) {
				this._folderDestination.set("checked", true);
				this._ETDestination.set("checked", false);
				this._folderDest = true;
				this.onChanged();
			}
		},
		/**
		 * @private
		 */
		_clickETRadioButton: function() {
			if (this._folderDest) {
				this._folderDestination.set("checked", false);
				this._ETDestination.set("checked", true);
				this._folderDest = false;
				this.onChanged();
			}
		},
		/**
		 * reset grids in dialog
		 */
		reset: function() {
			var resultSet = this._fileTypessAvailable.getResultSet();
			resultSet.onChange(resultSet);
			var resultSetSelected = this._fileTypesSelected.getResultSet();
			resultSetSelected.onChange(resultSetSelected);
		},
		/**
		 * @private Being called when the dialog is being initially updated
		 */
		_InitialUpdate: function() {
			if (this._item.attributes.FileTypes) {
				var selectedFileTypes = this._item.attributes.FileTypes.split(/, ?/g);
				var resultSetTobeAdded = this._fileTypessAvailable.getResultSet();
				var items = [];
				for ( var i in selectedFileTypes) {
					//search for item in the available list
					var findInFileTypes = false;
					for ( var index in resultSetTobeAdded.items) {
						if (selectedFileTypes[i] == resultSetTobeAdded.items[index].getAttributes().name) {
							items.push(resultSetTobeAdded.items[index]);
							findInFileTypes = true;
							break;
						}
					}
					if (!findInFileTypes) {
						this.fileTypeError = true;
						var badFileType = new Item();
						badFileType.id = selectedFileTypes[i];
						badFileType.fileTypeError = true;
						badFileType.attributes.name = selectedFileTypes[i];
						items.push(badFileType);
					}
				}
				var orderedItems = [];
				if (this.fileTypeError) {
					for ( var i in items) {
						if (items[i].fileTypeError) {
							orderedItems.push(items[i]);
						}
					}
					for ( var i in items) {
						if (!items[i].fileTypeError) {
							orderedItems.push(items[i]);
						}
					}

				} else {
					orderedItems = items;
				}

				this._addItem(orderedItems);
			}
		},
		/**
		 * set the folder item that is hold by this._item and Set the icon and label of the folder item.
		 */
		setItem: function(item) {
			this.logEntry("setItem");
			this._item = item;
			if (this.readOnly) {
				this._folderDestination.set("disabled", true);
				this._ETDestination.set("disabled", true);
			}
			// Add folder/document type icon
			var iconClass = this._item.getMimeClass();
			domClass.add(this._itemInfoIcon, iconClass);
			this._itemInfoIcon.title = idxHtml.escapeHTML(this._item.name);
			if (!item.attributes.CurrentFolderAsParent) {
				this._ETDestination.set("checked", true);
				this._folderDest = false;
			} else {
				this._folderDestination.set("checked", true);
				this._folderDest = true;
			}
			if (item.repository._isP8() && item._targetOSIsNotCurrentOS) {
				this._ETDestination.set("checked", true);
				this._folderDest = false;
				this._folderDestination.set("disabled", true);
				this._ETDestination.set("disabled", true);
			}
			var ellipsis = new Ellipsis();
			ellipsis.set("fitParent", true);
			ellipsis.set("content", this._item.name);
			this._itemInfoName.appendChild(ellipsis.domNode);
			ellipsis.startup();

			this.logExit("setItem");
		},
		/**
		 * @private setup the contentlist's columns of the available list.
		 */
		_setupAvailableListColumns: function() {
			var resultSet = new ResultSet();
			var columnName = {
				field: "name",
				name: ecm.messages.entry_template_avaliable_MIME_types,
				width: "100%",
				sortable: true
			};
			var cells = [];
			cells[0] = [];
			cells[0].push(columnName);
			resultSet.structure = {};
			resultSet.structure.cells = cells;
			resultSet.num_results = 0;
			var appendResultSet = {
				items: ecm.model.desktop.fileTypes
			};
			if (!resultSet.items)
				resultSet.items = [];
			resultSet.append(appendResultSet);
			this._fileTypessAvailable.multiSelect = true;
			this._fileTypessAvailable.setResultSet(resultSet);
		},
		/**
		 * @private setup the contentlist's columns of the selected list.
		 */
		_setupSelectedListColumns: function() {
			var resultSet = new ResultSet();
			var columnName = {
				field: "name",
				name: ecm.messages.entry_template_selected_MIME_types,
				width: "100%",
				sortable: true,
				style: 'WHITE-SPACE:nowrap',
				decorator: function(data, rowId, rowIndex) {
					var item = this.grid.row(rowId).item();
					if (item.fileTypeError) {
						var altText = ecm.messages.entry_template_file_type_not_existing;
						var blankGif = require.toUrl("dojo/resources/blank.gif");
						return [
							'<img role="img" class="ecmMimeTypeIcon fileTypeErrorIcon" style="margin-top:1px" alt="' + altText + '" title="' + altText + '" src="' + blankGif + '" />' + data
						].join('');
					} else {
						return data;
					}
				}
			};
			var cells = [];
			cells[0] = [];
			cells[0].push(columnName);
			resultSet.structure = {};
			resultSet.structure.cells = cells;
			resultSet.num_results = 0;
			resultSet.rows = [];
			this._fileTypesSelected.multiSelect = false;
			this._fileTypesSelected.setResultSet(resultSet);

		},

		/**
		 * @private pop up a dialog to show the detail for a selected MIME type
		 */
		_showMIMETypeDetail: function(item) {
			var dialog = new BaseDialog();
			dialog.setTitle(ecm.messages.entry_template_MIME_types_info_dialog_title + " \"" + idxHtml.escapeHTML(item.getAttributes().name) + "\"");
			var textMessage = ecm.messages.entry_template_MIME_types;
			var contentTypes = item.getAttributes().contentTypes;
			for ( var i in contentTypes) {
				textMessage += "<br> <li> " + contentTypes[i];
			}
			dialog.setMessage(textMessage, "info");
			dialog.setMaximized(false);
			dialog.show();
		},
		/**
		 * @private
		 */
		_onClickViewAvailable: function() {
			var selectedItem = this._fileTypessAvailable.grid.row(this._selectedRowToBeAdded).item();
			this._showMIMETypeDetail(selectedItem);
		},
		/**
		 * @private
		 */
		_onClickViewSelected: function() {
			var selectedItem = this._fileTypesSelected.grid.row(this._selectedRow).item();
			this._showMIMETypeDetail(selectedItem);
		},
		/**
		 * @private add a item from the available list into the selected list
		 */
		_addItem: function(items) {
			var appendResultSet = {
				items: items
			};
			var resultSet = this._fileTypesSelected.getResultSet();
			if (!resultSet.items) {
				resultSet.items = [];
			}
			resultSet.append(appendResultSet);
			var resultSetTobeAdded = this._fileTypessAvailable.getResultSet();
			for ( var index in appendResultSet.items) {
				resultSetTobeAdded.deleteItem(appendResultSet.items[index]);
			}
			if (this._selectedRowToBeAdded >= resultSetTobeAdded.items.length) {
				this._selectedRowToBeAdded--;
			}
			resultSetTobeAdded.onChange(resultSetTobeAdded);
			if (this._selectedRowToBeAdded < 0) {
				this._addButton.set("disabled", true);
				this._viewAvailable.set("disabled", true);
			}
		},
		/**
		 * @private remove a selected item from the selected list and return it back to the available list
		 */
		_removeItem: function(item) {
			var resultSetSelected = this._fileTypesSelected.getResultSet();
			resultSetSelected.deleteItem(item);
			if (resultSetSelected.items == null || resultSetSelected.items.length == 0) {
				this._removeButton.set("disabled", true);
				this._viewSelected.set("disabled", true);
			}
			if (this._selectedRow >= resultSetSelected.items.length) {
				this._selectedRow--;
			}
			resultSetSelected.onChange(resultSetSelected);
			var resultSetAvailable = this._fileTypessAvailable.getResultSet();
			if (!resultSetAvailable.items) {
				resultSetAvailable.items = [];
			}
			if (!item.fileTypeError) {
				var appendResultSet = {
					items: [
						item
					]
				};
				resultSetAvailable.append(appendResultSet);
			}
		},
		/**
		 * @private
		 */
		_onClickAdd: function() {
			var selectedItems = this._fileTypessAvailable.getSelectedItems();
			this._addItem(selectedItems);
			this.onChanged();
		},
		/**
		 * @private
		 */
		_onClickRemove: function() {
			var selectedItem = this._fileTypesSelected.grid.row(this._selectedRow).item();
			this._removeItem(selectedItem);
			this.onChanged();
		},
		/**
		 * retrieve the file type result from the selected list.
		 */
		getFileTypes: function() {
			var resultSet = this._fileTypesSelected.getResultSet();
			var fileTypes = "";
			if (resultSet.items && resultSet.items.length > 0) {
				for ( var i in resultSet.items) {
					if (fileTypes != "")
						fileTypes += ", ";
					fileTypes += resultSet.items[i].getAttributes().name;
				}
			}
			return fileTypes;
		},
		/**
		 * read property _folderDestination
		 */
		getFolderDestination: function() {
			return this._folderDest;
		},
		/**
		 * Event for change options
		 */
		onChanged: function() {

		}

	});
});

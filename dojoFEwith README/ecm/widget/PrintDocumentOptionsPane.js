/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define(["dojo/_base/declare",  //
        "dojo/_base/lang",  //
        "dojo/_base/sniff", //
		"dojo/dom-construct",  //
		"dojo/dom-geometry", //
		"dojo/dom-class", //
		"dojo/dom-style", //
		"dojo/data/ItemFileWriteStore", //
		"dojo/store/Memory",  //
		"dojo/aspect", //
		"dojo/cookie", //
		"dijit/_TemplatedMixin", //
		"dijit/_WidgetsInTemplateMixin", // 
		"dijit/layout/ContentPane", //
		"ecm/MessagesMixin",
		"./_MoveUpDownGridxMixin",
		"gridx/Grid",  //
		"gridx/core/model/cache/Sync", //
		"gridx/modules/Focus",  //
		"gridx/modules/select/Row", //
		"gridx/modules/extendedSelect/Row",
		"gridx/modules/SingleSort",  //
		"gridx/modules/ColumnResizer", //
		"gridx/modules/CellWidget",  //
		"gridx/modules/Header",  //
		"gridx/modules/move/Row",
		"ecm/LoggerMixin", //
		"dojo/text!./templates/PrintDocumentOptionsPane.html" // 
		], //
function(
		declare, //
		lang, //
		has, //
		domConstruct, //
		domGeom, //
		domClass, //
		domStyle, //
		ItemFileWriteStore, //
		MemoryStore, //
		aspect, //
		cookie, //
		_TemplatedMixin, //
		_WidgetsInTemplateMixin, //
		ContentPane, //
		MessagesMixin, //
		_MoveUpDownGridxMixin, //
		Grid, //
		Cache, //
		Focus, //
		SelectRow, //
		ExtendedSelectRow, //
		SingleSort, //
		ColumnResizer, //
		CellWidget, //
		Header, //
		MoveRow, //
		LoggerMixin, //
		template) {
	/**
	 * @name ecm.widget.PrintDocumentOptionsPane
	 * @class Provides a widget that shows the content elements for a document
	 *        (for P8) or file parts (for CM8).
	 * @augments dijit.layout.ContentPane, dijit._TemplatedMixin,
	 *           dijit._WidgetsInTemplateMixin, ecm.LoggerMixin
	 */
	return declare("ecm.widget.PrintDocumentOptionsPane", [ ContentPane,
			_TemplatedMixin, 
			_WidgetsInTemplateMixin,
			_MoveUpDownGridxMixin,
			MessagesMixin, 
			LoggerMixin ], {
		/** @lends ecm.widget.PrintDocumentOptionsPane.prototype */

		templateString : template,
		widgetsInTemplate : true,
		items : null,
		rendered : false,

		postCreate : function() {
			this.inherited(arguments);
		},

		/**
		 * Sets the list of documents to print, need to call this before show()
		 * 
		 * 		items is a list of item objects 
		 * 
		 * 		for multi part/content element printing items is a list of objects in the format:
		 *  		{
		 *  			id: a unique identifier (eg: concatenate the item ID and the Index #  
		 *  			item : the content item the content element/part belongs to
		 *    			contentType: the content type/mime type of the content element/part
		 *    			index: the content element number or part number to print
		 *  		}
		 *  
		 */
		setItems : function(items) {
			this.items = items;
			if (items[0].item)
				this.repository = items[0].item.repository;
			else
				this.repository = items[0].repository;
			if (items.length == 1) {
				domClass.add(this._moveUpDownButtonContainer, "dijitHidden");
			}
			
//			if (this.repository.type == "od") {
//				this._coverPageLabel.innerHTML = this.messages.daeja_print_OD_cover_page;
//			}
		},

		render : function() {
			this.logEntry("render");
			this._createSelectedDocumentsGrid();
			this._retrieveSettings();
			this.rendered = true;
			this.logExit("render");
		},

		_createSelectedDocumentsGrid : function() {
			if (this._selectedDocumentsGrid) {
				this._selectedDocumentsGrid.destroy();
			}

			var structure = [ {
				field : "label",
				width : "100%"
			} ];

			this._selectedDocumentsGrid = new Grid({
				cacheClass : Cache,
//				canSort : function() {
//					return false;
//				},
				store : this._createStore(),
				structure : structure,
				modules : [ 
				            CellWidget,
				            Focus, 
				            MoveRow,
				            SelectRow,
							{
								moduleClass: ExtendedSelectRow,
								triggerOnCell: true
							},
				            {
								moduleClass : Header,
								hidden : true
							}
				             
				            ],
				textDir : has("text-direction")
			});
			this._SelectedDocumentsGridContainer.appendChild(this._selectedDocumentsGrid.domNode);
			this._selectedDocumentsGrid.startup();
			this.own(aspect.after(this._selectedDocumentsGrid.select.row, "onSelectionChange", lang.hitch(this, "_updateMoveButtons"), true));
			this._updateMoveButtons();
			this.resize();
		},

		_createStore : function() {
			var itemsArray = [];
			if (this.items) {
				for (var i = 0; i < this.items.length; i++) {
					var itemName = null;
					// need to check if this is a item content element, if so, get the item name
					if (this.items[i].item != null && this.items[i].index != null) {
						itemName = this.items[i].item.name;
					}
					else {
						itemName = this.items[i].name;
					}
					
					// encodeURIComponent seems to avoid rendering issues when special chars are in the id
					var item = {
						"id": encodeURIComponent(this.items[i].id),
						"order": i,
						label : itemName
					};
					itemsArray.push(item);
				}
			}

			var store = new MemoryStore({
				data : itemsArray
			});

			return store;
		},

		/**
		 * Resizes the widget
		 */
		resize: function() {
			this.inherited(arguments);

			if (this._selectedDocumentsGrid) {
				var paneContentBox = domGeom.getContentBox(this._SelectedDocumentsGridContainer);
				this._selectedDocumentsGrid.resize({
					h: paneContentBox.h,
					w: paneContentBox.w
				});
			}
		},
		
		/**
		 * Event fired when the up button is clicked.
		 */
		_onClickUp: function() {
			this._moveUpSelectedRows(this._selectedDocumentsGrid);
			this._updateMoveButtons();
		},

		/**
		 * Event fired when the down button is clicked.
		 */
		_onClickDown: function() {
			this._moveDownSelectedRows(this._selectedDocumentsGrid);
			this._updateMoveButtons();
		},
		
		// set the state of the moveup/down buttons
		_updateMoveButtons: function() {
			var selectedItems = this._selectedDocumentsGrid.select.row.getSelected();
			this._upButton.set('disabled', selectedItems.length == 0 || !this._hasRowsToMoveUp(this._selectedDocumentsGrid));
			this._downButton.set('disabled', selectedItems.length == 0 || !this._hasRowsToMoveDown(this._selectedDocumentsGrid));
		},
		
		// the items in the new order
		getSelectedItems: function() {
			var values = [];
			var dataArray = this.getData(this._selectedDocumentsGrid);
			for ( var i = 0; i < dataArray.length; i++) {
				var item = dataArray[i];
				if (item.id !== "") {
					// search this.items:
					for (var j = 0; j < this.items.length; j++) {
						var itemId = encodeURIComponent(this.items[j].id); 
						if (itemId == item.id) {
							values.push(this.items[j]);
							break;
						}
					}
				}
			}
			return values;
		},
		
		// returns the selected options		
		getOptions: function() {
			var printParams = {
					includeCoverPage: this._coverPage.get("checked")
				};
			return printParams;
		},
		
		saveSettings: function() {
			var coverPage = this._coverPage.get("checked");
			cookie("ecm.widget.dialog.PrintDocumentOptionsPane.coverPage", coverPage, {
				expires: 365
			});				
		},
		
		_retrieveSettings: function() {
			var coverPage = cookie("ecm.widget.dialog.PrintDocumentOptionsPane.coverPage");
			if (coverPage != null) {
				this._coverPage.set("checked", (coverPage==="true"));
			}
		},

		_hideCoverPageOption: function(hide) {
			if (hide)
				domStyle.set(this._coverPageRow, "display", "none");
			else
				domStyle.set(this._coverPageRow, "display", "");
		},
				
		_onFieldChange : function() {

		}

	});
});

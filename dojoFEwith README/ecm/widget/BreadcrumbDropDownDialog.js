/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/string",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/window",
	"dijit/form/Button",
	"dijit/popup",
	"dojox/layout/ResizeHandle",
	"../MessagesMixin",
	"../LoggerMixin",
	"../model/Desktop",
	"./DropDownDialog",
	"gridx/modules/Filter",
	"./FilterTextBox",
	"./listView/ContentList",
	"./listView/gridModules/RowContextMenuLoadMenu",
	"./listView/decorators/DetailsViewDecorator",
	"./listView/decorators/MagazineViewDecorator",
	"dojo/text!./templates/BreadcrumbDropDownDialog.html"
], //
function(declare, //
lang, //
event, //
string, //
domConstruct, //
domStyle, //
domClass, //
domGeom, //
win, //
Button, //
popup, //
ResizeHandle, //
MessagesMixin, //
LoggerMixin, //
Desktop, //
DropDownDialog, //
FilterModule, //
FilterTextBox, //
ContentList, //
RowContextMenu, //
DetailsViewDecorator, //
MagazineViewDecorator, //
template) {

	/**
	 * @name ecm.widget.BreadcrumbDropDownDialog
	 * @class Provides a widget that contains a drop-down list that is used with the {@link ecm.widget.Breadcrumb}
	 *        widget for navigation.
	 * @augments ecm.widget.DropDownDialog
	 */
	var BreadcrumbDropDownDialog = declare("ecm.widget.BreadcrumbDropDownDialog", [
		DropDownDialog,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.ContentListDropDownDialog.prototype */

		templateString: template,
		widgetsInTemplate: true,

		autofocus: false,
		hideCancelButton: true,
		hideOKButton: true,
		parseOnLoad: false,

		item: null,
		targetContentList: null,
		rendered: false,

		_isRendering: false,

		postCreate: function() {
			this.inherited(arguments);
			domStyle.set(this.domNode, "width", "auto");
			domStyle.set(this.containerNode, "height", "200px");

			this.childDocumentResults.setGridExtensionModules(this._getContentListGridModules());
			this.connect(this.childDocumentResults, "onRowClick", "onRowClick");

			this.connect(this.childDocumentResults.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.keyCode == dojo.keys.ENTER && !evt.shiftKey) { // Enter - perform default action
					this.logDebug("onkeydown", "Enter pressed, getting row.");
					if (evt.rowIndex == undefined) {
						evt.rowIndex = this._getRowIndex(evt);
					}
					event.stop(evt);
					this.onRowClick(this.childDocumentResults.grid.row(evt.rowIndex).item(), evt);
				}
			}));
		},

		/**
		 * @private Returns the row index when the event does not have an <code>evt.rowIndex</code>.
		 */
		_getRowIndex: function(evt) {
			if (evt.srcElement) {
				var node = evt.srcElement;
				while (node != null && !domClass.contains(node, "gridxRow")) {
					node = node.parentNode;
				}
				if (node) {
					var rowindex = node.getAttribute("rowindex");
					return parseInt(rowindex);
				}
			}
			return null;
		},

		/**
		 * Called when user enters data in the FilterTextBox.
		 */
		_filterData: function() {
			var value = this._filter.get("value");
			this._prevFilter = string.trim(value).toLowerCase();
			var grid = this.childDocumentResults.grid;
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

		setItem: function(item) {
			var methodName = "setItem";
			this.logEntry(methodName);

			if (this.item == null || this.item.id != item.id) {
				this.rendered = false;
				this.childDocumentResults.setResultSet(null);
				this.logDebug(methodName, "New or different item set.  Set rendered to: " + this.rendered);
			}

			this.item = item;
			this.logExit(methodName)
		},

		onRowClick: function(item, evt) {
			var methodName = "onRowClick";
			this.logEntry(methodName);
			if (item.compoundDocumentType != null && this.targetContentList != null) {
				this.targetContentList.openCompoundDocument(item);
				this.hide();
			}
			this.logExit(methodName);
		},

		/**
		 * Displays the pop-up.
		 * 
		 * @param data
		 *            Data to set as the content.
		 */
		show: function(data) {
			var methodName = "show";

			this.render(lang.hitch(this, function() {
				this.focus();

				var parent = data && data.parent ? data.parent : null;

				if (parent != null) {
					var domNode = parent != null && parent.domNode ? parent.domNode : null;

					popup.open({
						onCancel: lang.hitch(this, function() {
							this.hide();
						}),
						popup: this,
						parent: parent,
						around: domNode,
						orient: [
							"below"
						]
					});

					this.childDocumentResults._showItemPropArea(false);
					domClass.add(this.childDocumentResults.gridArea.domNode, "magazineView");
				} else {
					this.logDebug(methodName, "Called with null parent.");
				}
			}));
		},

		/**
		 * Closes the pop-up.
		 */
		hide: function() {
			popup.close(this);
		},

		render: function(callback) {
			var methodName = "render";
			this.logEntry(methodName);

			if (!this.rendered) {
				this._isRendering = true;

				this.logDebug(methodName, "Retrieving child CDs");

				this.item.retrieveRelated("children", "cds", lang.hitch(this, function(data) {
					if (callback) {
						callback();
					}

					this.logDebug(methodName, "Child result set retrieved!");
					if (data && data.isInstanceOf && (data.isInstanceOf(ecm.model.ResultSet) || data.isInstanceOf(ecm.model.FavoritesResultSet))) {
						data.structure = [
							{
								field: "mimeTypeIcon",
								headerAriaLabel: this.messages.mime_type_icon,
								decorator: "DetailsViewDecorator.mimeTypeDecorator",
								width: "16px"
							},
							{
								field: "content",
								headerAriaLabel: this.messages.name_label,
								decorator: "MagazineViewDecorator.navigationContentCellDecorator"
							}
						];

						this._setHeight(data.items.length);
						this.logDebug(methodName, "Setting result set data.");
						this.childDocumentResults.setResultSet(data);
					} else {
						this.logDebug(methodName, "Result set data was not recognized, and was not set.");
					}
					this._isRendering = false;
				}), lang.hitch(this, function(error) {
					if (callback) {
						callback();
					}

					this.logDebug(methodName, "Error occurred.");
					this._isRendering = false;
				}));

				this.rendered = true;
			} else {
				if (callback) {
					callback();
				}

				var resultSet = this.childDocumentResults.getResultSet();
				if (resultSet != null && resultSet.items) {
					this._setHeight(resultSet.items.length);
				}
				this.logDebug(methodName, "Already rendered, skippping render work.  Result set is " + (resultSet == null ? "null" : "NOT null"));
			}

			this.logExit(methodName);
		},

		_setHeight: function(length) {
			var methodName = "_setHeight";
			var view = win.getBox();
			var pos = domGeom.position(this.domNode);
			var totalHtAvail = view.h - pos.y;
			var height = length * 30;

			if (height < 200) {
				height = 200;
			}

			if ((height + 30) > totalHtAvail && (totalHtAvail - 30 >= 200)) {
				height = totalHtAvail - 30;
			} else if (height > totalHtAvail && height > 200) {
				height = 200;
			}

			this.logDebug(methodName, "Setting container height to " + height + "px");
			domStyle.set(this.containerNode, "height", height + "px");
		},

		/**
		 * Closes the pop-up if not rendering and if blur.
		 */
		_onBlur: function() {
			var methodName = "_onBlur";
			this.logEntry(methodName);

			if (!this._isRendering) {
				this.logDebug(methodName, "calling close.");
				this.hide();
			}

			this.logExit(methodName);
		},

		_getContentListGridModules: function() {
			var modules = [
				FilterModule
			];
			modules.push({
				moduleClass: RowContextMenu,
				performDefaultActionForItem: lang.hitch(this, this._getChildrenForItem)
			});
			return modules;
		},

		_getChildrenForItem: function() {
			var methodName = "_getChildrenForItem";
			this.logEntry(methodName);

			this.logExit(methodName);
		}
	});

	return BreadcrumbDropDownDialog;
});

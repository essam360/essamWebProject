/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/data/ItemFileReadStore",
	"dojox/grid/DataGrid",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/layout/BorderContainer",
	"idx/html",
	"../Messages",
	"../model/Desktop",
	"dojo/text!./templates/ChildComponentSelector.html"
], // 
function(declare, //
lang, //
array, //
event, //
domConstruct, //
domGeom, //
ItemFileReadStore, //
DataGrid, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
BorderContainer, //
idxHtml, //
Messages, //
Desktop, //
template) {

	/**
	 * @name ecm.widget.ChildComponentSelector
	 * @class Provides a widget that is used to display the child components of an IBM Content Manager item type.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.ChildComponentSelector", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.ChildComponentSelector.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.ChildComponent}.
		 */
		childComponentItem: null,
		/**
		 * Height to set on the border container.
		 */
		borderHeight: "200px;",
		/**
		 * Boolean that sets the columns to not resizable if <code>false</code>.
		 */
		columnsResizable: true,

		postCreate: function() {
			this.inherited(arguments);

			if (ecm.model.desktop.desktopLoaded) {
				this._createRendering();
			} else {
				this.connect(ecm.model.desktop, "onDesktopLoaded", "_createRendering");
			}
		},

		/**
		 * @private Creates the grid.
		 */
		_createRendering: function() {
			this._createGrid();
		},

		/**
		 * @private Creates and returns the store.
		 * @return A dojo.data.ItemFileReadStore.
		 */
		_createStore: function() {
			var numRows = 0;
			for ( var childComponentAttributeID in this.childComponentItem.attributes) {
				numRows = this.childComponentItem.getValues(childComponentAttributeID).length;
				break;
			}

			var items = [];
			for (var rowIndex = 0; rowIndex < numRows; rowIndex++) {
				var rowObj = {};
				for ( var childComponentAttributeID in this.childComponentItem.attributes) {
					var unformattedValue = this.childComponentItem.getValues(childComponentAttributeID)[rowIndex];
					var tzOffsets = this.childComponentItem.attributeValueTimeZoneOffsets ? this.childComponentItem.attributeValueTimeZoneOffsets[childComponentAttributeID] : null;
					var tzOffset = tzOffsets instanceof Array && tzOffsets.length > rowIndex ? tzOffsets[rowIndex] : null;
					var value = ecm.model.desktop.valueFormatter.formatValue(unformattedValue, this.childComponentItem.attributeTypes[childComponentAttributeID], this.childComponentItem.attributeFormats[childComponentAttributeID], tzOffset);
					rowObj[childComponentAttributeID] = value;
				}
				items.push(rowObj);
			}
			this._items = items;
			return new ItemFileReadStore({
				data: {
					items: items
				}
			});
		},

		/**
		 * @private Creates and returns the column structure.
		 * @return An array of column structure objects that contain the following properties:
		 *         <ul>
		 *         <li>width - Width value as a percentage string ("20%")</li>
		 *         <li>field - Child component property string Id</li>
		 *         <li>name - Child component property display name</li>
		 *         <li>nosresize - A boolean value, true if the column should not be resized. Optional. Treated as
		 *         false if not present.</li>
		 *         <li>formatter - Custom method that returns the HTML for displaying the value. Optional.</li>
		 *         </ul>
		 */
		_createStructure: function() {
			var numCols = 0;
			for ( var i in this.childComponentItem.attributes) {
				numCols++;
			}
			var width = 100 / numCols;

			var structure = [];
			for ( var childComponentAttributeID in this.childComponentItem.attributes) {
				var childComponentAttributeLabel = this.childComponentItem.attributeLabels[childComponentAttributeID];
				var data = {
					'width': 'auto',
					'field': childComponentAttributeID,
					'name': childComponentAttributeLabel
				};
				if (!this.columnsResizable) {
					data.noresize = true;
				}
				if (this.childComponentItem.attributeTypes[childComponentAttributeID] == "xs:reference") {
					data.formatter = lang.hitch(this, "_referenceAttributeFormatter");
				}
				structure.push(data);
			}
			return structure;
		},

		/**
		 * @private DataGrid formatter for reference attributes.
		 * @param inValue
		 *            The reference attribute value.
		 * @param inRowIndex
		 *            The grid row index.
		 * @param cell
		 *            The grid cell.
		 * @return The HTML for displaying a reference attribute.
		 */
		_referenceAttributeFormatter: function(inValue, inRowIndex, cell) {
			setTimeout(lang.hitch(this, function() {
				var node = cell.getNode(inRowIndex);
				if (node && node.firstChild) {
					this.connect(node.firstChild, "onclick", function(evt) {
						event.stop(evt);
						//var item = cell.grid.getItem(inRowIndex);
						this.onClickReferenceAttribute(inValue, evt);
						return false;
					});
				}
			}, 0));
			if (inValue && inValue.length > 0) {
				return '<a href="javascript:;">' + ecm.messages.add_document_properties_with_ellipsis_label + '</a>';
			} else {
				return '';
			}
		},

		/**
		 * This event is fired when the user clicks on the reference attribute.
		 * 
		 * @param referenceAttributeId
		 *            The id of the reference attribute.
		 */
		onClickReferenceAttribute: function(referenceAttributeId) {
		},

		/**
		 * @private Creates the grid.
		 */
		_createGrid: function() {
			this._deletePrevious();
			this._grid = new DataGrid({
				region: "center",
				structure: this._createStructure(),
				store: this._createStore(),
				escapeHTMLInData: false
			});
			this.borderContainer.addChild(this._grid);
			this._grid.startup();
		},

		/**
		 * @private Filters the grid.
		 */
		filterGrid: function(filterObj) {
			if (this._grid != null) {
				this._grid.queryOptions = {
					ignoreCase: true
				};
				this._grid.filter(filterObj);
			}
		},

		/**
		 * Resizes the widget.
		 */
		resize: function(changeSize) {
			if (this.borderContainer) {
				this.borderContainer.resize();
			}
		},

		/**
		 * @private Cleans up the previous data.
		 */
		_deletePrevious: function() {
			array.forEach(this.borderContainer.getChildren(), function(child) {
				this.borderContainer.removeChild(child);
			});
			if (this._grid) {
				if (this._grid.domNode) {
					this._grid.destroyRecursive();
				}
				delete this._grid;
			}
		},

		/**
		 * @private
		 */
		_calculateMaxWidth: function() {
			var maxWidths = {};
			for ( var childComponentAttributeID in this.childComponentItem.attributes) {
				var dataValues = [];
				for ( var j in this._items) {
					var item = this._items[j];
					var val = item[childComponentAttributeID];
					dataValues.push(idxHtml.escapeHTML(val));
				}
				var maxWidth = this._getMaxWidth(dataValues, this.domNode);
				maxWidths[childComponentAttributeID] = maxWidth;
			}
			return maxWidths;
		},

		/**
		 * @private
		 */
		_getMaxWidth: function(strings, parent) {
			var node = domConstruct.create("span", {
				innerHTML: strings.join("<br/>"),
				style: "visibility: hidden;"
			}, parent);
			var box = domGeom.getMarginBox(node);
			domConstruct.destroy(node);
			return box.w;
		}
	});
});

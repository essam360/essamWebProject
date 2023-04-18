/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/event",
	"dojo/_base/window",
	"dojo/dom-construct",
	"dojo/on",
	"dojo/string",
	"dijit/Menu",
	"dijit/form/DropDownButton",
	"idx/html"
], function(lang, connect, event, win, domConstruct, on, string, Menu, DropDownButton, idxHtml) {

	/**
	 * @name ecm.widget.listView.SocialViewDecorator
	 * @class Contains the decorators for social data.
	 * @since 2.0.3
	 */
	return {
		/** @lends ecm.widget.listView.SocialViewDecorator */

		/**
		 * Handles decoration of the social datum.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 * @since 2.0.2
		 */
		contentCellDecorator: function() {
			return [
				"<div class='ecmSocialDatum'><div class='socialMetadata'>",
				"<span data-dojo-attach-point='contentCellOriginatorNode' class='socialColumn socialOriginator'></span>",
				"<span data-dojo-attach-point='contentCellDateAddedNode' class='socialColumn' style='width:100%'></span>",
				"<span data-dojo-attach-point='contentCellVersionNode' class='socialLastColumn'></span></div></div>"
			].join('');
		},

		/**
		 * Updates the cell widget template created by the contentCellDecorator method.
		 * 
		 * @param gridData
		 *            Contains the data in the grid cell. This will be null in this case, because the social list relies
		 *            on retrieving the information from the actual item used to populate the row.
		 * @param storeData
		 *            Contains store data. This will be null in this method, because the appropriate flags are not
		 *            applied to the Grid to obtain raw store data in this method (it is not needed). See comments in
		 *            gridx/modules/CellWidget in the GridX documentation for details:
		 *            http://oria.github.io/gridx/gallery.html.
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 */
		contentCellValue: function(gridData, storeData, cellWidget) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();

			var originator = win.doc.createTextNode(item.getOriginatorDisplayName());
			domConstruct.place(originator, cellWidget.contentCellOriginatorNode, "only");
			var dateAdded = win.doc.createTextNode(item.getDateAdded());
			domConstruct.place(dateAdded, cellWidget.contentCellDateAddedNode, "only");
			if (item.getItemVersion()) {
				var version = string.substitute(this.messages.social_collaborated_version, [
					item.getItemVersion()
				]);
				version = win.doc.createTextNode(version);
				domConstruct.place(version, cellWidget.contentCellVersionNode, "only");
			}
		}
	};

});

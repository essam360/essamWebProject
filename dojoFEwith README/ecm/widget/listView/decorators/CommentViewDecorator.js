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
	"dojo/aspect",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/on",
	"dojo/string",
	"dijit/Menu",
	"dijit/form/DropDownButton",
	"idx/html"
], function(lang, connect, event, win, aspect, domConstruct, domGeometry, domStyle, on, string, Menu, DropDownButton, idxHtml) {

	/**
	 * @name ecm.widget.listView.CommentViewDecorator
	 * @class Contains the decorators for comments.
	 * @since 2.0.2
	 */
	return {
		/** @lends ecm.widget.listView.CommentViewDecorator */

		/**
		 * Handles decoration of the comment.
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
				"<div data-dojo-attach-point='contentCellIndentationNode' class='ecmReplyIndentation'>&nbsp;</div>",
				"<div data-dojo-attach-point='contentCellNode' class='ecmSocialDatum'><div class='commentText'>",
				"<span data-dojo-attach-point='contentCellCommentTextNode' class='socialColumn' style='width:100%'></span>",
				"<span data-dojo-attach-point='contentCellMenuNode' class='socialLastColumn'></span>",
				"</div><div class='socialMetadata'>",
				"<span data-dojo-attach-point='contentCellOriginatorNode' class='socialColumn'></span>",
				"<span data-dojo-attach-point='contentCellDateAddedNode' class='socialColumn' style='width:100%'></span>",
				"<span data-dojo-attach-point='contentCellVersionNode' class='socialLastColumn'></span></div></div>"
			].join('');
		},

		/**
		 * Updates the cell widget template created by the contentCellDecorator method, adding an action button to
		 * access comment actions.
		 * 
		 * @param gridData
		 *            Contains the data in the grid cell. This will be null in this case, because the comment list
		 *            relies on retrieving the information from the actual item used to populate the row.
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

			if (!lang.isFunction(item.getCommentTextNode))
				return "";

			var text = item.getCommentTextNode();
			domConstruct.place(text, cellWidget.contentCellCommentTextNode, "only");
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

			domStyle.set(cellWidget.contentCellIndentationNode, "display", item.isReplyComment() ? "" : "none");
			var conn = aspect.after(cellWidget, "startup", function() {
				var height = domGeometry.getMarginBox(cellWidget.contentCellNode).h;
				domGeometry.setContentSize(cellWidget.contentCellIndentationNode, {
					h: height
				});
				conn.remove();
			});

			if (cellWidget.actionButton) {
				cellWidget.actionButton.dropDown = null;
				cellWidget.actionButton.destroyRecursive();
			}

			if (!item.isEditable() && !item.isDeletable())
				return;

			cellWidget.actionButton = new DropDownButton({
				label: ecm.messages.actions,
				showLabel: false,
				iconClass: "commentMenuIcon"
			});

			this.own(on(cellWidget.actionButton.domNode, "contextmenu", function(e) {
				event.stop(e);
				e.preventDefault();
				e.stopPropagation();

				return false;
			}));
			this.own(on(cellWidget.actionButton.domNode, "mousedown", function(e) {
				e.preventDefault();
				e.stopPropagation();
			}));

			cellWidget.actionButton.loadDropDown = lang.hitch(this, function() {
				var menu = new Menu();
				this.grid.rowContextMenu.loadMenu(menu, [
					item
				], this.grid, cellWidget.cell).then(function(menu) {
					if (!menu || !menu.hasChildren())
						return;
					cellWidget.actionButton.dropDown = menu;
					setTimeout(function() {
						cellWidget.actionButton.openDropDown();
					}, 200);
				});
			});

			domConstruct.place(cellWidget.actionButton.domNode, cellWidget.contentCellMenuNode, "last");
		}
	};

});

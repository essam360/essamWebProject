/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/string",
	"ecm/model/_ModelObject",
	"ecm/model/_ModelStore",
	"ecm/MessagesMixin",
	"ecm/model/ResultSet",
	"ecm/model/ContentItem",
	"ecm/model/Desktop"
], function(declare, lang, array, string, ModelObject, ModelStore, MessagesMixin, ResultSet, Item, Desktop) {

	/**
	 * @private
	 * @name ecm.widget.dialog.SelectedItems
	 * @class
	 */
	var SelectedItems = declare("ecm.widget.dialog.SelectedItems", [
		ResultSet,
		MessagesMixin
	], {

		/**
		 * List of {@link ecm.model.Favorite} objects to load.
		 */
		items: null,

		/**
		 * Structure of favorites details view.
		 */
		structure: null,

		/**
		 * Structure of the favorites magazine view.
		 */
		magazineStructure: null,

		/**
		 * Index of the mime type column.
		 */
		mimeIndex: 0,

		/**
		 * Returns boolean true if has a toolbar.
		 */
		hasToolbar: false,

		/**
		 * Returns an array of column names.
		 */
		columnNames: null,

		/**
		 * Returns the paging size to use.
		 */
		pageSize: 200,

		constructor: function() {
			this.structure = SelectedItems.structure;

		},

		hasContinuation: function() {
			return false;
		},

		/**
		 * Reruns the search or re-retrieves the folder content.
		 */
		refresh: function() {
			this.onChange(this);
		},

		isResultSetForItem: function() {
			return true;
		},

		getActionsMenuItemsType: function(items) {

			return null;
		},
		/**
		 * Return the default toolbar name.
		 */
		getToolbarDef: function() {
			return null;
		},

		/**
		 * Load the default favorites toolbar.
		 * 
		 * @param callback
		 *            A function called when the toolbar actions have been loaded.
		 */
		loadToolbar: function(callback) {
			return callback();
		},

		_nop: null

	});

	/**
	 * @private
	 */
	SelectedItems.AllColumns = [
		{
			field: "icon",
			name: "&nbsp;",
			headerAriaLabel: ecm.messages.mime_type_icon,
			decorator: "DetailsViewDecorator.mimeTypeDecorator",
			filterable: "false",
			width: "34px",
			webkitWidth: "52px",
			cellClasses: "ecmIconCell",
			headerClasses: "ecmIconCell",
			sortable: false
		},
		{
			field: "name",
			name: ecm.messages.Name,
			sortable: true
		}
	];

	/**
	 * This will be the default structures for the Unified Search Selected Repositories Table
	 * 
	 * @private
	 */
	SelectedItems.structure = {
		cells: [
			[
				SelectedItems.AllColumns[0],
				SelectedItems.AllColumns[1]
			]
		]
	};

	/**
	 * Returns an array of selected columns.
	 * 
	 * @returns Returns the selected columns as an array. If no columns are selected the return value is "undefined".
	 * @memberof ecm.widget.dialog.SelectedItems
	 */
	SelectedItems.getSelectedColumns = function() {
		if (!selectedColumns) {
			//try get this from a cookie

			selectedColumns = [
				SelectedItems.AllColumns[0],
				SelectedItems.AllColumns[1]

			];
		}

		return selectedColumns;
	};
	return SelectedItems;
});

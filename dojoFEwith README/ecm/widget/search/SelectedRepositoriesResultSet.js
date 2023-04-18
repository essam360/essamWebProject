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
	"ecm/model/_searchUtils",
	"ecm/model/ResultSet",
	"ecm/model/ContentItem",
	"ecm/model/Desktop",
	"ecm/model/SearchContentClasses",
	"ecm/model/ContentClass"

], function(declare, lang, array, string, ModelObject, ModelStore, MessagesMixin, utils, ResultSet, Item, Desktop, SearchContentClasses, ContentClass) {

	/**
	 * @private
	 * @name ecm.widget.search.SelectedRepositoriesResultSet
	 * @class
	 */
	var SelectedRepositoriesResultSet = declare("ecm.widget.search.SelectedRepositoriesResultSet", [
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
			if (this.columns) {
				this.structure = this.columns;
				delete this.columns;
			} else {
				//use the default structure
				this.structure = SelectedRepositoriesResultSet.structure;
			}

			if (this.magazineColumns) {
				this.magazineStructure = this.magazineColumns;
				delete this.magazineColumns;
			}

			if (this.rows) {
				this.items = this.buildItems(this.rows);
				delete this.rows;
			} else {
				if (!this.items)
					this.items = [];
			}
		},

		/**
		 * Return a {@link ecm.model._ModelStore} object for the list of result set items.
		 */
		getStore: function() {
			return new ModelStore(this, this.getItems, null, lang.hitch(this, this.deleteItem));
		},

		getItem: function(index) {
			return this.items[index];
		},

		getIndexOfItem: function(item) {
			for ( var i in this.items) {
				if (item.id == this.items[i].id)
					return i;
			}
			return -1;
		},

		getItemById: function(id) {
			for ( var i in this.items) {
				if (this.items[i].id == id)
					return this.items[i];
			}
			return null;
		},

		_deleteItem: function(item) {
			for ( var index in this.items) {
				if (item.id == this.items[index].id) {
					this.items.splice(index, 1);
					return true;
				}
			}
			return false;
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

		/**
		 * Build the list of items from JSON.
		 * 
		 * @param jsonItemsArray
		 *            A Json object holding the list of items to construct
		 * @param templates
		 *            A Json object holding the list of templates
		 */
		buildItems: function(/* Array */jsonItemsArray) {
			var result = [];
			for ( var i in jsonItemsArray) {
				var itemJSON = jsonItemsArray[i];
				var repoType = itemJSON.repository.type;

				itemJSON.repositoryname = itemJSON.repository.name;

				if (repoType == "od") {
					if (!itemJSON.selected_folder_label && itemJSON.searchTemplate && itemJSON.searchTemplate.name)
						itemJSON.selected_folder_label = itemJSON.searchTemplate.name;
					if (!itemJSON.selected_classes_label) {
						itemJSON.selected_classes_label = this.messages.not_applicable;
					}

					if (!itemJSON.search_options_summary) {
						itemJSON.search_options_summary = this.messages.not_applicable;
					}

					itemJSON.text_search_enabled = this.messages.not_applicable;
				} else {
					if (!itemJSON.selected_classes_label) {
						if (repoType == "box") {
							itemJSON.selected_classes_label = itemJSON.metadataTemplate ? itemJSON.metadataTemplate.name : "";
						} else if (itemJSON.contentClass && itemJSON.contentClass.name) {
							itemJSON.selected_classes_label = itemJSON.contentClass.name;
							if (itemJSON.searchSubclasses) {
								itemJSON.selected_classes_label += " " + this.messages.include_subclasses_note;
							}
						}
					}

					if (!itemJSON.selected_folder_label && itemJSON.folder && itemJSON.folder.name) {
						itemJSON.selected_folder_label = itemJSON.folder.name;
						if (itemJSON.searchSubfolders) {
							itemJSON.selected_folder_label += this.messages.unified_search_including_subfolders;
						}

					} else if (!itemJSON.selected_folder_label) {
						itemJSON.selected_folder_label = this.messages.folder_tree_repository_root_name;
					}

					if (!itemJSON.search_options_summary) {
						itemJSON.search_options_summary = this._summarizeSearchOptions(itemJSON);
					}

					if (itemJSON.text_search_enabled == null) {
						if (utils.isRepositoryTextSearchable(itemJSON.repository))
							itemJSON.text_search_enabled = itemJSON.textSearchEnabled ? this.messages.yes : this.messages.no;
						else
							itemJSON.text_search_enabled = this.messages.not_applicable;
					}
				}

				itemJSON.getMimeClass = function() {
					var mimeClass = "";
					if (this.repository.type == "p8") {
						mimeClass = "p8RepositoryIcon";
					} else if (this.repository.type == "cm") {
						mimeClass = "cmRepositoryIcon";
					} else if (this.repository.type == "od") {
						mimeClass = "odRepositoryIcon";
					} else if (this.repository.type == "cmis") {
						mimeClass = "cmisRepositoryIcon";
					} else if (this.repository.type == "box") {
						mimeClass = "boxRepositoryIcon";
					}
					return mimeClass;
				};

				if (repoType == "p8")
					itemJSON.mimetype = this.messages.filenet_p8;
				else if (repoType == "cm")
					itemJSON.mimetype = this.messages.content_manager;
				else if (repoType == "od")
					itemJSON.mimetype = this.messages.ondemand;
				else if (repoType == "cmis")
					itemJSON.mimetype = this.messages.cmis;
				else if (repoType == "box")
					itemJSON.mimetype = this.messages.box_content;
				else
					itemJSON.mimetype = "";

				itemJSON.parent = this;
				itemJSON.attributes = itemJSON;
				result.push(itemJSON);
			}
			return result;
		},

		_summarizeSearchOptions: function(itemJson) {
			var summary = "";
			if (itemJson.objectType) {
				if (itemJson.objectType == "document")
					summary += this.messages.object_type_documents;
				else if (itemJson.objectType == "document")
					summary += this.messages.object_type_folders;
				else if (itemJson.objectType == "all")
					summary += this.messages.object_type_documents_folders;
			}
			if (itemJson.version) {
				if (summary) {
					summary = string.substitute(this.messages.append_comma, [
						summary
					]);
				}
				if (itemJson.version == "releasedversion")
					summary += this.messages.search_released_version;
				else if (itemJson.version == "currentversion")
					summary += this.messages.search_current_version;
				else if (itemJson.version == "allversions")
					summary += this.messages.search_all_versions;
			}

			return summary;
		},

		getActionsMenuItemsType: function(items) {

			return null;
		},

		/**
		 * Appends the specified set of items to the current list
		 * 
		 * @param jsonItemsArray
		 *            Array of Unified Search repository definitons. A [] object
		 */
		appendItems: function(jsonItemsArray) {
			if (!this.items) {
				this.items = [];
			}

			var results = this.buildItems(jsonItemsArray);

			var update = false;

			var item;
			if (results) {

				var spliceL = [];
				for ( var i in results) {
					var added = false;
					for ( var j in this.items) {
						if (this.items[j].id == results[i].id || (results[i].original && results[i].original.id == this.items[j].id)) {
							added = false;
							update = false;
							item = results[i];
							spliceL.push(this.items[j]);
							break;
						}
					}
					this.items.push(results[i]);
				}

				var self = this;
				this.items = array.filter(this.items, function(item) {
					return array.indexOf(spliceL, item) == -1;

				});
				if (results && results.length == 1 && update) {
					item.onChange([
						item
					]);
				} else if (results && results.length == 1 && !update) {
					this.onAddItem(results[0]);
					this.onChange(this);
				} else {
					this.onChange(this);
				}

			}

		},

		onAddItem: function(item) {

		},

		/**
		 * Returns an array of objects for all hits in the result set.
		 * 
		 * @param handler
		 *            Function.
		 * @return Array of {} objects.
		 */
		getItems: function(/* function */handler) {
			if (handler)
				handler(this.items);
			return this.items; // just returns the cached items
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
		/**
		 * Returns an array of column names.
		 */
		getColumns: function() {
			if (!this.columnNames) {
				if (this.structure && this.structure.cells) {
					var array = [];
					for ( var i in this.structure.cells) {
						for ( var j in this.structure.cells[i]) {
							if (this.structure.cells[i][j].field) {
								array.push(this.structure.cells[i][j].field);
							}
						}
					}
					this.columnNames = array;
				} else {
					this.columnNames = [];
				}
			}
			return this.columnNames;
		},
		_nop: null

	});

	SelectedRepositoriesResultSet.AllColumns = [
		{
			field: "icon",
			name: "&nbsp;",
			headerAriaLabel: string.substitute(ecm.messages.repository_type_icon, [
				ecm.messages.repository
			]),
			decorator: "DetailsViewDecorator.mimeTypeDecorator",
			filterable: "false",
			width: "34px",
			webkitWidth: "52px",
			cellClasses: "ecmIconCell",
			headerClasses: "ecmIconCell",
			sortable: false
		},
		{
			field: "repositoryname",
			name: ecm.messages.repository,
			sortable: false
		},
		{
			field: "selected_folder_label",
			name: ecm.messages.search_scope,
			sortable: false
		},
		{
			field: "selected_classes_label",
			name: ecm.messages.search_class_template,
			sortable: false
		},
		{
			field: "search_options_summary",
			name: ecm.messages.object_type_version,
			sortable: false
		},
		{
			field: "text_search_enabled",
			name: ecm.messages.unified_search_text_search_enabled,
			sortable: false
		}
	];
	/**
	 * This will be the default structures for the Unified Search Selected Repositories Table;
	 */
	SelectedRepositoriesResultSet.structure = {
		cells: [
			[
				SelectedRepositoriesResultSet.AllColumns[0],
				SelectedRepositoriesResultSet.AllColumns[1],
				SelectedRepositoriesResultSet.AllColumns[2],
				SelectedRepositoriesResultSet.AllColumns[3],
				SelectedRepositoriesResultSet.AllColumns[4],
				SelectedRepositoriesResultSet.AllColumns[5]
			]
		]
	};

	var selectedColumns, availableColumns;

	SelectedRepositoriesResultSet.onColumnsChanged = function(selected, available) {

	},

	/**
	 * Use cookies to store the existing data if available .
	 */

	SelectedRepositoriesResultSet.getAvailableColumns = function() {

		if (!availableColumns) {
			availableColumns = [
				SelectedRepositoriesResultSet.AllColumns[5],
				SelectedRepositoriesResultSet.AllColumns[6]
			];
		}
		return availableColumns;

	};

	SelectedRepositoriesResultSet.setAvailableColumns = function(columns) {

		availableColumns = columns;
		// do we need to propagate this all the time
		SelectedRepositoriesResultSet.onColumnsChanged(availableColumns, selectedColumns);

		return availableColumns;

	};

	SelectedRepositoriesResultSet.getSelectedColumns = function() {

		if (!selectedColumns) {
			//try get this from a cookie

			selectedColumns = [
				SelectedRepositoriesResultSet.AllColumns[0],
				SelectedRepositoriesResultSet.AllColumns[1],
				SelectedRepositoriesResultSet.AllColumns[2]

			];
		}

		return selectedColumns;
	};

	SelectedRepositoriesResultSet.setSelectedColumns = function(columns) {

		selectedColumns = columns;
		// do we need to propagate this all the time
		SelectedRepositoriesResultSet.onColumnsChanged(availableColumns, selectedColumns);
	};

	return SelectedRepositoriesResultSet;

});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/dom-style",
	"dojo/string",
	"dojo/aspect",
	"dijit/_WidgetBase",
	"idx/layout/BorderContainer",
	"../../model/Desktop",
	"../listView/modules/FilterData",
	"./SelectedRepositoriesToolbar",
	"../listView/modules/Bar",
	"../listView/ContentList",
	"./SelectedRepositoriesResultSet",
	"./UnifiedSearchRepositorySelectorDialog",
	"ecm/Messages",
	"ecm/model/Message",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/widget/dialog/MessageDialog",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/UnifiedSearchRepositoriesList.html"
],

function(declare, //
lang, //
array,//
has, //
domStyle, //
string,//
aspect,//
ContentPane, //
BorderContainer, //
Desktop, //
FilterData, //
SelectedRepositoriesToolbar, //
Bar, //
ContentList, //
SelectedRepositoriesResultSet,//
Dialog,//
Messages,//
Message,//
TemplateMixin,//
WidgetsInTemplateMixin,//
MessageDialog,//
BidiComplex,//
template//

) {

	/**
	 * @private
	 * @name ecm.widget.search.UnifiedSearchRepositoriesList
	 * @class Provides a Grid with Toolbar that is used to add repositories to a Unified Search defintion.
	 * @augments ecm.widget.layout._LaunchBarPane
	 * @since 2.0.2
	 */
	var UnifiedSearchRepositoriesList = declare("ecm.widget.search.UnifiedSearchRepositoriesList", [
		ContentPane,
		TemplateMixin,
		WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.search.UnifiedSearchRepositoriesList.prototype */

		templateString: template,
		widgetsInTemplate: true,
		messages: ecm.messages,

		_dialog: null,

		searchRepositories: null,
		readOnly: false,

		constructor: function() {
			this.inherited(arguments);
			if (!this.searchRepositories)
				this.searchRepositories = [];
		},

		setSearchRepositories: function(searchRepositories) {
			this.searchRepositories = searchRepositories || [];
			if (this._started) {
				var resultSet = new SelectedRepositoriesResultSet();
				if (this.searchRepositories.length > 0)
					resultSet.appendItems(this.searchRepositories);
				this.setResultSet(resultSet);
			}
		},

		_setupDialog: function() {
			if (!this._dialog) {
				this._dialog = new Dialog();
			}
		},

		startup: function() {
			this.inherited(arguments);

			if (this.readOnly)
				return;

			this.contentList.setContentListModules(this.getContentListModules());

			var resultSet = new SelectedRepositoriesResultSet();
			if (this.searchRepositories.length > 0)
				resultSet.appendItems(this.searchRepositories);
			this.setResultSet(resultSet);

			this._setupDialog();

			var toolbar = this.contentList.getContentListModule("toolbar");

			aspect.after(toolbar, "onAddRepository", lang.hitch(this, "onAddRepository"), true);

			aspect.after(this.resultSet, "onAddItem", lang.hitch(this, function(item) {
				if (has("dojo-bidi") && item.selected_folder_label) {
					item.selected_folder_label = BidiComplex.createDisplayString(item.selected_folder_label, "FILE_PATH");
				}
				this.contentList.grid.store.onNew(item);
			}), true);

			aspect.after(this.contentList, "onRowDblClick", lang.hitch(this, "onEditRepository"), true);

			aspect.after(toolbar, "onEditRepository", lang.hitch(this, "onEditRepository"), true);

			aspect.after(toolbar, "onRemoveRepository", lang.hitch(this, "_remove"), true);

			aspect.after(this._dialog.UnifiedSearchRFCSelector, "onAddRepository", lang.hitch(this, "_update"), true);
		},

		_update: function(searchRepository) {
			var updated = false;
			var index = -1;

			//first look for an add and then an edit in that order;
			for (i in this.searchRepositories) {
				if (this.searchRepositories[i].id == searchRepository.id && !(searchRepository.original && searchRepository.original.id == this.searchRepositories[i].id)) {
					index = i;
					break;
				}
			}
			var original;
			if (index > -1) {
				original = this.searchRepositories[index];

			}

			//editing case
			var edit = false;
			var ignoreUpdate = false;
			if (!original || index == -1) {
				for (i in this.searchRepositories) {
					if (searchRepository.original && this.searchRepositories[i].id == searchRepository.original.id) {
						index = i;
						edit = true;
						break;
					}
				}

				if (index > -1) {
					original = searchRepository.original;
				}
			}

			if (edit && original && (!original.equals(searchRepository))) {//update
				if (this.onUpdate(original, searchRepository)) {
					this.searchRepositories[index] = searchRepository;
					this.resultSet.appendItems([
						searchRepository
					]);
					updated = true;
				}
			}
			if (edit && original && original.equals(searchRepository)) {//update ignore

				ignoreUpdate = true;

			} else if (!edit && !original && this.onAdd(searchRepository)) {//add

				if (this._willExceedLimitOnAdd(searchRepository)) {
					updated = false;
					this._showErrorMessage("repository_limit_reached", [
						searchRepository.name,
						Math.max(5, UnifiedSearchRepositoriesList.MAX_REPOSITORIES)
					]);
				} else {
					this.searchRepositories.push(searchRepository);
					this.resultSet.appendItems([
						searchRepository
					]);
					updated = true;
				}

			} else if (!edit && original) {//duplicate add
				this._showErrorMessage("repository_already_selected", [
					searchRepository.name
				]);
			}
			if (updated) {
				// If there's a Box repository, rename the "Class" column to "Class or Template"
				var col = this.contentList && this.contentList.grid && this.contentList.grid.column(3);
				if (col)
					col.headerNode().innerHTML = this.messages[array.some(this.searchRepositories, "return item.repository.type == 'box';") ? "unified_search_class_or_template" : "search_class_template"];
				
				this.onChange(searchRepository);
			}

			this._dialog.UnifiedSearchRFCSelector.searchRepositories = this.searchRepositories;

			return updated || ignoreUpdate;
		},
		
		_willExceedLimitOnAdd: function(repository) {
			var items = this.resultSet.getItems();
			return items ? items.length >= Math.max(5, UnifiedSearchRepositoriesList.MAX_REPOSITORIES) : false;
		},

		_remove: function(searchRepository) {
			if (this.onRemove(searchRepository)) {
				for (i in this.searchRepositories) {
					if (this.searchRepositories[i].id == searchRepository.id) {
						this.searchRepositories.splice(i);
						break;
					}
				}
				this.resultSet.deleteItem(searchRepository);
				this.resultSet.refresh();
				searchRepository.deleted = true;
				this.onChange(searchRepository);
			}
		},

		onAdd: function(searchRepository) {
			return true;
		},

		onUpdate: function(oldSearchRepository, newSearchRepository) {
			return true;
		},

		onRemove: function(searchRepository) {
			return true;
		},

		onChange: function(searchRepository) {
		},

		setResultSet: function(resultSet) {
			if (!resultSet)
				resultSet = new SelectedRepositoriesResultSet();
			this.resultSet = resultSet;
			this.contentList.setResultSet(this.resultSet);

			var hasBox = false;
			this._selecteRepositories = [];
			if (this.resultSet.items) {
				var self = this;
				array.forEach(this.resultSet.items, function(item) {
					self.searchRepositories.push(item);
					if (item.repository.type == "box")
						hasBox = true;
				});
			}
			
			// If there's a Box repository, rename the "Class" column to "Class or Template"
			var col = this.contentList && this.contentList.grid && this.contentList.grid.column(3);
			if (col)
				col.headerNode().innerHTML = this.messages[hasBox ? "unified_search_class_or_template" : "search_class_template"];
		},

		/**
		 * event raised when the add repository button is clicked
		 */
		onAddRepository: function() {
			this._dialog.showDialogForAddRepository();
		},

		/**
		 * Event raised when the edit repository button is clicked
		 */
		onEditRepository: function(item) {
			this._dialog.showDialogForEditRepository(item);
		},

		/**
		 * Returns the content list modules.
		 *
		 * @return Array of content list modules.
		 */
		getContentListModules: function() {
			var array = [];
			if (!this.readOnly) {
				array.push({
					moduleClass: Bar,
					top: [
						[
							[
								{
									moduleClass: SelectedRepositoriesToolbar
								}
							]
						]
					]
				});
			}
			return array;
		},

		resize: function(newSize, currentSize) {
			this.contentList.resize(newSize, currentSize);
		},

		_showErrorMessage: function(messagePrefix, inserts) {

			if (!this._messageDialog)
				this._messageDialog = new MessageDialog();
			this._messageDialog.showMessage(Message.createErrorMessage(messagePrefix, inserts).text);
		},

		_nop: null
	});
	
	/**
	 * The maximum number of repositories that can be included in a cross-repository search. There is a lower limit of 5 repositories,
	 * i.e., the search builder will accept up to 5 repositories if the specified limit is less than 5. Although there is no upper limit,
	 * it is important to keep in mind that the more repositories that are included, the longer it will take to load and run the search.
	 * 
	 * @since 2.0.3.8
	 */
	UnifiedSearchRepositoriesList.MAX_REPOSITORIES = 5;
	
	return UnifiedSearchRepositoriesList;
});

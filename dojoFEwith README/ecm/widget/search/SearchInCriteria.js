/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/string",
	"dojo/data/ItemFileReadStore",
	"dojox/grid/DataGrid",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"../../LoggerMixin",
	"../_OptionsLinkMixin",
	"./_SearchInCriteria",
	"../DropDownDialog",
	"../DropDownLink",
	"dojo/text!./templates/SearchInCriteria.html"
], function(declare, string, ItemFileReadStore, DataGrid, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, _OptionsLinkMixin, _SearchInCriteria, DropDownDialog, DropDownLink, template) {

	/**
	 * @name ecm.widget.search.SearchInCriteria
	 * @class Provides a widget that displays the folder or repository to be searched by a saved search. For a saved
	 *        search that was defined in IBM FileNet P8 to support searching multiple folders or repositories, this
	 *        widget includes a link to open a drop-down list of the folders or repositories from which users can
	 *        select.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.SearchInCriteria", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		ecm.widget._OptionsLinkMixin
	], {
		/** @lends ecm.widget.search.SearchInCriteria.prototype */
		templateString: template,

		/**
		 * The constructor.
		 */
		constructor: function() {
			this._messages = ecm.messages;
		},

		/**
		 * Launches after the widget is created.
		 */
		postCreate: function() {
			this.inherited(arguments);
			this._searchInCriteriaContent._searchInCriteria = this;
		},

		/**
		 * Sets the search template.
		 * 
		 * @param searchTemplate
		 *            A {@link ecm.model.SearchTemplate} object.
		 */
		setSearchTemplate: function(searchTemplate) {
			if (this._grid)
				return;

			this._data = searchTemplate.repository._isP8() ? this._getP8StoreData(searchTemplate) : this._getStoreData(searchTemplate);
			if (this._data.items.length > 1) {
				var searchIn = string.substitute(this._messages.search_in_multiple, [
					this._data.items.length
				]);
				this._optionsLink.set("label", searchIn);
			} else if (this._data.items.length < 1 || this._data.items[0].folderName == this._messages.all) {
				this.set("disabled", true);
			}
		},

		/**
		 * Launches when the widget is opened.
		 */
		onOpen: function() {
			this.inherited(arguments);

			if (this._grid || !this._data)
				return;

			var store = new ItemFileReadStore({
				data: this._data
			});
			var layout = [
				{
					name: this._messages.repository,
					field: "repository",
					width: "25%"
				},
				{
					name: this._messages.object_type_folder,
					field: "folderPath",
					width: "75%"
				}
			];

			this._grid = new DataGrid({
				store: store,
				structure: layout,
				onStyleRow: function(row) {
					row.customClasses += " searchInCriteriaGridRow";
					this.focus.styleRow(row);
					this.edit.styleRow(row);
				}
			}, document.createElement("div"));
			this._searchInCriteriaContent.domNode.appendChild(this._grid.domNode);
			this._grid.startup();
		},

		/**
		 * @private
		 */
		_getStoreData: function(searchTemplate) {
			var data = {
				identifier: "id",
				items: []
			};
			var repoName = searchTemplate.repository.name;
			var folders = searchTemplate.folders;
			if (folders && folders.length) {
				for ( var i = 0; i < folders.length; i++) {
					if (folders[i].isHidden())
						continue;
					var folderPath = folders[i].name;
					folderPath = folderPath.replace(/\//g, "\\");
					var folderName = folderPath.substring(folderPath.lastIndexOf("\\") + 1);
					if (folders[i].searchSubfolders) {
						folderPath = string.substitute(this._messages.search_location_including_subfolders, [
							folderPath
						]);
						folderName = string.substitute(this._messages.search_location_including_subfolders, [
							folderName
						]);
					}
					var item = {
						id: repoName + folderName,
						repository: repoName,
						folderName: folderName,
						folderPath: folderPath
					};
					data.items.push(item);
				}
			} else {
				var folderName = this._messages.all;
				var item = {
					id: repoName + folderName,
					repository: repoName,
					folderName: folderName,
					folderPath: folderName
				};
				data.items.push(item);
			}

			return data;
		},
		/**
		 * @private
		 */
		_getP8StoreData: function(searchTemplate) {
			var scopes = {};
			var objectStores = searchTemplate.objectStores;
			for ( var i = 0; i < objectStores.length; i++) {
				scopes[objectStores[i].id] = {};
				scopes[objectStores[i].id].objectStore = objectStores[i];
				scopes[objectStores[i].id].folders = [];
			}
			var folders = searchTemplate.folders;
			if (folders) {
				for ( var i = 0; i < folders.length; i++)
					scopes[folders[i].objectStoreId].folders.push(folders[i]);
			}

			var data = {
				identifier: "id",
				items: []
			};
			for ( var osId in scopes) {
				var scope = scopes[osId];
				var repoFolders = scope.folders;
				var repo = scope.objectStore.repositoryId ? ecm.model.desktop.getRepository(scope.objectStore.repositoryId) : null;
				var repoName = repo ? repo.name : scope.objectStore.displayName;
				if (repoFolders.length > 0) {
					for ( var i = 0; i < repoFolders.length; i++) {
						if (repoFolders[i].isHidden())
							continue;
						var folderPath = repoFolders[i].name;
						folderPath = folderPath.replace(/\//g, "\\");
						var folderName = folderPath.substring(folderPath.lastIndexOf("\\") + 1);
						if (repoFolders[i].searchSubfolders) {
							folderPath = string.substitute(this._messages.search_location_including_subfolders, [
								folderPath
							]);
							folderName = string.substitute(this._messages.search_location_including_subfolders, [
								folderName
							]);
						}
						var item = {
							id: repoName + folderName,
							repository: repoName,
							folderName: folderName,
							folderPath: folderPath
						};
						data.items.push(item);
					}
				} else {
					var folderName = this._messages.all;
					var item = {
						id: repoName + folderName,
						repository: repoName,
						folderName: folderName,
						folderPath: folderName
					};
					data.items.push(item);
				}
			}

			return data;
		},
		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this.inherited(arguments);
			if (this._grid) {
				if (this._grid.domNode) {
					this._grid.destroy();
				}
				delete this._grid;
			}
		}
	});

});

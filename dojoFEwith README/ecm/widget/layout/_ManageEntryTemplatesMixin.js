/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/_base/event",
	"dojo/data/ItemFileWriteStore",
	"dijit/form/Button",
	"dijit/ToolbarSeparator",
	"../../Messages",
	"../../LoggerMixin",
	"../../model/Desktop",
	"../../model/EntryTemplate",
	"../../model/ContentItem",
	"../../model/ResultSet",
	"../dialog/LoginDialog",
	"../dialog/MessageDialog",
	"../RepositorySelector",
	"ecm/widget/listView/ContentList"
],

function(declare, //
lang, //
array, //
connect, //
has, //
aspect, //
domClass, //
domStyle, //
domConstruct, //
event, //
ItemFileWriteStore, //
Button, //
ToolbarSeparator, //
Messages, //
LoggerMixin, //
Desktop, //
EntryTemplate, //
ContentItem, //
ResultSet, //
LoginDialog, //
MessageDialog, //
RepositorySelector, //
ContentList) {
	/**
	 * @name ecm.widget.layout._ManageEntryTemplatesMixin
	 * @class Class used for ManageEntryTemplatesPane and EntryTemplatesFlyout
	 * @augments ecm.LoggerMixin
	 */
	return declare("ecm.widget.layout._ManageEntryTemplatesMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget.layout._ManageEntryTemplatesMixin.prototype */

		/**
		 * Sets the repository.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 */
		setRepository: function(repository) {
			this.repository = repository;
			this._entryTemplatesLoaded = false;
			if (this.repository && this.repository.entryTemplatesEnabled) {
				this._setRepositorySelector(this.repository);
				this._loadEntryTemplates();
				this.needRefresh = false;
				this.isLoaded = true;
				this.needReset = false;

				// avoid multiple connects on the object. causes duplicate calls
				if (!this.connectedRepos || this.connectedRepos[this.repository.id] != this.repository.id) {
					if (!this.connectedRepos) {
						var repoIds = new Array();
						repoIds[this.repository.id] = this.repository.id;
						this.connectedRepos = repoIds;
					} else {
						this.connectedRepos[this.repository.id] = this.repository.id;
					}

					this.own(aspect.after(this.repository, "onEntryTemplateAdded", lang.hitch(this, function(entryTemplate) {
						this._clearFilter();
						this.getContentsListView().getResultSet().refresh();
					}), true));

					// Don't clear the filter every time something was changed in an Entry Template, causes the user to have to re-enter 
					// the filter criteria and re-execute it. The item properties will still be updated in the content list.

//					this.own(aspect.after(this.repository, "onChange", lang.hitch(this, function(modelObject) {
//						if (lang.isArray(modelObject) && modelObject.length > 0 && modelObject[0].isInstanceOf && modelObject[0].isInstanceOf(ContentItem)) {
//							this._clearFilter();
//						}
//					}), true));

					this.own(aspect.after(this.repository, "onEntryTemplateDeleted", lang.hitch(this, function(id) {
						this._clearFilter();
						this.getContentsListView.getResultSet().refresh();
					}), true));
				}
			}
		},

		/**
		 * @private Clears the filter.
		 */
		_clearFilter: function() {
			var filterData = this.getContentsListView().getContentListModule("filterData");
			if (filterData) {
				filterData.clearFilter();
			}
		},

		/**
		 * @private Retrieves the default repository for entry templates
		 */
		_getDefaultLayoutRepository: function() {
			var defaultLayoutRepositories = Desktop.defaultLayoutRepositories;
			var repositoryId = null;
			if (defaultLayoutRepositories) {
				repositoryId = defaultLayoutRepositories[this._defaultLayoutRepositoryComponent];
				if (!repositoryId) {
					repositoryId = Desktop.getDefaultRepositoryId();
				}
			}
			return Desktop.getRepository(repositoryId);
		},

		/**
		 * @private Sets the default layout repository for the current pane if no repository has been found yet. This
		 *          will handle connecting to the repository, setting it to the pane, and calling the pane's loadContent
		 *          when done.
		 */
		_setPaneDefaultLayoutRepository: function() {
			this.repository = this._getDefaultLayoutRepository();
			this._setRepositorySelector(this.repository);
			if (!this.repository.connected) {
				LoginDialog.getLoginDialog().connectToRepository(this.repository, lang.hitch(this, function() {
					this.setRepository(this.repository);
					this.onRepositoryChange(this, this.repository);
				}));
			} else {
				this.setRepository(this.repository);
				this.onRepositoryChange(this, this.repository);
			}
		}

	});
});

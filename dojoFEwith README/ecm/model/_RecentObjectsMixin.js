/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/json",
	"ecm/model/_RecentSearchesMixin",
	"ecm/model/ContentItem",
	"ecm/model/Teamspace",
	"ecm/LoggerMixin"
], function(declare, lang, array, dojojson, _RecentSearchesMixin, ContentItem, Teamspace, LoggerMixin) {

	/**
	 * Mixin for managing recent searches, files and teamspaces.
	 * 
	 * @name ecm.model._RecentObjectsMixin
	 * @class Provides methods to retrieve, add and remove recent searches, files and teamspaces. Recent searches, files
	 *        and teamspaces are stored in the user configuration with minimal data, so items must be explicitly loaded
	 *        before use. For example:
	 *        <p>
	 *        var callback = function(item) { // item is loaded and ready for use };<br>
	 *        var request = repository.retrieveItem(recentFile.itemId, callback, "", "", recentFile.vsId);
	 *        </p>
	 * @public
	 */
	return declare("ecm.model._RecentObjectsMixin", [
		_RecentSearchesMixin,
		LoggerMixin
	], {
		/** @lends ecm.model._RecentObjectsMixin */

		/**
		 * Mime types that cannot be added to the recent item list.
		 * 
		 * @private
		 */
		_unsupportedRecentItemMimeTypes: {
			"application/x-filenet-searchtemplate": true,
			"application/x-searchtemplate": true,
			"application/x-searchtemplate.automatic": true,
			"application/x-unifiedsearchtemplate": true,
			"application/x-filenet-search": true,

			"application/x-filenet-entrytemplate": true,
			"application/x-filenet-formdataentrytemplate": true,
			"application/x-filenet-customobjectentrytemplate": true,
			"application/x-filenet-documententrytemplate": true,
			"application/x-filenet-folderentrytemplate": true,
			"application/x-filenet-declarerecordentrytemplate": true,

			"application/x-icn-declarerecordentrytemplate": true,
			"application/x-icn-documententrytemplate": true,
			"application/x-icn-folderentrytemplate": true,

			"application/x-filenet-workflowdefinition": true,
			"application/x-filenet-xpdlworkflowdefinition": true,

			"application/x-workitem": true,
			"application/x-tracker": true,

			"application/x-filenet-documentpolicy": true,
			"application/x-filenet-workflowpolicy": true,
			"application/x-filenet-formdata": true,
			"application/x-filenet-itxformtemplate": true,
			"application/vnd.xfdl.design": true,
			"application/vnd.xfdl": true,
			"application/x-ibmecm-acmformdata": true,
			"application/x-box-web-link": true,
			"application/x-filenet-external": true,
		},

		/**
		 * @private
		 */
		constructor: function() {
			this.clearRecentObjects();
		},

		/**
		 * Clears the cached list of recent items.
		 */
		clearRecentItems: function() {
			this._recentItems = null;
		},

		/**
		 * Clears the cached list of recent items.
		 */
		clearRecentTeamspaces: function() {
			this._recentTeamspaces = null;
		},

		/**
		 * Clears the cached lists of recent objects.
		 */
		clearRecentObjects: function() {
			this._recentItems = null;
			this._recentTeamspaces = null;
		},

		_getDesktopUserConfigId: function() {
			var desktop = ecm.model.desktop, repository = desktop.getDefaultRepository(), userId = repository && repository.userId ? repository.userId : "";
			return desktop.id + "." + desktop.getDefaultRepositoryId() + "." + userId.toLowerCase();
		},

		/**
		 * Calls the specified function with the list of recent items. The list is obtained from cache if available;
		 * otherwise, it is retrieved asynchronously. The items are {@link ecm.model.Item} stubs that must be loaded
		 * before use.
		 */
		retrieveRecentItems: function(callback) {
			var request;

			if (this._recentItems) {
				if (callback)
					callback(this._recentItems);
			} else {
				var params = {
					application: "navigator",
					configuration: "UserConfig",
					id: this._getDesktopUserConfigId(),
					teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
					action: "list",
					type: "recentItems"
				};

				request = ecm.model.Request.postService("user", null, params, null, null, lang.hitch(this, function(response) {
					this._retrieveRecentItemsCompleted(response, callback);
				}));
			}

			return request;
		},

		/**
		 * @private
		 */
		_retrieveRecentItemsCompleted: function(response, callback) {
			this._recentItems = [];
			if (response.list) {
				array.forEach(response.list, function(data) {
					var repository = this._getRepository();
					if (repository) {
						var args = {
							id: data.itemId,
							name: data.itemName,
							repository: repository,
							mimetype: data.mimeType
						};
						if (data.vsId)
							args.vsId = data.vsId;

						this._recentItems.push(new ContentItem(args));
					}
				}, this);
			}

			if (callback)
				callback(this._recentItems);
		},

		/**
		 * Asynchronously adds the specified item to the list of recent items.
		 * 
		 * @param item
		 *            The {@link ecm.model.Item} object to be added to the list of recent items
		 * @param callback
		 *            An optional function called with the updated list of recent items after the item is added
		 */
		addRecentItem: function(item, callback) {
			if (!item.isInstanceOf || !item.isInstanceOf(ecm.model.ContentItem) || item.isFolder() || this._unsupportedRecentItemMimeTypes[item.mimetype] || (ecm.model.desktop &&  ecm.model.desktop.id == "admin")) {
				return;
			}

			var params = {
				application: "navigator",
				action: "add",
				configuration: "RecentItemConfig",
				id: item.id,
				teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
				update_list_configuration: "UserConfig",
				update_list_id: this._getDesktopUserConfigId(),
				update_list_type: "recentItems"
			};

			var json = dojojson.toJson({
				repositoryId: this.id,
				itemId: item.id,
				itemName: item.name,
				vsId: item.vsId || item.itemId,
				mimeType: item.mimetype
			});

			return ecm.model.Request.postService("user", null, params, "text/json", json, lang.hitch(this, function(response) {
				this._addRecentItemCompleted(response, callback);
			}));
		},

		/**
		 * @private
		 */
		_addRecentItemCompleted: function(response, callback) {
			this._retrieveRecentItemsCompleted(response, lang.hitch(this, function(recentItems) {
				if (callback)
					callback(recentItems);
				this.onRecentItemAdded(recentItems);
			}));
		},

		/**
		 * Asynchronously adds the specified items to the list of recent items.
		 * 
		 * @param item
		 *            An array of {@link ecm.model.Item} objects to be added to the list of recent items
		 * @param callback
		 *            An optional function called with the updated list of recent items after the items are added
		 */
		addRecentItems: function(items, callback) {
			var request;
			if (!lang.isArray(items)) {
				items = [
					items
				]; // The add to recently used items call expects an items array
			}
			if (items && items.length > 0) {
				var data = [];
				for ( var i in items) {
					var item = items[i];
					if (item.isInstanceOf && item.isInstanceOf(ecm.model.ContentItem) && !item.isFolder() && !this._unsupportedRecentItemMimeTypes[item.mimetype]) {
						data.push({
							repositoryId: this.id,
							itemId: item.id,
							itemName: item.name,
							vsId: item.vsId || item.itemId,
							mimeType: item.mimetype
						});
					}
				}

				if (data.length > 0) {
					var params = {
						application: "navigator",
						action: "addList",
						configuration: "RecentItemConfig",
						data: dojojson.toJson(data),
						id: "nexus", // dummy but needed to get pass config checking.
						teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
						update_list_configuration: "UserConfig",
						update_list_id: this._getDesktopUserConfigId(),
						update_list_type: "recentItems"
					};

					request = ecm.model.Request.postService("user", null, params, "text/json", null, lang.hitch(this, function(response) {
						this._addRecentItemCompleted(response, callback);
					}));
				}
			}

			return request;
		},

		/**
		 * Called when an item is added to the list of recent items.
		 * 
		 * @param recentItems
		 *            The updated list of recent items
		 */
		onRecentItemAdded: function(recentItems) {
		},

		/**
		 * Asynchronously removes the specified item from the list of recent items.
		 * 
		 * @param search
		 *            The {@link ecm.model.Item} object to be removed from the list of recent items
		 * @param callback
		 *            An optional function called with the updated list of recent items after the item is removed
		 */
		removeRecentItems: function(items, callback) {
			if (!lang.isArray(this._recentItems) || this._recentItems.length < 1)
				return;

			var ids = [];
			array.forEach(items, function(item) {
				for ( var i in this._recentItems) {
					var vsId = item.vsId || item.itemId;
					if ((item.id == this._recentItems[i].id) || (vsId && this._recentItems[i].vsId && vsId == this._recentItems[i].vsId)) {
						ids.push(this._recentItems[i].vsId || this._recentItems[i].id);
						break;
					}
				}
			}, this);
			if (ids.length < 1)
				return;

			var params = {
				application: "navigator",
				action: "deleteList",
				configuration: "RecentItemConfig",
				id: "nexus", // dummy but needed to get pass config checking.
				ids: dojojson.toJson(ids),
				teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
				update_list_configuration: "UserConfig",
				update_list_id: this._getDesktopUserConfigId(),
				update_list_type: "recentItems"
			};

			return ecm.model.Request.postService("user", null, params, null, null, lang.hitch(this, function(response) {
				this._removeRecentItemsCompleted(response, callback);
			}));
		},

		/**
		 * @private
		 */
		_removeRecentItemsCompleted: function(response, callback) {
			this._retrieveRecentItemsCompleted(response, callback);
			this.onRecentItemsRemoved(this._recentItems);
		},

		/**
		 * Called when an item is removed from the list of recent items.
		 * 
		 * @param recentItems
		 *            The updated list of recent items
		 */
		onRecentItemsRemoved: function(recentItems) {
		},

		/**
		 * Calls the specified function with the list of recent teamspaces. The list is obtained from cache if
		 * available; otherwise, it is retrieved asynchronously. The items are {@link ecm.model.Teamspace} stubs that
		 * must be loaded before use.
		 */
		retrieveRecentTeamspaces: function(callback) {
			var request;

			if (this._recentTeamspaces) {
				if (callback)
					callback(this._recentTeamspaces);
			} else {
				var params = {
					application: "navigator",
					configuration: "UserConfig",
					id: this._getDesktopUserConfigId(),
					teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
					action: "list",
					type: "recentTeamspaces"
				};

				request = ecm.model.Request.postService("user", null, params, null, null, lang.hitch(this, function(response) {
					this._retrieveRecentTeamspacesCompleted(response, callback);
				}));
			}

			return request;
		},

		/**
		 * @private
		 */
		_retrieveRecentTeamspacesCompleted: function(response, callback) {
			this._recentTeamspaces = [];
			if (response.list) {
				array.forEach(response.list, function(data) {
					var repository = this._getRepository();
					if (repository) {
						var args = {
							id: data.teamspaceId,
							name: data.teampsaceName,
							repository: repository,
							type: Teamspace.INSTANCE
						};

						this._recentTeamspaces.push(new Teamspace(args));
					}
				}, this);
			}

			if (callback)
				callback(this._recentTeamspaces);
		},

		/**
		 * Asynchronously adds the specified teamspace to the list of recent teamspaces.
		 * 
		 * @param item
		 *            The {@link ecm.model.Teamspace} object to be added to the list of recent teamspaces
		 * @param callback
		 *            An optional function called with the updated list of recent teamspaces after the teamspace is
		 *            added
		 */
		addRecentTeamspace: function(teamspace, callback) {
			if (!teamspace.isInstanceOf || !teamspace.isInstanceOf(ecm.model.Teamspace)) {
				this.logError("addRecentItem", "Only instances of ecm.model.Teamspace can be added to the recent teamspace list.");
				return;
			}

			var params = {
				application: "navigator",
				action: "add",
				configuration: "RecentTeamspaceConfig",
				id: teamspace.id,
				teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
				update_list_configuration: "UserConfig",
				update_list_id: this._getDesktopUserConfigId(),
				update_list_type: "recentTeamspaces"
			};

			var json = dojojson.toJson({
				repositoryId: this.id,
				teamspaceId: teamspace.id,
				teampsaceName: teamspace.name,
				vsId: teamspace.vsId
			});

			return ecm.model.Request.postService("user", null, params, "text/json", json, lang.hitch(this, function(response) {
				this._addRecentTeamspaceCompleted(response, callback);
			}));
		},

		/**
		 * Asynchronously adds the specified teamspaces to the list of recent teamspaces.
		 * 
		 * @param item
		 *            An array of {@link ecm.model.Teamspace} objects to be added to the list of recent teamspaces
		 * @param callback
		 *            An optional function called with the updated list of recent teamspaces after the teamspaces are
		 *            added
		 */
		addRecentTeamspaces: function(teamspaces, callback) {
			var request;

			if (teamspaces && teamspaces.length > 0) {
				var data = [];
				for ( var i in teamspaces) {
					var teamspace = teamspaces[i];
					if (teamspace.isInstanceOf && teamspace.isInstanceOf(ecm.model.Teamspace)) {
						data.push({
							repositoryId: this.id,
							teamspaceId: teamspace.id,
							teampsaceName: teamspace.name,
							vsId: teamspace.vsId
						});
					}
				}

				if (data.length > 0) {
					var params = {
						application: "navigator",
						action: "addList",
						configuration: "RecentTeamspaceConfig",
						data: dojojson.toJson(data),
						id: "nexus", // dummy but needed to get pass config checking.
						teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
						update_list_configuration: "UserConfig",
						update_list_id: this._getDesktopUserConfigId(),
						update_list_type: "recentTeamspaces"
					};

					request = ecm.model.Request.postService("user", null, params, "text/json", null, lang.hitch(this, function(response) {
						this._addRecentTeamspaceCompleted(response, callback);
					}));
				}
			}

			return request;
		},

		/**
		 * @private
		 */
		_addRecentTeamspaceCompleted: function(response, callback) {
			this._retrieveRecentTeamspacesCompleted(response, lang.hitch(this, function(recentTeamspaces) {
				if (callback)
					callback(recentTeamspaces);
				this.onRecentTeamspaceAdded(recentTeamspaces);
			}));
		},

		/**
		 * Called when a teamspace is added to the list of recent teamspaces.
		 * 
		 * @param recentItems
		 *            The updated list of recent teamspaces
		 */
		onRecentTeamspaceAdded: function(recentTeamspaces) {
		},

		/**
		 * Asynchronously removes the specified teamspaces from the list of recent teamspaces.
		 * 
		 * @param search
		 *            The {@link ecm.model.Teamspace} object to be removed from the list of recent teamspaces
		 * @param callback
		 *            An optional function called with the updated list of recent teamspaces after the item is removed
		 */
		removeRecentTeamspaces: function(teamspaces, callback) {
			if (!lang.isArray(this._recentTeamspaces) || this._recentTeamspaces.length < 1)
				return;

			var ids = [];
			array.forEach(teamspaces, function(teamspace) {
				for ( var i in this._recentTeamspaces) {
					if ((teamspace.id == this._recentTeamspaces[i].id) || (teamspace.vsId && this._recentTeamspaces[i].vsId && teamspace.vsId == this._recentTeamspaces[i].vsId)) {
						ids.push(this._recentTeamspaces[i].vsId || this._recentTeamspaces[i].id);
						break;
					}
				}
			}, this);
			if (ids.length < 1)
				return;

			var params = {
				application: "navigator",
				action: "deleteList",
				configuration: "RecentTeamspaceConfig",
				id: "nexus", // dummy but needed to get pass config checking.
				ids: dojojson.toJson(ids),
				teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
				update_list_configuration: "UserConfig",
				update_list_id: this._getDesktopUserConfigId(),
				update_list_type: "recentTeamspaces"
			};

			return ecm.model.Request.postService("user", null, params, null, null, lang.hitch(this, function(response) {
				this._removeRecentTeamspacesCompleted(response, callback);
			}));
		},

		/**
		 * @private
		 */
		_removeRecentTeamspacesCompleted: function(response, callback) {
			this._retrieveRecentTeamspacesCompleted(response, lang.hitch(this, function(recentTeamspaces) {
				if (callback)
					callback(recentTeamspaces);
				this.onRecentTeamspacesRemoved(recentTeamspaces);
			}));
		},

		/**
		 * Called when a teamspace is removed from the list of recent teamspaces.
		 * 
		 * @param recentTeamspaces
		 *            The updated list of recent teamspaces
		 */
		onRecentTeamspacesRemoved: function(recentTeamspaces) {
		}
	});
});

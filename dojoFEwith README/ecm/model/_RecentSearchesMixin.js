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
	"./SearchTemplate",
	"./UnifiedSearchTemplate"
], function(declare, lang, array, dojojson, SearchTemplate, UnifiedSearchTemplate) {

	/**
	 * Mixin for managing recent searches.
	 * 
	 * @name ecm.model._RecentSearchesMixin
	 * @class Provides methods to retrieve, add and remove recent searches. Recent searches are stored in the user
	 *        configuration with minimal data (ID, vsId, name, description and repository ID), so items must be
	 *        explicitly loaded before use. For example:
	 *        <p>
	 *        var callback = function(searchTemplate) { // search template is loaded and ready for use };<br>
	 *        var request = repository.retrieveSearchTemplate(recentSearch.id, recentSearch.vsId, "released", callback);
	 *        </p>
	 * @public
	 */
	return declare("ecm.model._RecentSearchesMixin", null, {
		/** @lends ecm.model._RecentSearchesMixin.prototype */

		/**
		 * @private
		 */
		constructor: function() {
			this._recentSearches = null;
		},

		_getUserId: function() {
			var id = (this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace)) ? this.id + "-" : "";
			if (this.userId)
				id += this.userId;
			else if (this.repository)
				id += this.repository.userId;
			if (id)
				id.toLowerCase();
			return id;
		},

		_getRepository: function() {
			return (this.isInstanceOf && this.isInstanceOf(ecm.model.Repository)) ? this : (this.repository || null);
		},

		_getUserConfigId: function() {
			return ecm.model.desktop.id + "." + this._getRepository().id + "." + this._getUserId();
		},

		/**
		 * Clears the cached list of recent searches.
		 */
		clearRecentSearches: function() {
			this._recentSearches = null;
		},

		/**
		 * Calls the specified function with the list of recent searches. The list is obtained from cache if available;
		 * otherwise, it is retrieved asynchronously. The items are {@link ecm.model.SearchTemplate} stubs that must be
		 * loaded before use.
		 * 
		 * @param callback
		 *            An optional function called with the updated list of recent searches after the search is added
		 * @returns A {@link ecm.model.Request} object if the list of recent searches is not in the cache
		 */
		retrieveRecentSearches: function(callback) {
			var request;
			if (this._recentSearches) {
				if (callback)
					callback(this._recentSearches);
			} else {
				var params = {
					application: "navigator",
					configuration: "UserConfig",
					id: this._getUserConfigId(),
					teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
					action: "list",
					type: "recentSearches"
				};

				request = ecm.model.Request.postService("user", null, params, null, null, lang.hitch(this, function(response) {
					this._retrieveRecentSearchesCompleted(response, callback);
				}));
			}

			return request;
		},

		_retrieveRecentSearchesCompleted: function(response, callback) {
			this._recentSearches = [];
			if (response.list) {
				array.forEach(response.list, function(data) {
					if (!data.templateId)
						return;

					var repository = this._getRepository();
					if (repository) {
						var id = data.templateId.toString();
						var name = (data.name || "").toString();
						var description = (data.description || "").toString();
						var mimeType = data.mimeType || "application/x-searchtemplate";
						var args = {
							id: id,
							name: name,
							repository: repository,
							description: description,
							mimetype: mimeType
						};
						if (data.vsId)
							args.vsId = data.vsId;

						var template = null;
						if (mimeType == "application/x-unifiedsearchtemplate")
							template = new UnifiedSearchTemplate(args);
						else
							template = new SearchTemplate(args);

						this._recentSearches.push(template);
					}
				}, this);
			}

			if (callback)
				callback(this._recentSearches);
		},

		/**
		 * Asynchronously adds the specified search template to the list of recent searches.
		 * 
		 * @param search
		 *            The {@link ecm.model.SearchTemplate} object to be added to the list of recent searches
		 * @param callback
		 *            An optional function called with the updated list of recent searches after the search is added
		 * @returns A {@link ecm.model.Request} object
		 */
		addRecentSearch: function(search, callback) {
			var params = {
				application: "navigator",
				action: "add",
				configuration: "RecentSearchConfig",
				id: search.generateUUID(),
				update_list_configuration: "UserConfig",
				update_list_id: this._getUserConfigId(),
				teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
				update_list_type: "recentSearches"
			};
			var json = dojojson.toJson({
				templateId: search.id,
				name: search.name,
				description: search.description || "",
				vsId: search.vsId,
				mimeType: search.mimetype || ""
			});
			return ecm.model.Request.postService("user", null, params, "text/json", json, lang.hitch(this, function(response) {
				this._addRecentSearchCompleted(response, callback);
			}));
		},

		_addRecentSearchCompleted: function(response, callback) {
			this._retrieveRecentSearchesCompleted(response, callback);
			this.onRecentSearchAdded(this._recentSearches);
		},

		/**
		 * Called when a search template is added to the list of recent searches.
		 * 
		 * @param recentSearches
		 *            The updated list of recent searches
		 */
		onRecentSearchAdded: function(recentSearches) {
		},

		/**
		 * Asynchronously removes the specified search templates from the list of recent searches.
		 * 
		 * @param search
		 *            The {@link ecm.model.SearchTemplate} object to be removed from the list of recent searches
		 * @param callback
		 *            An optional function called with the updated list of recent searches after the search is removed
		 * @returns A {@link ecm.model.Request} object
		 */
		removeRecentSearches: function(searches, callback) {
			if (!lang.isArray(this._recentSearches) || this._recentSearches.length < 1)
				return;

			var ids = [];
			array.forEach(searches, function(search) {
				var uuid = search.generateUUID();
				for ( var i in this._recentSearches) {
					if (uuid == this._recentSearches[i].generateUUID()) {
						ids.push(search.vsId || search.id);
						break;
					}
				}
			}, this);
			if (ids.length < 1)
				return;

			var params = {
				application: "navigator",
				action: "deleteList",
				configuration: "RecentSearchConfig",
				id: "nexus", // dummy but needed to get pass config checking.
				ids: dojojson.toJson(ids),
				update_list_configuration: "UserConfig",
				update_list_id: this._getUserConfigId(),
				teamspaceId: this.isInstanceOf && this.isInstanceOf(ecm.model.Teamspace) ? this.id : "",
				update_list_type: "recentSearches"
			};

			return ecm.model.Request.postService("user", null, params, null, null, lang.hitch(this, function(response) {
				this._removeRecentSearchesCompleted(response, callback);
			}));

		},

		_removeRecentSearchesCompleted: function(response, callback) {
			this._retrieveRecentSearchesCompleted(response, callback);
			this.onRecentSearchesRemoved(this._recentSearches);
		},

		/**
		 * Called when a search template is removed from the list of recent searches.
		 * 
		 * @param recentSearches
		 *            The updated list of recent searches
		 */
		onRecentSearchesRemoved: function(recentSearches) {
		}
	});
});

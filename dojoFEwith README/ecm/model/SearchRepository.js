/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"ecm/model/ContentItem",
	"ecm/model/SearchContentClasses",
	"ecm/model/_searchUtils"
], function(array, declare, lang, ContentItem, SearchContentClasses, utils) {

	/**
	 * @private Constructs a search repository.
	 * @param properties
	 *            The properties for the search repository. The properties can be any of the public fields as defined
	 *            below and on {@link ecm.model.Item}.
	 * @name ecm.model.SearchRepository
	 * @class Represents a repository scope of a unified search, including the content class and folder to search in.
	 * @augments ecm.model.Item
	 * @since 2.0.2
	 */
	var SearchRepository = declare("ecm.model.SearchRepository", ContentItem, {
		/** @lends ecm.model.SearchRepository.prototype */

		/**
		 * A {@link ecm.model.Repository} object.
		 */
		repository: null,

		/**
		 * A {@link ecm.model.SearchTemplate} object representing an OnDemand folder.
		 */
		searchTemplate: null,
		
		/**
		 * A {@link ecm.model.MetadataTemplate} object (Box only).
		 * 
		 * @since 3.0
		 */
		metadataTemplate: null,

		/**
		 * A {@link ecm.model.ContentClass} or {@link ecm.model.SearchContentClasses} object.
		 */
		contentClass: null,

		/**
		 * Indicates whether to include subclasses.
		 */
		searchSubclasses: false,

		/**
		 * A {@link ecm.model.ContentItem} object representing a folder.
		 */
		folder: null,

		/**
		 * Indicates whether to search in sub-folders.
		 */
		searchSubfolders: false,

		/**
		 * The type of objects to search for; for example, "document", "folder", "common", or "all"
		 */
		objectType: null,

		/**
		 * The version to retrieve; for example, "releasedversion", "currentversion", "allversions", or "none"
		 */
		version: null,

		/**
		 * Indicates whether text search is enabled (only applicable to repositories that support text search).
		 */
		textSearchEnabled: false,

		/**
		 * Indicates whether this search repository has been deleted.
		 */
		deleted: false,

		/**
		 * Returns true if the other object is equal to this one.
		 * 
		 * @param searchRepository
		 *            An {@link ecm.model.SearchRepository} object
		 */
		equals: function(searchRepository) {
			if (!searchRepository)
				return false;

			if (this.id != searchRepository.id)
				return false;

			if ((!this.repository != !searchRepository.repository) || (this.repository && this.repository.id != searchRepository.repository.id))
				return false;

			if ((!this.searchTemplate != !searchRepository.searchTemplate) || (this.searchTemplate && this.searchTemplate.id != searchRepository.searchTemplate.id))
				return false;

			if ((!this.metadataTemplate != !searchRepository.metadataTemplate) || (this.metadataTemplate && this.metadataTemplate.id != searchRepository.metadataTemplate.id))
				return false;
			
			if (!utils.compareContentClasses(this.contentClass, searchRepository.contentClass))
				return false;

			if (this.searchSubclasses != searchRepository.searchSubclasses)
				return false;

			if ((!this.folder != !searchRepository.folder) || (this.folder && this.folder.id != searchRepository.folder.id))
				return false;

			if (this.searchSubfolders != searchRepository.searchSubfolders)
				return false;

			if (this.objectType != searchRepository.objectType)
				return false;

			if (this.version != searchRepository.version)
				return false;

			if (this.textSearchEnabled != searchRepository.textSearchEnabled)
				return false;

			return true;
		},

		/**
		 * Returns the JSON representation of this search repository.
		 */
		toJson: function() {
			var json = {
				repository: this.repository.id
			};

			if (this.searchTemplate) {
				json.folder = this.searchTemplate.id;
			} else {
				json.folder = this.folder ? this.folder.id : "";
				json.searchSubfolders = this.searchSubfolders;
				json.objectType = this.objectType;
				if (this.metadataTemplate)
					json.metadataTemplate = this.metadataTemplate.id;
				if (this.contentClass) {
					json.classes = this.contentClass.declaredClass == "ecm.model.SearchContentClasses" ? array.map(this.contentClass.contentClasses, function(contentClass) {
						return contentClass.id;
					}) : [
						this.contentClass.id
					];
				}
				json.searchSubclasses = this.searchSubclasses;
				json.version = this.version;
				json.textSearchEnabled = this.textSearchEnabled;
			}

			return json;
		},

		/**
		 * Returns a clone of this search.
		 */
		clone: function() {
			var clone = new SearchRepository({
				id: this.id,
				name: this.name
			});
			lang.mixin(clone, this);

			clone.original = this;

			if (this.contentClass && this.contentClass.declaredClass == "ecm.model.SearchContentClasses")
				clone.contentClass = new SearchContentClasses(this.contentClass.contentClasses ? [].concat(this.contentClass.contentClasses) : null);

			return clone;
		}
	});

	return SearchRepository;
});

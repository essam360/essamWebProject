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
	"./_HasAttributesMixin",
	"../MessagesMixin"
], function(declare, lang, array, string, _HasAttributesMixin, MessagesMixin) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._HasAttributesMixin.
	 * @name ecm.model.SearchContentClasses
	 * @class Represents a set of classes that can be defined in a search to search for items of the classes. Either an
	 *        instance of <code>SearchContentClasses</code> or <code>ContentClass</code> can be set to
	 *        <code>SearchTemplate.setSearchContentClass()</code>.
	 * @augments ecm.model._HasAttributesMixin
	 */
	return declare("ecm.model.SearchContentClasses", [
		_HasAttributesMixin,
		MessagesMixin
	], {
		/** @lends ecm.model.SearchContentClasses.prototype */

		/**
		 * An array of {@link ecm.model.ContentClass} objects
		 */
		contentClasses: null,

		/**
		 * An array of {@link ecm.model.AttributeDefinition} objects
		 */
		attributeDefinitions: null,

		/**
		 * @private Constructor used internally
		 */
		constructor: function(contentClasses) {
			// Initializes both contentClasses and attributeDefinitions.
			this.setContentClasses(contentClasses);
		},

		/**
		 * @private
		 */
		setContentClasses: function(contentClasses) {
			this.contentClasses = contentClasses;
			this.attributeDefinitions = null;
			this.repository = null;
			this.objectStore = null;
			this.id = "";
			this.name = "";
			if (contentClasses instanceof Array && contentClasses.length > 0) {
				this.repository = contentClasses[0].repository;
				this.objectStore = contentClasses[0].objectStore;
				array.forEach(contentClasses, function(contentClass) {
					if (this.id) {
						this.id += ",";
					}
					this.id += contentClass.id;
					if (this.name) {
						this.name = string.substitute(this.messages.append_comma, [
							this.name
						]);
					}
					this.name += contentClass.name || "";
				}, this);
			}
		},

		_getContentClass: function(id) {
			var foundClass = null;
			if (this.contentClasses instanceof Array) {
				array.some(this.contentClasses, function(contentClass) {
					var found = id == contentClass.id;
					if (found)
						foundClass = contentClass;
					return found;
				});
			}
			return foundClass;
		},

		/**
		 * Returns a boolean value indicating whether the content class supports text based searching.
		 */
		isTextSearchable: function() {
			var searchable = false;
			if (this.contentClasses instanceof Array) {
				searchable = array.every(this.contentClasses, function(contentClass) {
					return contentClass.textSearchable;
				});
			}
			return searchable;
		},

		_retrieveAttributeDefinitionsCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveAttributeDefinitionsCompleted");

			if (response.classes instanceof Array) {
				array.forEach(response.classes, function(classInfo) {
					var contentClass = this._getContentClass(classInfo.template_label);
					if (contentClass) {
						//updating the name since Repository.getContentClass creates a content class using the id as the name.
						if (classInfo.template_label)
							contentClass.name = classInfo.template_label;
						if (response.parm_name_attribute) // CM Name attribute
							contentClass.nameAttribute = classInfo.parm_name_attribute;
						lang.mixin(contentClass, classInfo);
					}
				}, this);
			}

			this.inherited(arguments);
			this.logExit("_retrieveAttributeDefinitionsCompleted");
		},

		_retrieveAttributeDefinitionsForSearchesCompleted: function(response, callback) {
			this.logEntry("_retrieveAttributeDefinitionsForSearchesCompleted");

			if (response.classes instanceof Array) {
				array.forEach(response.classes, function(classInfo) {
					var contentClass = this._getContentClass(classInfo.template_label);
					if (contentClass) {
						//updating the name since Repository.getContentClass creates a content class using the id as the name.
						if (classInfo.template_label)
							contentClass.name = classInfo.template_label;
					}
				}, this);
			}

			this.inherited(arguments);
			this.logExit("_retrieveAttributeDefinitionsForSearchesCompleted");
		}
	});

});

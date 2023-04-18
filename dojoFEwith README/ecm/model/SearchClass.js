/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject"
], function(declare, _ModelObject) {

	/**
	 * Constructor
	 *
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.SearchClass
	 * @class Represents a search class and holds the extra meta data that would be defined with a content class to be
	 *        used in a search.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.SearchClass", [
		_ModelObject
	], {
		/** @lends ecm.model.SearchClass.prototype */

		EDIT_PROPERTY: {
			EDITABLE: "editable",
			HIDDEN: "hidden",
			READONLY: "readonly"
		},

		/**
		 * A string value holding the search class object type
		 */
		objectType: null,

		/**
		 * A boolean value indicating whether the search is defined to search sub-classes
		 */
		searchSubclasses: false,

		/**
		 * A string value holding the {@link ecm.model.SearchClass.EDIT_PROPERTY} setting
		 */
		editProperty: "editable",

		/**
		 * A string value holding the item id
		 */
		itemId: "",

		/**
		 * A boolean value indicating whether the search class is selected or not.
		 */
		selected: true,

		/**
		 * Returns a boolean value indicating whether this search class is read only.
		 */
		isReadOnly: function() {
			return this.editProperty == this.EDIT_PROPERTY.READONLY;
		},

		/**
		 * Returns a boolean value indicating whether this search class is hidden.
		 */
		isHidden: function() {
			return this.editProperty == this.EDIT_PROPERTY.HIDDEN;
		},

		/**
		 * Equality operator for comparing search class objects
		 *
		 * @param searchClass
		 *            A {@link ecm.model.SearchClass} object to compare
		 */
		equals: function(searchClass) {
			return this.id == searchClass.id && this.objectType == searchClass.objectType && new Boolean(this.searchSubclasses).valueOf() == new Boolean(searchClass.searchSubclasses).valueOf() && new Boolean(this.selected).valueOf() == new Boolean(searchClass.selected).valueOf();
		}
	});
});

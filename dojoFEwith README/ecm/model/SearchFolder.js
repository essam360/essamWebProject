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
	 * @name ecm.model.SearchFolder
	 * @class Represents a folder that contains search templates. In IBM Content Manager, folders are equivalent to
	 *        cabinets.
	 *        <p>
	 *        This class also represents the folders that are created in the user interface for recent searches and all
	 *        searches. These searches do not exist on the server.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.SearchFolder", [
		_ModelObject
	], {
		/** @lends ecm.model.SearchFolder.prototype */

		VIEW: {
			EDITABLE: "editable",
			HIDDEN: "hidden"
		},

		/**
		 * String value holding the P8 object store Id
		 */
		objectStoreId: null,

		/**
		 * String value holding the P8 object store display name
		 */
		objectStoreName: null,

		/**
		 * A boolean value indicating whether to search sub-folders
		 */
		searchSubfolders: false,

		/**
		 * An flag holding a {@link ecm.model.SearchFolder.VIEW} view setting
		 */
		view: null,

		/**
		 * A string value holding the item id
		 */
		itemId: "",

		/**
		 * @private Constructor used internally
		 */
		constructor: function(/* String */id, /* String */pathName, /* String */objectStoreId, /* String */objectStoreName, /* Boolean */searchSubfolders, /* ecm.model.SearchFolder.VIEW? */view, /* String */itemId) {

			this.logDebug("constructor", "id = " + id + ", pathName = " + pathName + ", objectStoreId = " + objectStoreId + ", objectStoreName = " + objectStoreName + ", searchSubfolders = " + searchSubfolders + ", view = " + view + ", itemId = " + itemId);
			this.objectStoreId = objectStoreId;
			this.objectStoreName = objectStoreName;
			this.searchSubfolders = searchSubfolders;
			this.view = view || this.VIEW.EDITABLE;
			this.itemId = itemId || "";
		},

		/**
		 * @private
		 */
		setPathName: function(/* String */pathName) {
			this.name = pathName;
		},

		/**
		 * @private
		 */
		getPathName: function() {
			return this.name;
		},

		/**
		 * Returns a boolean value indicating whether this search folder view is hidden.
		 */
		isHidden: function() {
			return this.view == this.VIEW.HIDDEN;
		},

		/**
		 * Equality operator for comparing search folder objects
		 * 
		 * @param searchFolder
		 *            A {@link ecm.model.SearchFolder} object to compare
		 */
		equals: function(searchFolder) {
			var id = this.id.split(",");
			id = id.length == 3 ? id[2] : id[0];
			var id2 = searchFolder.id.split(",");
			id2 = id2.length == 3 ? id2[2] : id2[0];
			var objStoreName = this.objectStoreName ? this.objectStoreName.toLowerCase() : null;
			var otherObjStoreName = searchFolder.objectStoreName ? searchFolder.objectStoreName.toLowerCase() : null;

			return id == id2 && (this.objectStoreId == searchFolder.objectStoreId || objStoreName == otherObjStoreName) && new Boolean(this.searchSubfolders).valueOf() == new Boolean(searchFolder.searchSubfolders).valueOf();
		}
	});
});

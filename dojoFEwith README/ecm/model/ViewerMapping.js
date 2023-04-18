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
	 * Constructs a viewer mapping. Note that viewer mappings are normally constructed as part of desktop loading and do
	 * not need to be constructed explicitly.
	 * 
	 * @param properties
	 *            The properties of the viewer mapping. These can be any of the public fields defined below and on
	 *            ecm.model._ModelObject.
	 * @name ecm.model.ViewerMapping
	 * @class Represents the mapping that is used to determine the viewer that is used to display to a particular item
	 *        type. This class maintains the information from a single line in the viewer configuration that maps the
	 *        item attributes to the type of viewer that is used. Private functions should not be used to access public
	 *        members of the class. Access member variables directly. For example:
	 *        <p>
	 *        var obj = new ViewerMapping({ id: "myviewermapping", name: "myviewermapping"});<br>
	 *        console.debug("Viewer Mapping ID=" + obj.id);
	 *        </p>
	 *        <b>Note:</b> Private getter methods, such as getContentType, <b>will be removed</b> in a future release.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.ViewerMapping", [
		_ModelObject
	], {
		/** @lends ecm.model.ViewerMapping.prototype */

		/**
		 * The content type (mime type).
		 */
		contentType: "",

		/**
		 * The server type.
		 */
		serverType: "",

		/**
		 * A content class id.
		 */
		itemType: "",

		/**
		 * An instance of {@link ecm.model.Viewer} related to this mapping.
		 */
		viewer: null,

		/**
		 * Flag indicating that this viewer mapping is to be used for Preview only.
		 * 
		 * @since 2.0.3
		 */
		previewOnly: false,

		/**
		 * @private Constructor used internally
		 */
		constructor: function() {
			var keyParts = [];
			keyParts.push(this.previewOnly);
			if (this.serverType) {
				keyParts.push(this.serverType);
			}
			if (this.itemType) {
				keyParts.push(this.itemType);
			}
			if (this.contentType) {
				keyParts.push(this.contentType);
			}
			this._key = keyParts.join("");

			if (this.serverType && this.viewer && this.contentType) {
				this.viewer.addViewerMapping(this);
			}
		},

		/**
		 * Returns a unique identifying key for this mapping.
		 */
		getKey: function() {
			return this._key;
		},

		/**
		 * returns the viewer if the viewer should be used for the given contentType, serverType, itemType
		 */
		useViewer: function(item, explicitMatchRequired, contentClass, forPreview) {
			if (explicitMatchRequired && this.contentType == "")
				return null;

			return this._criteriaMatched(item, contentClass, forPreview) ? this.viewer : null;
		},

		_criteriaMatched: function(item, contentClass, forPreview) {
			return this._previewOnlyMatched(forPreview) && this._fileTypeMatched(item) && this._serverTypeMatched(item) && this._itemTypeMatched(item, contentClass);
		},

		_previewOnlyMatched: function(forPreview) {
			if (forPreview !== true) {
				forPreview = false;
			}

			return this.previewOnly == forPreview;
		},

		_fileTypeMatched: function(item) {
			var contentType = item.mimetype || "";
			var extension = item.name && item.name.lastIndexOf(".") > -1 ? item.name.substring(item.name.lastIndexOf(".") + 1, item.name.length) : "";
			var mimeTypeMapping = this.contentType && this.contentType.indexOf("/") > -1;

			return this.contentType == "" || (mimeTypeMapping ? contentType.indexOf(this.contentType) === 0 : extension == this.contentType);
		},

		_serverTypeMatched: function(item) {
			var serverType = "";
			if (item.repository) {
				serverType = item.repository.type;
			}

			return this.serverType == "" || this.serverType == serverType;
		},

		_itemTypeMatched: function(item, contentClass) {
			var itemType = "";
			if (contentClass != undefined && contentClass != null) {
				itemType = contentClass;
			} else if (item.getContentClass && item.getContentClass()) {
				itemType = item.getContentClass().id;
			}

			return this.itemType == "" || this.itemType == itemType;
		},

		equals: function(viewer) {
			return this.viewer == viewer;
		}

	});
});

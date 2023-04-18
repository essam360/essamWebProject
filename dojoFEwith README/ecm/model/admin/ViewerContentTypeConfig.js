/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ConfigurationObject"
], function(declare, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.ViewerContentTypeConfig
	 * @class Represents the configuration information for a content type. This information includes the viewers that
	 *        can be used to display content of this type.
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var ViewerContentTypeConfig = declare("ecm.model.admin.ViewerContentTypeConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.ViewerContentTypeConfig.prototype */

		CONTENT_TYPE: "contentType",
		VIEWERS: "viewers",

		constructor: function(id, name) {
			this.logDebug("ViewerContentTypeConfig constructor");
		},

		getContentType: function() {
			return this.getValue(this.CONTENT_TYPE);
		},

		setContentType: function(contentType) {
			this.setValue(this.CONTENT_TYPE, contentType);
		},

		getViewers: function() {
			var viewers = this.getValue(this.VIEWERS);
			if (viewers instanceof Array) {
				return viewers;
			} else if (viewers) {
				return [
					viewers
				];
			} else {
				return [];
			}
		},

		setViewers: function(viewers) {
			this.setValue(this.VIEWERS, viewers);
		},

		supportsViewer: function(viewerID) {
			var array = this.getViewers();
			if (array) {
				for ( var i in array) {
					if (array[i] == viewerID) {
						return true;
					}
				}
			}
			return false;
		}
	});

	/**
	 * Static function that constructs a viewer contentType config object.
	 * 
	 * @param id
	 *            Viewer content type identifier.
	 * @memberof ecm.model.admin.ViewerContentTypeConfig
	 */
	ViewerContentTypeConfig.createViewerContentTypeConfig = function(id) {
		return new ViewerContentTypeConfig(id, "ViewerContentTypeConfig");
	};
	return ViewerContentTypeConfig;
});

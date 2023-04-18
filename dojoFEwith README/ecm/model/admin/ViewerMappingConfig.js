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
	 * @name ecm.model.admin.ViewerMappingConfig
	 * @class Represents the configuration information for a viewer mapping object. This information includes:
	 *        <ul>
	 *        <li>The content types that are mapped to the viewer</li>
	 *        <li>The server type</li>
	 *        <li>The name of the viewer</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var ViewerMappingConfig = declare("ecm.model.admin.ViewerMappingConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.ViewerMappingConfig.prototype */

		CONTENT_TYPES: "contentTypes",
		SERVER_TYPE: "serverType",
		VIEWER_NAME: "viewerName",
		PREVIEW_ONLY: "previewOnly",

		constructor: function(id, name) {
			this.logDebug("ViewerMappingConfig constructor");
		},

		getContentTypes: function() {
			var contentTypes = this.getValue(this.CONTENT_TYPES);
			if (contentTypes instanceof Array) {
				return contentTypes;
			} else if (contentTypes) {
				return [
					contentTypes
				];
			} else {
				return [];
			}
		},

		setContentTypes: function(contentTypes) {
			this.setValue(this.CONTENT_TYPES, contentTypes);
		},

		getServerType: function() {
			return this.getValue(this.SERVER_TYPE);
		},

		setServerType: function(serverType) {
			this.setValue(this.SERVER_TYPE, serverType);
		},

		getViewerName: function() {
			return this.getValue(this.VIEWER_NAME);
		},

		setViewerName: function(viewerName) {
			this.setValue(this.VIEWER_NAME, viewerName);
		},

		getPreviewOnly: function() {
			return this.getBoolean(this.PREVIEW_ONLY);
		},

		setPreviewOnly: function(previewOnly) {
			this.setBoolean(this.PREVIEW_ONLY, previewOnly);
		},

		/**
		 * Returns a display name of the server type.
		 */
		getServerTypeString: function() {
			var type = this.getServerType();
			if (type == "od")
				return this.messages.ondemand;
			else if (type == "cm")
				return this.messages.content_manager;
			else if (type == "p8")
				return this.messages.filenet_p8;
			else if (type == "ci")
				return this.messages.content_integrator;
			else if (type == "cmis")
				return this.messages.cmis;
			else if (type == "box")
				return this.messages.box_content;
			else
				return type;
		},

		// retrieve the ViewerMapping config object
		// onCompleted event handler is callback
		getViewerMappingConfig: function(callback, params) {
			this.logEntry(arguments.callee.nom);
			this.getConfig(callback, params);
			this.logExit(arguments.callee.nom);
			return this;
		}

	});

	/**
	 * Static function that constructs a viewer mapping config object. Use viewer object to save this.
	 * 
	 * @param id
	 *            Viewer mapping identifier.
	 * @memberof ecm.model.admin.ViewerMappingConfig
	 */
	ViewerMappingConfig.createViewerMappingConfig = function(id) {
		return new ViewerMappingConfig({
			id: id,
			name: "ViewerMappingConfig"
		});
	};
	return ViewerMappingConfig;
});

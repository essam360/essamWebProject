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
	 * @name ecm.model.admin.ViewerDefConfig
	 * @class Represents the configuration for a viewer definition. This information includes:
	 *        <ul>
	 *        <li>The viewer name</li>
	 *        <li>The URL that is used to launch the viewer</li>
	 *        <li>The types of servers on which the viewer is supported</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var ViewerDefConfig = declare("ecm.model.admin.ViewerDefConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.ViewerDefConfig.prototype */

		LAUNCH_URL: "launchUrl",
		VIEWER_NAME: "viewerName",
		LABEL: "label",
		SERVER_TYPES: "serverTypes",

		constructor: function(id, name) {
			this.logDebug("ViewerDefConfig constructor");
		},

		getName: function() {
			return this.id;
		},

		getLaunchUrl: function() {
			return this.getValue(this.LAUNCH_URL);
		},

		setLaunchUrl: function(launchUrl) {
			this.setValue(this.LAUNCH_URL, launchUrl);
		},

		getViewerName: function() {
			return this.getValue(this.VIEWER_NAME);
		},

		setViewerName: function(viewerName) {
			this.setValue(this.VIEWER_NAME, viewerName);
		},

		getLabel: function() {
			return this.getValue(this.LABEL);
		},

		setLabel: function(label) {
			this.setValue(this.LABEL, label);
		},

		getServerTypes: function() {
			var types = this.getValue(this.SERVER_TYPES);
			if (types instanceof Array) {
				return types;
			} else if (types) {
				return [
					types
				];
			} else {
				return [];
			}
		},

		supportsServerType: function(serverType, allServers) {
			var array = this.getServerTypes();
			if (array) {
				if (serverType == " ") { // all server types
					if (allServers.length == array.length) {
						return true;
					}
				} else {
					for ( var i in array) {
						if (array[i] == serverType) {
							return true;
						}
					}
				}
			}
			return false;
		}
	});

	/**
	 * Static function that constructs a viewer definition config object. Use viewer object to save this.
	 * 
	 * @param id
	 *            viewer definition identifier.
	 * @memberof ecm.model.admin.ViewerDefConfig
	 */
	ViewerDefConfig.createViewerDefConfig = function(id) {
		return new ViewerDefConfig(id, "ViewerDefConfig");
	};
	return ViewerDefConfig;
});

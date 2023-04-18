/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/model/admin/_ConfigurationObject"
], function(declare, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.DesktopFeatureConfig
	 * @class Represents the configuration information for feature selected in a desktop.
	 * @augments ecm.model.admin._ConfigurationObject
	 * @since 2.0.3
	 */
	var DesktopFeatureConfig = declare("ecm.model.admin.DesktopFeatureConfig", ecm.model.admin._ConfigurationObject, {
		/** @lends ecm.model.admin.DesktopFeatureConfig.prototype */

		DEFAULT_REPOSITORY: "defaultRepository",
		SHOW_TREE_VIEW: "showTreeView",
		SHOW_REPOSITORIES: "showRepositories",
		SHOW_VIEWS: "showViews",
		SHOW_DOCUMENT_INFO_PANE: "showDocumentInfoPane",
		DOCUMENT_INFO_PANE_DEFAULT_OPEN: "documentInfoPaneDefaultOpen",
		DOCUMENT_INFO_PANE_OPEN_ON_SELECTION: "documentInfoPaneOpenOnSelection",
		SHOW_MY_CHECKOUTS: "showMyCheckouts",
		FEATURE_CONFIGURATION: "featureConfiguration",

		constructor: function(id, name) {
			this.logDebug("DesktopFeatureConfig constructor");
		},

		getShowTreeView: function() {
			return this.getValue(this.SHOW_TREE_VIEW);
		},

		setShowTreeView: function(showTreeView) {
			this.setValue(this.SHOW_TREE_VIEW, showTreeView);
		},

		getDefaultRepository: function() {
			return this.getValue(this.DEFAULT_REPOSITORY);
		},

		setDefaultRepository: function(defaultRepository) {
			this.setValue(this.DEFAULT_REPOSITORY, defaultRepository);
		},

		setShowViews: function(views) {
			this.setValue(this.SHOW_VIEWS, views);
		},

		getShowViews: function() {
			return this.getValue(this.SHOW_VIEWS);
		},

		getShowRepositories: function() {
			return this.getValue(this.SHOW_REPOSITORIES);
		},

		setShowRepositories: function(repositories) {
			this.setValue(this.SHOW_REPOSITORIES, repositories);
		},

		getShowDocumentInfoPane: function() {
			return this.getValue(this.SHOW_DOCUMENT_INFO_PANE);
		},

		setShowDocumentInfoPane: function(showDocumentInfoPane) {
			this.setValue(this.SHOW_DOCUMENT_INFO_PANE, showDocumentInfoPane);
		},

		getDocumentInfoPaneDefaultOpen: function() {
			return this.getValue(this.DOCUMENT_INFO_PANE_DEFAULT_OPEN);
		},

		setDocumentInfoPaneDefaultOpen: function(documentInfoPaneDefaultOpen) {
			this.setValue(this.DOCUMENT_INFO_PANE_DEFAULT_OPEN, documentInfoPaneDefaultOpen);
		},

		getDocumentInfoPaneOpenOnSelection: function() {
			return this.getValue(this.DOCUMENT_INFO_PANE_OPEN_ON_SELECTION);
		},

		setDocumentInfoPaneOpenOnSelection: function(documentInfoPaneOpenOnSelection) {
			this.setValue(this.DOCUMENT_INFO_PANE_OPEN_ON_SELECTION, documentInfoPaneOpenOnSelection);
		},

		getShowMyCheckouts: function() {
			return this.getValue(this.SHOW_MY_CHECKOUTS);
		},

		setShowMyCheckouts: function(showMyCheckouts) {
			this.setValue(this.SHOW_MY_CHECKOUTS, showMyCheckouts);
		},

		/**
		 * Returns the custom feature configuration string saved for this feature.
		 */
		getFeatureConfiguration: function() {
			return this.getValue(this.FEATURE_CONFIGURATION);
		},

		/**
		 * Sets and saves the custom feature configuration string for this feature.
		 */
		setFeatureConfiguration: function(featureConfiguration) {
			this.setValue(this.FEATURE_CONFIGURATION, featureConfiguration);
		},

		/**
		 * Check for valid values, make sure that required attributes have values
		 */
		isValid: function() {
			var valid = true;

			var featureId = this.id;
			var dot = featureId.indexOf(".");
			if (dot > 0) {
				featureId = featureId.substring(dot + 1);
			}
			// default repository
			if (featureId == "manageTeamspaces" || featureId == "workPane" || featureId == "browsePane" || featureId == "searchPane" || featureId == "manageEntryTemplates") {
				valid = (this.getDefaultRepository() != null && this.getDefaultRepository() != "");
			}
			if (valid) {
				if (featureId == "favorites" && this.getShowMyCheckouts()) {
					valid = (this.getDefaultRepository() != null && this.getDefaultRepository() != "");
				}
			}

			return valid;
		}

	});

	/**
	 * Static function that constructs an DesktopFeature config object.
	 * 
	 * @param id
	 *            Feature id.
	 * @memberof ecm.model.admin.DesktopFeatureConfig
	 */
	DesktopFeatureConfig.createDesktopFeatureConfig = function(id) {
		return new DesktopFeatureConfig(id, "DesktopFeatureConfig");
	};

	return DesktopFeatureConfig;

});

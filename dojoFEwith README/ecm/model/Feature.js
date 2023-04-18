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
	 * Constructs a feature. Note that features are normally constructed as part of ecm.model.Desktop.loadDesktop and
	 * don't need to be constructed separately.
	 * 
	 * @param properties
	 *            The properties of the feature. The properties can be any of the public fields as defined below and in
	 *            ecm.model._ModelObject.
	 * @name ecm.model.Feature
	 * @class Represents a major feature that can be configured for a desktop. This feature can be displayed with the
	 *        features that are provided by IBM Content Navigator such as favorites, browse, search, and administration.
	 *        <br>
	 *        Private functions should not be used to access public members of the class. Access member variables
	 *        directly. For example:
	 *        <p>
	 *        var feature = new Feature({ id: "favorites", featureClass: "ecm.widget.layout.FavoritesPane", iconUrl:
	 *        "favoritesLaunchIcon" });<br>
	 *        console.debug("Feature class=" + feature.featureClass);
	 *        </p>
	 *        <b>Note:</b> Private getter methods, such as getFeatureClass, <b>will be removed</b> in a future
	 *        release.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.Feature", [
		_ModelObject
	], {
		/** @lends ecm.model.Feature.prototype */

		/**
		 * A boolean indicating that this 'feature' is actually a separator.
		 */
		separator: false,

		/**
		 * A URL to the icon image resource representing the feature.
		 */
		iconUrl: null,

		/**
		 * The name of a widget class implementing the feature.
		 */
		featureClass: null,

		/**
		 * The name of a widget class implementing the popup window for the feature.
		 */
		popupWindowClass: null,

		/**
		 * The tooltip to display when the user hovers over the feature's icon.
		 */
		featureTooltip: null,

		/**
		 * The tooltip to display for the popup window.
		 */
		popupWindowTooltip: null,

		/**
		 * A boolean indicating that the features widgets should be constructed during the initialization of the layout
		 * for the desktop. If false then the features widgets will not be constructed until the user selects to use the
		 * feature.
		 */
		preLoad: false,

		/**
		 * Configuration settings for this feature.
		 * 
		 * @since 2.0.3
		 */
		configurations: null,

		/**
		 * Custom configurations provided by the plug-in for this feature. Plug-in writers can set values here by using
		 * PluginServiceCallbacks.saveFeatureConfiguration() or providing a
		 * {@link ecm.widget.admin.PluginConfigurationPane} for user's input.
		 * 
		 * @since 2.0.3
		 */
		pluginConfiguration: null

	});
});

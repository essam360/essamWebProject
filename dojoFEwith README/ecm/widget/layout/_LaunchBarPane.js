/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin"
],

function(declare, //
ContentPane, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
LoggerMixin, //
MessagesMixin) {

	/**
	 * @name ecm.widget.layout._LaunchBarPane
	 * @class Provides a widget that is extended for any pane that is placed in the content area of the
	 *        LaunchBarContainer widget. This class provides flags and callbacks that are used by the parent container
	 *        to control navigation and content loading.
	 * @augments dijit.layout.ContentPane, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin, ecm.LoggerMixin,
	 *           ecm.MessagesMixin
	 * @public
	 */
	return declare("ecm.widget.layout._LaunchBarPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.layout._LaunchBarPane.prototype */

		isLoaded: false,

		needReset: false,

		selected: false,

		title: "",

		/**
		 * Attach point for the LaunchBarContainer to select the pane in launch bar content area associated with this
		 * popup dialog.
		 * 
		 * @param uuid
		 *            ID of the panel to show.
		 * @param params
		 *            Additional parameters to pass to the selected panel.
		 */
		selectContentPane: function(uuid, params) {
		},

		/**
		 * Attach point for the LaunchBarContainer to open a flyout associated with the specified button.
		 * 
		 * @param buttonId
		 *            ID of the button containing the flyout.
		 * @deprecated As of 2.0.3.3. Flyout menu capabilities will be removed in a future release.
		 */
		openButtonFlyout: function(buttonId) {
		},

		/**
		 * Method that the layout can listen to. Allows the layout to open the item by selecting another pane.
		 */
		onOpenItem: function(item, data) {
		},

		/**
		 * Method that the layout can listen to. Allows the layout to edit the item by selecting another pane.
		 */
		onEditItem: function(item, data) {
		},

		/**
		 * Method should be overridden by dijit that extends _LaunchBarPane to set additional parameters when the panel
		 * is selected in the view.
		 */
		setParams: function(params) {
		},

		/**
		 * Method should be overridden by dijit that extends _LaunchBarPane to load it's content when the user demands
		 * it.
		 */
		loadContent: function() {
		},

		/**
		 * Method should be overridden by the dijit that extends _LaunchBarPane to reset already loaded content.
		 */
		reset: function() {
		},

		/**
		 * Method should be overridden by the dijit that extends _LaunchBarPane to retrieve the correct feature
		 * configuration information.
		 * 
		 * @since 2.0.3.3
		 */
		getFeatureConfiguration: function() {
		},
		
		/**
		 * Method should be overridden by the dijit that extends _LaunchBarPane to add the feature's context selector
		 * to the launch bar, i.e., a repository selector. When a feature is selected, the LaunchBarContainer invokes
		 * this method with the DOM node reserved for the feature's context selector. The feature then has the option
		 * to attach its context selector to the given DOM node. This is only available when the LaunchBarContainer's
		 * <code>showFeatureContextSelector</code> is true. See {@link ecm.widget.layout.LaunchBarContainer} for more
		 * details.
		 * 
		 * @since 3.0.3
		 */
		addFeatureContextSelector: function(domNode) {
		}

	});
});

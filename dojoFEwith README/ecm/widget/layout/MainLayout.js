/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/layout/StackContainer",
	"ecm/model/Desktop",
	"ecm/model/Feature",
	"ecm/widget/LoginPane",
	"ecm/widget/Banner",
	"ecm/widget/MessageBar",
	"ecm/widget/Toolbar",
	"ecm/widget/layout/BaseLayout",
	"ecm/widget/layout/LaunchBarContainer",
	"ecm/widget/layout/CommonActionsHandler",
	"dojo/text!./templates/MainLayout.html"
],

function(declare, //
lang, //
aspect, //
domStyle, //
domConstruct, //
BorderContainer, //
ContentPane, //
StackContainer, //
Desktop, //
Feature, //
LoginPane, //
Banner, //
MessageBar, //
Toolbar, //
BaseLayout, //
LaunchBarContainer, //
CommonActionsHandler, //
template) {

	/**
	 * @name ecm.widget.layout.MainLayout
	 * @class Provides the main layout for IBM Content Navigator or for similar desktop layouts. This class displays the
	 *        launch bar that contains the features on the left side of the layout.
	 * @augments ecm.widget.layout.BaseLayout
	 */
	return declare("ecm.widget.layout.MainLayout", [
		BaseLayout
	], {
		/** @lends ecm.widget.layout.MainLayout.prototype */

		templateString: template,

		widgetsInTemplate: true,

		/**
		 * Boolean indicating if the skip navigation links (required for accessibility) should be added to the document.
		 */
		includeSkipNavigationLinks: true,

		postCreate: function() {
			this.inherited(arguments);

			this.mainStackContainer.domNode.style.visibility = "visible";

			if (Desktop.showGlobalToolbar) {
				this.globalToolbar = new Toolbar({
					toolbarName: "GlobalToolbar",
					baseClass: "ecmGlobalToolbar"
				});
				this.globalToolbarArea.domNode.appendChild(this.globalToolbar.domNode);
				domStyle.set(this.globalToolbarArea.domNode, "display", "");

				this.own(aspect.after(Desktop, "onLogin", lang.hitch(this, function() {
					this.globalToolbar.createToolbar({
						repository: Desktop.getDefaultRepository()
					});
					this.launchBarContainer.resize();
				})));
			}
			if (Desktop.showStatusbar) {
				this.mainPane.addChild(new MessageBar({
					region: "bottom"
				}));

				this.own(aspect.after(Desktop, "onLogin", lang.hitch(this, function() {
					this.launchBarContainer.resize();
				})));
			}
			if (this.includeSkipNavigationLinks) {
				this._setupSkipNavigation();
			}
		},

		_setupSkipNavigation: function() {
			// For the bookmark page, there is no this.launchBarContainer, since only the viewer is shown.
			// Checking for defined prevents a JavaScript error from occurring in this case.
			if (this.launchBarContainer) {
				this.skipNavigation = domConstruct.create("DIV", {
					"class": "ecmSkipNavigation",
					"role": "region",
					"aria-label": this.messages.skipNavigation_label_menu,
					style: "display: none;"
				}, document.body, "first");
				this.launchBarContainer.launchBarButtonArea.domNode.setAttribute("tabIndex", -1);
				domConstruct.create("A", {
					innerHTML: this.messages.skipNavigation_label_menu,
					href: "#" + this.launchBarContainer.launchBarButtonArea.id,
					title: this.messages.skipNavigation_title_menu
				}, this.skipNavigation, "last");
				this.launchBarContainer.launchBarContentArea.domNode.setAttribute("tabIndex", -1);
				domConstruct.create("A", {
					innerHTML: this.messages.skipNavigation_label_main,
					href: "#" + this.launchBarContainer.launchBarContentArea.id,
					title: this.messages.skipNavigation_title_main
				}, this.skipNavigation, "last");

				this._updateSkipNavigation();
				this.own(aspect.after(this.mainStackContainer, "selectChild", lang.hitch(this, function() {
					this._updateSkipNavigation();
				})));
			}
		},

		_updateSkipNavigation: function() {
			domStyle.set(this.skipNavigation, "display", this.mainPane.selected ? "inline" : "none");
		},

		/**
		 * Returns an array of identifiers of the features supported by this layout.
		 */
		getAvailableFeatures: function() {
			var searchPopupWindowClass = "ecm.widget.layout.SearchFlyoutPane";
			if (Desktop.getRequestParam("defaultSearch") && Desktop.getRequestParam("defaultSearchOnly") === "true") { // single search mode
				searchPopupWindowClass = null;
			}

			return [
				new Feature({
					id: "favorites",
					name: Desktop.getConfiguredLabelsvalue("home"),
					separator: false,
					iconUrl: "favoritesLaunchIcon",
					featureClass: "ecm.widget.layout.HomePane",
					popupWindowClass: null,
					featureTooltip: ecm.messages.launchbar_home,
					popupWindowTooltip: null,
					preLoad: false
				}),
				new Feature({
					id: "browsePane",
					name: Desktop.getConfiguredLabelsvalue("browse"),
					separator: false,
					iconUrl: "browseLaunchIcon",
					featureClass: "ecm.widget.layout.BrowsePane",
					popupWindowClass: "ecm.widget.layout.BrowseFlyoutPane",
					featureTooltip: ecm.messages.launchbar_browse,
					popupWindowTooltip: ecm.messages.launchbar_browse_popup,
					preLoad: false
				}),
				new Feature({
					id: "searchPane",
					name: Desktop.getConfiguredLabelsvalue("search"),
					separator: false,
					iconUrl: "searchLaunchIcon",
					featureClass: "ecm.widget.layout.SearchPane",
					popupWindowClass: searchPopupWindowClass,
					featureTooltip: ecm.messages.launchbar_search,
					popupWindowTooltip: ecm.messages.launchbar_search_popup,
					preLoad: false
				}),
				new Feature({
					id: "manageTeamspaces",
					name: Desktop.getConfiguredLabelsvalue("workspaces"),
					separator: false,
					iconUrl: "teamspacesLaunchIcon",
					featureClass: "ecm.widget.layout.ManageTeamspacesPane",
					popupWindowClass: "ecm.widget.layout.TeamspaceFlyoutPane",
					featureTooltip: ecm.messages.launchbar_teamspaces,
					popupWindowTooltip: ecm.messages.launchbar_teamspaces_popup,
					preLoad: false
				}),
				new Feature({
					id: "workPane",
					name: Desktop.getConfiguredLabelsvalue("work"),
					separator: false,
					iconUrl: "workLaunchIcon",
					featureClass: "ecm.widget.layout.WorkPane",
					popupWindowClass: "ecm.widget.layout.WorkFlyoutPane",
					featureTooltip: ecm.messages.launchbar_work,
					popupWindowTooltip: ecm.messages.launchbar_work_popup,
					preLoad: false
				}),
				new Feature({
					id: "manageEntryTemplates",
					name: Desktop.getConfiguredLabelsvalue("entry_templates"),
					separator: false,
					iconUrl: "entryTemplatesLaunchIcon",
					featureClass: "ecm.widget.layout.ManageEntryTemplatesPane",
					popupWindowClass: "ecm.widget.layout.EntryTemplatesFlyoutPane",
					featureTooltip: ecm.messages.launchbar_entry_templates,
					popupWindowTooltip: ecm.messages.launchbar_entry_templates_popup,
					preLoad: false
				}),
				new Feature({
					id: "asyncTaskPane",
					name: Desktop.getConfiguredLabelsvalue("asyncTasks"),
					separator: false,
					iconUrl: "taskLaunchIcon",
					featureClass: "ecm.widget.layout.AsyncTaskPane",
					popupWindowClass: null,
					featureTooltip: ecm.messages.taskPane_tooltip,
					popupWindowTooltip: null,
					preLoad: false
				})
			];
		},

		/**
		 * Sets the feature configuration.
		 */
		setFeatures: function(selectedFeatures, defaultFeature) {
			this.logEntry("setFeatures");

			var features = this.mergeFeatures(this.getAvailableFeatures(), selectedFeatures, defaultFeature);
			var layout = {
				buttons: features
			};
			this.launchBarContainer.setLayout(layout);

			this.onLayoutLoaded();
			this.mainContainer.resize();

			this.logExit("setFeatures");
		},

		/**
		 * Regroup features according to user selection.
		 */
		mergeFeatures: function(availableFeatures, selectedFeatures, defaultFeature) {
			this.logEntry("mergeFeatures", availableFeatures, selectedFeatures, defaultFeature);
			if (!selectedFeatures) {
				return availableFeatures;
			}

			var features = [];
			for (var i = 0; i < selectedFeatures.length; i++) {
				var feature = selectedFeatures[i];
				if (feature.featureClass || feature.separator || feature.popupWindowClass) { // assume fully filled in so use it
					features.push(feature);
				} else { // find feature in available features and use it
					for (var j = 0; j < availableFeatures.length; j++) {
						var availableFeature = availableFeatures[j];
						if (feature.id == availableFeature.id) {
							availableFeature.configurations = feature.configurations;
							availableFeatures.pluginConfiguration = feature.pluginConfiguration;
							selectedFeatures[i] = availableFeature;
							features.push(availableFeature);
							break;
						}
					}
				}
			}

			this.logExit("mergeFeatures");
			return features;
		},

		/**
		 * An event invoked when the layout has finished loading.
		 */
		onLayoutLoaded: function() {
		},

		/**
		 * Returns a handle to the {@link ecm.widget.Banner} widget in the layout.
		 * 
		 * @deprecated As of 2.0.3. Use direct access to the banner. For example, myLayout.banner.
		 */
		getBanner: function() {
			return this.banner;
		},

		/**
		 * Returns a handle to the {@link ecm.widget.GlobalToolbar} widget if there is one in the layout. It is an
		 * optional desktop setting to enable the global toolbar.
		 * 
		 * @deprecated As of 2.0.3. Use direct access to the global toolbar. For example, myLayout.globalToolbar.
		 */
		getGlobalToolbar: function() {
			return this.globalToolbar;
		}
	});
});

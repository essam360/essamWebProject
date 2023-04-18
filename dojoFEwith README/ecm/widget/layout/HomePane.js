/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/aspect",
	"dojo/dom-class",
	"dijit/layout/TabContainer",
	"ecm/model/Desktop",
	"ecm/widget/layout/_LaunchBarPane",
	"ecm/widget/layout/MyCheckoutsPane",
	"ecm/widget/layout/FavoritesPane",
	"ecm/widget/layout/MySyncedFilesPane",
	"dojo/text!./templates/HomePane.html"
], function(declare, lang, array, Deferred, aspect, domClass, TabContainer, Desktop, _LaunchBarPane, MyCheckoutsPane, FavoritesPane, MySyncedFilesPane, template) {

	/**
	 * @name ecm.widget.layout.HomePane
	 * @class Provides a widget that contains the favorites and my checkouts pane.
	 * @augments ecm.widget.layout._LaunchBarPane
	 * @since 2.0.3
	 */
	var HomePane = declare("ecm.widget.layout.HomePane", [
		_LaunchBarPane
	], {
		/** @lends ecm.widget.layout.HomePane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);

			this.own(aspect.after(this._tabContainer, "selectChild", lang.hitch(this, function(page) {
				if (page && page.loadContent) {
					page.loadContent();
				}
			}), true));

			// Add a tab for favorites
			this._favoritesPane = FavoritesPane({
				title: Desktop.getConfiguredLabelsvalue("favorites"),
				closable: false,
				selected: true,
				iconClass: "favoritesTab",
				feature: this.feature
			});
			this.own(aspect.after(this._favoritesPane, "onOpenItem", lang.hitch(this, "onOpenItem"), true)); // delegates to other panes
			this.own(aspect.after(this._favoritesPane, "onEditItem", lang.hitch(this, "onEditItem"), true)); // delegates to other panes
			this._tabContainer.addChild(this._favoritesPane);

			// Add a tab for my checkouts if it is configured to be shown on the desktop
			var config = this.getFeatureConfiguration();
			if (config && config.showMyCheckouts && config.showRepositories && config.showRepositories.length > 0) {
				this._myCheckoutsPane = new MyCheckoutsPane({
					title: Desktop.getConfiguredLabelsvalue("my_checkouts"),
					closable: false,
					iconClass: "checkoutsTab",
					feature: this.feature
				});
				this.own(aspect.after(this._myCheckoutsPane, "onOpenItem", lang.hitch(this, "onOpenItem"), true)); // delegates to other panes
				this.own(aspect.after(this._myCheckoutsPane, "onEditItem", lang.hitch(this, "onEditItem"), true)); // delegates to other panes
				this._tabContainer.addChild(this._myCheckoutsPane);
			}

			// Add a tab for my synced files if it is configured to be shown on the desktop
			if (ecm.model.desktop.syncServer.enabled && config.showRepositories && config.showRepositories.length > 0) {
				this._mySyncedFilesPane = new MySyncedFilesPane({
					title: Desktop.getConfiguredLabelsvalue("mySyncedFiles"),
					closable: false,
					iconClass: "syncItemsTab",
					feature: this.feature
				});
				this.own(aspect.after(this._mySyncedFilesPane, "onOpenItem", lang.hitch(this, "onOpenItem"), true)); // delegates to other panes
				this.own(aspect.after(this._mySyncedFilesPane, "onEditItem", lang.hitch(this, "onEditItem"), true)); // delegates to other panes
				this._tabContainer.addChild(this._mySyncedFilesPane);
			}

			// Add extension panes
			this._addExtensionPanes();

			if (this._tabContainer.getChildren().length <= 1) {
				// Hide the tabs since there is only one
				domClass.add(this._tabContainer.domNode, "singleTab");
				domClass.add(this._tabContainer.tablist.domNode, "dijitHidden");
			}
			this._tabContainer.startup();

			// Favorites are automatically loaded from SSO repositories.
			// When that requires connecting to the SSO repository, the session will be replaced.
			// If the session is replaced while other asynchronous requests are being processed,
			// those other requests may fail with a session expired error.
			// Postpone firing onLogin until after all favorite SSO repository connections have been handled.
			this.own(aspect.around(Desktop, "_fireOnLogin", lang.hitch(this, function(originalFireOnLogin) {
				return lang.hitch(this, function(repository) {
					if (this.selected || Desktop.defaultFeature == "favorites") {
						Desktop.favoritesLoginsCompleted = new Deferred();
						Desktop.favoritesLoginsCompleted.then(lang.hitch(this, function() {
							// All favorite SSO repositories are connected. Fire the desktop login.
							originalFireOnLogin.apply(Desktop, repository);
							delete ecm.model.desktop.favoritesLoginsCompleted;
						}))
						if (!this._favoritesPane.isLoaded)
							this._favoritesPane.loadContent();
						else
							this._favoritesPane.reset();
						// this.onLoginSkipFavorites = true;
					} else {
						// This pane is not selected or is not the default feature, fire the desktop login now.
						originalFireOnLogin.apply(Desktop, repository);
					}
				});
			})));

			// Load the content upon login if this pane is selected
			this.own(aspect.after(Desktop, "onLogin", lang.hitch(this, function() {
				if (this.selected) {
					if (!this.isLoaded)
						this.loadContent();
					else
						this.reset();
				} else {
					this.needReset = true;
				}
			})));
		},

		focus: function() {
			if (this._tabContainer) {
				var children = this._tabContainer.getChildren();
				if (children && children.length > 0) {
					var child = children[0];
					if (child && child.focus) {
						child.focus();
					} else if (this._tabContainer.focus) {
					    this._tabContainer.focus();
					}
				}
			}
		},
		
		/**
		 * Method should be overridden by the dijit that extends _LaunchBarPane to retrieve the correct feature
		 * configuration information.
		 * 
		 * @since 2.0.3.3
		 */
		getFeatureConfiguration: function() {
			// Add a tab for my checkouts if it is configured to be shown on the desktop
			return this.feature.configurations;
		},

		/**
		 * @private
		 */
		_addExtensionPanes: function() {
			if (this.constructor.extensionPanes) {
				for ( var i in this.constructor.extensionPanes) {
					var extensionPane = this.constructor.extensionPanes[i];
					if (extensionPane && extensionPane.tabPaneClass) {
						var widgetClass = extensionPane.tabPaneClass;

						// Pass this feature to the secondary pane for the configurations object
						extensionPane.params.feature = this.feature;

						var tabPane = new widgetClass(extensionPane.params);
						this._tabContainer.addChild(tabPane, extensionPane.insertIndex);
					}
				}
			}
		},

		resize: function() {
			this.inherited(arguments);
			this._tabContainer.resize();
		},

		/**
		 * Loads the content of this pane.
		 */
		loadContent: function() {
			if (!this.isLoaded) {
				var children = this._tabContainer.getChildren();
				if (children && children.length > 0) {
					this._tabContainer.selectChild(children[0]);
				} else {
					this._favoritesPane.loadContent();
				}
				this.isLoaded = true;
				this.needReset = false;
			}
		},

		/**
		 * Resets the content of this pane.
		 */
		reset: function() {
			var children = this._tabContainer.getChildren();
			for (var i = 0; i < children.length; i++) {
				var child = children[i];
				if (child && child.reset) {
					child.reset();
				}
			}
			if (children && children.length > 0) {
				this._tabContainer.selectChild(children[0]);
			} else {
				this._tabContainer.selectChild(this._favoritesPane);
			}
			this.needReset = false;
		}
	});

	/**
	 * This static method allows the <code>HomePane</code> to be extended with additional tabs.
	 * 
	 * @param tabPaneClass
	 *            The widget pane class to add to the <code>HomePane</code> tab container.
	 * @param params
	 *            Object containing parameters to pass to the tab pane class when it's constructed. For example: {
	 *            title: "My Tab", closable: false, iconClass: "myTab" }
	 * @param insertIndex
	 *            Position in the "stack" to add the child widget.
	 * @memberof ecm.widget.layout.HomePane
	 */
	HomePane.addTabPane = function(tabPaneClass, params, insertIndex) {
		if (!HomePane.extensionPanes) {
			HomePane.extensionPanes = [];
		}
		HomePane.extensionPanes.push({
			tabPaneClass: tabPaneClass,
			params: params,
			insertIndex: insertIndex
		});
	};

	return HomePane;
});

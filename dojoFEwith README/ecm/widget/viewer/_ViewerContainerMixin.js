/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/aspect",
	"ecm/LoggerMixin"
], //
function(declare, lang, array, connect, domStyle, domClass, aspect, LoggerMixin) {

	/**
	 * @name ecm.widget.viewer._ViewerContainerMixin
	 */
	var _ViewerContainerMixin = declare("ecm.widget.viewer._ViewerContainerMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget.viewer._ViewerContainerMixin.prototype */
		contentViewer: null,
		loadImmediate: true,

		_viewerContainerMixinInitialized: false,

		addContentViewerTab: function(contentViewerTab, select) {
			var methodName = "addContentViewerTab";
			this.logEntry(methodName);

			if (!this._viewerContainerMixinInitialized) {
				// We need to override the selectChild of the StackContainer, because there may be unsaved
				// properties changes that need to be saved or discarded before we switch...
				this._viewerContainerMixinInitialized = true;
				this.own(aspect.around(this, "selectChild", function(originalSelectChild) {
					return function(page, animated) {
						this._selectChildIntercept(originalSelectChild, arguments, page, animated);
					};
				}));
			}

			this.logDebug(methodName, "Adding content viewer tab with select == " + select);
			this.loadImmediate = select;
			this.addChild(contentViewerTab, this.getViewerTabs().length);
			this.loadImmediate = true;

			this.logExit(methodName);
		},

		_selectChildIntercept: function(originalSelectChild, originalArguments, page, animated) {
			var methodName = "_selectChildIntercept";
			this.logEntry(methodName);
			this.contentViewer._okToSwitchTab(lang.hitch(this, function() {
				this.logDebug(methodName, "okToSwitchTab said OK");
				originalSelectChild.apply(this, originalArguments);
				if (page.viewerItem)
					this.onViewerTabSelected(page);
			}), lang.hitch(this, function() {
				this.logDebug(methodName, "okToSwitchTab said Cancel");
			}), page);
			this.logExit(methodName);
		},

		getContentViewerTab: function(item, preview) {
			var methodName = "getContentViewerTab";
			this.logEntry(methodName);

			var tabs = this.getViewerTabs();
			var matchedContentViewerTab = null;

			if (tabs != null && tabs.length > 0) {
				this.logDebug(methodName, "tabs != null && tabs.length > 0");
				for (var n = 0; n < tabs.length && matchedContentViewerTab == null; n++) {
					var contentViewerTab = tabs[n];
					if (contentViewerTab.matches(item, preview)) {
						matchedContentViewerTab = contentViewerTab;
					}
				}
			}

			this.logExit(methodName);
			return matchedContentViewerTab;
		},

		getContentViewerPane: function(item, preview) {
			var methodName = "getContentViewerPane";
			this.logEntry(methodName);

			var contentViewerTab = this.getContentViewerTab(item, preview);
			var contentViewerPane = (contentViewerTab != null ? contentViewerTab.contentViewerPane : null);

			this.logExit(methodName);
			return contentViewerPane;
		},

		getMatchedViewerPane: function(viewerPane) {
			return this.getContentViewerPane(viewerPane.viewerItem.item, viewerPane.preview);
		},

		getMatchedViewerTab: function(tab) {
			return this.getContentViewerTab(tab.contentViewerPane.viewerItem.item, tab.contentViewerPane.preview);
		},

		getSelectedViewerTab: function() {
			return this.selectedChildWidget;
		},

		getSelectedViewerPane: function() {
			var methodName = "getSelectedViewerPane";
			this.logEntry(methodName);

			var selectedViewerTab = this.selectedChildWidget;
			var selectedViewerPane = (selectedViewerTab != null ? selectedViewerTab.contentViewerPane : null);

			this.logExit(methodName);
			return selectedViewerPane;
		},

		isLastViewerTab: function(viewerTab) {
			var methodName = "isLastViewerTab";
			this.logEntry(methodName);

			var children = this.getViewerTabs();
			var currentIndex = this.getIndexOfChild(viewerTab);
			var isLast = (currentIndex + 1 == children.length);
			this.logDebug(methodName, "Number of children: " + children.length + ", Current tab index: " + currentIndex + ", Returning: " + isLast);

			this.logExit(methodName);
			return isLast;
		},

		isSelectedViewerTab: function(viewerTab) {
			return viewerTab == this.selectedChildWidget;
		},

		onViewerTabSelected: function(selectedViewerTab) {
			var methodName = "onViewerTabSelected";
			this.logEntry(methodName);

			if (this.loadImmediate) {
				this.logDebug(methodName, "Performing viewer selection and refresh");
				array.forEach(this.getViewerTabs(), function(tab) {
					var selected = tab == selectedViewerTab;
					tab.selectViewer(selected);
					if (selected)
						tab.refreshViewer();
				});
				this.contentViewer.splitContainer.layout();
			} else {
				this.logDebug(methodName, "Skipping viewer selection and refresh");
			}

			this.logExit(methodName);
		},

		/**
		 * Unload all viewers from the stack container.
		 */
		unloadViewers: function() {
			var methodName = "unloadViewers";
			this.logEntry(methodName);

			var tabs = this.getViewerTabs();
			if (tabs != null && tabs.length > 0) {
				this.logDebug(methodName, "tabs != null && tabs.length > 0");
				for (var n = 0; n < tabs.length; n++) {
					this.unloadViewer(tabs[n]);
				}
			}

			this.logExit(methodName);
		},

		getViewerTabs: function() {
			var tabs = array.filter(this.getChildren(), function(tab) {
				return !!tab.viewerItem;
			});

			return tabs;
		},

		/**
		 * Unload the viewer. Remove the tab from the stack container, and optionally clean it up for disposal.
		 * 
		 * @param contentViewerTab
		 *            The tab to be removed.
		 * @param reuse
		 *            An optional flag, indicating that the tab is going to be reused, so do not dispose it's resources.
		 */
		unloadViewer: function(contentViewerTab, reuse) {
			var methodName = "unloadViewer";
			this.logEntry(methodName);
			contentViewerTab.contentViewerPane.closeItem();
			this.logDebug(methodName, "Removing contentViewerTab");
			this.removeContentViewerTab(contentViewerTab, reuse);
			this.logExit(methodName);
		},

		removeContentViewerTab: function(contentViewerTab, reuse) {
			if (!reuse) {
				contentViewerTab.contentViewerPane.uninitialize();
			}

			this.removeChild(contentViewerTab);

			if (!reuse) {
				contentViewerTab.destroyRecursive(false);
			}
		},

		_sendDocumentOpened: function(contentViewerTab) {
			if (this == this.contentViewer.mainTabContainer) {
				this.contentViewer.onDocumentOpened(contentViewerTab.viewerItem.item, contentViewerTab.preview);
			}
		},

		_sendDocumentClosed: function(contentViewerTab) {
			if (this == this.contentViewer.mainTabContainer) {
				this.contentViewer.onDocumentClosed(contentViewerTab.viewerItem.item, contentViewerTab.preview);
			}
		},

		_okToClose: function() {
			var methodName = "_okToClose";
			this.logEntry(methodName);
			var isOkToClose = true;

			var tabs = this.getViewerTabs();
			if (tabs != null && tabs.length > 0) {
				for (var n = 0; n < tabs.length && isOkToClose; n++) {
					var viewerPane = tabs[n].contentViewerPane;
					isOkToClose = !viewerPane.isDirty() || (viewerPane.docViewer && viewerPane.docViewer.ignoreDirty());
				}
			}

			this.logExit(methodName);
			return (isOkToClose);
		}
	});

	return _ViewerContainerMixin;
});

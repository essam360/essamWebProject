/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dijit/Tooltip",
	"ecm/widget/listView/modules/_Module",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dijit/form/ToggleButton",
	"ecm/model/Desktop"
], //
function(declare, lang, array, event, domClass, domStyle, domGeom, Tooltip, _Module, connect, domConstruct, ToggleButton, Desktop) {

	/**
	 * @name ecm.widget.listView.modules._View
	 * @class This abstract content list module provides toggle view capability.
	 * @augments ecm.widget.listView.modules._Module
	 */

	return declare(_Module, {
		/** @lends ecm.widget.listView.modules._View.prototype */

		/**
		 * Boolean indicating if the view selector button should display.
		 */
		showViewSelectorButton: true,

		/**
		 * Sets the default view. The first view in the list of view modules becomes the default view.
		 */
		initialize: function() {
			var t = this, cl = t.contentList;
			if (t._bar && t._barNode) {
				if (t._barNode.toggleViewArea) {
					t.toggleViewArea = t._barNode.toggleViewArea;
				} else {
					t.toggleViewArea = t._barNode.toggleViewArea = domConstruct.create("div", {}, t._barNode);
				}
			}

			var toggleViewArea = t.getViewNode();
			if (!cl._viewCurrentName) {
				this._hideViewIcons(true);
				cl._viewCurrentName = t.name;
				cl._viewStructure = t._getStructure();
			} else {
				this._hideViewIcons(toggleViewArea.childNodes && toggleViewArea.childNodes.length < 1);
			}
			domClass.add(toggleViewArea, "toggleView");
			t.connect(toggleViewArea, "oncontextmenu", "_stopEvent");
		},

		/**
		 * @private Hide or show the toggleViewArea.
		 */
		_hideViewIcons: function(bool) {
			var t = this;
			if (bool) {
				domClass.add(t.getViewNode(), "dijitHidden");
				if (t._bar && t._barNode) {
					domClass.add(t._barNode, "dijitHidden");
				}
			} else {
				domClass.remove(t.getViewNode(), "dijitHidden");
				if (t._bar && t._barNode) {
					domClass.remove(t._barNode, "dijitHidden");
				}
			}
		},

		/**
		 * Returns the dom node to add the view buttons.
		 */
		getViewNode: function() {
			var t = this;
			return t.toggleViewArea ? t.toggleViewArea : t.contentList.toggleViewArea;
		},

		/**
		 * @private Stops the event.
		 */
		_stopEvent: function(evt) {
			event.stop(evt);
			return false;
		},

		/**
		 * Return true if the view supports column sorting.
		 * 
		 * @return Boolean indicating if the view supports column sorting.
		 */
		supportsColumnSorting: function() {
			return false;
		},

		/**
		 * @private Creates a view button & listens to the onclick event.
		 */
		_createViewButton: function(iconClass, checked, tooltipLabel, label, showLabel) {
			var t = this, cl = t.contentList;
			var button = new ToggleButton({
				iconClass: iconClass,
				title: tooltipLabel,
				showLabel: showLabel,
				label: label,
				checked: checked
			});
			button._viewName = t.name;
			/* new Tooltip({
				connectId: button.domNode,
				label: tooltipLabel,
				showDelay: 1000
			}); */
			t.connect(button, "onClick", lang.hitch(t, function() {
				var viewModule = cl.getContentListModule(t.getCurrentViewName());
				if (viewModule) {
					viewModule._beforeChangeView(button._viewName);
				}
				cl.onViewButtonClicked(button._viewName, t.getCurrentViewName());
			}));
			t.connect(cl, "onViewButtonClicked", "onViewButtonClicked");
			t.connect(cl, "onSetViews", lang.hitch(t, function() {
				if (t.getCurrentViewName() == t.name) {
					cl._viewStructure = t._getStructure();
				}
			}));
			return button;
		},

		/**
		 * @private Called before the view is changed.
		 */
		_beforeChangeView: function() {
		},

		/**
		 * Event fired when a view button is clicked. All the views will be notified when any of the buttons are
		 * clicked. Override this method in your subclass to add the button click logic.
		 * 
		 * @param buttonViewName
		 *            Name of the view button clicked.
		 * @param currentViewName
		 *            Name of the current view button.
		 */
		onViewButtonClicked: function(buttonViewName, currentViewName) {
		},

		/**
		 * Sets the current view name & structure, and checks/selects the viewButton.
		 * 
		 * @param viewName
		 *            The name of the view.
		 * @param viewStructure
		 *            The view structure.
		 * @param viewButton
		 *            The view button.
		 */
		setCurrentView: function(viewName, viewStructure, viewButton) {
			var t = this, cl = t.contentList;
			cl._viewCurrentName = viewName;
			cl._viewStructure = viewStructure;
			viewButton.set("checked", true);
		},

		/**
		 * Returns the current view's name.
		 */
		getCurrentViewName: function() {
			var t = this, cl = t.contentList;
			return cl._viewCurrentName ? cl._viewCurrentName : t.name;
		},

		/**
		 * @private Get the structure. Override in your subclass.
		 */
		_getStructure: function() {
			return null;
		},

		/**
		 * @private Updates the docinfo/rightPane's showPreview.
		 */
		_setShowPreview: function(bool) {
			var t = this, cl = t.contentList;
			var docInfo = cl.getContentListModule("rightPane");
			if (docInfo && docInfo.setShowPreview) {
				docInfo.setShowPreview(bool);
			}
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dijit/Tooltip",
	"ecm/widget/listView/modules/_View",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dijit/form/ToggleButton",
	"ecm/model/Desktop"
], //
function(declare, lang, array, domClass, domStyle, domGeom, Tooltip, _View, connect, domConstruct, ToggleButton, Desktop) {

	/**
	 * @name ecm.widget.listView.modules.ViewMagazine
	 * @class This content list module provides magazine view capability.
	 * @augments ecm.widget.listView.modules._View
	 */

	return declare(_View, {
		/** @lends ecm.widget.listView.modules.ViewMagazine.prototype */

		name: 'viewMagazine',

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				viewMagazine: this
			};
		},

		/**
		 * Creates the view button.
		 */
		preload: function() {
			var t = this, cl = t.contentList;
			t.initialize();
			t._viewButton = t._createViewButton("viewMagazine", this.getCurrentViewName() == this.name, ecm.messages.magazine_view_button_tooltip, ecm.messages.magazine_view_button, false);
			if (t.showViewSelectorButton) {
				domConstruct.place(t._viewButton.domNode, t.getViewNode());
			}
			if (t.getCurrentViewName() == t.name) {
				domClass.add(t.contentList.gridArea.domNode, "magazineView");
			}
			t.connect(cl, "onModulesLoaded", lang.hitch(t, function() {
				if (cl.grid.header && t.getCurrentViewName() == t.name)
					cl.grid.header.hidden = true;
			}));
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			var t = this;
			if (t.contentList.gridArea && t.contentList.gridArea.domNode) {
				domClass.remove(t.contentList.gridArea.domNode, "magazineView");
			}
			if (t._viewButton) {
				t._viewButton.destroyRecursive();
				t._viewButton = null;
			}
			t.inherited(arguments);
		},

		/**
		 * Handles a click event when any view button is clicked.
		 * 
		 * @param buttonViewName
		 *            Name of the view button clicked.
		 * @param currentViewName
		 *            Name of the current view button.
		 */
		onViewButtonClicked: function(buttonViewName, currentViewName) {
			var t = this, cl = t.contentList, gridArea = cl.gridArea, g = cl.grid;
			if (buttonViewName == t.name && currentViewName != this.name) {
				domClass.add(gridArea.domNode, "magazineView");

				var structure = t._getStructure();
				t.setCurrentView(t.name, structure, t._viewButton);
				t._setShowPreview(true);

				if (g.sort) {
					g.sort._sortId = "1";
				}
				g.setColumns(structure);
				if (g.header) {
					g.header.hidden = true;
					g.header.refresh();
				}	
				cl.resize();

				var selectedItems = cl.getSelectedItems();
				if (selectedItems && selectedItems.length && selectedItems.length > 0) {
					var item = selectedItems[0];
					var id = g.store.getIdentity(item);
					setTimeout(function() {
						try {
							g.vScroller.scrollToRow(g.row(id).visualIndex(), true);
						} catch (e) {
							//ignore
						}
					}, 300);
				}
			} else if (buttonViewName != t.name) {
				domClass.remove(gridArea.domNode, "magazineView");
				if (g && g.header) {
					g.header.hidden = false;
					g.header.refresh();
				}	
				t._viewButton.set("checked", false);
			} else {
				t._viewButton.set("checked", true);
			}
		},

		/**
		 * @private Return the structure for this view.
		 */
		_getStructure: function() {
			var t = this, cl = t.contentList;
			return cl._magazineView;
		}
	});
});

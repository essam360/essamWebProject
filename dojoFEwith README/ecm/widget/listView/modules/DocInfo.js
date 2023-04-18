/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"ecm/model/WorkItem",
	"ecm/widget/listView/modules/_Module",
	"ecm/widget/ItemPropertiesDisplayPane",
	"ecm/widget/dialog/ConfirmationDialog",
	"dojo/_base/connect",
	"dojo/dom-construct"
], function(declare, lang, string, WorkItem, _Module, ItemPropertiesDisplayPane, ConfirmationDialog, connect, domConstruct) {

	/**
	 * @name ecm.widget.listView.modules.DocInfo
	 * @class This content list module provides the document info right pane. By default, when a row is selected for the
	 *        1st time, then the pane opens to show the document information with the 1st selected row's data (this can
	 *        be turned off by setting the selectAutoOpen flag to false). After the 1st time, if the user keeps the pane
	 *        open, then whenever the user selects a row, show the document information with the 1st selected row's
	 *        data. If the user closes the pane, then disconnect from row selection events.
	 * @augments ecm.widget.listView.modules._Module
	 */

	return declare(_Module, {
		/** @lends ecm.widget.listView.modules.DocInfo.prototype */

		name: 'rightPane',

		/**
		 * Show the system properties.
		 */
		showSystemProps: false,

		/**
		 * Render the system properties.
		 */
		renderSystemProps: true,

		/**
		 * Show the preview.
		 */
		showPreview: true,

		/**
		 * Automatically open document information view when user selects item in the content list.
		 */
		selectAutoOpen: true,

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				rightPane: this
			};
		},

		/**
		 * Creates the document information widget, adds it to the content list pane, & listens to events.
		 */
		preload: function() {
			var t = this, cl = t.contentList, pane = cl.itemPropArea, gridContainer = cl.gridContainer;
			cl._showItemPropArea(true);

			// Add the ItemPropertiesDisplayPane to the pane
			t._itemProperties = t.createItemPropertiesDisplayPane();
			domConstruct.place(t._itemProperties.domNode, pane.domNode, "only");

			// If the pane is already open, then listen to row selection.
			if (pane._isOpen) {
				if (pane._isInitialized) {
					t.setItem(null); // displays no item selected in the right pane
				}
				t._connectGridRowSelection();

			} else if ( this.selectAutoOpen) {
				// If the pane is not initialized, then one-time connect to the grid selection event to restore the properties pane.
				// It will disconnect immediately after restoring.
				t._rowClickHandle = t.connect(cl, "onRowSelectionChange", lang.hitch(t, function(selectedItems) {
					if (selectedItems && selectedItems.length > 0) {
						this.setPaneWidth();//to fix defect 38636
						gridContainer.restore();
						pane._isInitialized = true;
						connect.disconnect(t._rowClickHandle);
					}
				}));
			}

			// When the panel opens, set the doc info pane with the 1st selected item & listen for future row selection change. 
			t.connect(gridContainer, "onPanelOpen", lang.hitch(t, function(region) {
				pane._isOpen = true;
				var selectedItems = cl.getSelectedItems();
				t.setItem(selectedItems.length > 0 ? selectedItems[0] : null);
				if (region == "right" || region == "left") {
					t._connectGridRowSelection();
				}
			}));

			// When the panel closes, disconnect from the row selection change.
			t.connect(gridContainer, "onPanelClose", lang.hitch(t, function(region) {
				pane._isOpen = false;
				if (region == "right" || region == "left") {
					t._disconnectGridRowSelection();
				}
			}));

			t.connect(cl, "_onChangeResultSet", lang.hitch(t, function(object) {
				if (object == cl._resultSet) {
					t._itemProperties._toggleItemEditPane(null, false);
				}
			}));
		},

		/**
		 * Set doc Info pane size
		 * 
		 * @since 2.0.3
		 */
		setPaneWidth: function(width) {
			var setWidth = 300;
			if (!isNaN(width)) {
				setWidth = width;
			}
			var gridContainer = this.contentList.gridContainer;
			var childWidgets = gridContainer.getChildren();
			for ( var i in childWidgets) {
				var c = childWidgets[i];
				var r = c.get("region");
				var splitter = gridContainer.getSplitter(r);
				if (splitter) {
					splitter._paneSize = setWidth;
				}
			}
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			var t = this;
			t._disconnectGridRowSelection();
			if (t._itemProperties) {
				t._itemProperties.destroyRecursive();
				t._itemProperties = null;
			}
			t.inherited(arguments);
		},

		/**
		 * Override this to create a different properties display pane.
		 */
		createItemPropertiesDisplayPane: function() {
			var t = this;
			return new ItemPropertiesDisplayPane({
				showSystemProps: t.showSystemProps,
				renderSystemProps: t.renderSystemProps,
				showPreview: t.showPreview,
				allowEdit: true
			});
		},

		/**
		 * @private Disconnect listening to row selection.
		 */
		_disconnectGridRowSelection: function() {
			var t = this;
			if (t._itemPropHandle) {
				connect.disconnect(t._itemPropHandle);
				t._itemPropHandle = null;
			}
		},

		/**
		 * @private On row selection change, call setItem with the 1st selected item
		 */
		_connectGridRowSelection: function() {
			var t = this, cl = t.contentList;
			t._itemPropHandle = t.connect(cl, "onRowSelectionChange", lang.hitch(t, function(selectedItems) {
				// ignore row selection changes if in the middle of checking edit mode invalid changes
				if (!t.checkEditState) {
					// start checking edit mode invalid changes
					t.checkEditState = true;

					var viewPane = t._itemProperties;
					// check if the properties pane is in edit mode, dirty and invalid
					if (viewPane && viewPane.propertiesPane && viewPane.propertiesPane.isDirty() && !viewPane.propertiesPane.isValid()) {
						var editPane = viewPane.propertiesPane;
						var item = editPane.getItem();

						if (t._confirmDiscardChangesDialog)
							t._confirmDiscardChangesDialog.destroy();

						t._confirmDiscardChangesDialog = new ConfirmationDialog({
							baseClass: "ecmConfirmationWarningDialog dijitDialog minor",
							title: ecm.messages.viewer_editproperties_title_warning,
							cancelButtonLabel: ecm.messages.no,
							text: string.substitute(ecm.messages.viewer_editproperties_prompt_discard_changes, [
								item.name
							]),
							onExecute: lang.hitch(t, function() {
								t._confirmDiscardChangesDialog.hide();
								// deselect all rows
								if (selectedItems && selectedItems.length > 0) {
									for (var i = 0; i < selectedItems.length; i++) {
										cl.grid.select.row.deselectById(selectedItems[i].id);
									}
								}
								// reselect item being edited
								cl.grid.select.row.selectById(item.id);
								if (cl.grid.row(item.id)) {
									cl.grid.vScroller.scrollToRow(cl.grid.row(item.id).visualIndex(), true);
								}
								// focus and show error tooltip of the first invalid property
								viewPane.propertiesPane.isValid();
							}),
							onCancel: lang.hitch(t, function() {
								t._confirmDiscardChangesDialog.hide();
								// hide edit mode
								viewPane._toggleItemEditPane(false);
								// discard changes
								editPane.onCancel();
								t.setItem(selectedItems.length > 0 ? selectedItems[0] : null);
								cl._showItemPropArea(true);
							}),
							onShow: lang.hitch(t, function() {
							}),
							onHide: lang.hitch(t, function() {
								// end checking edit mode invalid changes
								t.checkEditState = false;
							})
						});
						t._confirmDiscardChangesDialog.setWidth(600);
						t._confirmDiscardChangesDialog.show();
					} else {
						t.setItem(selectedItems.length > 0 ? selectedItems[0] : null);
						cl._showItemPropArea(true);
						// end checking edit mode invalid changes
						t.checkEditState = false;
					}
				}
			}));
		},

		/**
		 * Sets the item in the item properties pane.
		 * 
		 * @param item
		 *            Instance of {@link ecm.model.Item}.
		 */
		setItem: function(item) {
			var t = this;
			if (t._itemProperties) {
				var currentItem = t._itemProperties.getItem();
				var newItem = item;
				if ((item && item.isInstanceOf && item.isInstanceOf(WorkItem)) && item.repository.type == "cm") {
					newItem = item.getContentItem();
				}
				// update the item properties pane if setting it to a new item
				if (currentItem == null || newItem == null || currentItem.id != newItem.id) {
					t._itemProperties.setItem(newItem);
				}
			}
		},

		/**
		 * Set show preview on the item properties pane.
		 * 
		 * @param bool
		 *            True to show the preview. False to not show the preview.
		 */
		setShowPreview: function(bool) {
			this._itemProperties.setShowPreview(bool);
		}
	});
});

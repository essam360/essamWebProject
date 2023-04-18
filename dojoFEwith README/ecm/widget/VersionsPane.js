/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	//"gridx/modules/dnd/Column", 
	"ecm/LoggerMixin", //
	"ecm/model/ContentItem", //
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/Toolbar2",
	"dojo/text!./templates/VersionsPane.html"
], function(declare, //
lang, //
domStyle, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
//dndColumn, //
LoggerMixin, //
ContentItem, //
ContentList, //
RowContextMenu, //
RowContextMenuLoadMenu, //
Bar, //
Toolbar, //
template) {
	/**
	 * @name ecm.widget.VersionsPane
	 * @class Provides a widget that is used to view the versions of an item.
	 * @augments dijit.layout.ContentPane
	 */
	return declare("ecm.widget.VersionsPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.VersionsPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_item: null,
		_rendered: false,
		_disableRefresh: false,

		postCreate: function() {
			this.inherited(arguments);
			this._rendered = false;
			this._disableRefresh = false;
			this._item = null;
			this._versionsResults.setContentListModules(this._getContentListModules());
		},

		/**
		 * Sets the item (folder or document) for which versions will be displayed.
		 * 
		 * @public
		 * @param item
		 *            The {@link ecm.model.ContentItem} corresponding to a folder or document.
		 */
		setItem: function(item) {
			this._item = item;
			this._versionsResults.setGridExtensionModules(this._getContentListGridModules());
		},

		resize: function() {
			this.inherited(arguments);
			if (this._versionsResults) {
				this._versionsResults.resize();
			}
		},

		_getContentListModules: function() {
			var modules = [];
			modules.push({
				moduleClass: Bar,
				top: [
					[
						[
							{
								moduleClass: Toolbar
							}
						]
					],
				]
			});
			return modules;
		},

		_getContentListGridModules: function() {
			var modules = [];
			if (this._item && this._item.repository) {
				if (this._item.repository.type == "box") {
					modules.push({
						moduleClass: RowContextMenuLoadMenu,
						performDefaultActionForItem: function() {
							// do nothing
						}
					})
				} else {
					modules.push(RowContextMenu);
				}
			}
			//modules.push(dndColumn);
			return modules;
		},

		_onResultsChange: function(items) {
			// If the item version loaded into this Properties dialog was deleted...
			for ( var i in items) {
				var item = items[i];
				if ((item.id == this._item.id) && (item.deleted != null && item.deleted)) {
					// Refresh the results that contained the deleted item so that the results display 
					// is updated to show the remaining item version or versions.
					var resultSet = this._item.resultSet;
					if (resultSet) {
						if (resultSet.parentFolder && resultSet.parentFolder.isInstanceOf && resultSet.parentFolder.isInstanceOf(ecm.model.ContentItem)) { // refreshes the resultSet's parentFolder
							resultSet.parentFolder.refresh();
						} else {
							resultSet.refresh();
						}
					}

					// Cancel this properties dialog.
					if (this._editPropertiesDialog) {

						// Set the deleted version in the itemEditPane so canceling the dialog doesn't attempt to unlock
						// the deleted version for CM.
						if (this._editPropertiesDialog._itemEditPane) {
							this._editPropertiesDialog._itemEditPane._item = item;
						}

						setTimeout(lang.hitch(this, function() {
							this._editPropertiesDialog.onCancel();
						}), 100);
					}
					return;
				} else if (item.deleted != null && item.deleted) {

					// If the deleted version was shared, remove share information for this item.
					var shareStatus = item.getShareStatus();
					if (shareStatus == ContentItem.SHARE_STATUS.SHARED) {
						if (this._item.repository.type == "p8") {
							this._item._deleteShareRecord();
						} else if (this._item.repository.type == "cm") {

							// For CM8 we need to compare to the shared version number. The version number
							// should be in the item in this context.
							var sharedVersion = item.getSharedVersionNumber();
							if (item.attributes.icn_sys_version == sharedVersion) {
								this._item._deleteShareRecord();
								this._item._deletedSharedVersion = true;
							}
						}
					}
				}
			}
			if (!this._disableRefresh) {
				// Rebuild the versions list following an item change because there may be 
				// new versions a change in version status for existing versions.
				this._retrieveAndDisplayVersions();
			}
		},

		_displayVersions: function(resultSet) {
			//if (this.resultSet) {
			// The version list representation isn't suitable for directly updating
			// the original item. Leave it up to the end user to refresh the desktop 
			// view after executing changes from the versions list. XT has the same behavior.
			//	if (resultSet.getItems() && resultSet.getItems().length > 0) {
			//		for ( var resultItemNdx in resultSet.getItems()) {
			//			if (resultItemNdx && resultSet.getItem(resultItemNdx)) {
			//				var resultItem = resultSet.getItem(resultItemNdx);
			//				// If the original item still appears in the updated version list 
			//				if ((resultItem.id == this._item.id) || (resultItem.getProperties().origdocid == this._item.id)) {
			//					// Update it from the results.
			//					this._item.update(resultItem);
			//					break;
			//				}
			//			}
			//		}
			//	}
			//}

			// Disconnect from the old results.
			if (this.resultSetConnect) {
				this.disconnect(this.resultSetConnect);
			}

			// Record in the result set that this item version is opened so that we 
			// can warn the user that if it is deleted, the Properties dialog will be closed. 
			resultSet._openedItem = this._item;

			// If item has parent attribute, pass it to all versions returned from resultset
			// User can open a particular version in Virtual viewer, then save redacted content to a new document.
			// Setting parent makes add new document dialog in this case consistent with opening document in main list view: save new document to parent folder by default. 
			if (this._item.parent && resultSet.items) {
				for (var i = 0; i < resultSet.items.length; i++) {
					resultSet.items[i].parent = this._item.parent;
				}
			}

			//refresh & enable the version selector:
			if (!this._item.repository._isBox()) {
				domStyle.set(this._editPropertiesDialog._versionSelectorPane.domNode, "display", "");
				this._editPropertiesDialog._setVersionSelector(resultSet, this._item);
				this._editPropertiesDialog._borderContainer.layout();
			}

			this._versionsResults.setResultSet(resultSet);

			// Handle changes to items in the results by refreshing the version list.
			this.resultSetConnect = this.connect(resultSet, "onChange", lang.hitch(this, this._onResultsChange));
		},

		_retrieveAndDisplayVersions: function() {
			this._item.retrieveAllVersions(lang.hitch(this, this._displayVersions));
		},

		/**
		 * Renders the pane
		 * 
		 * @public
		 */
		render: function() {
			this.logEntry("render");
			if (this._item && !this._rendered) {
				this._itemSelectHandle = this.connect(this._versionsResults, "onRowSelectionChange", lang.hitch(this, function(selectedItems) {
					if (selectedItems && (selectedItems.length == 1) && (selectedItems[0].getMimeClass() == "ftExternalFile")) {
						// Don't rebuild the version list for a retrieve update.
						this._disableRefresh = true;
						selectedItems[0].retrieveAttributes(lang.hitch(this, function(item) {
							this._disableRefresh = false;
						}), true);
					}
				}));
				this._retrieveAndDisplayVersions();
				this._rendered = true;
			}
			this.logExit("render");
		},

		/**
		 * Returns a reference to the content list displaying the version results
		 * 
		 * @public
		 * @returns {@link ecm.widget.listView.ContentList}
		 */
		getVersionResults: function() {
			return this._versionsResults;
		},

		_disconnectHandles: function() {
			if (this._rendered) {
				if (this._itemSelectHandle) {
					this.disconnect(this._itemSelectHandle);
				}
				if (this.resultSetConnect) {
					this.disconnect(this.resultSetConnect);
				}
			}
		},

		/**
		 * Destroys the control
		 * 
		 * @public
		 */
		destroy: function() {
			this._disconnectHandles();
			this.inherited(arguments);
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-geometry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/layout/BorderContainer",
	"idx/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/ContentItem",
	"ecm/model/ResultSet",
	"ecm/widget/FolderTree",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/Breadcrumb",
	"ecm/widget/listView/modules/P8WorkAttachmentToolbar",
	"dojo/text!./templates/WorkItemAttachmentsPane.html"
],

function(declare, lang, geometry, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ContentPane, LoggerMixin, MessagesMixin, ContentItem, FolderTree, ContentList, ResultSet, RowContextMenu, Bar, Breadcrumb, Toolbar, template) {

	/**
	 * @name ecm.widget.process.WorkItemAttachmentsPane
	 * @class Provides a widget that is used to view or edit work item attachments.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.process.WorkItemAttachmentsPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.process.WorkItemAttachmentsPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_workItem: null,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.connect(this._attachmentTree, "onRendered", "onCompleteRendering");

			// onItemSelected called when user selects a node in the tree
			this.connect(this._attachmentTree, "onItemSelected", lang.hitch(this, function(item) {
				if (!this._attachmentContents.resultSet || !this._attachmentContents.resultSet.isResultSetForItem(item)) {
					this._attachmentContents.emptyMessage = "";
					this._attachmentContents.openItem(item);
				}
			}));

			// onOpenItem called when user selects actions from context menu
			this.connect(this._attachmentTree, "onOpenItem", lang.hitch(this, function(item) {
				if (!this._attachmentContents.resultSet || !this._attachmentContents.resultSet.isResultSetForItem(item)) {
					this._attachmentContents.emptyMessage = "";
					this._attachmentContents.openItem(item);
				}
			}));

			// called when user is navigating Folder attachments from the content list
			this.connect(this._attachmentContents, "onOpenItem", lang.hitch(this, function(item, data) {
				if (data && data.isInstanceOf && data.isInstanceOf(ecm.model.ResultSet) && item.getPath) {
					var path = item.getPath();
					if (!this._attachmentTree.isPathSelected(path)) {
						this._attachmentTree.set("path", path);
					}
				}
			}));

			this.connect(ecm.model.desktop, "onChange", "_onChangeItems");

			this.logExit("postCreate");
		},

		// This onChange event handler is setup to handle the cross repository attachment items from non-p8
		// repositories, currently we have to manually map the column properties into the correct attributes.
		//
		_onChangeItems: function(items) {
			if (lang.isArray(items)) {
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					if (item && item.isInstanceOf && item.isInstanceOf(ContentItem)) {
						if (item.repository.type == "cm" || item.repository.type == "cmis" || item.repository.type == "box") {
							var lastModifier = item.attributes["LastModifier"]; // Pick one property that is mapped
							if (lastModifier == null) {
								// Reset the list view column properties after a property update (which nulls them out)
								var attachmentItem = this._attachmentTree.getSelectedItem();
								if (attachmentItem != null && attachmentItem.isInstanceOf(ecm.model.AttachmentItem)) {
									attachmentItem._setColumnAttributes(item, item.repository.type);
									item.repository.onChange([
										item
									]);
								}
							}
						}
					}
				}
			}
		},

		_setAttribute: function(item, symbolicName, value, dataType) {
			item.attributes[symbolicName] = value;
			item.attributeTypes[symbolicName] = dataType;
		},

		/**
		 * Function to resize the widget.
		 */
		resize: function() {
			this.inherited(arguments);
			var cb = this._contentBox || geometry.getContentBox(this.containerNode);
			// note: if widget has padding this._contentBox will have l and t set,
			// but don't pass them to resize() or it will doubly-offset the child
			this._borderContainerAttachments.resize({
				w: cb.w,
				h: cb.h
			});
		},

		/**
		 * Called to set the work item object into the attachments pane.
		 * 
		 * @param item
		 *            A {@link ecm.model.WorkItem} object.
		 */
		setItem: function(item) {
			this.logEntry("setItem");
			if (this._workItem && this._workItem != item) {
				this._attachmentContents.reset();
			}
			this._workItem = item;
			this.repository = item.repository;
			this._attachmentContents.setGridExtensionModules(this._getContentListGridModules());
			this._attachmentContents.setContentListModules(this._getContentListModules());
			this._attachmentContents.emptyMessage = this.messages.process_attachments_select;
			// Build up empty result set so we can render the content list
			var cells = [
				{
					"width": "34px",
					"sortable": false,
					"field": "multiStateIcon",
					"name": " "
				},
				{
					"width": "17px",
					"sortable": false,
					"field": "mimeTypeIcon",
					"name": " "
				},
				{
					"width": "20em",
					"sortable": true,
					"field": "{NAME}",
					"name": this.messages.Name
				}
			];
			var response = {
				"columns": {
					"cells": [
						cells
					]
				},
				"rows": [],
				"toolbarDef": "BrowseToolbar",
				"repository": this.repository
			};
			this._resultSet = new ecm.model.ResultSet(response);
			this._attachmentContents.setResultSet(this._resultSet);

			this._attachmentTree.setWorkItem(item);
			this.logExit("setItem");
		},

		/**
		 * Loads the modules to be used by the content list.
		 */
		_getContentListGridModules: function() {
			var array = [];
			array.push(RowContextMenu);
			return array;
		},

		_getContentListModules: function() {
			var array = [];
			array.push({
				moduleClass: Bar,
				top: [
					[
						[
							{
								moduleClass: Toolbar,
								workItem: this._workItem
							}
						]
					],
					[
						[
							{
								moduleClass: Breadcrumb,
								includeRootItemName: false,
								rootPrefix: this.messages.process_attachments
							}
						]
					]
				]
			});
			return array;
		},

		/**
		 * Returns an array of attachment field objects that have been modified.
		 * 
		 * @returns {Object} array holding modified attachment properties
		 */
		getModifiedAttachments: function() {
			var attachments = [];
			if (this._workItem) {
				var attachmentItems = this._workItem.resultSet;
				if (attachmentItems) {
					var initiatingAttachmentName = this._workItem.F_InitiatingAttachment;
					for (var i = 0; i < attachmentItems.items.length; i++) {
						var attachment = attachmentItems.getItem(i);
						var modified = attachment.modified;
						var attachmentName = attachment.authoredName;
						if (modified) {
							attachments.push(this.getAttachmentField(attachmentName, this._workItem.getValue(attachmentName)));
						} else if (initiatingAttachmentName) {
							if (attachmentName == initiatingAttachmentName) {
								var values = this._workItem.getValue(attachmentName); // Force a modified state on initiating attachment
								if (values) {
									attachments.push(this.getAttachmentField(attachmentName, values));
								}
							}
						}
					}
				}
			}
			return attachments;
		},

		/**
		 * Returns an object holding the attachment property information.
		 * 
		 * @param attachmentName
		 *            A string holding the attachment field name.
		 * @param value
		 *            The attachment field value.
		 * @returns {Object} holding attachment property information.
		 */
		getAttachmentField: function(attachmentName, value) {
			return {
				name: attachmentName,
				value: value, // Should now be using "value" in JSON
				dataType: "xs:attachment",
				label: attachmentName
			};
		},

		/**
		 * An event function called after the widget is finished rendering.
		 */
		onCompleteRendering: function() {
		},

		/**
		 * Sets the attachment tree selected item to the passed in attachment item. Nothing will be selected if the
		 * attachment item is not found in the work item.
		 * 
		 * @param attachmentItem
		 *            A {@link ecm.model.AttachmentItem} object.
		 * @since 2.0.2
		 */
		selectAttachmentItem: function(attachmentItem) {
			if (this._workItem && this._workItem.resultSet) {
				var itemIndex = this._workItem.resultSet.getIndexOfItem(attachmentItem);
				if (itemIndex != -1) { // Attachment item found
					this._attachmentTree.set('selectedItem', attachmentItem);
				}
			}
		},

		destroy: function() {
			this.repository = null;
			this._resultSet = null;
			this._workItem = null;
			this.inherited(arguments);
		},

		_nop: null
	});
});

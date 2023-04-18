/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dijit/layout/ContentPane",
	"ecm/Messages",
	"ecm/model/WorkItem",
	"./BaseDialog",
	"../listView/ContentList",
	"dojo/text!./templates/ProcessInformationDialogContent.html"
],

function(declare, lang, connect, domStyle, domClass, construct, ContentPane, Messages, WorkItem, BaseDialog, ContentList, template) {

	/**
	 * @name ecm.widget.dialog.ProcessInformationDialog
	 * @class Provides a dialog box that is used to view workflow information of a CM content item.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @since 2.0.2
	 */
	return declare("ecm.widget.dialog.ProcessInformationDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ProcessInformationDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		messages: ecm.messages,

		/**
		 * A {@link ecm.model.Repository} object that the items reside in.
		 */
		repository: null,

		/**
		 * An array of {@link ecm.model.WorkItem} objects to be displayed in the process information list.
		 */
		items: null,

		/**
		 * A callback function to be called after the dialog has been closed.
		 */
		callback: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmProcessInformationDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			var titleLabel = this.messages.process_information_title;
			this.set("title", titleLabel);
			var introText = this.messages.process_information_info_text;
			construct.create("span", {
				innerHTML: introText
			}, this.introText);

			this._retrieveItemProcessInformation(this.items);
		},

		_creategrid: function(response) {
			this.logEntry("_createGrid");

			this.contentgrid.setGridExtensionModules([]);
			this.contentgrid.setContentListModules([]);

			response.repository = this.items[0].repository;
			response.parentFolder = this.items[0].parent;
			response.setType = "workItems";
			var resultSet = new ecm.model.ResultSet(response);
			this.contentgrid.setResultSet(resultSet);

			this.logExit("_createGrid");
			return this.contentgrid;
		},

		_retrieveItemProcessInformation: function(items) {
			var item = items[0];
			if (item && item instanceof ecm.model.ContentItem) {
				item.retrieveProcessInformation(lang.hitch(this, function(resultSet) {
					//retrieved contents
					var grid = this._creategrid(resultSet);
				}));
			}
		}
	});
});

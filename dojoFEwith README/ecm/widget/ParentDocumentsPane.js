/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/modules/DocInfo",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"dojo/text!./templates/ParentDocumentsPane.html"
], function(declare, //
lang, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
LoggerMixin, //
Desktop, //
ContentList, //
DocInfo, //
RowContextMenu, //
template) {
	/**
	 * @name ecm.widget.ParentDocumentsPane
	 * @class Provides a widget that shows the folders in which a document is filed.
	 * @augments dijit.layout.ContentPane, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin, ecm.LoggerMixin
	 */
	return declare("ecm.widget.ParentDocumentsPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.ParentDocumentsPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		item: null,
		rendered: false,

		postCreate: function() {
			this.inherited(arguments);
			this.parentDocumentsResults.setGridExtensionModules(this._getContentListGridModules());
			this.parentDocumentsResults.setContentListModules([{
				moduleClass: DocInfo,
				selectAutoOpen: true,
				showSystemProps: false
			}]);
		},

		setItem: function(item) {
			this.item = item;
		},

		render: function() {
			this.logEntry("render");

			if (this.item && !this.rendered) {
				this.item.retrieveRelated("parents", "items", lang.hitch(this, function(resultSet) {
					this.parentDocumentsResults.setResultSet(resultSet);
				}), lang.hitch(this, function(response) {
					// TODO: Report error.
				}));

				this.rendered = true;
			}

			this.logExit("render");
		},

		resize: function() {
			this.inherited(arguments);
			if (this.parentDocumentsResults) {
				this.parentDocumentsResults.resize();
			}
		},

		_performDefaultActionForItem: function() {
			// Do nothing
		},

		_getContentListGridModules: function() {
			var modules = [];
			modules.push({
				moduleClass: RowContextMenu,
				performDefaultActionForItem: lang.hitch(this, this._performDefaultActionForItem)
			});
			return modules;
		}
	});
});

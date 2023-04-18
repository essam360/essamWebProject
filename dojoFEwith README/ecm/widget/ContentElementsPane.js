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
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/Toolbar2",
	"dojo/text!./templates/ContentElementsPane.html"
], function(declare, //
lang, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
LoggerMixin, //
ContentList, //
RowContextMenu, //
Bar, //
Toolbar, //
template) {
	/**
	 * @name ecm.widget.ContentElementsPane
	 * @class Provides a widget that shows the content elements for a document (for P8) or file parts (for CM8).
	 * @augments dijit.layout.ContentPane, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin, ecm.LoggerMixin
	 */
	return declare("ecm.widget.ContentElementsPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.ContentElementsPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		item: null,
		rendered: false,

		postCreate: function() {
			this.inherited(arguments);
			this._contentElementsList.setContentListModules(this._getContentListModules());
			this._contentElementsList.setGridExtensionModules(this._getContentListGridModules());
		},

		setItem: function(item) {
			this.item = item;
		},

		render: function() {
			this.logEntry("render");

			if (this.item && !this.rendered) {
				this.item.retrieveContentElements(lang.hitch(this, function(resultSet) {
					for(var i=0; i<resultSet.items.length; i++) {
						resultSet.items[i].docid = this.item.docid;
						resultSet.items[i].vsId = this.item.vsId;
					}
					this._contentElementsList.setResultSet(resultSet);
				}));
				this.rendered = true;
			}

			this.logExit("render");
		},

		resize: function() {
			this.inherited(arguments);
			if (this._contentElementsList) {
				this._contentElementsList.resize();
			}
		},

		_performDefaultActionForItem: function() {
			// Do nothing
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
			modules.push({
				moduleClass: RowContextMenu,
				performDefaultActionForItem: lang.hitch(this, this._performDefaultActionForItem)
			});
			return modules;
		}
	});
});

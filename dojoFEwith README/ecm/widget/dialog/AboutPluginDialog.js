/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/json",
	"dojo/_base/window",
	"dojo/string",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/data/ItemFileWriteStore",
	"dojo/text!./templates/AboutPluginDialogContent.html",
	"ecm/model/Request",
	"ecm/model/ResultSet",
	"ecm/LoggerMixin",
	"ecm/widget/listView/modules/ViewMagazine",
	"ecm/widget/listView/ContentList",
	"ecm/MessagesMixin"
], //
function(declare, lang, connect, json, win, string, has, domClass, domConstruct, ContentPane, //
_TemplatedMixin, _WidgetsInTemplateMixin, ItemFileWriteStore, //
template, Request, ResultSet, LoggerMixin, ViewMagazine, ContentList, MessagesMixin) {

	/**
	 * @name ecm.widget.dialog.AboutPluginDialog
	 * @class Provides a pane for the About dialog that is used to display the list of plug-ins.
	 * @private
	 */
	var AboutPluginDialog = declare("ecm.widget.dialog.AboutPluginDialog", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.dialog.AboutPluginDialog.prototype */
		templateString: template,
		widgetsInTemplate: true,

		plugins: null,

		constructor: function(args) {
			this.logDebug("constructor", "args: " + arguments);
			lang.mixin(this, args);
		},

		startup: function() {
			this.inherited(arguments);
			this._contentListModules();
			this.logDebug("postCreate", "check for plugins");
			if (!this.plugins) {
				this._loadPlugins(lang.hitch(this, this._initializeGrid));
			} else {
				this._initializeGrid(this.plugins);
			}
		},

		_loadPlugins: function(onComplete) {
			this.logDebug("_loadPlugins", "load plugins requested");
			// added req to load the license info which is not in the app config
//			ecm.model.admin.appCfg.getPluginObjects(lang.hitch(this, function(objects) {
//				this.plugins = objects;
//				this.logDebug("_loadPlugins", "has plugins: " + (this.plugins != null));
//				if (onComplete) {
//					onComplete(objects);
//				}
//			}));
			Request.invokeService("pluginsInfo", null, null, lang.hitch(this, function(response) {
				this.plugins = response.plugins;
				this.logDebug("_loadPlugins", "has plugins: " + (this.plugins && this.plugins != null));
				if (onComplete) {
					onComplete(this.plugins);
				}
			}));
		},

		_getPlugins: function(callback) {
			callback(this.plugins);
		},

		_contentListModules: function() {
			this.contentList.setContentListModules([
				ViewMagazine
			]);
		},

		_initializeGrid: function(plugins) {
			this.logDebug("_initializeGrid", "init grid");

			var data = {
				identifier: "id",
				items: []
			};
			var _store;
			if (plugins && plugins.length > 0) {
				for ( var i = 0; i < plugins.length; i++) {
					var copyright = plugins[i].copyright || "";

					data.items.push(lang.mixin({
						"counter": i + 1
					}, {
						"id": plugins[i].id,
						"name": plugins[i].name,
						"version": plugins[i].version,
						"copyright": copyright,
						getValue: function(key) {
							_store.getValue(this, key);
						}
					}));
				}
			}

			_store = new ItemFileWriteStore({
				data: data
			});

			this.resultSet = new ResultSet(AboutPluginDialog.resultSetArgs);

			//over ride the get store function.
			this.resultSet.getStore = function() {
				return _store;
			};
			this.contentList.setResultSet(this.resultSet);
		},

		destroy: function() {
			this.inherited(arguments);
		},

		resize: function() {
			this.contentList.resize();
		}
	});

	AboutPluginDialog.resultSetArgs = {
		magazineColumns: [
			{
				"field": "content",
				"decorator": "MagazineViewDecorator.aboutDialogContentCellDecorator"
			}
		]
	};
	return AboutPluginDialog;

});

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
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/_base/sniff",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dijit/Dialog",
	"./BaseDialog",
	"dijit/layout/TabContainer",
	"ecm/model/Request", //
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"dijit/layout/ContentPane",
	"ecm/widget/dialog/AboutPluginDialog",
	"dojo/text!./templates/AboutDialogContent.html"
], function(declare, lang, array, domClass, domConstruct, domStyle, has, domGeom, domStyle, Dialog, BaseDialog, TabContainer, //
Request, LoggerMixin, MessagesMixin, ContentPane, AboutPluginDialog, template) {

	/**
	 * @name ecm.widget.dialog.AboutDialog
	 * @class Provides a dialog box that displays information about the application such as version information.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.AboutDialog", [
		BaseDialog,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.dialog.AboutDialog.prototype */
		contentString: template,
		//templateString: template,
		widgetsInTemplate: true,

		/* enable display of the plugins tab
		* @since 2.0.2
		*/
		enablePluginTab: true,

		postCreate: function() {
			this.inherited(arguments);
			this.logDebug("postCreate", "started");
			domClass.add(this.domNode, "ecmAboutDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);

			this.release.appendChild(document.createTextNode(ecm.model.desktop.navigatorRelease));
			this.build.appendChild(document.createTextNode(ecm.model.desktop.navigatorBuild));

			this._loadPlugins(lang.hitch(this, this.showPluginTab));
		},

		show: function(startingTab) {
			this.setTitle(ecm.messages.about);
			this._tabContainer.startup();
			var d = this.inherited(arguments);
			this.resize();
			return d;
		},

		destroy: function() {
			if (this._tabContainer != null) {
				var children = this._tabContainer.getChildren();
				array.forEach(children, function(child) {
					if (child.destroy && lang.isFunction(child.destroy))
						child.destroy();
				});
			}
			this.inherited(arguments);
		},

		showPluginTab: function(plugins) {
			if (this.enablePluginTab && plugins && plugins != null) {
				this.logDebug("postCreate", "has plugins - create plugin tab");

				this._pluginsTab = new AboutPluginDialog({
					title: ecm.messages.admin_plugins,
					plugins: plugins
				});
				this._tabContainer.addChild(this._pluginsTab, 1);
				this._pluginsTab.resize();
			}
		},

		_loadPlugins: function(onComplete) {
			this.logDebug("_loadPlugins", "load plugins request");
//			ecm.model.admin.appCfg.getPluginObjects(lang.hitch(this, function(objects) {
//				this._plugins = objects;
//				this.logDebug("_loadPlugins", "has plugins: " + (this._plugins != null));
//				if (onComplete) {
//					onComplete((objects && objects != null));
//				}
//			}));
			var params = {
				action: "list"
			};

			Request.invokeService("pluginsInfo", null, params, lang.hitch(this, function(response) {
				this.plugins = response.plugins;
				this.logDebug("_loadPlugins", "has plugins: " + (response.plugins != null));
				if (onComplete) {
					onComplete(response.plugins);
				}
			}));

		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"./_LaunchBarPane",
	"../../model/admin/ApplicationConfig",
	"../admin/_AdminPaneBase",
	"../admin/AdminTree",
	"../admin/AdminTabs",
	"dojo/text!./templates/AdminPane.html"
],

function(declare, //
lang, //
ContentPane, //
BorderContainer, //
_LaunchBarPane, //
ApplicationConfig, //
_AdminPaneBase, //
AdminTree, //
AdminTabs, //
template) {

	/**
	 * @name ecm.widget.layout.AdminPane
	 * @class Provides a pane that is used to display the administration interface in the layout.
	 * @augments ecm.widget.admin._AdminPaneBase, ecm.widget.layout._LaunchBarPane
	 */
	return declare("ecm.widget.layout.AdminPane", [
		_AdminPaneBase,
		_LaunchBarPane
	], {
		/** @lends ecm.widget.layout.AdminPane.prototype */

		templateString: template,

		widgetsInTemplate: true,

		/**
		 * This method is called when the user selects the admin button in the launch bar.
		 */
		loadContent: function() {
			if (this.adminTreeWidget) {
				var treeModel = this.adminTreeWidget.getModel();
				if (treeModel) {
					treeModel.getRoot(lang.hitch(this, function(rootItem) {
						rootItem.getChildren(lang.hitch(this, function(children) {
							if (children && children.length > 0) {
								var firstChild = children[0];
								if (firstChild.resizeTabWidget) {
									setTimeout(function() {
										firstChild.resizeTabWidget();
									}, 500);
								}
							}
						}));
					}));
				}
			}
		},

		/**
		 * Overwrite to initialize the application configuration object.
		 */
		_initialize: function() {
			if (ApplicationConfig.isInitialized())
				this.inherited(arguments);
			else {
				ApplicationConfig.getApplicationConfig(lang.hitch(this, function(cfg) {
					this._initialize();
				}));
			}
		}
	});
});

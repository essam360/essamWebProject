/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"ecm/widget/admin/_AdminPaneBase",
	"ecm/model/admin/ApplicationConfig"
],

function(declare, lang, _AdminPaneBase, ApplicationConfig) {

	/**
	 * @name ecm.widget.admin.NavigatorAdminPane
	 * @class Provides the administration view for the application layout. This view is used for administration and
	 *        configuration tasks.
	 * @augments dijit.layout.ContentPane
	 */
	return declare("ecm.widget.admin.NavigatorAdminPane", [
		_AdminPaneBase
	], {
		/** @lends ecm.widget.admin.NavigatorAdminPane.prototype */

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

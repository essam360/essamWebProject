/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dijit/registry",
	"ecm/widget/layout/TabController",
	"ecm/widget/admin/AdminTabsButton"
],

function(declare, lang, domClass, registry, TabController, AdminTabsButton) {

	return declare("ecm.widget.admin.AdminTabsController", [
		TabController
	], {

		buttonWidget: "ecm.widget.admin.AdminTabsButton",

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.tablistWrapper, "ecmAdminTablistWrapper");

			// remove the close drop-down menu (doesn't work for admin)
			var closeMenu = registry.byId(this.id + "_Menu");
			if (closeMenu) {
				closeMenu.destroy();
			}
		}
	});

});

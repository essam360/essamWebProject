/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"ecm/MessagesMixin", //
	"ecm/widget/admin/TabsButtonRequired", //
	"dijit/layout/ScrollingTabController"
], //

function(declare, lang, MessagesMixin, TabsButtonRequired, ScrollingTabController) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabControllerRequired
	 * @class
	 * @augments dijit.layout.ScrollingTabController
	 * @private
	 */
	return declare("ecm.widget.admin.TabControllerRequired", [
		ScrollingTabController
	], {
		/** @lends ecm.widget.admin.TabControllerRequired.prototype */

		buttonWidget: "ecm.widget.admin.TabsButtonRequired",

		postCreate: function() {
			this.inherited(arguments);
		}
	});

});

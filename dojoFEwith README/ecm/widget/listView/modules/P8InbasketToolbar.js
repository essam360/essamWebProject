/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/widget/listView/modules/Toolbar2",
	"ecm/widget/process/InbasketToolbar"
], //
function(declare, Toolbar2, InbasketToolbarWidget) {

	/**
	 * @name ecm.widget.listView.modules.P8InbasketToolbar
	 * @class This content list module provides toolbar capability. This module uses the ecm.widget.Toolbar (which
	 *        supports regular and dropdown buttons) to load the toolbar buttons. By default, this module also has an
	 *        Actions drop down button which has the context menu actions for the selected items in the content list.
	 * @augments ecm.widget.listView.modules.Toolbar2
	 * @since 2.0.3
	 */

	return declare("ecm.widget.listView.modules.P8InbasketToolbar", [
		Toolbar2
	], {

		/** @lends ecm.widget.listView.modules.P8InbasketToolbar.prototype */

		/**
		 * Construct the Toolbar widget used to display the action items
		 */
		constructToolbarWidget: function() {
			var t = this;
			t.toolbar = new InbasketToolbarWidget();
			if (t.queueName) {
				t.toolbar.queueName = t.queueName;
			}
			if (t.queueType) {
				t.toolbar.queueType = t.queueType;
			}
		}

	});
});

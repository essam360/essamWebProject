/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/widget/ModifyPermissionPane"
], function(declare, ModifyPermissionPane) {
	/**
	 * @private Part of the SecurityPane widget
	 * @name ecm.widget.ModifyPermissionAccessPane
	 * @class Provides a pane that is used to edit the permissions for accessing a document or folder. It overrides the
	 *        _onCustomize method to implement its own event handling for _onCustomize event.
	 * @augments ecm.widget.ModifyPermissionPane
	 */
	return declare("ecm.widget.ModifyPermissionAccessPane", [
		ModifyPermissionPane
	], {
		/** @lends ecm.widget.ModifyPermissionAccessPane.prototype */

		_onCustomize: function() {
			// override since the pane needs to be destroyed and opened again for correct popup position
		}
	});
});

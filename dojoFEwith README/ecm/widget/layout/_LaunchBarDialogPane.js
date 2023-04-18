/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_LaunchBarPane"
],

function(declare, _LaunchBarPane) {

	/**
	 * @name ecm.widget.layout._LaunchBarDialogPane
	 * @class Provides a widget that is extended for any pane that is placed in a LaunchBarContainer fly-out. This pane
	 *        provides flags and callbacks that are used by the parent container to control loading content in the
	 *        fly-out and opening panes in the content area of the LaunchBarContainer widget.
	 * @augments ecm.widget.layout._LaunchBarPane
	 * @deprecated As of 2.0.3.3. Flyout menu capabilities will be removed in a future release.
	 */
	return declare("ecm.widget.layout._LaunchBarDialogPane", [
		_LaunchBarPane
	], {

		/**
		 * Attach point for the LaunchBarContainer to close the a popup dialog. This allows a launch bar pane to trigger
		 * a dialog close when the user executes an action.
		 */
		closePopup: function() {
		}
	});
});

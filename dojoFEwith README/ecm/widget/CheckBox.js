/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dijit/form/CheckBox", "./_HoverHelpMixin" ], //
function(declare, CheckBox, _HoverHelpMixin) {
	/**
	 * @name ecm.widget.CheckBox
	 * @class Provides a check box that can be used to select several values for the same property. This class extends
	 *        the Dojo <code>dijit.form.CheckBox</code> class to provide hover help for the check box.
	 * @public
	 */
	return declare("ecm.widget.CheckBox", [ CheckBox, _HoverHelpMixin ], {
	/** @lends ecm.widget.CheckBox.prototype */
	});
});

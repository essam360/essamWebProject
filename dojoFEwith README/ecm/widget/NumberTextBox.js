/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dijit/form/NumberTextBox", "./_HoverHelpMixin" ], //
function(declare, NumberTextBox, _HoverHelpMixin) {
	/**
	 * @name ecm.widget.NumberTextBox
	 * @class Provides a widget that contains a text box that is used to enter a numeric value.
	 *        <p>
	 *        This class extends the Dojo <code>dijit.form.NumberTextBox</code> class to support hover help.
	 *        </p>
	 * @augments dijit.form.NumberTextBox
	 * @public
	 */
	return declare("ecm.widget.NumberTextBox", [ NumberTextBox, _HoverHelpMixin ], {
	/** @lends ecm.widget.NumberTextBox.prototype */
	});
});

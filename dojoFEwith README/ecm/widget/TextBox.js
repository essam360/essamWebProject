/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dijit/form/TextBox", "./_HoverHelpMixin" ], //
function(declare, TextBox, _HoverHelpMixin) {
	/**
	 * @name ecm.widget.TextBox
	 * @class Provides a widget that contains a text box.
	 *        <p>
	 *        This class extends the Dojo <code>dijit.form.TextBox</code> class to provide hover help for the text
	 *        box.
	 *        </p>
	 * @augments dijit.form.TextBox
	 */
	return declare("ecm.widget.TextBox", [ TextBox, _HoverHelpMixin ], {
	/** @lends ecm.widget.TextBox.prototype */
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/form/NumberSpinner",
	"./_HoverHelpMixin"
], //
function(declare, NumberSpinner, _HoverHelpMixin) {
	/**
	 * @name ecm.widget.NumberSpinner
	 * @class Provides a widget that contains a text box that is used to enter a numeric value.
	 *        <p>
	 *        This class extends the Dojo <code>dijit.form.NumberSpinner</code> class to support hover help.
	 *        </p>
	 * @augments dijit.form.NumberTextBox
	 * @public
	 */
	return declare("ecm.widget.NumberSpinner", [
		NumberSpinner,
		_HoverHelpMixin
	], {
		/** @lends ecm.widget.NumberSpinner.prototype */

		_mouseWheeled: function(/*Event*/evt) {
			// summary:
			//      Mouse wheel listener where supported

			if (!this.focused)
				return;
			this.inherited(arguments);
		}
	});
});

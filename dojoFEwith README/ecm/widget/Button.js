/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dijit/form/Button", "./_HoverHelpMixin" ], //
function(declare, Button, _HoverHelpMixin) {
	/**
	 * @name ecm.widget.Button
	 * @class Provides a widget that is used as a button in the user interface.
	 *        <p>
	 *        This class extends the Dojo <code>dijit.form.Button</code> class to provide hover help for the button.
	 *        </p>
	 * @public
	 */
	return declare("ecm.widget.Button", [ Button, _HoverHelpMixin ], {
	/** @lends ecm.widget.Button.prototype */
	});
});

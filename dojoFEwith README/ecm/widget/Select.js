/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dijit/form/Select", "./_HoverHelpMixin" ], //
function(declare, Select, _HoverHelpMixin) {
	/**
	 * @name ecm.widget.Select
	 * @class Provides a widget that is used as a button that displays a drop-down list when it is clicked.
	 *        <p>
	 *        This class extends the Dojo <code>dijit.form.DropDownButton</code> to provide hover help for the button.
	 *        </p>
	 * @public
	 */
	return declare("ecm.widget.Select", [ Select, _HoverHelpMixin ], {
	/** @lends ecm.widget.Select.prototype */
	});
});

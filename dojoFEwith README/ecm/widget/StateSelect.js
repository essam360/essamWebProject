/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dojo/dom-class", "dijit/form/Select" ], function(declare, domClass, Select) {

	/**
	 * @name ecm.widget.StateSelect
	 * @class Provides a widget that contains a drop-down selection box. This class extends the Dojo dijit.form.Select
	 *        class to support options that can be set programmatically for the selection box, but that are hidden from
	 *        users.
	 * @augments dijit.form.Select
	 */
	return declare("ecm.widget.StateSelect", [ Select ], {
		/** @lends ecm.widget.StateSelect.prototype */
		_getMenuItemForOption: function(/*dijit.form.__SelectOption*/option) {

			var item = this.inherited(arguments);
			if (option.hidden)
				domClass.add(item.domNode, "dijitHidden");
			return item;
		}
	});
});

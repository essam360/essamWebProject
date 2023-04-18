/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"ecm/widget/layout/TabButton"
],

function(declare, lang, domClass, TabButton) {

	/**
	 * @name ecm.widget.admin.TabsButtonRequired
	 * @class
	 * @augments dijit.layout._TabButton
	 * @private
	 */
	return declare("ecm.widget.admin.TabsButtonRequired", [
		_TabButton
	], {
		/** @lends ecm.widget.admin.TabsButton.prototype */

		postCreate: function() {
			if (this.iconClass && this.iconClass == "required") {
				domClass.add(this.domNode, "TabRequired");
				this.iconClass = "";
			}
			this.inherited(arguments);
		}
	});

});

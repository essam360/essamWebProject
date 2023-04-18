/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dojo/dom-attr",
	"./_HoverHelpMixin"
], //
function(declare, WidgetBase, domAttr, _HoverHelpMixin) {
	/**
	 * @name ecm.widget._WidgetBaseHoverHelpMixin
	 * @class Provides a widget class that can be used to simply add hover help on any dom node. This class extends the
	 *        Dojo <code>dijit._WidgetBase</code> class to provide hover help.
	 * @private
	 */
	return declare("ecm.widget._WidgetBaseHoverHelpMixin", [
		WidgetBase,
		_HoverHelpMixin
	], {
	/** @lends ecm.widget._WidgetBaseHoverHelpMixin.prototype */
	});
});

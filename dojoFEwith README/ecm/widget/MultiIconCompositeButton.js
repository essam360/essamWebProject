/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/query",
	"ecm/widget/CompositeButton",
	"dijit/Tooltip"
], function(declare, lang, array, domAttr, domClass, construct, query, CompositeButton, Tooltip) {

	/**
	 * @private
	 * @name ecm.widget.MultiIconCompositeButton
	 * @class
	 */
	return declare("ecm.widget.MultiIconCompositeButton", [
		CompositeButton
	], {
		/** @lends ecm.widget.MultiIconCompositeButton.prototype */

		iconsClass: null,
		iconsAltText: null,

		postCreate: function() {
			this.inherited(arguments);

			this._tooltips = [];
			if (this.iconsClass && lang.isArray(this.iconsClass)) {
				var prevNode = this._iconNode;
				array.forEach(this.iconsClass, function(iconCls, index) {
					var altText = this.iconsAltText && index < this.iconsAltText.length ? this.iconsAltText[index] : "";

					var newNode = lang.clone(this._iconNode);
					newNode.style.display = "";

					var children = query("*", newNode);
					if (children && 0 < children.length) {
						var newImg = children[0];
						domClass.add(newImg, iconCls);
						domAttr.set(newImg, "alt", altText);
					}

					construct.place(newNode, prevNode, "after");

					var tooltip = new dijit.Tooltip({
						connectId: [
							newNode
						],
						label: altText
					});
					tooltip.startup();
					this._tooltips.push(tooltip);

					prevNode = newNode;
				}, this);
			}
		},

		destroy: function() {
			if (this._tooltips) {
				array.forEach(this._tooltips, function(tooltip) {
					tooltip.destroy();
				});
				this._tooltips = null;
			}
			this.inherited(arguments);
		},

		_nop: null
	});
});

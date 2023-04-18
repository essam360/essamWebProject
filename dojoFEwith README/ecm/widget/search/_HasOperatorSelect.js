/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/dom-construct",
	"dojo/dom-geometry"
], function(declare, array, domConstruct, domGeometry) {

	/**
	 * @private Part of {@link ecm.widget.search.AttributeDefinitionWidget} and {@link ecm.widget.search.SearchForm} widgets
	 * @name ecm.widget.search._HasOperatorSelect
	 * @class Provides helper functions for widgets that display search operators.
	 */
	return declare("ecm.widget.search._HasOperatorSelect", null, {
		/** @lends ecm.widget.search._HasOperatorSelect.prototype */

		_hasOperatorSelectCache: {
			width: 0
		},

		_getOperatorSelectWidth: function() {
			if (this._hasOperatorSelectCache.width)
				return this._hasOperatorSelectCache.width;

			var optionLabels = [
				ecm.messages.operator_EQUAL,
				ecm.messages.operator_NOTEQUAL,
				ecm.messages.operator_LIKE,
				ecm.messages.operator_STARTSWITH,
				ecm.messages.operator_ENDSWITH,
				ecm.messages.operator_NOTLIKE,
				ecm.messages.operator_NULL,
				ecm.messages.operator_NOTNULL,
				ecm.messages.operator_LESS,
				ecm.messages.operator_LESSOREQUAL,
				ecm.messages.operator_GREATER,
				ecm.messages.operator_GREATEROREQUAL,
				ecm.messages.operator_BETWEEN,
				ecm.messages.operator_NOTBETWEEN,
				ecm.messages.operator_IN,
				ecm.messages.operator_INANY,
				ecm.messages.operator_NOTIN,
				ecm.messages.operator_CONTAINS
			];
			var div = domConstruct.create("div", {
				style: "display:;visibility:hidden",
				"class": "dijitPopup dijitComboBoxMenuPopup"
			});
			var ul = domConstruct.create("ul", {
				"class": "dijitReset dijitMenu dijitComboBoxMenu"
			}, div);
			array.forEach(optionLabels, function(label) {
				domConstruct.create("li", {
					"class": "dijitReset dijitMenuItem",
					innerHTML: label
				}, ul);
			});
			this.domNode.ownerDocument.body.appendChild(div);
			var width = domGeometry.getMarginBox(div).w;
			this.domNode.ownerDocument.body.removeChild(div);
			this._hasOperatorSelectCache.width = width ? width + 26 : 0;

			return this._hasOperatorSelectCache.width;
		}
	});

});

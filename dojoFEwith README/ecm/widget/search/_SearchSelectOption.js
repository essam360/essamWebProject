/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"../../LoggerMixin",
	"../Select",
	"dojo/text!./templates/_SearchSelectOption.html"
], function(declare, array, domConstruct, domGeometry, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, Select, template) {

	/**
	 * @private Extended by {@link ecm.widget.search._ObjectTypeOption} and {@link ecm.widget.search._VersionOption}
	 *          widgets
	 * @name ecm.model.search._SearchSelectOption
	 * @class Provides a widget that can be used to display a dropdown of options.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search._SearchSelectOption", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.search._SearchSelectOption.prototype */
		templateString: template,

		postCreate: function() {
			this.inherited(arguments);

			var maxWidth = this._getMaxWidth();
			if (maxWidth) {
				this._select.set("style", "width:" + maxWidth + "px");
			}
			this.connect(this._select, "onChange", "onChange");
		},

		getValue: function() {
			return this._select.get("value");
		},

		setValue: function(value) {
			this._select.set("value", value);
		},

		getSummary: function() {
			return this._select.get("displayedValue");
		},

		onChange: function(value) {
		},

		_setDisabledAttr: function(disabled) {
			this._select.set("disabled", disabled);
		},

		_getDisabledAttr: function() {
			return this._select.get("disabled");
		},

		_getMaxWidth: function() {
			if (this._cache.maxWidth) {
				return this._cache.maxWidth;
			}

			var div = domConstruct.create("div", {
				style: "display:;visibility:hidden;",
				"class": "dijitPopup dijitComboBoxMenuPopup"
			});
			var ul = domConstruct.create("ul", {
				"class": "dijitReset dijitMenu dijitComboBoxMenu"
			}, div);
			array.forEach(this._labels, function(label) {
				domConstruct.create("li", {
					style: "font-size:16px;", /* slightly larger font to ensure fit */
					"class": "dijitReset dijitMenuItem",
					innerHTML: label
				}, ul);
			});
			this.domNode.ownerDocument.body.appendChild(div);
			var width = domGeometry.getMarginBox(div).w;
			this.domNode.ownerDocument.body.removeChild(div);
			this._cache.maxWidth = width ? width + 18 : 0;

			return this._cache.maxWidth;
		}
	});

});

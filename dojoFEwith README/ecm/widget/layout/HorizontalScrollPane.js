/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/event",
	"dojo/query",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/has",
	"dojo/_base/sniff",
	"dojo/_base/html",
	"dojo/_base/fx",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/Tooltip",
	"dijit/layout/_LayoutWidget",
	"ecm/Messages",
	"dojo/text!./templates/HorizontalScrollPane.html"
],

function(declare, //
lang, //
connect, //
event, //
query, //
domClass, //
geometry, //
style, //
has, //
sniff, //
html, //
baseFx, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Tooltip, //
_LayoutWidget, //
Messages, //
template) {
	/**
	 * @name ecm.widget.layout.HorizontalScrollPane
	 * @class Provides a pane that can be scrolled horizontally.
	 * @augments dijit.layout._LayoutWidget
	 */
	return declare("ecm.widget.layout.HorizontalScrollPane", [
		_LayoutWidget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.layout.HorizontalScrollPane.prototype */

		templateString: template,

		_line: null,
		_lo: null,
		_offset: 15,
		_scrollValue: 0,
		_edgePadding: 25,

		_messages: ecm.messages,

		postCreate: function() {
			this.inherited(arguments);
			var rtl = query("body[dir$='rtl']").length > 0;
			if (rtl) {
				this._dir = "right";
				this._isReverse = !has("ie") && !has("ff");
				this._multiplier = has("ff") ? -1 : 1;
			} else {
				this._dir = "left";
				this._isReverse = false;
				this._multiplier = 1;
			}
			this.connect(this._leftButton, "onclick", this._isReverse ? "_onScrollRight" : "_onScrollLeft");
			this.connect(this._rightButton, "onclick", this._isReverse ? "_onScrollLeft" : "_onScrollRight");
			domClass.add(this.containerNode, "dijitInline");
		},

		/**
		 * Resizes the pane.
		 */
		resize: function() {
			var ch = geometry.getMarginBox(this.containerNode).h;
			geometry.setMarginBox(this.domNode, {
				h: ch
			});
			style.set(this.wrapper, "width", this.domNode.style["width"]);
			this._lo = geometry.getMarginBox(this.wrapper);
			this._size = Math.max(0, this.containerNode["scrollWidth"] - this._lo.w);
			if (!this._size) {
				//make sure we reset scroll position, otherwise the content may be hidden
				this.wrapper["scrollLeft"] = this._isReverse ? this._lo.w : 0;
			} else {
				this._line = new baseFx._Line(0 - this._offset, this._size + (this._offset * 2));
			}
			this._initializeContentPane();
		},

		/**
		 * @private
		 */
		_initializeContentPane: function() {
			var contentWidth = style.get(this.containerNode, "width");
			var widgetWidth = style.get(this.domNode, "width");
			if (contentWidth > widgetWidth - this._edgePadding) {
				style.set(this.wrapper, this._dir, this._edgePadding + "px");
				domClass.remove(this._leftScroller, "dijitHidden");
				domClass.remove(this._rightScroller, "dijitHidden");
				if (typeof this.containerNode.innerHTML == "string") {
					this._scrollValue = this._isReverse ? 0 : this._scrollValue + (this._lo.w - this._scrollValue);
					this._scroll(this._scrollValue / this._lo.w);
					this._connectTooltip();
				}
			} else {
				domClass.add(this._leftScroller, "dijitHidden");
				domClass.add(this._rightScroller, "dijitHidden");
				style.set(this.wrapper, this._dir, "0px");
				this._scrollValue = this._isReverse ? this._lo.w : 0;
				this._scroll(this._scrollValue / this._lo.w);
				this._disconnectTooltip();
			}
		},

		/**
		 * @private
		 */
		_connectTooltip: function() {
			if (!this._showTooltipHandler) {
				this._showTooltipHandler = connect.connect(this.wrapper, "onmouseover", lang.hitch(this, function() {
					Tooltip.show(this.containerNode.innerHTML, this.domNode, [
						"after",
						"before",
						"above",
						"below"
					], !this.isLeftToRight(), this.textDir);//38360
				}));
				this._hideTooltipHandler = connect.connect(this.wrapper, "onmouseout", lang.hitch(this, function() {
					Tooltip.hide(this.domNode);
				}));
			}
		},

		/**
		 * @private
		 */
		_disconnectTooltip: function() {
			if (this._showTooltipHandler) {
				Tooltip.hide(this.domNode);
				connect.disconnect(this._showTooltipHandler);
				this._showTooltipHandler = null;
				connect.disconnect(this._hideTooltipHandler);
				this._hideTooltipHandler = null;
			}
		},

		/**
		 * @private
		 */
		_scroll: function(/* Float */n) {
			if (!this._size) {
				return;
			}
			this.wrapper["scrollLeft"] = this._multiplier * Math.floor(this._line.getValue(n));
			this._configureScrollButtons();
		},

		/**
		 * @private
		 */
		_configureScrollButtons: function() {
			if (this._lo) {
				var min = this._isReverse ? this._scrollValue >= this._lo.w - this._edgePadding : this._scrollValue <= this._edgePadding;
				if (min) {
					domClass.remove(this._leftImage, "leftIcon");
					domClass.add(this._leftImage, "disabledLeftIcon");
				} else {
					domClass.remove(this._leftImage, "disabledLeftIcon");
					domClass.add(this._leftImage, "leftIcon");
				}
				var max = this._isReverse ? this._scrollValue <= this._edgePadding : this._scrollValue >= this._lo.w - this._edgePadding;
				if (max) {
					domClass.remove(this._rightImage, "rightIcon");
					domClass.add(this._rightImage, "disabledRightIcon");
				} else {
					domClass.remove(this._rightImage, "disabledRightIcon");
					domClass.add(this._rightImage, "rightIcon");
				}
			}
		},

		/**
		 * @private
		 */
		_onScrollLeft: function(e) {
			event.stop(e);
			// Jump to left edge if less than 150
			if (this._scrollValue > 150)
				this._scrollValue = this._scrollValue - 150;
			else
				this._scrollValue = 0;
			this._scroll(this._scrollValue / this._lo.w);
			return false;
		},

		/**
		 * @private
		 */
		_onScrollRight: function(e) {
			event.stop(e);
			// Calculate the remaining space before scrolling to the right
			var delta = this._lo.w - this._scrollValue;
			if (delta > 150)
				this._scrollValue = this._scrollValue + 150;
			else
				this._scrollValue = this._scrollValue + delta;
			this._scroll(this._scrollValue / this._lo.w);
			return false;
		},

		/**
		 * Cleans up the widget.
		 */
		destroy: function() {
			this.inherited(arguments);
			this._disconnectTooltip();
		}
	});
});

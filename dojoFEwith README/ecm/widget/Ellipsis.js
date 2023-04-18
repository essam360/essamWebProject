/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/Tooltip",
	"dijit/layout/_LayoutWidget",
	"ecm/model/Desktop",
	"dojo/text!./templates/Ellipsis.html"
], //
function(declare, lang, connect, has, domClass, domConstruct, domGeom, domStyle, _TemplatedMixin, _WidgetsInTemplateMixin, Tooltip, _LayoutWidget, Desktop, template) {
	/**
	 * @name ecm.widget.Ellipsis
	 * @class Provides a widget that displays an ellipsis (...) to indicate that data is truncated so the user is not
	 *        seeing all the values. The widget can be configured to truncate data on the left or on the right. By
	 *        default, data is truncated on the right.
	 * @augments dijit.layout._LayoutWidget
	 */
	return declare("ecm.widget.Ellipsis", [
		_LayoutWidget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.Ellipsis.prototype */

		templateString: template,

		/**
		 * String with value <code>"right"</code> or <code>"left"</code>. Truncate any extra data on the right or
		 * left side.
		 */
		truncate: "right",
		/**
		 * If <code>true</code>, fit to the parent.
		 */
		fitParent: false,

		/**
		 * If a width value is not passed to layout, delegate to the superclass implementation.
		 */
		_useBaseLayout: false,

		postMixInProperties: function() {
			this.textDir = has("text-direction");
			// toggle this.truncate if rtl
			if (document.body.dir == "rtl") {
				this.truncate = this.truncate == "right" ? "left" : "right";
			}
		},

		/**
		 * Sets the layout of the widget to the specified width.
		 * 
		 * @param width
		 *            The width.
		 */
		layout: function(width) {
			if (!width && this._useBaseLayout) {
				this.inherited(arguments);
			} else {
				if (!this.domNode) {
					return;
				}
				this._fit(width);
				var contentWidth = domStyle.get(this.containerNode, "width");
				var widgetWidth = domStyle.get(this.domNode, "width");
				// If the content fills up the widget, left or right align the content & show the ellipsis
				// Otherwise, left align the content & no ellipsis
				if (contentWidth > widgetWidth && !this._ellipsisDisabled) {
					domStyle.set(this.containerNode, this.truncate == "right" ? "left" : "right", "0px");
					domStyle.set(this.containerNode, this.truncate == "right" ? "right" : "left", "auto");
					this._toggleEllipsis(true);
					if (lang.isString(this._getContentAttr())) {
						this._connectTooltip();
					}
				} else {
					domStyle.set(this.containerNode, "left", "0px");
					domStyle.set(this.containerNode, "right", "auto");
					this._toggleEllipsis(false);
					this._disconnectTooltip();
					if (this.fitParent) {
						var dim = domGeom.getMarginBox(this.containerNode);
						var newdim = {
							w: dim.w,
							h: dim.h
						};
						domGeom.setMarginBox(this.domNode, newdim);
						if (this.domNode.parentNode) {
							domGeom.setMarginBox(this.domNode.parentNode, newdim);
						}
					}
				}
			}
		},

		/**
		 * @private
		 */
		_fit: function(width) {
			// fit my width to my parent width, my height to my content height
			if (!this.domNode.parentNode) {
				return;
			}
			var pw = width > 0 ? width : domGeom.getContentBox(this.domNode.parentNode).w;
			var pw = domGeom.getContentBox(this.domNode.parentNode).w;
			var sw = domStyle.get(this.domNode.parentNode, "width");
			pw = width > 0 ? width : (sw > 0 ? sw : pw);
			var ch = domGeom.getMarginBox(this.containerNode).h || 15; // a default in case height cannot be computed
			if (Desktop.baseStyle != "classic" && ch < 19) {
				ch = 19;
			}
			domGeom.setMarginBox(this.domNode, {
				w: pw,
				h: ch
			});
		},

		/**
		 * @private
		 */
		_toggleEllipsis: function(show) {
			if (show && this._ellipsisDisabled)
				return;

			domStyle.set(this.ellipsisNode, "display", show ? "" : "none");
			var ew = domStyle.get(this.ellipsisNode, "width");
			if (show) {
				ew += 3;
			}
			// Place ellipsis on side truncating.
			if (this.truncate == "right") {
				domStyle.set(this.wrapperNode, "right", ew + "px");
				domStyle.set(this.ellipsisNode, "right", "0px");
				domStyle.set(this.ellipsisNode, "left", "auto");
			} else {
				domStyle.set(this.wrapperNode, "left", ew + "px");
				domStyle.set(this.ellipsisNode, "left", "0px");
				domStyle.set(this.ellipsisNode, "right", "auto");
			}
		},

		/**
		 * Sets the content to display.
		 * 
		 * @param content
		 *            String or DOM (Document Object Model) data to display.
		 */
		_setContentAttr: function(content) {
			if (lang.isString(content)) {
				var contentDiv = domConstruct.create("div", null, this.containerNode, "only");
				contentDiv.appendChild(document.createTextNode(content)); // Not using innerHTML, due to content = "<test>aa" causes issues with innerHTML
			} else {
				domConstruct.place(content, this.containerNode, "only");
			}
		},

		/**
		 * Returns the content using <code>containerNode.innerHTML</code>.
		 */
		_getContentAttr: function() {
			return this.containerNode.innerHTML;
		},

		/**
		 * @private Connect the tooltip.
		 */
		_connectTooltip: function() {
			if (!this._showTooltipHandler) {
				this._showTooltipHandler = connect.connect(this, "onMouseOver", lang.hitch(this, function() {
					Tooltip.show(this._getContentAttr(), this.domNode, [
						"after",
						"before",
						"above",
						"below"
					], !this.isLeftToRight(), this.textDir);
				}));
				this._hideTooltipHandler = connect.connect(this, "onMouseOut", lang.hitch(this, function() {
					Tooltip.hide(this.domNode);
				}));
			}
		},

		/**
		 * @private Disconnects the tooltip.
		 */
		_disconnectTooltip: function() {
			Tooltip.hide(this.domNode); // Make sure the tooltip is hidden before disconnecting
			if (this._showTooltipHandler) {
				connect.disconnect(this._showTooltipHandler);
				this._showTooltipHandler = null;
				connect.disconnect(this._hideTooltipHandler);
				this._hideTooltipHandler = null;
			}
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this.inherited(arguments);
			this._disconnectTooltip();
		}
	});
});

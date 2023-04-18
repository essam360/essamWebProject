/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/window",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/string",
	"idx/form/DropDownLink",
	"./Ellipsis"
], //
function(declare, array, baseWin, domAttr, domClass, domGeometry, string, DropDownLink, Ellipsis) {

	/**
	 * @name ecm.widget.DropDownLink
	 * @class Provides a widget that contains a link with a drop-down menu and summary.
	 * @augments idx.form.DropDownLink
	 */
	return declare("ecm.widget.DropDownLink", [
		DropDownLink
	], {
		/** @lends ecm.widget.DropDownLink.prototype */

		/** A boolean value that controls whether or not the width should be automatically determined. */
		autoWidth: false,

		/** A boolean value that controls whether or not the summary is displayed when the control is disabled. */
		keepSummaryOnDisabled: false,

		/** A boolean value that controls whether or not the link is hidden. */
		hideLink: false,

		/**
		 * A boolean value that controls whether or not the summary is hidden.
		 * 
		 * @since 2.0.2
		 */
		hideSummary: false,

		/**
		 * @private
		 */
		summaryText: "",

		_messages: ecm.messages,
		_allowCloseOnBlur: true,

		postCreate: function() {
			this.inherited(arguments);

			domClass.add(this._buttonNode, "ecmDropDownLink");
			domClass.add(this.domNode, "ecmDropDownLink");
			if (this.hideLink) {
				domClass.add(this._buttonNode, "dijitHidden");
			}

			if (!this.hideSummary) {
				this.summary = new Ellipsis({
					fitParent: true,
					id: this.id + "_summary"
				});
				domClass.add(this.summary.domNode, "ecmDropDownLinkSummary");
				this.containerNode.appendChild(this.summary.domNode);
				this.summary.startup();
				var labelBy = domAttr.get(this.focusNode, "aria-labelledby") || "";
				domAttr.set(this.focusNode, "aria-labelledby", labelBy + " " + domAttr.get(this.summary.domNode, "id"));
			}
		},

		/**
		 * Handles the widget shutdown cleanup.
		 */
		uninitialize: function() {
			if (this.summary)
				this.summary.destroy();
		},

		_onBlur: function() {
			if (this._allowCloseOnBlur) {
				this.inherited(arguments);
			}
		},

		/**
		 * Sets whether or not the drop-down menu should close when it loses focus.
		 * 
		 * @param allowCloseOnBlur
		 *            A Boolean value. If <code>true</code>, the drop-down menu is automatically closed when it loses
		 *            focus.
		 */
		setAllowCloseOnBlur: function(allowCloseOnBlur) {
			this._allowCloseOnBlur = allowCloseOnBlur;
		},

		/**
		 * Updates the summary.
		 * 
		 * @param width
		 *            The width of the summary.
		 */
		summarize: function(width) {
			if (this.hideSummary)
				return;

			var summary = "";
			if (!this.get("disabled") || this.keepSummaryOnDisabled) {
				var children = this.dropDown ? this.dropDown.getChildren() : this.getChildren();
				if (children && children.length > 0) {
					array.forEach(children, function(child) {
						if (!child.get("disabled")) {
							var childSummary = child.getSummary ? child.getSummary() : "";
							if (childSummary) {
								if (summary)
									summary = string.substitute(this._messages.drop_down_link_summary, [
										summary,
										childSummary
									]);
								else
									summary = childSummary;
							}
						}
					}, this);
				}
			}
			if (!summary) {
				summary = this._messages.none;
			}
			if (width) {
				var bwidth = domGeometry.getMarginBox(this._buttonNode).w;
				if (bwidth > 0 && this.summary && this.summary.domNode) {
					bwidth -= domGeometry.getMarginBox(this.summary.domNode).w;
				}
				width -= bwidth;
			}
			this.summaryText = summary;
			this.summary.set("content", baseWin.doc.createTextNode(summary));
			this.summary.layout(width);
		}
	});
});

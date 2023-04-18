/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/window",
	"dijit/a11y",
	"dijit/focus",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/TooltipDialog",
	"dijit/form/Button",
	"../Messages",
	"dojo/text!./templates/DropDownDialog.html"
], //
function(declare, lang, domClass, domStyle, domGeom, win, a11y, focus, _WidgetsInTemplateMixin, TooltipDialog, Button, Messages, template) {
	/**
	 * @name ecm.widget.DropDownDialog
	 * @class Provides a widget that is used to display a drop-down list.
	 * @augments dijit.TooltipDialog
	 */
	return declare("ecm.widget.DropDownDialog", [
		TooltipDialog,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.DropDownDialog.prototype */

		templateString: template,
		widgetsInTemplate: true,

		messages: ecm.messages,
		parseOnLoad: false,

		/**
		 * Boolean indicating if the <strong>OK</strong> button should be hidden.
		 */
		hideOKButton: false,
		/**
		 * Boolean indicating if the <strong>Cancel</strong> button should be hidden.
		 */
		hideCancelButton: false,
		/**
		 * Boolean indicating if the <strong>Apply</strong> button should be hidden.
		 */
		showApplyButton: false,
		/**
		 * The <strong>OK</strong> button label.
		 */
		okButtonLabel: ecm.messages.ok_button_label,
		/**
		 * The <strong>Apply</strong> button label.
		 */
		applyButtonLabel: ecm.messages.apply_button_label,

		constructor: function() {
		},

		postCreate: function() {
			this.inherited(arguments);

			this.connect(this.buttonNode, "onkeydown", "_onKey");

			if (this.hideOKButton) {
				domStyle.set(this._okButton.domNode, "display", "none");
			}
			if (this.hideCancelButton) {
				domStyle.set(this._cancelButton.domNode, "display", "none");
			}
			if (!this.showApplyButton) {
				domStyle.set(this._applyButton.domNode, "display", "none");
			}
		},

		focus: function() {
			this._getFocusItems();
			setTimeout(lang.hitch(this, function() {
				focus.focus(this._firstFocusItem);
			}), 500);
		},

		/**
		 * @private Finds focusable items in dialog, and sets this._firstFocusItem and this._lastFocusItem.
		 */
		_getFocusItems: function() {
			var elems = a11y._getTabNavigable(this.containerButtonNode); // Use the container & button node to determine tab navigation
			this._firstFocusItem = elems.lowest || elems.first || this.closeButtonNode || this.domNode;
			this._lastFocusItem = elems.last || elems.highest || this._firstFocusItem;
		},

		/**
		 * Disables or enables the <strong>OK</strong> button.
		 * 
		 * @param disabled
		 *            A boolean value. If true, the <strong>OK</strong> button will be disabled. Otherwise the
		 *            <strong>OK</strong> button will be enabled.
		 */
		setDisabledOKButton: function(disabled) {
			this._okButton.set("disabled", disabled);
		},

		/**
		 * Sets the <strong>OK</strong> button label.
		 * 
		 * @param label
		 *            The string label for the <strong>OK</strong> button.
		 */
		setOKButtonLabel: function(label) {
			this._okButton.set("label", label);
		},

		/**
		 * Disables or enables the <strong>Apply</strong> button.
		 * 
		 * @param disabled
		 *            A boolean value. If <code>true</code>, the <strong>Apply</strong> button will be disabled.
		 *            Otherwise the <strong>Apply</strong> button will be enabled.
		 */
		setDisabledApplyButton: function(disabled) {
			if (this.showApplyButton) {
				this._applyButton.set('disabled', disabled);
			}
		},

		/**
		 * Align the <strong>OK</strong> button to left.
		 * 
		 * @param moveLeft
		 *            A boolean value. If <code>true</code>, the <strong>OK</strong> button will be aligned to left.
		 *            Otherwise the <strong>OK</strong> button will be aligned to right.
		 */
		setAlignLeftOKButton: function(alighLeft) {
			if (alighLeft) {
				domClass.add(this._okButton.domNode, "left");
			} else {
				domClass.remove(this._okButton.domNode, "left");
			}
		},

		/**
		 * Shows or hides the <strong>OK</strong> button.
		 * 
		 * @param show
		 *            A boolean value. If <code>true</code>, the <strong>Apply</strong> button is displayed.
		 *            Otherwise the <strong>OK</strong> button is hidden.
		 */
		setShowOKButton: function(show) {
			if (show) {
				domStyle.set(this._okButton.domNode, "display", "");
			} else {
				domStyle.set(this._okButton.domNode, "display", "none");
			}
		},

		/**
		 * Shows or hides the <strong>Apply</strong> button.
		 * 
		 * @param show
		 *            A boolean value. If <code>true</code>, the <strong>Apply</strong> button is displayed.
		 *            Otherwise the <strong>Apply</strong> button is hidden.
		 */
		setShowApplyButton: function(show) {
			if (show) {
				domStyle.set(this._applyButton.domNode, "display", "");
			} else {
				domStyle.set(this._applyButton.domNode, "display", "none");
			}
		},

		/**
		 * Called when the drop-down list closes.
		 */
		onClose: function() {
			if( this.containerNode ){
				domGeom.setMarginBox(this.containerNode, {
					h: "auto"
				});
			}
			if( this.domNode && this.domNode.parentNode ){
				domGeom.setMarginBox(this.domNode.parentNode, {
					w: "auto"
				});
			}
		},

		/**
		 * Called when the drop-down list opens. Resizes the drop-down to fit the browser area.
		 */
		onOpen: function() {
			var view = win.getBox();
			var mb = domGeom.getMarginBox(this.domNode);
			if (!this._originalNodeHt) {
				this._originalNodeHt = mb.h;
			}
			var containerNodeMb = domGeom.getMarginBox(this.containerNode);
			if (!this._originalContainerHt) {
				this._originalContainerHt = containerNodeMb.h;
				this._originalWidth = domGeom.getMarginBox(this.domNode.parentNode).w;
			}
			var pos = domGeom.position(this.domNode);
			var totalHtAvail = view.h - pos.y;
			if (this._originalNodeHt > totalHtAvail) {
				var buttonNodeMb = domGeom.getMarginBox(this.buttonNode);
				var newContainerHt = totalHtAvail - buttonNodeMb.h; //Calculate new height so that we can show all the widget
				var newContainerWidth = this._originalWidth + 16;// Need to add extra widget/room for vertical scrollbars
				domGeom.setMarginBox(this.containerNode, {
					h: newContainerHt
				});
				/* domGeom.setMarginBox(this.domNode.parentNode, {
					w: newContainerWidth
				}); */
			} else {
				domGeom.setMarginBox(this.containerNode, {
					h: this._originalContainerHt
				});
				/* domGeom.setMarginBox(this.domNode.parentNode, {
					w: this._originalWidth
				}); */
			}
			// Double chk if we need to reposition the x to show the dropdown dialog 
			// We have found places where position around node is hiding part of the dialog.
			containerNodeMb = domGeom.getMarginBox(this.containerNode);
			var widgetWidth = containerNodeMb.w;
			var browserWidth = view.w;
			if (widgetWidth + pos.x > browserWidth && pos.x > 0) {
				domStyle.set(this.domNode.parentNode, "left", 0);
			}
			// Remove vertical scrollbars from the popup.
			domStyle.set(this.domNode.parentNode, "overflowY", "visible");
		},

		/**
		 * Resets the heights.
		 */
		scheduleResize: function() {
			this._originalNodeHt = 0;
			this._originalContainerHt = 0;
			domStyle.set(this.containerNode, "height", "auto");
			domStyle.set(this.domNode.parentNode, "width", "auto");
		},

		/**
		 * Event fired when the <strong>OK</strong> button is clicked.
		 */
		onClickOK: function() {
		},

		/**
		 * Event fired when the <strong>Apply</strong> button is clicked.
		 */
		onClickApply: function() {
		},

		/**
		 * Event fired when the <strong>Cancel</strong> button is clicked.
		 */
		onClickCancel: function() {
		}
	});
});

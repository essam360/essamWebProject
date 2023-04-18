/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/window",
	"ecm/widget/DropDownButton",
	"dijit/Tooltip",
	"../../LoggerMixin",
	"dojo/text!../templates/DropDownInput.html"
], function(declare, domGeometry, domStyle, win, DropDownButton, Tooltip, LoggerMixin, template) {

	/**
	 * @name ecm.widget.search.SearchInDropDownInput
	 * @class Provides a drop-down button for SearchInputDropDown widget.
	 * @augments dijit.form.DropDownButton
	 */
	return declare("ecm.widget.search.SearchInDropDownInput", [
		DropDownButton,
		LoggerMixin
	], {
		/** @lends ecm.widget.search.SearchInDropDownInput.prototype */
		templateString: template,

		/**
		 * If set the width in force. <code>true<code> means yes.
		 */
		forceWidth: true,

		/**
		 * @private
		 */
		_allowCloseOnBlur: true,
		/**
		 * @private
		 */
		_parent: null,
		/**
		 * @private
		 */
		_originalLeftPaneHeight: null,
		/**
		 * @private
		 */
		_originalFolderSelectorHeight: null,
		/**
		 * @private
		 */
		_originalButtonPaneTop: null,
		/**
		 * @private
		 */
		_originalPopUpHeight: null,

		/**
		 * Sets the parent widget object.
		 *
		 * @param parent
		 *            A widget that will set to be the parent.
		 */
		setParent: function(parent) {
			var methodName = "setParent";
			this.logEntry(methodName);

			this.parent = parent;

			this.logExit(methodName);
		},

		/**
		 * Set if allow close on blur.
		 *
		 * @param allowCloseOnBlur
		 *            Boolean value. <code>true<code> means allow close on blur.
		 */
		setAllowCloseOnBlur: function(allowCloseOnBlur) {
			var methodName = "setAllowCloseOnBlur";
			this.logEntry(methodName);

			this._allowCloseOnBlur = allowCloseOnBlur;

			this.logExit(methodName);
		},

		/**
		 * Gets the boolean value of if allow close on blur.
		 *
		 * @return Boolean value of if allow close on blur.
		 */

		getAllowCloseOnBlur: function() {
			return this._allowCloseOnBlur;
		},

		/**
		 * @private
		 */
		_onBlur: function() {
			var methodName = "_onBlur";
			this.logEntry(methodName);

			// Hide the tooltip.
			Tooltip.hide(this.domNode);

			// Don't call the inherited function in some cases -- when the tree is paging,  this causes
			// the dropdown to close.
			if (this._allowCloseOnBlur) {
				this.inherited(arguments);
			}
			this.logExit(methodName);
		},

		/**
		 * Opens the drop-down input.
		 */
		openDropDown: function() {
			var methodName = "openDropDown";
			this.logEntry(methodName);

			// Get the dimensions of the window and the space above and below the button.
			var windowBoxDimensions = win.getBox();
			var thisPosition = domGeometry.position(this.domNode);
			var spaceBelow = windowBoxDimensions.h - thisPosition.y - thisPosition.h;
			var spaceAbove = thisPosition.y;
			var spaceAvailable = spaceBelow > spaceAbove ? spaceBelow : spaceAbove;

			// Add 12px margin.
			spaceAvailable -= 12;

			this.inherited(arguments);

			// If this is the first time the dropdown is opening, get the height of the controls.
			// Otherwise, reset the height back to their original values.
			if (this._originalLeftPaneHeight == null) {
				this._originalLeftPaneHeight = domStyle.get(this.parent._leftPane, "height");
			} else {
				domStyle.set(this.parent._leftPane, "height", this._originalLeftPaneHeight + "px");
			}
			if (this._originalFolderSelectorHeight == null) {
				this._originalFolderSelectorHeight = domStyle.get(this.parent._folderSelector.domNode, "height");
			} else {
				domStyle.set(this.parent._folderSelector.domNode, "height", this._originalFolderSelectorHeight + "px");
			}
			if (this._originalButtonPaneTop == null) {
				this._originalButtonPaneTop = domStyle.get(this.parent._buttonPane, "top");
			} else {
				domStyle.set(this.parent._buttonPane, "top", this._originalButtonPaneTop + "px");
			}
			if (this._originalPopUpHeight == null) {
				this._originalPopUpHeight = domStyle.get(this.parent._popupContent.id, "height");
			} else {
				domStyle.set(this.parent._popupContent.id, "height", this._originalPopUpHeight + "px");
			}

			// If the dropdown doesn't fit in the space available, reduce its height.
			if (this._originalPopUpHeight > spaceAvailable) {

				// Calculate the height of the two panes
				var newLeftPaneHeight = this._originalLeftPaneHeight - (this._originalPopUpHeight - spaceAvailable);
				var newRightPaneHeight = this._originalFolderSelectorHeight - (this._originalPopUpHeight - spaceAvailable);

				// Calculate the top value of the button pane.
				var buttonAreaHeight = domStyle.get(this.parent._buttonPane, "height");
				var buttonAreaTop = spaceAvailable - buttonAreaHeight;

				// Set the style of the controls.
				domStyle.set(this.parent._leftPane, "height", newLeftPaneHeight + "px");
				domStyle.set(this.parent._folderSelector.domNode, "height", newRightPaneHeight + "px");
				domStyle.set(this.parent._buttonPane, "top", buttonAreaTop + "px");
				domStyle.set(this.parent._popupContent.id, "height", spaceAvailable + "px");
			}
			this.logExit(methodName);
		},
		/**
		 * @private
		 */
		_onButtonClick: function() {
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			this.inherited(arguments);

			if (this.dropDown)
				this.dropDown.destroy();
		}
	});
});

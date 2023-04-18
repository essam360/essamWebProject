/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/window",
	"ecm/widget/DropDownButton",
	"dijit/Tooltip",
	"../LoggerMixin",
	"dojo/text!./templates/DropDownInput.html"
], //
function(declare, //
domGeom, //
domStyle, //
domAttr, //
win, //
DropDownButton, //
Tooltip, //
LoggerMixin, //
template) {

	/**
	 * @name ecm.widget._FolderSelectorDropDownInput
	 * @class This dijit allows us to use the same error handling as the ecm.widget.DropDownInput dijit, since it uses
	 *        the same template.
	 * @augments dijit.form.DropDownButton
	 */
	return declare("ecm.widget._FolderSelectorDropDownInput", [
		DropDownButton,
		LoggerMixin
	], {
		/** @lends ecm.widget._FolderSelectorDropDownInput.prototype */

		templateString: template,
		widgetsInTemplate: true,
		forceWidth: true,

		_allowCloseOnBlur: true,
		_parent: null,
		_originalFolderSelectorHeight: null,
		_originalPopUpHeight: null,

		/**
		 * Fix dojo where it doesn't focus on the focusNode when disabled. For accessibilty/JAWS, the user needs to tab
		 * to the field for JAWS to read it.
		 */
		_setDisabledAttr: function(/*Boolean*/value) {
			this.inherited(arguments);
			domAttr.set(this.focusNode, "tabindex", "0");
		},

		setParent: function(parent) {
			this.parent = parent;
		},

		setAllowCloseOnBlur: function(allowCloseOnBlur) {
			var methodName = "setAllowCloseOnBlur";
			this.logEntry(methodName);

			this._allowCloseOnBlur = allowCloseOnBlur;

			this.logExit(methodName);
		},

		getAllowCloseOnBlur: function() {
			return this._allowCloseOnBlur;
		},

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

		openDropDown: function() {
			var methodName = "openDropDown";
			this.logEntry(methodName);

			// Get the dimensions of the window and the space above and below the button.
			var windowBoxDimensions = win.getBox();
			var thisPosition = domGeom.position(this.domNode);
			var spaceBelow = windowBoxDimensions.h - thisPosition.y - thisPosition.h;
			var spaceAbove = thisPosition.y;
			var spaceAvailable = spaceBelow > spaceAbove ? spaceBelow : spaceAbove;

			// Add 5px margin.
			spaceAvailable -= 5;

			this.inherited(arguments);

			// If this is the first time the dropdown is opening, get the height of the two controls.
			// Otherwise, reset the height back to their original values.
			if (this._originalFolderSelectorHeight == null) {
				this._originalFolderSelectorHeight = domStyle.get(this.parent._folderSelector.domNode, "height");
			} else {
				domStyle.set(this.parent._folderSelector.domNode, "height", this._originalFolderSelectorHeight + "px");
			}
			if (this._originalPopUpHeight == null) {
				this._originalPopUpHeight = domStyle.get(this.parent._popupContent.id, "height");
			} else {
				domStyle.set(this.parent._popupContent.id, "height", this._originalPopUpHeight + "px");
			}

			// If the dropdown doesn't fit in the space available, reduce its height.
			if (this._originalPopUpHeight > spaceAvailable) {

				// Calculate the height of the folder selector.
				var newFolderSelectorHeight = this._originalFolderSelectorHeight - (this._originalPopUpHeight - spaceAvailable);

				// Set the heights of the two controls.
				domStyle.set(this.parent._folderSelector.domNode, "height", newFolderSelectorHeight + "px");
				domStyle.set(this.parent._popupContent.id, "height", spaceAvailable + "px");
			}

			this.logExit(methodName);
		},

		_onButtonClick: function() {
		},

		destroy: function() {
			this.inherited(arguments);

			if (this.dropDown) {
				this.dropDown.destroy();
				this.dropDown = null;
			}
		}
	});
});

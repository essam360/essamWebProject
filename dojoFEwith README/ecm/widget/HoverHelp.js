/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", 
	"dojo/_base/event", 
	"dojo/_base/lang", 
	"dojo/dom-attr", 
	"dojo/dom-class", 
	"dojo/dom-construct", 
	"dojo/aspect",
	"dojo/keys", 
	"dijit/popup", 
	"dijit/focus",
	"idx/widget/HoverHelp", 
	"../Messages"
], //
function(declare, event, lang, domAttr, domClass, domConstruct, aspect, keys, popup, focus, HoverHelp, Messages) {
	/**
	 * @name ecm.widget.HoverHelp
	 * @class Provides a widget that is used to display the question mark icon that links to help in the user interface.
	 * @augments idx.widget.HoverHelp
	 */
	return declare("ecm.widget.HoverHelp", [
		HoverHelp
	], {
		/** @lends ecm.widget.HoverHelp.prototype */

		/**
		 * Boolean indicating if the hover help icon is focusable.
		 */
		isFocusable: false,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmHoverHelp");
			domClass.add(this.domNode, "dijitInline");
			domClass.add(this._wrapper, "ecmHoverHelpDialogWrapper");
			this._button.set("iconClass", ""); // remove dijitNoIcon 

			domAttr.set(this._messageNode, "tabindex", "0");
			if (!this.isFocusable)
				domAttr.set(this._button.focusNode, "tabindex", "-1"); // do not tab to the hover help - user can get to it via Ctrl F1 if they used _HoverHelpMixin.js

			this._addCloseButton();

			// override clicking of button so that it doesn't toggle the drop down dialog
			this._button._onDropDownMouseDown = lang.hitch(this, function(evt) {
				this.openDropDownDialog();
				if (evt.preventDefault) {
					evt.preventDefault();
				} else {
					event.stop(evt);
				}
			});

			// User may have done Ctrl F1 from the field & then hit esc, we then want to focus back on the field
			this.own(aspect.after(this._dialog, "onClose", lang.hitch(this, function() {
				if (this._button._opened) {
					popup.close(this._button.dropDown);
					this._button._opened = false;
					if (this._focusFieldOnClose) { // if defined a focus field, then always focus on it when closing the dialog
						focus.focus(this._focusFieldOnClose);
						this._focusFieldOnClose = null;
					} else {
						this._button.focus();
					}
				}
			}), true));
			
			// override _onBlur.
			this._button._onBlur = lang.hitch(this, function() {
			});

			// on open of the dialog, focus on the wrapper
			this.own(aspect.after(this._dialog, "onOpen", lang.hitch(this, function() {
				setTimeout(lang.hitch(this, function() {
					focus.focus(this._messageNode); // _wrapper); // IE with JAWS is more likely to annouce when focus on the message node.
				}), 100);
			}), true));

			// Ctrl F1, Enter, & Space all open drop down dialog
			this.own(aspect.after(this._button.domNode, "onkeypress", lang.hitch(this, function(evt) {
				if (evt.ctrlKey && evt.charOrCode == keys.F1) {
					this.openDropDownDialog();
					event.stop(evt);
				}
			}), true));

			this._isMouseInButton = false;
			this._isMouseInDialog = false;
			this.own(aspect.after(this._button.domNode, "onmouseover", lang.hitch(this, function() {
				this._isMouseInButton = true;
				this._delayOpenDropDownDialog();
			}), true));
			this.own(aspect.after(this._button.domNode, "onmouseout", lang.hitch(this, function() {
				this._isMouseInButton = false;
				this._delayCloseDropDownDialog();
			}), true));
			this.own(aspect.after(this._dialog.domNode, "onmouseover", lang.hitch(this, function() {
				this._isMouseInDialog = true;
				this._delayOpenDropDownDialog();
			}), true));
			this.own(aspect.after(this._dialog.domNode, "onmouseout", lang.hitch(this, function() {
				this._isMouseInDialog = false;
				this._delayCloseDropDownDialog();
			}), true));

			// Close the hover help when the link is clicked.
			// Otherwise, the main window may remain in front of the new window.
			this.own(aspect.after(this._anchorNode, "onclick", lang.hitch(this, function(evt) {
				this.closeDropDownDialog();
			}), true));

			if (this.baseHref == null) {
				this.baseHref = ecm.model.desktop.getHelpUrl(true);
			}
		},

		/**
		 * Overrides <code>subclasses _onHoverMouseOver</code> (do not display hover help immediately).
		 * 
		 * @param e
		 *            The event.
		 */
		_onHoverMouseOver: function(e) {
		},

		/**
		 * Overrides <code>subclasses _getTitle</code> (do not display title on icon).
		 */
		_getTitle: function() {
			return "";
		},

		/**
		 * Focus on the button if <code>isFocusable</code>.
		 */
		focus: function() {
			if (this.isFocusable)
				this._button.focus();
		},

		/**
		 * Overrides <code>subclasses _onFocus</code> (do not focus on the button).
		 */
		_onFocus: function() {
		},

		/**
		 * Adds the <strong>Close</code> button.
		 */
		_addCloseButton: function() {
			var closeDiv = domConstruct.create("div", {
				'class': 'closeButtonDiv'
			});

			var closeButton = domConstruct.create("span", {
				'class': 'closeButton',
				'title': ecm.messages.close,
				'role': 'button',
				'tabIndex': 0,
				'aria-label': ecm.messages.close
			});

			this.own(aspect.after(closeButton, "onclick", lang.hitch(this, "closeDropDownDialog"), true));
			this.own(aspect.after(closeButton, "onkeypress", lang.hitch(this, function(evt) {
				if (evt.charCode == keys.SPACE || evt.charOrCode == keys.ENTER) {
					this.closeDropDownDialog();
					event.stop(evt);
				}
			}), true));

			domConstruct.place(closeButton, closeDiv, "only");
			domConstruct.place(closeDiv, this._wrapper, "first");
		},

		/**
		 * Determines if tabbing will or will not focus on this hover help.
		 * 
		 * @param isFocusable
		 *            Boolean indicating if the hover help icon is focusable during tab.
		 */
		setFocusable: function(isFocusable) {
			this.isFocusable = isFocusable;
			if (!this.isFocusable) {
				domAttr.set(this._button.focusNode, "tabindex", "-1"); // do not tab to the hover help - user can get to it via Ctrl F1 if they used _HoverHelpMixin.js
			} else {
				domAttr.set(this._button.focusNode, "tabindex", "0"); // do tab to the hover help - user can get to it via Ctrl F1 if they used _HoverHelpMixin.js
			}
		},

		/**
		 * Boolean indicating if the drop-down dialog is open.
		 * 
		 * @return Boolean indicating if the drop-down dialog is open.
		 */
		isOpenDropDownDialog: function() {
			return this._button._opened;
		},

		/**
		 * Delays opening the drop-down dialog.
		 */
		_delayOpenDropDownDialog: function() {
			if (this._openDialogTimer) {
				clearTimeout(this._openDialogTimer);
				delete this._openDialogTimer;
			}
			this._openDialogTimer = setTimeout(lang.hitch(this, function() {
				if (this._isMouseInButton || this._isMouseInDialog) {
					this.openDropDownDialog();
				}
			}), 700);
		},

		/**
		 * Opens the drop-down dialog.
		 * 
		 * @param focusFieldOnClose
		 *            The field to focus on when the drop-down dialog is closed.
		 */
		openDropDownDialog: function(focusFieldOnClose) {
			this._button.openDropDown();
			this._focusFieldOnClose = focusFieldOnClose;
		},

		/**
		 * Delays closing the drop-down dialog.
		 */
		_delayCloseDropDownDialog: function() {
			if (this._closeDialogTimer) {
				clearTimeout(this._closeDialogTimer);
				delete this._closeDialogTimer;
			}
			this._closeDialogTimer = setTimeout(lang.hitch(this, function() {
				if (!this._isMouseInButton && !this._isMouseInDialog) {
					this.closeDropDownDialog();
				}
			}), 800); // One UI says 800 ms delay on close
		},

		/**
		 * Closes the drop-down dialog.
		 */
		closeDropDownDialog: function() {
			if (this._openDialogTimer) {
				clearTimeout(this._openDialogTimer);
				delete this._openDialogTimer;
			}
			this._button.closeDropDown();
		},

		/**
		 * Destroys.
		 */
		destroy: function() {
			if (this._button)
				this._button.destroy();
			if (this._dialog)
				this._dialog.destroy();

			this.inherited(arguments);
		}
	});
});

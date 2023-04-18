/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dijit/_Widget",
	"ecm/LoggerMixin"
], function(declare, lang, domConstruct, domClass, domAttr, _Widget, LoggerMixin) {
	/**
	 * @name ecm.widget._Separator
	 * @class Separator used in the breadcrumb.
	 * @augments dijit._Widget
	 * @public
	 */
	return declare("ecm.widget._Separator", [
		_Widget,
		LoggerMixin
	], {
		/** @lends ecm.widget._Separator.prototype */

		/**
		 * Boolean indicating that this is a separator.
		 */
		isSeparator: true,

		/**
		 * Boolean indicating whether this widget should be presented as clickable.
		 * 
		 * @since 2.0.3
		 */
		isActive: false,

		/**
		 * Boolean indicating whether this widget should be presented in
		 * <q>open</q>
		 * state.
		 * 
		 * @since 2.0.3
		 */
		_isOpen: false,

		_mouseDownState: null,
		_keyDownState: null,

		"class": "breadcrumbItemSeparator",

		postCreate: function() {
			this.inherited(arguments);
			this.connect(this, "onMouseDown", lang.hitch(this, function() {
				this._mouseDownState = this._isOpen;
			}));

			this.connect(this, "onClick", lang.hitch(this, function(evt) {
				this.logDebug("function", "onClick");
				if (this._mouseDownState === this._isOpen) {
					this.onClickSeparator(evt);
				}
			}));

			this.connect(this, "onKeyDown", lang.hitch(this, function(evt) {
				if (evt.keyCode == dojo.keys.ENTER) {
					this._keyDownState = this._isOpen;
				}
			}));

			this.connect(this, "onKeyUp", lang.hitch(this, function(evt) {
				this.logDebug("function", "onKeyUp");
				if (evt.keyCode == dojo.keys.ENTER && this._keyDownState === this._isOpen) {
					this.onClickSeparator(evt);
				}
			}));
		},

		/**
		 * Toggles the separator into open state.
		 * 
		 * @since 2.0.3
		 */
		open: function() {
			this._isOpen = true;
			this._refresh();
		},

		/**
		 * Toggle the separator into closed (default) state.
		 * 
		 * @since 2.0.3
		 */
		close: function() {
			this._isOpen = false;
			this._refresh();
		},

		/**
		 * Returns open state value. Returns <code>true</code> or <code>false</code>.
		 * 
		 * @since 2.0.3
		 */
		isOpen: function() {
			return this._isOpen;
		},

		/**
		 * Updates the open or closed state of the separator.
		 */
		_refresh: function() {
			if (this.isActive) {
				if (this._isOpen) {
					domClass.replace(this.domNode, "breadcrumbItemActiveOpenSeparator", "breadcrumbItemActiveSeparator");
					domAttr.set(this.domNode, "alt", ecm.messages.breadcrumb_separator_close);
				} else {
					domClass.replace(this.domNode, "breadcrumbItemActiveSeparator", "breadcrumbItemActiveOpenSeparator");
					domAttr.set(this.domNode, "alt", ecm.messages.breadcrumb_separator_open);
				}
			} else {
				if (this._isOpen) {
					domClass.replace(this.domNode, "breadcrumbItemOpenSeparator", "breadcrumbItemSeparator");
				} else {
					domClass.replace(this.domNode, "breadcrumbItemSeparator", "breadcrumbItemOpenSeparator");
				}
			}
		},

		/**
		 * Renders the breadcrumb separator.
		 */
		render: function() {
			this.domNode.innerHTML = "";
			this.domNode.appendChild(domConstruct.create("DIV", {}));

			if (this.isActive) {
				domClass.replace(this.domNode, "breadcrumbItemActiveSeparator", "breadcrumbItemSeparator");
				domAttr.set(this.domNode, "tabindex", "0");
				domAttr.set(this.domNode, "alt", ecm.messages.breadcrumb_separator_open);
			} else {
				domClass.replace(this.domNode, "breadcrumbItemSeparator", "breadcrumbItemActiveSeparator");
			}

			return this.domNode;
		},

		onClickSeparator: function() {
		}
	});
});

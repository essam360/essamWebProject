/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/sniff",
	"dojo/dom-attr",
	"dojo/dom-construct",
	"dijit/form/TextBox",
	"dijit/Tooltip",
	"../Messages",
	"dojo/text!./templates/FilterTextBox.html"
], //
function(declare, sniff, domAttr, domConstruct, TextBox, Tooltip, Messages, template) {
	/**
	 * @name ecm.widget.FilterTextBox
	 * @class Provides a widget that is used to filter the input in a text box.
	 * @augments dijit.form.TextBox
	 */
	return declare("ecm.widget.FilterTextBox", [
		TextBox
	], {
		/** @lends ecm.widget.FilterTextBox.prototype */

		templateString: template,
		widgetsInTemplate: false,

		/** A boolean value that controls whether or not trailing white space is trimmed from the value. */
		trim: true,

		/** The placeholder string for this control. */
		placeholder: ecm.messages.multicolumn_list_filter_text,

		messages: ecm.messages,

		textDir: sniff("text-direction"),

		postCreate: function() {
			this.inherited(arguments);

			if (sniff('ie') && sniff('ie') != "10") {
				this.set('placeHolder', this.placeholder);
			}
			this._clearNode.style.display = "none";

			this.connect(this._clearNode, "onmouseover", function() {
				Tooltip.show(this.messages.filter_clear_tooltip, this._clearNode);
			});
			this.connect(this._clearNode, "onmouseout", function() {
				Tooltip.hide(this._clearNode);
			});
		},

		/**
		 * Sets the value. If the value is empty, hide the clear X node.
		 * 
		 * @param value
		 *            The value.
		 */
		_setValueAttr: function(/*String*/value, /*Boolean?*/priorityChange) {
			this.inherited(arguments);
			this._hideShowClearNode();
		},

		/**
		 * @private
		 */
		_onClickClear: function() {
			this.set('value', '');
			this._clearNode.style.display = "none";
		},

		/**
		 * @private
		 */
		_onInput: function(e) {
			this.inherited(arguments);
			this._hideShowClearNode();
			//this._updatePlaceHolder(); // fix dojo bug where the placeholder can sometimes display when there is text in the textbox
		},

		/**
		 * @private
		 */
		_hideShowClearNode: function() {
			var value = this.get("value");
			if (value.length > 0) {
				this._clearNode.style.display = "";
			} else {
				this._clearNode.style.display = "none";
			}
		},

		/**
		 * @private
		 */
		_setPlaceHolderAttr: function(v) {
			// overriding to create a div instead of span so we can have ellipsis when the placeholder text is too long
			if (!this._phspan) {
				this._attachPoints.push('_phspan');
				// dijitInputField class gives placeHolder same padding as the input field
				// parent node already has dijitInputField class but it doesn't affect this <span>
				// since it's position: absolute.
				this._phspan = domConstruct.create('div', {
					className: 'dijitPlaceHolder dijitInputField'
				}, this.textbox, 'after');
				domAttr.set(this._phspan, "title", v);
			}
			this.inherited(arguments);
		}
	});
});

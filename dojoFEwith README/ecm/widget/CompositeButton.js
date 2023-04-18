/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/event",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/Tooltip",
	"dojox/html/entities",
	"ecm/Messages",
	"idx/html",
	"dojo/keys",
	"dojo/text!./templates/CompositeButton.html"
], function(declare, event, domClass, construct, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Tooltip, entities, Messages, idxHtml, keys, template) {
	/**
	 * @name ecm.widget.CompositeButton
	 * @class This widget provides a button that can be configured to display a button icon on the left of the
	 *        container, a button title in the middle, or an action button icon on the right. This button is used by the
	 *        SecurityPane widget to display item security entries.
	 * @augments dijit.form.Button
	 */
	return declare("ecm.widget.CompositeButton", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.CompositeButton.prototype */

		templateString: template,
		widgetsInTemplate: false,

		_messages: ecm.messages,

		iconClass: null,
		iconAltText: "",

		actionIconClass: null,
		actionAltText: "",

		tooltip: "",

		postCreate: function() {
			this.inherited(arguments);

			if (!this.iconClass) {
				this._iconNode.style.display = "none";
			} else if (this.iconAltText.length > 0) {
				var toolTip = new dijit.Tooltip({
					connectId: [
						this._iconNode
					],
					label: this.iconAltText
				});
				toolTip.startup();
			}

			var buttonLabel;
			if (this.disabled) {
				buttonLabel = construct.create("SPAN", {
					innerHTML: idxHtml.escapeHTML(this.label)
				});
				domClass.add(this._actionFocusNode, "dijitHidden");
			} else {
				if (this.titleDisabled) {
					buttonLabel = construct.create("SPAN", {
						innerHTML: idxHtml.escapeHTML(this.label)
					});
				} else {
					buttonLabel = construct.create("a", {
						'href': 'javascript:;',
						'role': 'button',
						'aria-label': idxHtml.escapeHTML(this.label)
					});
					buttonLabel.appendChild(document.createTextNode(this.label));
					this.connect(buttonLabel, "onclick", function(evt) {
						event.stop(evt);
						this._onTitleClick(evt);
						return false;
					});
					this.connect(buttonLabel, "onkeydown", function(event) {
						if (event.keyCode == keys.ENTER || event.keyCode == keys.SPACE) {
							this._onTitleClick(event);
						}
					});
				}

				if (this.actionIconClass == null || this.actionIconClass.length == 0) {
					this._actionFocusNode.style.display = "none";
				} else if (this.actionAltText && this.actionAltText.length > 0) {
					this.connect(this._actionFocusNode, "onmouseover", function() {
						Tooltip.show(entities.encode(this.actionAltText), this._actionFocusNode);
					});
					this.connect(this._actionFocusNode, "onmouseout", function() {
						Tooltip.hide(this._actionFocusNode);
					});
				}
			}
			this._focusNode.appendChild(buttonLabel);

			if (this.tooltip && this.tooltip.length > 0) {
				this.connect(this._focusNode, "onmouseover", function() {
					Tooltip.show(this.tooltip, this._focusNode);
				});
				this.connect(this._focusNode, "onmouseout", function() {
					Tooltip.hide(this._focusNode);
				});
			}
		},

		_onTitleClick: function(event) {
			if (this.tooltip && this.tooltip.length > 0) {
				Tooltip.hide(this._focusNode);
			}
			this.onTitleClick(event);
		},

		_onActionButtonKeyDown: function(event) {
			if (event.keyCode == keys.ENTER || event.keyCode == keys.SPACE) {
				this.onActionButtonClick(event);
			}
		},

		_onActionButtonClick: function(evt) {
			event.stop(evt);
			if (this.actionAltText && this.actionAltText.length > 0) {
				Tooltip.hide(this._actionFocusNode);
			}
			this.onActionButtonClick(evt);
			return false;
		},

		/**
		 * Event invoked when the title of the composite button is clicked
		 */
		onTitleClick: function(event) {
		},

		/**
		 * Event invoked when the action link of the composite button is clicked. This is usually the X mark.
		 */
		onActionButtonClick: function(event) {
		},

		focus: function() {
			this._focusNode.focus();
		},

		_nop: null
	});
});

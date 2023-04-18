/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/array",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/dom-geometry",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"ecm/widget/listView/modules/_Module",
	"ecm/MessagesMixin"
], //
function(declare, lang, event, array, domClass, domStyle, domAttr, domGeom, connect, domConstruct, _Module, MessagesMixin) {

	/**
	 * @name ecm.widget.listView.modules.InlineMessage
	 * @class This content list module provides the ability to display error, warning, confirm, and information messages
	 *        inline.
	 * @augments ecm.widget.listView.modules._Module
	 * @since 2.0.2
	 */

	return declare(_Module, {
		/** @lends ecm.widget.listView.modules.InlineMessage.prototype */

		name: 'inlineMessage',

		getAPIPath: function() {
			return {
				inlineMessage: this
			};
		},

		/**
		 * Create the dom nodes.
		 */
		preload: function() {
			var t = this, cl = t.contentList;
			t.domNode = domConstruct.create("div", {
				"class": "inlineMessage",
				"style": "display: none; margin-bottom: 2px"
			});
			t.messageIcon = domConstruct.create("div", {
				"class": "messageIcon"
			}, t.domNode);
			t.messageText = domConstruct.create("div", {
				"class": "messageText",
				"role": "alert"
			});
			t.domNode.appendChild(t.messageText);
		},

		/**
		 * Destroy the dom nodes.
		 */
		destroy: function() {
			var t = this;
			if (t.domNode) {
				domConstruct.destroy(t.domNode);
				t.domNode = null;
			}
			t.inherited(arguments);
		},

		/**
		 * Clears the text message.
		 */
		clearMessage: function() {
			var t = this, cl = t.contentList;
			// Hide the message.
			domStyle.set(t.domNode, "display", "none");
			// Restore to default of error.
			domAttr.set(t.domNode, "class", "inlineMessage inlineMessageError");
			// Remove the text.
			if (t.messageText.firstChild) {
				t.messageText.removeChild(t.messageText.firstChild);
				cl.resize();
			}
		},

		/**
		 * Displays a category "error", "warning", "info", "alert" or "confirm" text message.
		 * 
		 * @param text
		 *            The string text of the message or a domNode that is placed in the messageText domNode.
		 * @param category
		 *            The message category - "error", "warning", "info", "alert" or "confirm". If not provided "error"
		 *            is assumed.
		 * @param iconHoverText
		 *            The text to display on the category icon.
		 */
		setMessage: function(textMessage, category, iconHoverText) {
			var t = this, cl = t.contentList;
			// If no message...
			if (!textMessage || (textMessage.length == 0)) {
				t.clearMessage();
			} else {
				var msgClassNames;
				if (category == "warning") {
					msgClassNames = "inlineMessage inlineMessageWarning";
				} else if (category == "info" || category == "alert") {
					msgClassNames = "inlineMessage inlineMessageInfo";
				} else if (category == "confirm") {
					msgClassNames = "inlineMessage inlineMessageConfirm";
				} else { // Default category is "error"
					msgClassNames = "inlineMessage inlineMessageError";
				}
				domAttr.set(t.domNode, "class", msgClassNames);
				if (lang.isString(textMessage)) {
					t.messageText.innerHTML = textMessage;
				} else {
					domConstruct.place(textMessage, t.messageText, "only");
				}
				if (category == undefined || category == "error" || category == "alert") {
					domAttr.set(t.messageText, "role", "alert");
				} else {
					domAttr.set(t.messageText, "role", "status");
				}
				domAttr.set(t.messageIcon, "alt", iconHoverText ? iconHoverText : "");
				domAttr.set(t.messageIcon, "title", iconHoverText ? iconHoverText : "");
				if (iconHoverText) {
					domAttr.set(t.messageIcon, "tabindex", "0");
				}
				domStyle.set(t.domNode, "display", "");

				// triggers the alert to be read by JAWS on all browsers - defect #63058
				domStyle.set(t.messageText, "display", "none");
				setTimeout(function() {
					domStyle.set(t.messageText, "display", "block");
					cl.resize();
				}, 100);
			}
		}
	});
});

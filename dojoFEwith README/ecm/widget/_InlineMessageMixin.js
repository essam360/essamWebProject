/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/dom-attr",
	"dojo/dom-style",
	"../LoggerMixin"
], function(declare, lang, domConstruct, domAttr, domStyle, LoggerMixin) {
	/**
	 * @name ecm.widget._InlineMessageMixin
	 * @class A mixin to add inline message behavior for dialogs and panes.
	 */
	var InlineMessageMixin = declare("ecm.widget._InlineMessageMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget._InlineMessageMixin */

		/**
		 * Displays a category "error", "warning", "info" or "confirm" text message at the top of the dialog, under the
		 * dialog's introduction text.
		 * <p>
		 * NOTE: BaseDialog.js and LoginPane.js contains a copy of this method.
		 * 
		 * @param text
		 *            The text of the message.
		 * @param category
		 *            The message category - "error", "warning", "info" or "confirm". If not provided "error" is
		 *            assumed.
		 */
		setMessage: function(textMessage, category) {
			this.logEntry("setMessage");
			// If no message...
			if (!textMessage || (textMessage.length == 0)) {
				this.clearMessage();
			} else {
				var msgClassNames;
				if (category == InlineMessageMixin.MESSAGE_CATEGORY.WARNING) {
					msgClassNames = "inlineMessage inlineMessageWarning";
				} else if (category == InlineMessageMixin.MESSAGE_CATEGORY.INFO) {
					msgClassNames = "inlineMessage inlineMessageInfo";
				} else if (category == InlineMessageMixin.MESSAGE_CATEGORY.CONFIRM) {
					msgClassNames = "inlineMessage inlineMessageConfirm";
				} else { // Default category is "error"
					msgClassNames = "inlineMessage inlineMessageError";
				}
				domAttr.set(this.inlineMessage, "class", msgClassNames);
				if (lang.isString(textMessage)) {
					this.messageText.innerHTML = textMessage;
				} else {
					domConstruct.place(textMessage, this.messageText, "only");
				}
				if (category == undefined || category == InlineMessageMixin.MESSAGE_CATEGORY.ERROR) {
					domAttr.set(this.messageText, "role", "alert");
				} else {
					domAttr.set(this.messageText, "role", "status");
				}
				domStyle.set(this.inlineMessage, "display", "");
				this.resize();
			}
			this.logExit("setMessage");
		},

		/**
		 * Clears the text message at the top of the dialog, under the dialog's introduction text.
		 * <p>
		 * NOTE: BaseDialog.js and LoginPane.js contains a copy of this method.
		 */
		clearMessage: function() {
			this.logEntry("clearMessage");
			// Hide the message.
			domStyle.set(this.inlineMessage, "display", "none");
			// Restore to default of error.
			domAttr.set(this.inlineMessage, "class", "inlineMessage inlineMessageError");
			// Remove the text.
			if (this.messageText.firstChild) {
				this.messageText.removeChild(this.messageText.firstChild);
				this.resize();
			}
			this.logExit("clearMessage");
		}
	});

	InlineMessageMixin.MESSAGE_CATEGORY = {
		WARNING: "warning",
		INFO: "info",
		CONFIRM: "confirm",
		ERROR: "error"
	};

	return InlineMessageMixin;
});

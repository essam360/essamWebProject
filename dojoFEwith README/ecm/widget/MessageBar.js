/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Select",
	"idx/html",
	"../Messages",
	"../LoggerMixin",
	"../model/Desktop",
	"../model/ValueFormatter",
	"ecm/widget/layout/BidiSupport",
	"dojo/text!./templates/MessageBar.html",
	"dojox/date/islamic",
	"dojox/date/islamic/Date",
	"dojox/date/islamic/locale",
	"dojox/date/hebrew",
	"dojox/date/hebrew/Date",
	"dojox/date/hebrew/locale",
	"dojox/date/umalqura",
	"dojox/date/umalqura/Date",
	"dojox/date/umalqura/locale"
],

function(declare, //
array, //
connect, //
lang, //
has, //
domAttr, //
domStyle, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Select, //
idxHtml, //
Messages, //
LoggerMixin, //
Desktop, //
ValueFormatter, //
BidiSupport, //
template, islamic, islamicDate, islamicLocale, hebrew, hebrewDate, hebrewLocale, umalqura, umalquraDate, umalquraLocale) {
	/**
	 * @name ecm.widget.MessageBar
	 * @class Provides a widget that is used as a message bar in an IBM Content Navigator application.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.MessageBar", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.MessageBar.prototype */

		templateString: template,
		widgetsInTemplate: true,
		numOfMessages: 200,
		maxMsgAreaHeight: 400,
		excludeMsgNumbers: null,

		constructor: function() {
			if (!this.excludeMsgNumbers) {
				this.excludeMsgNumbers = [];
			}
			this.messages = ecm.messages;
		},

		/**
		 * Handles the widget shutdown cleanup.
		 */
		uninitialize: function() {
			this.inherited(arguments);

			if (this.onMessageAddedConnect) {
				connect.disconnect(this.onMessageAddedConnect);
				delete this.onMessageAddedConnect;
			}
		},

		postCreate: function() {
			this.inherited(arguments);
			domAttr.set(this.domNode, "role", "region");
			domAttr.set(this.domNode, "aria-label", ecm.messages.status_bar);
			this.onMessageAddedConnect = connect.connect(ecm.model.desktop, "onMessageAdded", this, "_showMessage");
			this.connect(ecm.model.desktop, "onLogout", function(repository) {
				this.messageList.removeOption(this.messageList.options);
				this.messageList.set("disabled", true);
			});
		},

		_showMessage: function(message) {
			if (this._isSurplusMessage(message)) {
				return;
			}
			var options = this.messageList.getOptions();
			var ts = new Date();
			var timestamp = ts.getTime();

			if (has("calendar-type") == "hijri") {
				ts = new islamicDate();
			} else if (has("calendar-type") == "hebrew") {
				ts = new hebrewDate();
			} else if (has("calendar-type") == "UmmAlQura") {
				ts = new umalquraDate();
			}

			var option = {
				label: this._generateOptionLabel(message, ts),
				value: timestamp
			};
			options.push(option);
			if (options.length > this.numOfMessages)
				options = options.slice(options.length - this.numOfMessages);
			this.messageList._loadChildren();
			this.messageList.set("disabled", options.length == 0);
			this.messageList.set("options", options);
			this.messageList.set("value", timestamp);

			// Alert JAWS users only if this widget is visible (note that layouts created by ecm.widget.admin.DesktopFeatures
			// have an instance of MessageBar but the layouts are not displayed so desktop messages should not be announced)
			if (this.domNode && this.domNode.offsetHeight > 0 && message.text) {
				var t = this, firstChild = t.alertNode.firstChild, textNode = document.createTextNode(message.text);
				if (firstChild)
					t.alertNode.replaceChild(textNode, firstChild);
				else
					t.alertNode.appendChild(textNode);

				// Force JAWS to read the message on IE
				domStyle.set(t.alertNode, "display", "none");
				setTimeout(function() {
					if (t.alertNode) // in case this widget was destroyed during the timeout
						domStyle.set(t.alertNode, "display", "");
				}, 100);
			}
		},

		_isSurplusMessage: function(msg) {
			var msgNum = msg.number;
			if (msg.level != 0) {
				return true;
			}
			var msgNumber = msg.number;
			if (array.indexOf(this.excludeMsgNumbers, msgNumber) != -1) {
				return true;
			} else {
				return false;
			}
		},

		_generateOptionLabel: function(message, ts) {
			var text;
			if (Desktop.valueFormatter.getLocale() === "ar") {
				text = BidiSupport.enforceTextDirWithUcc(Desktop.valueFormatter.formatDate(ts), "auto") + " - " + message.text;
			} else {
				text = Desktop.valueFormatter.formatDate(ts) + " - " + message.text;
			}
			return text;
		}
	});
});

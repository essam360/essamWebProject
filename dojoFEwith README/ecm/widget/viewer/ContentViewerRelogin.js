/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/SimpleTextarea",
	"dijit/layout/BorderContainer",
	"dijit/layout/StackContainer",
	"ecm/Messages",
	"ecm/LoggerMixin",
	"ecm/model/Message",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/LoginPane",
	"dojo/text!./templates/ContentViewerRelogin.html"
],

function(declare, //
lang, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
SimpleTextarea, //
BorderContainer, //
StackContainer, //
Messages, //
LoggerMixin, //
Message, //
ErrorDialog, //
LoginPane, //
template) {
	/**
	 * @name ecm.widget.viewer.ContentViewerRelogin
	 * @class Provides a widget that is used to log back in to the content viewer.
	 * @deprecated This widget is deprecated starting in IBM Content Navigator, Version 2.0.1. This widget is not
	 *             intended for reuse, and there is no replacement.
	 */
	var ContentViewerRelogin = declare("ecm.widget.viewer.ContentViewerRelogin", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.viewer.ContentViewerRelogin.prototype */

		// widgetsInTemplate: Boolean
		// 		Set this to true if your widget contains other widgets
		widgetsInTemplate: true,
		templateString: template,

		constructor: function() {
			this.logEntry("constructor");
			this.messages = ecm.messages;
			document.title = ecm.model.desktop.applicationName;
			this.logExit("constructor");
		},

		postMixInProperties: function() {
		},

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);
			this.showSessionExpiredDialog();
			this.logExit(methodName);
		},

		showSessionExpiredDialog: function() {
			var methodName = "showSessionExpiredDialog";
			this.logEntry(methodName);

			var errorDialog = new ErrorDialog({
				onHide: lang.hitch(this, function() {
					if (frameElement.contentViewerPane.onExpiredSession)
						frameElement.contentViewerPane.onExpiredSession(frameElement.contentViewerPane);
				})
			});

			var message = Message.createErrorMessage("viewer_session_expired");
			errorDialog.showMessage(message);

			this.logExit(methodName);
		},

		_resizeIt: function() {
			this.mainBorderContainer.resize();
		}
	});

	return ContentViewerRelogin;
});

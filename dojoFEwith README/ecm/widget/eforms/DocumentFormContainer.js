/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"../../MessagesMixin",
	"./_FormMixin",
	"ecm/model/Desktop",
	"dojo/text!./templates/DocumentFormContainer.html"
], //
function(declare, lang, connect, domConstruct, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, _FormMixin, Desktop, template) {
	/**
	 * @name ecm.widget.eforms.DocumentFormContainer
	 * @class Provides the container for the IBM FileNet P8 eform page.
	 */
	return declare("ecm.widget.eforms.DocumentFormContainer", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_FormMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.eforms.DocumentFormContainer.prototype */

		templateString: template,
		widgetsInTemplate: false,

		postCreate: function() {
			this.logEntry("postCreate");

			connect.connect(window, "onbeforeunload", this, "_onBeforeUnload");

			var objectStoreId = Desktop.getRequestParam("objectStoreId");
			var docid = Desktop.getRequestParam("docid");
			var repositoryId = Desktop.getRequestParam("repositoryId");
			var vsId = Desktop.getRequestParam("vsId");
			var version = Desktop.getRequestParam("version");
			var formStateId = Desktop.getRequestParam("formStateId");

			this._loadDesktop(lang.hitch(this, function() {
				var repository = ecm.model.desktop.getRepository(repositoryId);
				if (repository.connected) {
					require([
						"eforms/widget/DocumentFormPane"
					], lang.hitch(this, function(DocumentFormPane) {
						// Load document form widget			
						var documentFormPane = new DocumentFormPane({
							repositoryId: repositoryId,
							objectStoreId: objectStoreId,
							docid: docid,
							vsId: vsId,
							version: version,
							formStateId: formStateId
						});
						documentFormPane.startup();
						this.containerNode.appendChild(documentFormPane.domNode);
					}));
				} else {
					var containerDiv = domConstruct.create("div", {
						style: "display: table; height: 10%; width:100%; text-align: center;"
					}, this.containerNode);
					var messageDiv = domConstruct.create("div", {
						innerHTML: this.messages.login_session_expired_message,
						style: "display:table-cell; vertical-align: middle; font-size: 1.2em;"
					}, containerDiv);
				}
			}));

			this.logExit("postCreate");
		},

		_onBeforeUnload: function(event) {
			this.logEntry("_onBeforeUnload");

			var formAction = null;
			var formActionMessage = null;
			var formFrame = document.getElementsByTagName('iframe')[0];
			if (formFrame) {
				formActionMessage = formFrame.contentWindow.closeMessage;
				formAction = formFrame.contentWindow.formActionUnloadHandler;
				formFrame.contentWindow.formActionUnloadHandler = null; //set it back to null
			}

			if (formAction == null || formAction == "") {
				if (event) {
					event.returnValue = formActionMessage;
				} else {
					return formActionMessage;
				}
			}

			this.logExit("_onBeforeUnload");
		}

	});

});

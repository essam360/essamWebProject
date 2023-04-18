/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/array",
	"dojo/request/iframe",
	"dojo/dom",
	"dojo/dom-class",
	"dojo/string",
	"dojo/dom-style",
	"dojo/on",
	"dojo/Deferred",
	"ecm/MessagesMixin",
	"ecm/widget/HoverHelp",
	"ecm/widget/dialog/BaseDialog",
	"ecm/model/Request",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dojo/text!./templates/ImportTeamspaceDialog.html"
],

function(declare, lang, has, arrayUtil, iframe, dom, domClass, string, style, on, Deferred, MessagesMixin, HoverHelp, BaseDialog, Request, BorderContainer, ContentPane, template) {

	/**
	 * @private Part of the Teamspace builder widgets.
	 * @name ecm.widget.teamspaceBuilder.ImportTeamspaceDialog
	 * @class Provides a dialog box that let user to select a previous exported configuration file to import.
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.teamspaceBuilder.ImportTeamspaceDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.ImportTeamspaceDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		repository: null,

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);
			this.inherited(arguments);

			domClass.add(this.domNode, "ecmTeamspaceImportDialog");
			this.setResizable(true);
			style.set(this.domNode, "maxHeight", "none");
			this.setIntroText(this.messages.teamspace_import_template_instruction);

			this._importButton = this.addButton(this.messages.teamspace_import_template_button_label, "_import", true, false);
			this.logExit(methodName);
		},

		/**
		 * Cleans up the widget
		 */
		destroy: function() {
			this.inherited(arguments);
		},

		/**
		 * Populate all tabs with incoming desktops parameter.
		 * 
		 * @param desktops
		 *            an array of desktop {@link ecm.model.admin.DesktopConfig} objects
		 */
		show: function() {
			var methodName = "show";
			this.logEntry(methodName);

			this.setTitle(this.messages.teamspace_import_template_dialog_label);
			this.inherited(arguments);

			this.resize();
			this.logExit(methodName);
		},

		hide: function() {
			return this.inherited(arguments);
		},

		/**
		 * This event method is called when the file input control value changes.
		 */
		onFileInputChange: function() {
			this._importButton.set("disabled", false);
		},

		isFormDataSupported: function() {
			return !!window.FormData;
		},

		/**
		 * If import button not disabled then import selected objects by calling postFormToServiceAPI method
		 * 
		 * @private
		 */
		_import: function() {
			if (this.isFormDataSupported())
				this._uploadImportFileUsingForm();
			else
				this._importUsingIframe();
		},

		_importUsingIframe: function() {
			var methodName = "_importUsingIframe";
			this.logEntry(methodName);
			var params = {
				desktop: ecm.model.desktop.id,
				repositoryId: this.repository.id,
				action: "import",
				type: "template",
				id: "navigator",
				application: "navigator",
				responseAsHtml: true
			};

			var serverType = "p8";
			if (this.repository._isCM()) {
				serverType = "cm";
			}
			ecm.model.Request.ieFileUploadServiceAPI(serverType + "/importTeamspaceTemplate", null, {
				requestParams: params,
				requestCompleteCallback: lang.hitch(this, this._uploadImportFileCompleted),
				requestFailedCallback: lang.hitch(this, this._onError)
			}, this._fileInputForm);
		},

		_uploadImportFileUsingForm: function() {
			var methodName = "uploadImportFileUsingForm";
			this.logEntry(methodName);
			var content = this._fileInput.files[0];
			var params = {
				desktop: ecm.model.desktop.id,
				repositoryId: this.repository.id,
				action: "import",
				type: "template",
				id: "navigator",
				application: "navigator"
			};
			var formData = new FormData();
			formData.append("fileName", content.name);
			formData.append("repositoryId", this.repository.id);
			formData.append("file", content);

			ecm.model.Request.postFormToServiceAPI("importTeamspaceTemplate", this.repository.type, {
				requestParams: params,
				requestCompleteCallback: lang.hitch(this, this._uploadImportFileCompleted),
				requestFailedCallback: lang.hitch(this, this._onError)
			}, formData);

			this.logExit(methodName);
		},

		_uploadImportFileCompleted: function(response) {
			var methodName = "_uploadImportFileCompleted";
			this.logEntry(methodName);
			this.hide();
			this.repository.onAddTeamspaceTemplate(); // reloads the list of templates content list
			this.logExit(methodName);
		},

		_onError: function(response, errorMessages) {
		},

		/**
		 * Resize the dialog
		 */
		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize();
		}

	});

});

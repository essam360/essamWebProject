/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/aspect",
	"./BaseDialog",
	"../EntryTemplateFolderAssociationsPane",
	"dojo/text!./templates/EntryTemplateFolderAssociationsDialog.html"
], function(declare, lang, domClass, domStyle, aspect, BaseDialog, EntryTemplateFolderAssociationsPane, template) {

	/**
	 * @name ecm.widget.dialog.EntryTemplateFolderAssociationsDialog
	 * @class Provides a dialog box that is used to display the EntryTemplateFolderAssociationsPane
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.EntryTemplateFolderAssociationsDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.EntryTemplateFolderAssociationsDialog.prototype */
		contentString: template,
		widgetsInTemplate: true,
		_messages: ecm.messages,
		repository: null,
		item: null,
		callback: null,
		readOnly: false,

		/**
		 * Creates the show EntryTemplateFolderAssociationsPane dialog box.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			this.setIntroText(ecm.messages.entry_template_folder_associations_intro);
			this.set("title", this.messages.entry_template_folder_associations_title);
			var buttonLabel = this.messages.save;
			if (this.isCmRootFolderInConfig) {
				this._EntryTemplateAssociations.isCmRootFolderInConfig = this.isCmRootFolderInConfig;
				this._EntryTemplateAssociations._repositoryConfigurationParemeters = this._repositoryConfigurationParemeters;
				buttonLabel = this.messages.ok;
			}
			this._saveButton = this.addButton(buttonLabel, "onSave", true, false, "SAVE");
			this._EntryTemplateAssociations.readOnly = this.readOnly;
			this._EntryTemplateAssociations._saveButton = this._saveButton;
			this._EntryTemplateAssociations._EntryTemplateAssociationDialog = this;
			this.own(aspect.after(this._EntryTemplateAssociations, "onShow", lang.hitch(this, "_setSaveButtonAndMessages"), true));
			this.own(aspect.after(this._EntryTemplateAssociations, "onSelectionChange", lang.hitch(this, "_setSaveButtonAndMessages"), true));
			this.logExit("postCreate");
		},
		/**
		 * Show the edit properties dialog.
		 * 
		 * @param callback
		 *            Callback method that is called when the property changes are saved.
		 */
		show: function(callback) {
			this.logEntry("show");
			this._callback = callback;
			this._EntryTemplateAssociations.setItem(this.item, lang.hitch(this, function() {
				this.inherited("show", []);
				this.logExit("show");
			}));
		},

		/**
		 * save the associations to p8 folder annotation.
		 */
		onSave: function() {
			var self = this;
			this._EntryTemplateAssociations.save(lang.hitch(this, function() {
				self.onClose();
				if (this._callback) {
					this._callback();
				}

			}));
		},
		_setSaveButtonAndMessages: function() {
			if (this._EntryTemplateAssociations._fileTypeError) {
				this._saveButton.set("disabled", true);
				this.setMessage(ecm.messages.entry_template_fileType_error);
			} else if (this._EntryTemplateAssociations._associationInherited) {
				this._saveButton.set("disabled", true);
				this.clearMessage();
			} else {
				this._saveButton.set("disabled", false);
				this.clearMessage();
			}
			this.resize();
		},

		onClose: function() {
			this.onCancel();
		}
	});
});

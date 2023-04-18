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
	"ecm/widget/ModifyAssociateFileTypesPane",
	"dojo/text!./templates/ModifyAssociateFileTypesDialog.html"
], function(declare, lang, domClass, domStyle, aspect, BaseDialog, ModifyAssociateFileTypesDialog, template) {

	/**
	 * @name ecm.widget.dialog.ModifyAssociateFileTypesDialog
	 * @class Provides a dialog box that is used to display the ModifyAssociateFileTypesDialog
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.ModifyAssociateFileTypesDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ModifyAssociateFileTypesDialog.prototype */
		contentString: template,
		widgetsInTemplate: true,
		/**
		 * entry template item in the contentlist
		 */
		item: null,
		/**
		 * read only flag
		 */
		readOnly: false,

		/**
		 * Creates the show ModifyAssociateFileTypesDialog dialog box.
		 */
		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmModifyAssociateFileTypesDialog");
			this.setResizable(true);
			this.setMaximized(false);
			domStyle.set(this.domNode, "maxHeight", "none");
			this.set("title", ecm.messages.entry_template_optionsDialog_title);
			this._fileTypeCategorieDialog.readOnly = this.readOnly;
			this._fileTypeCategorieDialog.setItem(this.item);
			this._saveButton = this.addButton(this.messages.save, "_onSave", true, false, "SAVE");
			this.own(aspect.after(this._fileTypeCategorieDialog, "onChanged", lang.hitch(this, "_setSaveButton"), true));
		},

		/**
		 * @private
		 */
		_onSave: function() {
			var mimetypes = this._fileTypeCategorieDialog.getFileTypes();
			var folderAsParent = this._fileTypeCategorieDialog.getFolderDestination();
			this.onSaveMimeTypes(mimetypes, folderAsParent);
			this.onCancel();
		},

		/**
		 * save mimetypes event. for connection
		 */
		onSaveMimeTypes: function(mimetypes, folderAsParent) {
		},

		/**
		 * @private
		 */
		_setSaveButton: function() {
			var fileTypeError = false;
			var fileTypes = this._fileTypeCategorieDialog._fileTypesSelected.getResultSet().items;
			for ( var i in fileTypes) {
				if (fileTypes[i].fileTypeError) {
					fileTypeError = true;
					break;
				}
			}
			if (!fileTypeError) {
				this._saveButton.set("disabled", false);
			}
		},

		/**
		 * @private
		 */
		_onClose: function() {
			this.onCancel();
		},

		/**
		 * Displays the show hyperlink (view link) dialog box.
		 * 
		 * @param callback
		 *            Callback function that is called when the dialog box is closed.
		 */
		show: function(callback) {
			var d = this.inherited(arguments);
			this.resize();
			this._fileTypeCategorieDialog.reset();
			this.resize();
			this.resize();
			return d;
		}
	});
});

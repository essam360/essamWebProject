/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/aspect", //
	"dojo/dom-class", //
	"dojo/dom-style", //
	"dojo/aspect", //
	"./BaseDialog",//
	"ecm/Messages",//
	"ecm/widget/ValidationTextBox",//
	"ecm/model/FileTracker",//
	"./SelectedItems",//
	"ecm/model/Desktop",//
	"dojox/html/entities",
	"dojo/text!./templates/CheckoutDialog.html"
], //
function(declare, //
lang, //
aspect, //
domClass, //
domStyle, //
aspect, //
BaseDialog,//
Messages,//
ValidationTextBox,//
FileTracker,//
SelectedItems,//
Desktop,//
HTMLEntities,//
templateString) {

	/**
	 * @name ecm.widget.dialog.CheckoutDialog
	 * @class Provides a dialog box that is used to check documents in to a repository.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.CheckoutDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.CheckoutDialog.prototype */

		contentString: templateString,

		_messages: ecm.messages,

		contentUrl: null,

		params: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmCheckoutDialog");
			this.setMaximized(true);
			this._actionButton = this.addButton(this.messages.checkout_and_download_button_title, "onCheckout", false, true, "CHECKOUT");
			this.cancelButton.connect(this.cancelButton, "onClick", lang.hitch(this, "onCancel"));
			this.overWriteFileCB.setHoverHelp(this.overWriteFileCBHoverHelp);
			this.openFileCB.setHoverHelp(this.openFileCBHoverHelp);
		},

		/**
		 * Displays the Check out dialog for checking out a content item.
		 * 
		 * @param repository
		 *            An object instance with content url and param
		 * @param checkOutInfo
		 *            An object specifying info about the check out items
		 * @param callback
		 *            A function that is called after the content item is checked in.
		 */
		show: function(repository, documentInfoArray, callback, items) {
			this.inherited(arguments);
			this.repository = repository;
			this.items = items;
			this.set("title", this._messages.checkout_and_download_file);
			// A dialog intro message is not needed for checkin.
			this.documentInfoArray = documentInfoArray;
			var dir = FileTracker.getTrackingDirectory();
			//this._fileInput.set("value", HTMLEntities.encode(dir));
			this._fileInput.set("value", dir);
			this.validate();
			if (items) {
				this.setUpSelectedItems(items);
			}

			if (Desktop.fileTrackingPrefs.enableFileTracking) {
				this.overWriteFileCB.set("checked", Desktop.fileTrackingPrefs.overWriteFile);
				this.overWriteFileCB.set("disabled", !Desktop.fileTrackingPrefs.overWriteFileRuntimeState);
				this.openFileCB.set("checked", Desktop.fileTrackingPrefs.openFile);
			}

		},

		setUpSelectedItems: function(items) {
			if (!this.resultSet) {
				this.resultSet = new SelectedItems();
			}
			this.resultSet.items = items;
			this.contentList.setResultSet(this.resultSet);
			this.resultSet.refresh();
		},

		validate: function() {

			if (this.resultSet && this.resultSet.items.length && this._fileInput.isValid()) {
				this._actionButton.set("disabled", false);
			} else {
				this._actionButton.set("disabled", true);
			}
			return !this._actionButton.get("disabled");
		},
		onBrowseDirectory: function() {
			var dir = FileTracker.browseForFolder();
			if (dir && dir.length > 0) {
				this._fileInput.set("value", HTMLEntities.encode(dir));
			}
		},
		onCancel: function() {
			Desktop.getActionsHandler(lang.hitch(this, function(actionHanlder) {
				actionHanlder.actionUnlock(this.repository, this.items);
			}));
		},

		onCheckout: function() {
			if (!this.validate()) {
				return;
			}
			this.hide();
			var self = this;
			var downLoadInfo = {
				documentInfo: this.documentInfoArray,
				userSelectedDirectory: this._fileInput.get("value"),
				openFile: this.openFileCB.get("checked"),
				overWriteFile: this.overWriteFileCB.get("checked"),
				isBackgroundRequest: true

			};
			FileTracker.downloadAndTrackFiles(downLoadInfo, function(serverResponse, appletResponse) {
				if (appletResponse && appletResponse.hasError) {
					self.onCancel();
				}
			});

		},
	});
});

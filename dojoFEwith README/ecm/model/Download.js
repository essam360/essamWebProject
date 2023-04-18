/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject"
], function(declare, _ModelObject) {

	/**
	 * @name ecm.model.Download
	 * @class Provides the ability to download files to the client workstation.
	 * @augments ecm.model._ModelObject
	 * @private
	 */
	var Download = declare("ecm.model.Download", [
		_ModelObject
	], {
		/** @lends ecm.model.Download.prototype */

		/**
		 * @private
		 */
		constructor: function() {
			this.startedExportApplet = null;
			this.exportApplet = null;
		},

		/** Creates the applet tag to include in the non-visual export applet. */
		startExportApplet: function(editDocument) {
			if (!this.startedExportApplet) {
				var applet = ecm.model.mail.createApplet("ExportApplet", "1px", "1px", "com.ibm.ecm.applets.versioning.WCExportApplet.class", ecm.model.desktop.servicesUrl + "/applets", "wcversioningapplets.jar",
				// {editDocument: editDocument, applet_language: wcdojo.library.common.application.getLanguage(),
				// applet_country: wcdojo.library.common.application.getCountry(), applet_variant:
				// wcdojo.library.common.application.getVariant(),
				{
					editDocument: editDocument,
					applet_edit_document: editDocument
				});

				document.body.appendChild(applet);

				this.startedExportApplet = true;
				this.exportApplet = applet;
			}
			window.setTimeout("ecm.model.download.verifyExportAppletInitialization()", 8000, "JavaScript");
		},

		verifyExportAppletInitialization: function() {
			try {
				this.exportApplet.testExpApp();
			} catch (e) {
				/*
				 * wcdojo.widgets.WCErrorDialog.openErrorDialog( WCMessages.error_applet_initialization_failed,
				 * WCMessages.error_applet_initialization_faild_details, null);
				 */
				alert("Export applet initialization failed: " + e);
				return;
			}
		},

		clearItems: function() {
			this.exportApplet.clearItems();
		},

		setExportPid: function(i, pid) {
			this.exportApplet.setPid(i, pid);
		},

		setExportFileName: function(i, fileName) {
			this.exportApplet.setFileName(i, fileName);
		},

		setExportLocation: function(location) {
			this.exportApplet.setDestinationPath(location, location);
		},

		getDestinationPath: function() {
			return this.exportApplet.getDestinationPath();
		},

		setCheckOut: function(checkOut) {
			this.exportApplet.setCheckOut(checkOut);
		},

		setExportAnnotation: function(annos) {
			this.exportApplet.setExportAnnotation(annos);
		},

		setExportNotelog: function(note) {
			this.exportApplet.setExportNotelog(note);
		},

		setExportMetaData: function(props) {
			this.exportApplet.setExportMetaData(props);
		},

		setPersistentKey: function(key) {
			this.exportApplet.setPersistentKey(key);
		},

		setExportURL: function(docUrl, annoUrl, notelogsUrl, metadataUrl, checkoutUrl) {
			this.exportApplet.setDocURL(docUrl);
			this.exportApplet.setAnnotationsURL(annoUrl);
			this.exportApplet.setNotelogsURL(notelogsUrl);
			this.exportApplet.setMetaDataURL(metadataUrl);
			this.exportApplet.setCheckOutURL(checkoutUrl);
		},

		exportDocuments: function() {
			this.exportApplet.startExportDocuments();
		},

		setExportMimeType: function(i, mimeType) {
			this.exportApplet.setMimeType(i, mimeType);
		},

		setExportPartCount: function(i, partCount) {
			this.exportApplet.setPartCount(i, partCount);
		},

		setEditDocument: function(edit) {
			this.exportApplet.setEditDocument(edit);
		},

		setExportAnnoPartCount: function(i, annoCount) {
			this.exportApplet.setAnnoPartCount(i, annoCount);
		},

		setExportNotelogCount: function(i, noteCount) {
			this.exportApplet.setNotelogCount(i, noteCount);
		},

		getSelectedDir: function(currDirectory) {
			return this.exportApplet.getSelectedDir(currDirectory);
		},

		setIsCheckedOut: function(fileKey, isCheckedOut) {
			this.exportApplet.setIsCheckedOut(fileKey, isCheckedOut);
		},

		setPDFConvert: function(fileKey, pdfConvert) {
			this.exportApplet.setPDFConvert(fileKey, pdfConvert);
		},

		setUnlockURL: function(unlockURL) {
			this.exportApplet.setUnlockURL(unlockURL);
		},

		setUnlockQuery: function(unlockQuery) {
			this.exportApplet.setUnlockQuery(unlockQuery);
		}
	});

	/**
	 * @name ecm.model.download.
	 * @description A global instance of {@link ecm.model.Download} for the IBM Content Navigator toolkit.
	 */
	ecm.model.download = new Download();
	return ecm.model.download;
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/lang"
], function(lang) {
	var saveAsTypes = {
		getSelectOptions: function (defaultValue) {
			return [
					{
						label: ecm.messages.viewer_add_dialog_save_as_pdf,
						value: "application/pdf",
						selected: !defaultValue || defaultValue == "application/pdf"
					}, {
						label: ecm.messages.viewer_add_dialog_save_as_tiff,
						value: "image/tiff",
						selected: defaultValue && defaultValue == "image/tiff"
					}
				];
		},

		getDefaultMimeType: function() {
			return "application/pdf";
		},

		getMimeTypeExtension: function(mimeType) {
			return MIME_TYPE_EXTENSIONS[mimeType];
		},

		isMimeTypeSupported: function(mimeType) {
			return mimeType in MIME_TYPE_EXTENSIONS;
		}
	};

	var MIME_TYPE_EXTENSIONS = {
		"application/pdf": ".pdf",
		"image/tiff": ".tiff",
		"image/tif": ".tiff",
		"image/x-tiff": ".tiff",
		"image/x-tif": ".tiff",
		"image/tiff-fx": ".tiff",
		"image/tiff1stp": ".tiff"
	};

	return saveAsTypes;
});

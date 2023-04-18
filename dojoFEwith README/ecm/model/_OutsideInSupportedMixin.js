/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/array"
], function(declare, lang, has, array) {

	return declare("ecm.model._OutsideInSupportedMixin", null, {

		/**
		 * Provides internal API calls for identifying content types that are rendered by Outside In.
		 * 
		 * @lends ecm.model._OutsideInSupportedMixin#
		 */

		_notOITypes: new Array("application/afp", "application/dicom", "application/line", "application/pdf", "application/vnd.ibm.modcap", // 
		"image/bmp", "image/cals", "image/dcx", "image/gif", "image/gif", "image/jfif", "image/jpeg", "image/jpeg", "image/jpg", // 
		"image/jpg", "image/pcx", "image/png", "image/tif", "image/tiff", "image/x-cals", "image/x-dcx", "image/x-pcx", // 
		"text/plain", "text/url"),

		_isNotOIType: function(mimeType) {
			return this._indexOfNotOI(mimeType.toLowerCase()) >= 0;
		},

		_isOIType: function(mimeType) {
			return this._indexOfNotOI(mimeType.toLowerCase()) < 0;
		},

		_indexOfNotOI: function(mimeType) {
			return array.indexOf(this._notOITypes, mimeType);
		}
	});
});

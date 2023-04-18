/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dijit/_BidiSupport"
], function(_BidiSupport) {

	//Contains functions to support text direction. Unicode control characters (UCC) used to control text direction.

	var bidiSupport = {};
	var LRE = '\u202A', RLE = '\u202B', PDF = '\u202C';

	bidiSupport.enforceTextDirWithUcc = function(text, textDir) {
		if (!textDir || !text)
			return text;
		if (textDir === "auto") {
			textDir = _BidiSupport.prototype._checkContextual(text);
		}
		var StartUCC = (textDir === "rtl") ? RLE : LRE;
		return StartUCC + text + PDF;
	};
	return bidiSupport;
});

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
	"ecm/model/_OutsideInSupportedMixin"
], function(declare, lang, has, array, _OutsideInSupportedMixin) {

	/**
	 * @name ecm.widget.viewer.OutsideInViewerMixin
	 * @class Mixin class used by viewers to identify cases where Outside In will be required for rendering content.
	 * @deprecated This widget is deprecated starting in IBM Content Navigator, Version 2.0.2. This class contains only
	 *             private methods, and will be made private.
	 */
	return declare("ecm.widget.viewer.OutsideInViewerMixin", [
		_OutsideInSupportedMixin
	], {

	/**
	 * Provides internal API calls for identifying content types that are rendered by Outside In.
	 * 
	 * @lends ecm.widget.viewer.OutsideInViewerMixin#
	 */

	// content moved to ecm.model._OutsideInSupportedMixin
	});
});

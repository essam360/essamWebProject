/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/widget/layout/NavigatorMainLayout",
	"dojo/text!./templates/ClassicNavigatorLayout.html"
], function(declare, NavigatorMainLayout, template) {

	/**
	 * @name ecm.widget.layout.ClassicNavigatorLayout
	 * @class Extends the NavigatorMainLayout class to provide the classic layout seen in IBM Content Navigator 3.0.2
	 *        and earlier, characterized by a vertical bar that displays the features available in the layout.
	 * @augments ecm.widget.layout.NavigatorMainLayout
	 * @since 3.0.3
	 */
	return declare("ecm.widget.layout.ClassicNavigatorLayout", [
		NavigatorMainLayout
	], {
		/** @lends ecm.widget.layout.ClassicNavigatorLayout.prototype */
		
		templateString: template,
	});
});

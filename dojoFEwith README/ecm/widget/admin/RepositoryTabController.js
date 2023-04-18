/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dijit/registry", //
	"dijit/layout/ScrollingTabController"
], //

function(declare, lang, registry, ScrollingTabController) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.RepositoryTabController
	 */
	return declare("ecm.widget.admin.RepositoryTabController", [
		ScrollingTabController
	], {
		
		onAddChild: function(/*dijit._Widget*/page, /*Integer?*/insertIndex) {
			this.inherited(arguments);
			if (page._instructions && page._instructions.id) {
				page.controlButton.focusNode.setAttribute("aria-describedby", page._instructions.id); // Jaws announces the instructions text when tab to this tab.
			}
		}
	});

});

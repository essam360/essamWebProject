/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", //
"dojo/_base/lang", "ecm/widget/layout/TabButton" ], //

function(declare, lang, TabButton) {

	return declare("ecm.widget.admin.AdminTabsButton", [ TabButton ], {

		showDropDown: false

	});

});

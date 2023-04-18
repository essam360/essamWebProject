/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/i18n!./nls/messages",
], function(declare, lang, messages) {

	//dojo.requireLocalization("ecm", "messages");

//>>excludeStart("noEarlyPreload", true)
//	ecm.noEarlyPreload = true;
//>>excludeEnd("noEarlyPreload")

	//if (!ecm.noEarlyPreload) {
	//	dojo._preloadLocalizations("ecm.nls.ecm", [ "ROOT", "ar", "cs", "da", "de", "el", "en", "en-us", "es", "fi", "fr", "fr-ca", "he", "hr", "hu", "it", "ja", "ko", "nl", "no", "pl", "pt", "pt-br", "ru", "sk", "sl", "sv", "th", "tr", "zh", "zh-cn", "zh-tw" ]);
	//}

	lang.getObject("ecm", true);

	/**
	 * @name ecm.messages .
	 * @description A global instance of the messages for the IBM Content Navigator toolkit.
	 */
	ecm.messages = messages;

// product names are not to be translated
	ecm.messages.product_name = "IBM Content Navigator";
	ecm.messages.content_manager = "Content Manager";
	ecm.messages.ondemand = "Content Manager OnDemand";
	ecm.messages.filenet_p8 = "FileNet Content Manager";
	ecm.messages.content_integrator = "Content Integrator";
	ecm.messages.cmis = "Content Management Interoperability Services (CMIS)";
	ecm.messages.box_content = "Box";

	return ecm.messages;
});

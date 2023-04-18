/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./Messages"
], function(declare, Messages) {

	/**
	 * @name ecm.MessagesMixin
	 * @class This class can be mixed in to provide easier access to the ecm.messages. After being mixed in, the
	 *        messages can be looked up using this.messages. They will also be available for use in templates for
	 *        widgets, using {$messages.messageId}.
	 */
	return declare("ecm.MessagesMixin", null, {
		/** @lends MessagesMixin.prototype */

		/** Contains the messages object */
		messages: ecm.messages
	});
});

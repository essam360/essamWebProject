/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/string",
	"dojox/html/entities",
	"./_ModelObject"
], function(declare, array, string, entities, _ModelObject) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.Message
	 * @class Represents a message that is displayed to users in an error dialog box, a warning dialog box, or the
	 *        status area.
	 * @augments ecm.model._ModelObject
	 */
	var MessageFactory = declare("ecm.model.Message", [
		_ModelObject
	], {
		/** @lends ecm.model.Message.prototype */

		/**
		 * The message number.
		 */
		number: 0,

		/**
		 * The level of the message: 0 = information, 1 = warning, 2 = error.
		 */
		level: 0,

		/**
		 * The main message text.
		 */
		text: "",

		/**
		 * A detailed explanation to the user.
		 */
		explanation: "",

		/**
		 * Instructions to the user on what can be done to attempt to resolve the situation (error messages only).
		 */
		userResponse: "",

		/**
		 * Instructions to the administrator on what can be done to attempt to resolve the situation (error messages
		 * only).
		 */
		adminResponse: "",

		/**
		 * Additional information.
		 */
		moreInformation: "",

		/**
		 * The message product ID that is prefixed to the messageNumber.
		 */
		messageProductId: "",

		/**
		 * Boolean flag indicating if the message was created by a background request.
		 */
		backgroundRequest: false

	});

	/**
	 * Static function that creates an instance of {@link ecm.model.Message} for an error, given the message prefix for
	 * the error.
	 * 
	 * @param messagePrefix
	 *            The prefix of the set of strings related to the message as stored in the ecm.messages object.
	 * @param inserts
	 *            An array of strings to insert into the message.
	 * @param backgroundRequest
	 *            Boolean indicating if the message is being created by an background request.
	 * @param messages
	 *            Optional messages to be used instead of ecm.messages.
	 * @memberof ecm.model.Message
	 */
	MessageFactory.createErrorMessage = function(messagePrefix, inserts, backgroundRequest, messages) {
		inserts = inserts || [];
		var encodedInserts = array.map(inserts, function(insert) {
			return insert == null ? "" : entities.encode(insert + "");
		});
		var msgs = messages ? messages : ecm.messages;
		var transformFunction = function(v) {
			if (v == null) {
				return "";
			} else {
				return v; 
			}
		};
		var message = {
			id: "id???",
			number: ecm.messages[messagePrefix + "_number"],
			level: 4,
			text: msgs[messagePrefix] ? string.substitute(msgs[messagePrefix], encodedInserts, transformFunction) : messagePrefix,
			explanation: msgs[messagePrefix + "_explanation"] ? string.substitute(msgs[messagePrefix + "_explanation"], encodedInserts, transformFunction) : "",
			userResponse: msgs[messagePrefix + "_userResponse"] ? string.substitute(msgs[messagePrefix + "_userResponse"], encodedInserts, transformFunction) : "",
			adminResponse: msgs[messagePrefix + "_adminResponse"] ? string.substitute(msgs[messagePrefix + "_adminResponse"], encodedInserts, transformFunction) : "",
			messageProductId: "CIWEB",
			backgroundRequest: backgroundRequest
		};
		return new MessageFactory(message);
	};

	return MessageFactory;
});

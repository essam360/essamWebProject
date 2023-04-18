/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"./_ModelObject"
], function(declare, array, _ModelObject) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.RedactionReason
	 * @class Represents a redaction reason that can be assigned to a redaction policy.
	 * @augments ecm.model._ModelObject
	 */
	var RedactionReason = declare("ecm.model.RedactionReason", [
		_ModelObject
	], {
		/** @lends ecm.model.RedactionReason.prototype */

		/**
		 * The role description text.
		 */
		description: "",


		/**
		 * A string for the Datacap application name the redaction reason is assigned to.
		 */
		applicationName: "",

		
		/**
		 * @private
		 */
		constructor: function() {

		},
		

		/**
		 * Generates a JSON representation of this redaction reason.
		 */
		toJSON: function() {
			this.logEntry("toJSON");

			var json = {};
			json.id = this.id;
			json.name = this.name;
			json.description = this.description;
			json.applicationName = this.applicationName;
			
			this.logExit("toJSON");
			return json;
		},


	});

		

	return RedactionReason;
});

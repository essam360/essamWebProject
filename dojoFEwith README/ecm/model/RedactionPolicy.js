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
	 * @name ecm.model.RedactionPolicy
	 * @class Represents a role to which users or groups can be assigned.
	 * @augments ecm.model._ModelObject
	 */
	var RedactionPolicy = declare("ecm.model.RedactionPolicy", [
		_ModelObject
	], {
		/** @lends ecm.model.Role.prototype */

		/**
		 * The role description text.
		 */
		description: "",
		
		redactionReasons: [],
		
		redactionEditors: [],
		
		redactionViewers: [],

		/**
		 * @private
		 */
		constructor: function() {
		},
	});
	
	return RedactionPolicy;
});

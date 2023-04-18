/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject"
], function(declare, _ModelObject) {

	/**
	 * Constructor
	 *
	 * @param properties
	 *            The properties for the entry template option object. The properties can be any of the public fields as
	 *            defined below and on ecm.model._ModelObject.
	 * @name ecm.model.EntryTemplateOption
	 * @class Represents the settings for an entry template option.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.EntryTemplateOption", [
		_ModelObject
	], {
		/** @lends ecm.model.EntryTemplateOption.prototype */

		/**
		 * A boolean value indicating if the option is turned on.
		 */
		on: false,

		/**
		 * A boolean value indicating if the option is ready only.
		 */
		readOnly: false,

		/**
		 * A boolean value indicating if the option is hidden.
		 */
		hidden: false

	});
});

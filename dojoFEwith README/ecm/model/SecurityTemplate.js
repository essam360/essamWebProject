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
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.SecurityTemplate
	 * @class Represents a security template in an IBM FileNet P8 repository.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.SecurityTemplate", [
		_ModelObject
	], {
		/** @lends ecm.model.SecurityTemplate.prototype */

		/**
		 * Apply state id.
		 */
		applyStateId: null,

		/**
		 * A boolean value indicating whether this security template is enabled.
		 */
		isEnabled: false,

		/**
		 * An array of {@link ecm.model.Permission} objects holding permissions for this template.
		 */
		permissions: null
	});
});

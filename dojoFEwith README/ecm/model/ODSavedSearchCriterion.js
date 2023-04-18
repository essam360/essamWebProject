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
	 * @name ecm.model.ODSavedSearchCriterion
	 * @class Represents a field in a saved search in an IBM Content Manager OnDemand repository. This class defines the
	 *        name, operator, and values for the search field.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.ODSavedSearchCriterion", [
		_ModelObject
	], {
		/** @lends ecm.model.ODSavedSearchCriterion.prototype */

		/**
		 * A string holding the operator value.
		 */
		operator: null,

		/**
		 * Holds the values of the search criteria.
		 */
		values: null,

		/**
		 * @private
		 */
		setValues: function(values) {
			this.values = values;
			this.onChange(this);
		}
	});
});

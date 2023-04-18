/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ModelObject"
], function(array, declare, lang, _ModelObject) {

	/**
	 * @name ecm.model.ChildComponentDefinition
	 * @class Represents the definition of a child component in an IBM Content Manager repository.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.ChildComponentDefinition", [
		_ModelObject
	], {
		/** @lends ecm.model.ChildComponentDefinition.prototype */

		/**
		 * Instance of {@link ecm.model.Repository}.
		 */
		repository: null,

		/**
		 * Array of {@link ecm.model.AttributeDefinition}.
		 */
		attributeDefinitions: null,

		/**
		 * An object that references the {@link ecm.model.AttributeDefinition} objects by attribute name.
		 * 
		 * @since 2.0.3.7
		 */
		attributeDefinitionsById: null,

		/**
		 * int representing the minimum cardinality.
		 */
		minCardinality: 0,

		/**
		 * int representing the maximum cardinality.
		 */
		maxCardinality: 0,

		/**
		 * @private
		 */
		constructor: function() {
			if (this.attributeDefinitions) {
				this.setAttributeDefinitions(this.attributeDefinitions);
			}
		},

		/**
		 * Sets the list of attribute information.
		 * 
		 * @param attributeDefinitions
		 *            List of attributes passed in externally (instead of being retrieved from repository).
		 */
		setAttributeDefinitions: function(attributeDefinitions) {
			this.attributeDefinitions = attributeDefinitions;
			this.hasDependentAttributes = this._determineIfHasDependentAttributes();
			this.attributeDefinitionsById = {};
			array.forEach(this.attributeDefinitions, lang.hitch(this, function(attrDef) {
				this.attributeDefinitionsById[attrDef.id] = attrDef;
			}));
		},

		/**
		 * Returns the attribute definitions.
		 */
		getAttributeDefinitions: function() {
			return this.attributeDefinitions;
		},

		/**
		 * Returns false if no attributes.
		 */
		hasAttributes: function() {
			return (this.attributeDefinitions != null && this.attributeDefinitions.length > 0);
		},

		/**
		 * @private Returns true if any attribute in the child component is marked as having dependent attributes. If
		 *          the attribute definitions haven't been retrieved or are unloaded then this will return true;
		 */
		_determineIfHasDependentAttributes: function() {
			if (!this.attributeDefinitions) {
				return true;
			}
			var hasDependentAttributes = false;
			for ( var i in this.attributeDefinitions) {
				if (this.attributeDefinitions[i].hasDependentAttributes) {
					hasDependentAttributes = true;
				}
			}
			return hasDependentAttributes;
		},

		/**
		 * Clears the attribute information that had been previously retrieved. The next call to
		 * retrieveAttributeDefinitions will re-acquire the information from the content server.
		 */
		unloadAttributeDefinitions: function() {
			this.attributeDefinitions = null;
			this.attributeDefinitionsById = null;
		},

		/**
		 * Returns a clone of this child component definition.
		 * 
		 * @since 2.0.2
		 */
		clone: function() {
			this.logEntry("clone");

			var clone = new ecm.model.ChildComponentDefinition({
				id: this.id,
				name: this.name,
				repository: this.repository,
				attributeDefinitions: this.hasAttributes() ? array.map(this.attributeDefinitions, function(attrib) {
					return attrib.clone();
				}) : null,
				minCardinality: this.minCardinality,
				maxCardinality: this.maxCardinality,
				hasDependentAttributes: this.hasDependentAttributes
			});

			this.logExit("clone", clone);
			return clone;
		}
	});
});

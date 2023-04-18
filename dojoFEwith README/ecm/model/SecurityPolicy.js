/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./_ModelObject",
	"./SecurityTemplate",
	"./Permission"
], function(declare, lang, array, _ModelObject, SecurityTemplate, Permission) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.SecurityPolicy
	 * @class Represents a security policy in an IBM FileNet P8 repository.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.SecurityPolicy", [
		_ModelObject
	], {
		/** @lends ecm.model.SecurityPolicy.prototype */

		_RELEASED_ID: "{95AD7AED-DFA0-4459-AE95-2CA2FC041602}",
		_IN_PROCESS_ID: "{E76E4F72-545C-4180-97C1-8449883B83CF}",
		_SUPERSEDED_ID: "{A0A5A26E-D19F-4415-8451-6795386AD1BB}",
		_RESERVATION_ID: "{F9ED916D-CCB7-4D7E-8CC1-563F1692C67C}",

		/**
		 * A string holding the display name of the security policy.
		 */
		displayName: null,

		/**
		 * A boolean value indicating whether this policy should preserve direct permissions.
		 */
		preserveDirectPermissions: null,

		/**
		 * An array of {@link ecm.model.SecurityTemplate} objects holding the policy permissions.
		 */
		securityTemplates: null,

		/**
		 * @private constructor used internally
		 */
		constructor: function(params) {
			// At this point, this.securityTemplates === params.securityTemplates because params is already mixed in.
			// Build the securityTemplates array then assign it to this.securityTemplates.
			if (params && params.securityTemplates) {
				var securityTemplates = [];
				array.forEach(params.securityTemplates, function(securityTemplate, index) {
					securityTemplate.permissions = Permission.createFromJSON(securityTemplate.acl);
					securityTemplate.name = securityTemplate.displayName;
					securityTemplates.push(new SecurityTemplate(securityTemplate));
				}, this);
				this.securityTemplates = securityTemplates;
			}
		},

		/**
		 * Return the "Released" security template.
		 */
		getReleasedTemplate: function() {
			return this._getTemplate(this._RELEASED_ID);
		},

		/**
		 * Return the "InProcess" security template.
		 */
		getInProcessTemplate: function() {
			return this._getTemplate(this._IN_PROCESS_ID);
		},

		/**
		 * Return the "Reservation" security template.
		 */
		getReservationTemplate: function() {
			return this._getTemplate(this._RESERVATION_ID);
		},

		/**
		 * Return the "Superseded" security template.
		 */
		getSupersededTemplate: function() {
			return this._getTemplate(this._SUPERSEDED_ID);
		},

		_getTemplate: function(templateId) {
			if (this.securityTemplates) {
				var filteredTemplate = array.filter(this.securityTemplates, function(securityTemplate) {
					return securityTemplate.applyStateId == templateId;
				});
				if (filteredTemplate.length > 0) {
					return filteredTemplate[0];
				} else {
					return null;
				}
			}

			return null;
		},

		/**
		 * Return the "Released" templates {@link ecm.model.Permission} collection.
		 */
		getReleasedTemplatePermissions: function() {
			return this._getTemplatePermissions(this._RELEASED_ID);
		},

		/**
		 * Return the "InProcess" templates {@link ecm.model.Permission} collection.
		 */
		getInProcessTemplatePermissions: function() {
			return this._getTemplatePermissions(this._IN_PROCESS_ID);
		},

		/**
		 * Return the "Reservation" templates {@link ecm.model.Permission} collection.
		 */
		getReservationTemplatePermissions: function() {
			return this._getTemplatePermissions(this._RESERVATION_ID);
		},

		/**
		 * Return the "Superseded" templates {@link ecm.model.Permission} collection.
		 */
		getSupersededTemplatePermissions: function() {
			return this._getTemplatePermissions(this._SUPERSEDED_ID);
		},

		_getTemplatePermissions: function(templateId) {
			var permissions = null;
			var securityTemplate = this._getTemplate(templateId);
			if (securityTemplate) {
				if (securityTemplate.isEnabled) {
					permissions = securityTemplate.permissions;
				}
			}
			return permissions;
		},

		/**
		 * Returns the value for the input attribute. Used by _ModelStore and ResultSet when the SecurityPolicy is in a
		 * ResultSet that uses _ModelStore as the store.
		 * 
		 * @param attribute
		 *            The attribute in which to get its value.
		 * @return The attribute's value.
		 * @since 2.0.3
		 */
		getValue: function(attribute) {
			return this[attribute];
		},

		/**
		 * Returns the display value for the input attribute. Used by _ModelStore when the SecurityPolicy is in a
		 * ResultSet that uses _ModelStore as the store.
		 * 
		 * @param attribute
		 *            The attribute in which to get its value.
		 * @return The attribute's display value.
		 * @since 2.0.3
		 */
		getDisplayValue: function(attribute) {
			if (attribute == "modifiedDate" && this[attribute]) {
				return ecm.model.desktop.valueFormatter.formatValue(this[attribute], "xs:timestamp", null);
			} else {
				return this[attribute];
			}
		}
	});
});

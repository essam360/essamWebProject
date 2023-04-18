/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/json",
	"dojo/_base/lang",
	"../../LoggerMixin",
	"../AttributeDefinition",
	"../ContentClass"
], function(declare, array, dojojson, lang, LoggerMixin, AttributeDefinition, ContentClass) {

	/**
	 * @name ecm.model.configuration.LayoutAttribute
	 * @class Provides event methods that are used to for attribute definition property changes.
	 * @augments ecm.model.AttributeDefinition
	 * @since 2.0.3
	 */
	return declare("ecm.model.configuration.LayoutAttribute", [
		AttributeDefinition,
		LoggerMixin
	], {
		/** @lends ecm.model.configuration.LayoutAttribute.prototype */

		/**
		 * A text string used for indicating what the model is being used for "create", "checkin", "editProperties", etc
		 */
		reason: null,

		/**
		 * Called whenever the label changes. This may happen when resolving the dependent attributes
		 * 
		 * @param label
		 *            The new label value.
		 */
		onLabelChanged: function(label) {
		},

		/**
		 * Called whenever the choice list changes. This may happen when resolving the dependent attributes
		 * 
		 * @param choiceList
		 *            The new choiceList value.
		 */
		onChoiceListChanged: function(choiceList) {
		},

		/**
		 * Called whenever the required setting changes. This may happen when resolving the dependent attributes
		 * 
		 * @param required
		 *            The new required value.
		 */
		onRequiredChanged: function(required) {
		},

		/**
		 * Called whenever the hidden setting changes. This may happen when resolving the dependent attributes
		 * 
		 * @param hidden
		 *            The new hidden value.
		 */
		onHiddenChanged: function(hidden) {
		},

		/**
		 * Called whenever the maximum value changes. This may happen when resolving the dependent attributes
		 * 
		 * @param maxValue
		 *            The new maxValue value.
		 */
		onMaxValueChanged: function(maxValue) {
		},

		/**
		 * Called whenever the minimum value changes. This may happen when resolving the dependent attributes
		 * 
		 * @param minValue
		 *            The new minValue value.
		 */
		onMinValueChanged: function(minValue) {
		},

		/**
		 * Called whenever the minimum length changes. This may happen when resolving the dependent attributes
		 * 
		 * @param minLength
		 *            The new minLength value.
		 */
		onMinLengthChanged: function(minLength) {
		},

		/**
		 * Called whenever the maximum length changes. This may happen when resolving the dependent attributes
		 * 
		 * @param maxLength
		 *            The new maxLength value.
		 */
		onMaxLengthChanged: function(maxLength) {
		},

		/**
		 * Called whenever the custom validation error or custom invalid items changes. This may happen when resolving
		 * the dependent attributes
		 * 
		 * @param customValidationError
		 *            The new value of the customValidationError setting.
		 * @param customInvalidItems
		 *            The new value of the customInvalidItems setting.
		 */
		onCustomValidationChanged: function(customValidationError, customInvalidItems) {
		},

		/**
		 * Called whenever the read only setting changes. This may happen when resolving the dependent attributes
		 * 
		 * @param readOnly
		 *            The new value of the readOnly setting.
		 */
		onReadOnlyChanged: function(readOnly) {
		},

		/**
		 * Called whenever the value setting changes. This may happen when resolving the dependent attributes
		 * 
		 * @param value
		 *            The new value of the value setting.
		 */
		onValueChanged: function(value) {
		},

		/**
		 * Called whenever the hasDependentAttributes setting changes. This may happen when resolving the dependent
		 * attributes
		 * 
		 * @param hasDependentAttributes
		 *            The new value of the hasDependentAttributes setting.
		 */
		onHasDependentAttributesChanged: function(hasDependentAttributes) {
		},

	});

});

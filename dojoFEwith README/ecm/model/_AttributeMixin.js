/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"../LoggerMixin",
	"../MessagesMixin"
], function(declare, lang, array, LoggerMixin, MessagesMixin) {

	/**
	 * @name ecm.model._AttributeMixin
	 * @class Provides methods for attribute objects such as <code>ecm.model.AttributeDefinition</code> and
	 *        <code>ecm.model.SearchCriterion</code>.
	 * @public
	 * @since 2.0.2
	 */
	return declare("ecm.model._AttributeMixin", [
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.model._AttributeMixin.prototype */

		/**
		 * Returns the allowed values as an array of select options, suitable for immediate use within a
		 * <code>dijit.form.Select</code>.
		 */
		getAllowedValuesSelectOptions: function() {
			var selectOptions = [];
			for ( var i in this.allowedValues) {
				var allowedValue = this.allowedValues[i];
				var selectOption = {
					value: allowedValue,
					label: allowedValue
				};
				if (allowedValue == this.defaultValue) {
					selectOption.selected = true;
				}
				selectOptions.push(selectOption);
			}

			if ((!this.allowedValues || this.allowedValues.length == 0) && this.dataType == "xs:boolean") {
				selectOptions.push({
					value: true,
					label: ecm.messages.true_label
				});
				selectOptions.push({
					value: false,
					label: ecm.messages.false_label
				});
			}

			return selectOptions;
		},

		/**
		 * Returns true if the choice list for the attribute is nested, or hierarchical.
		 */
		isChoiceListNested: function() {
			if (this.markingList) {
				return false;
			}

			var nested = false;
			if (this.choiceList) {
				for ( var i in this.choiceList.choices) {
					nested = this.choiceList.choices[i].choices ? true : false;
					if (nested) {
						break;
					}
				}
			}
			return nested;
		},

		/**
		 * Returns the choice list for the attribute. A choice list can be used to provide a list of selections (usually
		 * via a drop-down menu) for an attribute's value.
		 * 
		 * @param onlyValid
		 *            If the value is true, only valid choices are returned. If the value is false, both valid and
		 *            invalid choices are returned.
		 */
		getChoiceList: function(onlyValid) {
			var choiceList = null;

			if (this.markingList) {
				if (onlyValid) {
					if (!this.validChoiceList) {
						this.validChoiceList = this._buildValidChoiceListFromMarkingList(this.markingList, onlyValid);
					}

					choiceList = this.validChoiceList;
				} else {
					choiceList = {
						displayName: this.markingList.displayName,
						choices: this.markingList.choices
					};
				}
			} else {
				if (onlyValid) {
					if (!this.validChoiceList) {
						this.validChoiceList = this._buildValidChoiceList(this.choiceList);
					}
					choiceList = this.validChoiceList;
				} else {
					choiceList = this.choiceList;
				}
			}

			return choiceList;
		},

		/**
		 * Return valid choice list JSON structure from the specified marking list. Only markings that the user has "can
		 * add" access for will be included.
		 */
		_buildValidChoiceListFromMarkingList: function(markingList) {
			if (!markingList) {
				return markingList; // null or undefined
			}
			var choiceList = {
				displayName: markingList.displayName,
				markings: markingList.markings,
				choices: []
			};
			for ( var i in markingList.choices) {
				var choice = markingList.choices[i];
				choice.canRemove = markingList.markings[choice.value].canRemove;
				if (markingList.markings[choice.value].canAdd) {
					choiceList.choices.push(choice);
				} else if (markingList.markings[choice.value].canRemove) {
					// We may add these to the choices later, if one or more are current value(s) in the property editor.
					// This object will only include the choices that are !canAdd.
					if (!choiceList.canRemoves) {
						choiceList.canRemoves = {};
					}
					choiceList.canRemoves[choice.value] = choice;
				}
			}
			return choiceList;
		},

		/**
		 * Potentially recursive function to remove any invalid choices and create an only-valid choice list.
		 */
		_buildValidChoiceList: function(choiceList) {
			if (!choiceList) {
				return choiceList; // null or undefined
			}
			var validChoiceList = {
				displayName: choiceList.displayName,
				choices: []
			};
			for ( var i in choiceList.choices) {
				var choice = choiceList.choices[i];
				if (choice.valid != false) {
					if (choice.choices) {
						validChoiceList.choices.push(this._buildValidChoiceList(choice));
					} else {
						validChoiceList.choices.push(choice);
					}
				}
			}
			return validChoiceList;
		},

		/**
		 * @since 2.0.2
		 */
		isNumeric: function() {
			return this.dataType && (this.dataType == "xs:decimal" || this.dataType == "xs:double" || this.dataType == "xs:short" || this.dataType == "xs:integer" || this.dataType == "xs:long" || this.dataType == "xs:score");
		},

		/**
		 * @since 2.0.2
		 */
		isDateTime: function() {
			return this.dataType && (this.dataType == "xs:date" || this.dataType == "xs:time" || this.dataType == "xs:timestamp");
		},

		/**
		 * Returns an array of objects that can be used to represent the available operators in a form select widget.
		 * Note that all operators are returned, including those that may be assigned to be filtered in the repository
		 * (see <code>ecm.model.Repository.searchFilteredOperators</code>).
		 */
		getAvailableOperatorsSelectOptions: function() {
			return array.map(this.availableOperators, lang.hitch(this, function(op) {
				var option = {
					value: op,
					label: ecm.messages["operator_" + op]
				};
				if (op === this.defaultOperator)
					option.selected = true;
				return option;
			}));
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/string",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/RadioButton",
	"../../LoggerMixin",
	"../../Messages",
	"../../widget/RangeBoundTextBox",
	"dojo/text!./templates/_ApprovalOptionPane.html"
],

function(declare, array, string, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, RadioButton, LoggerMixin, Messages, RangeBoundTextBox, template) {

	/**
	 * @private Part of {@link ecm.widget.process.LaunchPatternPane} widget
	 * @name ecm.widget.process._ApprovalOptionPane
	 * @class Provides an option to return the approval required setting for All, At least x number of participants and
	 *        At least % number of participants.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.process._ApprovalOptionPane", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process._ApprovalOptionPane.prototype */
		templateString: template,
		_messages: ecm.messages,

		postCreate: function() {
			this.inherited(arguments);
			this.connect(this._countTextBox, "onKeyUp", function() {
				this._isValid = this._countTextBox.isValid();
				this.onModify();
			});
			this.connect(this._percentageTextBox, "onKeyUp", function() {
				this._isValid = this._percentageTextBox.isValid();
				this.onModify();
			});
			this._percentageTextBox.constraints = {
				min: 1,
				max: 100
			};
			this._percentageTextBox.invalidMessage = this._messages.property_integer_invalid;
			this._percentageTextBox.rangeMessage = string.substitute(this._messages.property_integer_range, [
				"1",
				"100"
			]);
		},

		setMaxCount: function(maxValue) {
			this._countTextBox.constraints.max = maxValue;
			this._setRequiredCountRangeMessage(1, maxValue);
		},

		setItem: function(workItem) {
			this._workItem = workItem;
			// Initializes the default values
			var percentage = this._workItem.getValue("RequiredApprovalPercentage");
			if (percentage > 0) {
				if (percentage == 100) {
					this._currentValue = {
						type: "All",
						percentage: 100,
						count: 0
					};
				} else {
					this._currentValue = {
						type: "RequiredApprovalPercentage",
						percentage: percentage,
						count: 0
					};
				}
			} else {
				this._currentValue = {
					type: "RequiredApprovalCount",
					percentage: 0,
					count: this._workItem.getValue("RequiredApprovalCount")
				};
			}

			// Sets the count text box max range
			var attribute = array.filter(this._workItem.getWorkClass().attributeDefinitions, function(attribute) {
				return attribute.id == "RequiredApprovalCount";
			})[0];
			var max = Number(attribute.maxValue);
			this._countTextBox.constraints = {
				min: 1,
				max: max
			};
			this._countTextBox.invalidMessage = this._messages.property_integer_invalid;
			this._setRequiredCountRangeMessage(1, max);
		},

		_setRequiredCountRangeMessage: function(min, max) {
			if (max == min) {
				this._countTextBox.rangeMessage = string.substitute(this._messages.process_parallel_invalid_required_approvals_count, [
					min
				]);
			} else {
				this._countTextBox.rangeMessage = string.substitute(this._messages.property_integer_range, [
					min,
					max
				]);
			}
		},

		onShow: function() {
			this.logEntry("onShow");
			if (this._currentValue.type == "All") {
				this._allRadioButton.set("checked", true);
				this._percentageTextBox.reset();
				this._countTextBox.reset();
				this._onAllRadioButtonClick();
			} else if (this._currentValue.type == "RequiredApprovalPercentage") {
				this._percentageRadioButton.set("checked", true);
				this._percentageTextBox.set("value", this._currentValue.percentage);
				this._countTextBox.reset();
				this._onPercentageRadioButtonClick();
			} else {
				this._countRadioButton.set("checked", true);
				this._countTextBox.set("value", this._currentValue.count);
				this._percentageTextBox.reset();
				this._onCountRadioButtonClick();
			}
			this.logExit("onShow");
		},

		_onAllRadioButtonClick: function() {
			this.logEntry("_onAllRadioButtonClick");
			this._countTextBox.reset();
			this._countTextBox.set("required", false);
			this._countTextBox.set("disabled", true);
			this._percentageTextBox.reset();
			this._percentageTextBox.set("required", false);
			this._percentageTextBox.set("disabled", true);
			this._isValid = true;
			this.onModify();
			this.logExit("_onAllRadioButtonClick");
		},

		_onCountRadioButtonClick: function() {
			this.logEntry("_onCountRadioButtonClick");
			this._percentageTextBox.reset();
			this._percentageTextBox.set("required", false);
			this._percentageTextBox.set("disabled", true);
			this._countTextBox.set("disabled", false);
			this._countTextBox.set("required", true);
			this._isValid = this._countTextBox.isValid();
			this.onModify();
			this.logExit("_onCountRadioButtonClick");
		},

		_onPercentageRadioButtonClick: function() {
			this.logEntry("_onPercentageRadioButtonClick");
			this._countTextBox.reset();
			this._countTextBox.set("required", false);
			this._countTextBox.set("disabled", true);
			this._percentageTextBox.set("disabled", false);
			this._percentageTextBox.set("required", true);
			this._isValid = this._percentageTextBox.isValid();
			this.onModify();
			this.logExit("_onPercentageRadioButtonClick");
		},

		onModify: function() {
		},

		getLabel: function() {
			if (this._percentageRadioButton.get("checked"))
				return string.substitute(this._messages.process_at_least_by_percentage, [
					this._currentValue.percentage
				]);
			else if (this._countRadioButton.get("checked")) {
				return string.substitute(this._messages.process_at_least_by_count, [
					this._currentValue.count
				]);
			} else {
				return this._messages.process_all;
			}
		},

		onSave: function() {
			this.logEntry("onSave");
			// Updates the current Values
			if (this._percentageRadioButton.get("checked")) {
				this._currentValue.type = "RequiredApprovalPercentage";
				this._currentValue.percentage = this._percentageTextBox.get("value");
				this._currentValue.count = 0;
			} else if (this._countRadioButton.get("checked")) {
				this._currentValue.type = "RequiredApprovalCount";
				this._currentValue.percentage = 0;
				this._currentValue.count = this._countTextBox.get("value");
			} else {
				this._currentValue.type = "All";
				this._currentValue.percentage = 100;
				this._currentValue.count = 0;
			}
			return true;
			this.logExit("onSave");
		},

		getRequiredApprovalPercentage: function() {
			return this._currentValue.percentage;
		},

		getRequiredApprovalCount: function() {
			return this._currentValue.count;
		},

		isValid: function() {
			return this._isValid;
		},

		destroy: function() {
			this._workItem = null;
			this.inherited(arguments);
		}
	});
});

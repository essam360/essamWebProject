/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/string",
	"dojo/date/stamp",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/_Widget",
	"./_PatternPropertiesMixin",
	"./_ApprovalOptionPane",
	"../../LoggerMixin",
	"../../Messages",
	"../../model/ContentClass",
	"../../widget/HoverHelp",
	"../../widget/RadioButton",
	"../../widget/TextBox",
	"../../widget/ValidationTextBox",
	"../../widget/DatePicker",
	"../../widget/DropDownInput",
	"../../widget/CheckBox",
	"dojo/text!./templates/LaunchPatternPropertiesPane.html"
],

function(declare, lang, array, string, dateStamp, _TemplatedMixin, _WidgetsInTemplateMixin, _Widget, _PatternPropertiesMixin, _ApprovalOptionPane, LoggerMixin, Messages, ContentClass, HoverHelp, RadioButton, TextBox, ValidationTextBox, DatePicker, DropDownInput, CheckBox, template) {
	/**
	 * @name ecm.widget.process.LaunchPatternPropertiesPane
	 * @class Provides a widget that is used to view or edit the properties of a pattern work item.
	 * @augments dijit._Widget
	 * @since 2.0.2
	 */
	return declare("ecm.widget.process.LaunchPatternPropertiesPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_PatternPropertiesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.LaunchPatternPropertiesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,
		_workItem: null,

		_createApprovalsRequiredTextBox: function() {
			this.logEntry("_createApprovalsRequiredTextBox");
			if (this._workItem.step_tag == "ICNParallel") {
				if (!this._approvalOptionPane) {
					this._approvalOptionPane = new _ApprovalOptionPane();
					this._approvalOptionPane.startup();
				}
				// Adds a drop down input control
				this._dropDownInput = new DropDownInput({
					dropDown: this._approvalOptionPane,
					label: this._messages.process_all,
					disabled: true
				}, this._approvalRequiredTextbox);

				this._approvalOptionPane.setItem(this._workItem);
				this.connect(this._approvalOptionPane, "onModify", function() {
					this._dropDownInput.dropDown.setDisabledOKButton(!this._approvalOptionPane.isValid());
				});
				this.connect(this._dropDownInput.dropDown, "onClickOK", function() {
					this._dropDownInput.setCustomValidationError("");
					this.onChange();
				});
				this._dropDownInput.setHoverHelp(this._approvalRequiredFieldHoverHelp);
				this._fields["RequiredApprovalPercentage"] = this._dropDownInput;
				this._fields["RequiredApprovalCount"] = this._dropDownInput;
			} else {
				this._textBox = new TextBox({
					"class": "ecmApprovalsRequiredField",
					value: this._messages.process_all,
					disabled: true
				});
				this._textBox.startup();
				this._approvalRequiredTextbox.appendChild(this._textBox.domNode);
			}
			this.logExit("_createApprovalsRequiredTextBox");
		},

		_createSinglePropertyEditorControls: function() {
			this.logEntry("_createSinglePropertyEditorControls");
			for ( var i = 0; i < this._attributeDefinitions.length; i++) {
				var attribute = this._attributeDefinitions[i];
				if (attribute.id == "Approvers" || attribute.id == "F_Subject" || attribute.id == "ICN_Instructions" || attribute.id == "ICN_WFDeadlineDate") {
					var args = {
						repository: this._workItem.repository
					};
					if (attribute.id == "Approvers") {
						args.values = this._workItem._createUserGroupAttributeValue(attribute); // are there any defaults?		
						args.hasSorting = this._workItem.step_tag != "ICNParallel";
						args.dataType = "xs:user";
						this._reviewersTextBoxField = this._createSinglePropertyEditorControl(attribute, args);
						this.connect(this._reviewersTextBoxField, "onChange", function(items) {
							if (this._workItem.step_tag == "ICNParallel") {
								if (items.length > 0) {
									if (this._dropDownInput.get("disabled")) {
										this._dropDownInput.set("disabled", false);
									}
									this._approvalOptionPane.setMaxCount(items.length); // Sets the max count for required count to the total number of reviewers
								}
							}
							this.onChange();
						});
						this._reviewersSelectionBox.appendChild(this._reviewersTextBoxField.domNode);
					} else if (attribute.id == "F_Subject") {
						var value = "";
						var attachment = this._workItem.attributes.DocumentforReview[0];
						if (attachment && attachment.attachment_name) {
							value = string.substitute(this._messages.process_pattern_process_name, [
								attachment.attachment_name
							]);
						}
						args.required = true;
						args.values = [
							value
						];
						args.width = "100%";
						this._processNameTextBoxField = this._createSinglePropertyEditorControl(attribute, args);
						this.connect(this._processNameTextBoxField, "onKeyUp", "onChange");
						this._processNameTextBoxField.setHoverHelp(this._processNameFieldHoverHelp);
						this._processNameTextBox.appendChild(this._processNameTextBoxField.domNode);
					} else if (attribute.id == "ICN_Instructions") {
						var value = this._workItem.getValue("ICN_Instructions") || "";
						args.values = [
							value
						];
						args.width = "100%";
						this._instructionsTextField = this._createSinglePropertyEditorControl(attribute, args);
						this._instructionsTextField.set("rows", 7);
						this._instructionsTextBox.appendChild(this._instructionsTextField.domNode);
					} else {
						args.dataFormat = ecm.model.desktop.valueFormatter.getDefaultFormat("xs:date");
						// Sets the min max values
						var minDate = new Date();
						minDate.setDate(minDate.getDate() + 1);
						var minEndOfDayDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate(), "00", "00", "00");
						args.minValue = dateStamp.toISOString(minEndOfDayDate);
						// The F_WFDeadline field max value is 2147483647 so has to set the max date to a date that is one day less to be safe
						// This gives a range of about 4000 years so doesn't have to be precise.
						var maxDate = new Date(new Date().getTime() + (2147483647 * 60 * 1000));
						var maxEndOfDayDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate() - 1, "00", "00", "00");
						args.maxValue = dateStamp.toISOString(maxEndOfDayDate);
						// Sets label to null so that no label will be created by the SinglePropertyEditorFactory.createSinglePropertyEditor method
						args.label = null;
						this._deadLinePickerField = this._createSinglePropertyEditorControl(attribute, args);
						this.connect(this._deadLinePickerField, "onKeyUp", "onChange");
						this.connect(this._deadLinePickerField, "onChange", "onChange");
						this._deadLinePicker.appendChild(this._deadLinePickerField.domNode);
					}
				}
			}
			this.logExit("_createSinglePropertyEditorControls");
		},

		/**
		 * Sets the work item for the properties display.
		 * 
		 * @param item
		 *            A {@link ecm.model.WorkItem} object.
		 */
		setItem: function(item) {
			this.logEntry("setItem");
			this._workItem = item;
			this._retrieveAttributes();
			this.logExit("setItem");
		},

		_retrieveAttributes: function() {
			this.logEntry("_retrieveAttributes");
			var workClass = this._workItem.getWorkClass();
			workClass.retrieveAttributeDefinitions(lang.hitch(this, function(attributes) {
				this._attributeDefinitions = attributes;
				this._renderProperties(attributes);
			}));

			this.logExit("_retrieveAttributes");
		},

		_renderProperties: function() {
			this.logEntry("_renderProperties");
			// Creates dojo controls
			this._createSinglePropertyEditorControls();
			this._createApprovalsRequiredTextBox();
			if (this._workItem.step_tag == "ICNParallel") {
				this._returnToPreviousReviewerRadioButton.set("disabled", true);
			}
			this._returnToOriginatorRadioButton.set("checked", true);
			this._allowReassignCheckbox.set("value", this._workItem.getValue("ICN_AllowReassign"));
			this._completeNotificationCheckbox.set("value", this._workItem.getValue("FinalReview"));
			// Adds static fields to map
			this._fields["FinalReview"] = this._completeNotificationCheckbox;
			this._fields["ICN_AllowReassign"] = this._allowReassignCheckbox;
			this._fields["ReturnToSender"] = this._returnToOriginatorRadioButton;
			// Sets the focus to the Approvers field
			setTimeout(lang.hitch(this, function() {
				this.setFieldFocus("Approvers");
			}), 100);

			this.onCompleteRendering();
			this.logExit("_renderProperties");
		},

		/**
		 * Returns the work item properties in a JSON format.
		 * 
		 * @returns {Object} holding property data.
		 */
		getPropertiesJSON: function() {
			var properties = this.inherited(arguments);
			// Maps process name to F_Subject
			var processNameTextBoxField = this._getField("F_Subject");
			properties.push(this._getPropertyJSON("F_Subject", "F_Subject", "xs:string", processNameTextBoxField.get("value")));
			return properties;
		},

		_getValue: function(attributeDefinition) {
			var value;
			if (attributeDefinition.id == "ICN_WFDeadlineDate") {
				var field = this._getField("ICN_WFDeadlineDate");
				var selectedDate = field.get("value");
				if (selectedDate) {
					selectedDate.setMinutes(1439); // Sets the time to 11:59 PM					
					value = selectedDate;
				} else {
					value = attributeDefinition.defaultValue;
				}
			} else if (attributeDefinition.id == "RequiredApprovalCount") {
				value = this._approvalOptionPane.getRequiredApprovalCount();
			} else if (attributeDefinition.id == "RequiredApprovalPercentage") {
				value = this._approvalOptionPane.getRequiredApprovalPercentage();
			} else {
				value = this.inherited(arguments);
			}
			return value;
		},

		isValid: function() {
			var isValid = this.inherited(arguments);
			if (isValid && this._approvalOptionPane) {
				// Validates to see if the Required Approval count is greater than the total number of reviewers.
				// If yes then set focus to the approvers field and display the validation error message.
				var approvalCount = this._approvalOptionPane.getRequiredApprovalCount();
				if (approvalCount > 0) {
					var approvers = this._fields["Approvers"].get("value");
					isValid = approvalCount <= approvers.length;
					if (!isValid) {
						this.setFieldError("RequiredApprovalCount", string.substitute(this._messages.process_parallel_approvals_required_error, [
							approvers.length
						]));
						this.setFieldFocus("RequiredApprovalCount");
					}
				}
			}
			return isValid;
		},

		destroy: function() {
			if (this._approvalOptionPane) {
				this._approvalOptionPane.destroyRecursive();
				this._approvalOptionPane = null;
			}
			if (this._dropDownInput) {
				// this._approvalOptionPane is the _dropDownInput.dropDown 
				this._dropDownInput.dropDown = null;
				this._dropDownInput.destroyRecursive();
				this._dropDownInput = null;
			}
			if (this._textBox) {
				this._textBox.destroyRecursive();
				this._textBox = null;
			}
			if (this._reviewersTextBoxField) {
				this._reviewersTextBoxField.destroyRecursive();
				this._reviewersTextBoxField = null;
			}
			if (this._processNameTextBoxField) {
				this._processNameTextBoxField.destroyRecursive();
				this._processNameTextBoxField = null;
			}
			if (this._instructionsTextField) {
				this._instructionsTextField.destroyRecursive();
				this._instructionsTextField = null;
			}
			if (this._deadLinePickerField) {
				this._deadLinePickerField.destroyRecursive();
				this._deadLinePickerField = null;
			}
			this._workItem = null;
			this._attributeDefinitions = null;
			this.inherited(arguments);
		}
	});
});
